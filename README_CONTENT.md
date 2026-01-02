# Content Management Guide

## How to Update Website Content

All website content (English and German) is stored in `/data/content.ts`. This makes it easy to update text without touching the components.

### Structure

The content is organized by language (`en` and `de`) and sections:

```typescript
export const content = {
  en: {
    nav: { ... },          // Navigation menu
    hero: { ... },         // Hero section
    testimonial: { ... },  // Testimonial section
    about: { ... },        // About section
    leadMagnet: { ... },   // Lead magnet section
    whatToExpect: { ... }, // What to expect section
    whoComesToMe: { ... }, // Who comes to me section
    footer: { ... }        // Footer
  },
  de: {
    // Same structure in German
  }
};
```

### To Update Content

1. Open `/data/content.ts`
2. Find the section you want to edit
3. Update the text for both `en` and `de` languages
4. Save the file - changes will appear immediately

### Example: Changing the Hero Title

```typescript
hero: {
  title: "WHERE MEDICINE",      // Change this line
  titleHighlight: "MEETS",       // And this line
  titleScript: "SOUL",           // And this line
  cta: "Start Today"
}
```

## Component Structure

The website is built with separate, modular components:

### Layout Components
- `/components/layout/Header.tsx` - Navigation and language switcher
- `/components/layout/Footer.tsx` - Footer with contact info

### Section Components
- `/components/sections/HeroSection.tsx` - Hero banner
- `/components/sections/TestimonialSection.tsx` - Client testimonials
- `/components/sections/AboutSection.tsx` - About Verena
- `/components/sections/LeadMagnetSection.tsx` - Email signup
- `/components/sections/WhatToExpectSection.tsx` - Services overview
- `/components/sections/WhoComesToMeSection.tsx` - Target clients

## Language Switching

The language switcher is in the top right of the header. It uses React Context to manage the current language state across all components.

### How It Works
1. User clicks EN or DE button
2. Language context updates
3. All components automatically re-render with new language

The implementation is in:
- `/contexts/LanguageContext.tsx` - Context provider
- `/data/content.ts` - All translations

## Responsive Design

The website is fully responsive:
- **Mobile** (< 768px): Single column, hamburger menu
- **Tablet** (768px - 1024px): Optimized layouts
- **Desktop** (> 1024px): Full multi-column layouts

All breakpoints use Tailwind CSS responsive classes:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

## Styling

The design uses:
- **Colors**: Warm browns, tans, and amber accents (no purple!)
- **Fonts**:
  - Inter for body text (clean, modern)
  - Playfair Display for script/cursive text (elegant)
- **Spacing**: Consistent 8px grid system

## Making Changes

### To Change Images:
1. Find the component with the image (e.g., `HeroSection.tsx`)
2. Update the `backgroundImage` URL with your new image
3. Use Pexels or another stock photo service for high-quality images

### To Add New Sections:
1. Create new component in `/components/sections/`
2. Add content to `/data/content.ts`
3. Import and add to `/app/page.tsx`

### To Modify Styling:
- Components use Tailwind CSS classes
- Global styles in `/app/globals.css`
- Colors can be adjusted in the CSS variables

## Social Media Links

Update social media links in:
- Header component: Lines with Instagram, LinkedIn, Globe icons
- Footer component: Social media section

Replace `https://instagram.com` and `https://linkedin.com` with your actual URLs.

## Contact Information

Update email and contact details in:
- Footer component: `/components/layout/Footer.tsx`
- Lead magnet section: `/components/sections/LeadMagnetSection.tsx`
