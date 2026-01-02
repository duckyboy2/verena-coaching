# Verena Newsome Mind & Body Coaching Website

## Overview

A professional, production-ready website for Verena Newsome's Mind & Body Coaching practice, featuring bilingual support (English/German) and fully responsive design.

## Features

### 1. **Bilingual Support**
- Language switcher in the top right corner
- Complete English and German translations
- Easy content management via `/data/content.ts`

### 2. **Responsive Design**
- Mobile-first approach
- Optimized for phones, tablets, and desktops
- Smooth transitions and hamburger menu on mobile

### 3. **Professional Sections**

#### Header
- Sticky navigation with smooth scrolling
- Logo and branding
- Navigation menu
- Social media icons (Instagram, LinkedIn, Website)
- Language switcher (EN/DE)

#### Hero Section
- Full-width background image
- Large, impactful typography
- "WHERE MEDICINE MEETS SOUL" tagline
- Call-to-action button

#### Testimonial Section
- Client testimonials
- "Your Story Matters - and your Body Remembers"
- Professional styling with accent divider

#### About Section
- Two-column layout (image + text)
- Professional photo
- Credentials and description
- Two call-to-action buttons

#### Lead Magnet Section
- Email signup prompt
- "Back in Balance" guide offer
- Social media links

#### What You Can Expect
- Bordered callout box
- Service description
- Professional presentation

#### Who Comes to Me
- Target client description
- Grid layout of client characteristics
- Clear, readable format

#### Footer
- Contact information
- Social media links
- Copyright and legal links

### 4. **Design Elements**
- **Color Scheme**: Warm browns, tans, amber accents
- **Typography**:
  - Inter for body text (clean, professional)
  - Playfair Display for script text (elegant)
- **Images**: High-quality stock photos from Pexels
- **Spacing**: Consistent 8px grid system
- **Effects**: Subtle shadows, smooth transitions, hover states

## File Structure

```
project/
├── app/
│   ├── page.tsx           # Main page with all sections
│   ├── layout.tsx         # Root layout with fonts
│   └── globals.css        # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Footer section
│   └── sections/
│       ├── HeroSection.tsx
│       ├── TestimonialSection.tsx
│       ├── AboutSection.tsx
│       ├── LeadMagnetSection.tsx
│       ├── WhatToExpectSection.tsx
│       └── WhoComesToMeSection.tsx
├── contexts/
│   └── LanguageContext.tsx  # Language switching logic
└── data/
    └── content.ts           # All content (EN/DE)
```

## How to Update Content

### Easy Way (Recommended)
1. Open `/data/content.ts`
2. Find the section you want to edit
3. Update both `en` and `de` versions
4. Save - changes appear immediately

### Example
```typescript
hero: {
  title: "WHERE MEDICINE",
  titleHighlight: "MEETS",
  titleScript: "SOUL",
  cta: "Start Today"
}
```

## Technical Stack

- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Images**: Pexels stock photos

## Responsive Breakpoints

- **Mobile**: < 768px (single column, hamburger menu)
- **Tablet**: 768px - 1024px (optimized layouts)
- **Desktop**: > 1024px (full multi-column)

## Color Palette

- **Primary Dark**: `neutral-900` (#171717)
- **Secondary Dark**: `neutral-800` (#262626)
- **Accent**: `amber-700` (#b45309)
- **Light Background**: `neutral-50` (#fafafa)
- **White**: `white` (#ffffff)
- **Text**: `neutral-700` (#404040)

## Next Steps

1. **Replace Images**: Update background images with actual photos of Verena
2. **Update Content**: Customize all text in `/data/content.ts`
3. **Add Social Links**: Update Instagram, LinkedIn URLs in Header and Footer
4. **Update Email**: Change email address in Footer
5. **Add Contact Form**: Optional - can add a contact form component
6. **Connect Analytics**: Add Google Analytics or similar tracking
7. **SEO Optimization**: Update metadata in `layout.tsx`

## Build & Deploy

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

## Notes

- All sections are modular and easy to reorder
- Content is separated from components for easy maintenance
- Language switching is instant with React Context
- Design follows modern web standards
- No purple/indigo colors used (professional warm tones only)
- Fully accessible navigation and semantic HTML
