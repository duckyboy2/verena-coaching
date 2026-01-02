'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import * as THREE from 'three';
import styles from './firstscreen.module.css';

// GLSL Shader Code
const noiseGLSL = `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  vec3 fade(vec3 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

  float pnoise(vec3 P, vec3 rep) {
    vec3 Pi0 = mod(floor(P), rep);
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep);
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P);
    vec3 Pf1 = Pf0 - vec3(1.0);
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
  }
`;

const rotateGLSL = `
  vec3 rotateY(vec3 v, float angle) {
    float c = cos(angle);
    float s = sin(angle);
    return vec3(c * v.x + s * v.z, v.y, -s * v.x + c * v.z);
  }
`;

const vertexShader = `
  ${noiseGLSL}
  ${rotateGLSL}

  varying vec2 vUv;
  varying float vDistort;
  varying vec3 vNormal;

  uniform float uTime;
  uniform float uSpeed;
  uniform float uNoiseDensity;
  uniform float uNoiseStrength;
  uniform float uFrequency;
  uniform float uAmplitude;

  void main() {
    vUv = uv;
    
    float t = uTime * uSpeed;
    float distortion = pnoise((normal + t), vec3(10.0) * uNoiseDensity) * uNoiseStrength;
    vec3 pos = position + (normal * distortion);
    float angle = sin(uv.y * uFrequency + t) * uAmplitude;
    pos = rotateY(pos, angle);
    
    vDistort = distortion;
    vNormal = normalize(normalMatrix * normal);
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying float vDistort;
  varying vec3 vNormal;

  uniform float uIntensity;

  vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
    return a + b * cos(6.28318 * (c * t + d));
  }

  void main() {
    float distort = vDistort * uIntensity;
    
    // Warm Mediterranean palette with subtle blue hints
    vec3 brightness = vec3(0.55, 0.5, 0.55);
    vec3 contrast = vec3(0.4, 0.35, 0.45);
    vec3 oscillation = vec3(1.0, 1.0, 1.0);
    vec3 phase = vec3(0.0, 0.1, 0.25);
    
    vec3 color = cosPalette(distort, brightness, contrast, oscillation, phase);
    
    // Add subtle cool blue undertones
    float blueHint = smoothstep(-0.2, 0.3, vDistort);
    color = mix(color, vec3(0.4, 0.5, 0.65), blueHint * 0.15);
    
    // Fresnel glow for depth with slight blue tint
    float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.5);
    color = mix(color, vec3(0.95, 0.97, 1.0), fresnel * 0.35);
    
    // Subtle ambient warmth
    float glow = smoothstep(0.0, 1.0, vDistort + 0.5);
    color += vec3(0.06, 0.04, 0.05) * glow;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

interface FirstScreenBlobProps {
    isHidden: boolean;
    onScrollDown: () => void;
}

export function FirstScreenBlob({ isHidden, onScrollDown }: FirstScreenBlobProps) {
    const { language, setLanguage } = useLanguage();
    const t = content[language];

    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const blobRef = useRef<THREE.Mesh | null>(null);
    const materialRef = useRef<THREE.ShaderMaterial | null>(null);
    const animationRef = useRef<number>(0);
    const mouseRef = useRef({ x: 0, y: 0 });

    // Handle scroll down action
    const handleScrollDown = useCallback(() => {
        if (!isHidden) {
            onScrollDown();
        }
    }, [isHidden, onScrollDown]);

    // Three.js setup
    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a1814);
        sceneRef.current = scene;

        // Camera
        const camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;
        cameraRef.current = camera;

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Blob
        const geometry = new THREE.IcosahedronGeometry(1.5, 64);
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uSpeed: { value: 0.15 },
                uNoiseDensity: { value: 1.2 },
                uNoiseStrength: { value: 0.35 },
                uFrequency: { value: 2.5 },
                uAmplitude: { value: 0.25 },
                uIntensity: { value: 1.8 }
            },
            side: THREE.DoubleSide
        });
        materialRef.current = material;

        const blob = new THREE.Mesh(geometry, material);
        scene.add(blob);
        blobRef.current = blob;

        // Lights
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0xc9a86c, 1, 100);
        pointLight1.position.set(5, 5, 5);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x8b7355, 1, 100);
        pointLight2.position.set(-5, -5, 5);
        scene.add(pointLight2);

        // Mouse tracking
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Resize handler
        const handleResize = () => {
            if (!cameraRef.current || !rendererRef.current) return;
            cameraRef.current.aspect = window.innerWidth / window.innerHeight;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
            animationRef.current = requestAnimationFrame(animate);

            if (materialRef.current) {
                materialRef.current.uniforms.uTime.value += 0.01;
            }

            if (blobRef.current) {
                blobRef.current.rotation.x += (mouseRef.current.y * 0.1 - blobRef.current.rotation.x) * 0.02;
                blobRef.current.rotation.y += (mouseRef.current.x * 0.1 - blobRef.current.rotation.y) * 0.02;
                blobRef.current.rotation.y += 0.002;
            }

            if (rendererRef.current && sceneRef.current && cameraRef.current) {
                rendererRef.current.render(sceneRef.current, cameraRef.current);
            }
        };
        animate();

        // Cleanup
        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);

            if (rendererRef.current && containerRef.current) {
                containerRef.current.removeChild(rendererRef.current.domElement);
                rendererRef.current.dispose();
            }

            geometry.dispose();
            material.dispose();
        };
    }, []);

    // Handle wheel event on the section element directly
    const handleWheel = useCallback((e: React.WheelEvent) => {
        if (!isHidden && e.deltaY > 0) {
            handleScrollDown();
        }
    }, [isHidden, handleScrollDown]);

    // Handle keyboard
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isHidden && (e.key === 'ArrowDown' || e.key === ' ')) {
                e.preventDefault();
                handleScrollDown();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isHidden, handleScrollDown]);

    // Handle touch swipe
    useEffect(() => {
        let touchStartY = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;

            // Swipe up (finger moves up = scroll down)
            if (!isHidden && diff > 50) {
                handleScrollDown();
            }
        };

        const section = sectionRef.current;
        if (section) {
            section.addEventListener('touchstart', handleTouchStart, { passive: true });
            section.addEventListener('touchend', handleTouchEnd, { passive: true });
        }

        return () => {
            if (section) {
                section.removeEventListener('touchstart', handleTouchStart);
                section.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, [isHidden, handleScrollDown]);

    return (
        <section
            ref={sectionRef}
            className={`${styles.firstScreen} ${isHidden ? styles.hidden : ''}`}
            aria-hidden={isHidden}
            onWheel={handleWheel}
        >
            {/* Three.js Canvas Container */}
            <div ref={containerRef} className={styles.canvasContainer} />

            {/* Gradient Overlay */}
            <div className={styles.gradientOverlay} />

            {/* Language Toggle */}
            <div className={styles.languageToggle}>
                <button
                    className={`${styles.langButton} ${language === 'en' ? styles.langActive : ''}`}
                    onClick={() => setLanguage('en')}
                    type="button"
                >
                    EN
                </button>
                <span className={styles.langDivider}>|</span>
                <button
                    className={`${styles.langButton} ${language === 'de' ? styles.langActive : ''}`}
                    onClick={() => setLanguage('de')}
                    type="button"
                >
                    DE
                </button>
            </div>

            {/* Content */}
            <div className={styles.contentWrapper}>
                {/* Tagline */}
                <div className={styles.tagline}>
                    {t.firstScreen.tagline}
                </div>

                {/* Main Title */}
                <h1 className={styles.mainTitle}>
                    <span className={styles.titleLine}>{t.firstScreen.title}</span>
                    <span className={styles.titleHighlight}>{t.firstScreen.titleHighlight}</span>
                </h1>

                {/* Subtitle */}
                <p className={styles.subtitle}>
                    {t.firstScreen.subtitle}
                </p>

                {/* Scroll Indicator */}
                <button
                    className={styles.scrollIndicator}
                    onClick={handleScrollDown}
                    aria-label={t.firstScreen.scrollText}
                    type="button"
                >
                    <span className={styles.scrollText}>{t.firstScreen.scrollText}</span>
                    <div className={styles.scrollArrow}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                    </div>
                </button>
            </div>
        </section>
    );
}
