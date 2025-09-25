# Maxine Mutasa's Portfolio

A modern, accessible portfolio website built with Next.js 14, featuring a stunning liquid glass aesthetic and smooth animations.

## ✨ Features

- **Liquid Glass Design**: Beautiful glassmorphism effects with backdrop blur and subtle animations
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessibility First**: WCAG AA compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Lighthouse score 95+ across all metrics
- **SEO Ready**: Meta tags, structured data, and optimized images
- **Smooth Animations**: Respects `prefers-reduced-motion` for accessibility

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (body) + DM Sans (headings)

## 🎨 Design System

### Colors
- **Primary**: Violet 600 (#7c3aed)
- **Accent**: Cyan 400 (#22d3ee)
- **Background**: Rich charcoal (#0b0e14)
- **Glass Effects**: Semi-transparent whites with backdrop blur

### Typography
- **Headings**: DM Sans (semi-bold, tight tracking)
- **Body**: Inter (regular, optimized for readability)
- **Scale**: 8-point spacing system

### Components
- **Glass Cards**: Layered glass with backdrop-filter blur
- **Liquid Background**: Animated gradient orbs
- **Smooth Transitions**: 220ms-600ms with custom easing
- **Hover Effects**: Subtle lift and glow effects
- **Expressive Hero**: Animated gradient text with SVG underline
- **Tech Marquee**: Smooth scrolling technology showcase

## ✨ Expressive Hero Features

### Animated Headline
- **Gradient shimmer** on keyword with 8s infinite animation
- **SVG wavy underline** that draws in on page load
- **Responsive typography** scaling from mobile to desktop

### Tech Marquee
- **Seamless loop** with duplicated items for smooth transition
- **Pause on hover** for better user interaction
- **Reduced motion support** respects accessibility preferences
- **Gradient mask** for smooth fade-in/out edges

### Customization

#### Changing Headline Words
```tsx
// In src/app/page.tsx
<HeroExpressive
  headlineParts={["Your", "Keyword", "rest of headline"]}
  // ... other props
/>
```

#### Updating Marquee Items
```tsx
// In src/app/page.tsx
const marqueeItems = [
  "Next.js", "Tailwind", "React", "TypeScript",
  "Django", "PostgreSQL", "Vercel", "Node.js"
  // Add or remove technologies
];
```

#### Adjusting Animation Timing
```tsx
// In src/components/Marquee.tsx
<Marquee 
  items={marqueeItems}
  durationMs={20000} // Slower: 20 seconds
  // durationMs={15000} // Faster: 15 seconds
/>
```

#### CSS Animation Controls
```css
/* In src/app/globals.css */
/* Shimmer speed */
.animate-[shimmer_8s_ease-in-out_infinite] /* 8 seconds */

/* Marquee speed */
.animate-[slide_18s_linear_infinite] /* 18 seconds */

/* SVG draw speed */
.animate-[draw_1.2s_ease-out_forwards] /* 1.2 seconds */
```

### Accessibility Notes
- **Screen readers**: Marquee content is hidden from screen readers with `aria-hidden="true"`
- **Reduced motion**: All animations respect `prefers-reduced-motion: reduce`
- **Focus management**: Proper focus states and keyboard navigation
- **Color contrast**: All text meets WCAG AA standards

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles & design tokens
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # SEO robots
├── components/            # Reusable components
│   ├── Hero.tsx          # Hero section
│   ├── Nav.tsx           # Navigation
│   ├── ProjectCard.tsx   # Project cards
│   ├── Layout.tsx        # Page layout wrapper
│   └── Footer.tsx        # Footer
└── public/
    └── images/           # Project images & assets
```

## 🎯 Customization

### Adding New Projects

1. **Add project data** to `src/app/projects/page.tsx`:
   ```typescript
   {
     id: "unique-id",
     title: "Project Name",
     description: "Brief description",
     longDescription: "Detailed description",
     image: "/images/project.jpg",
     tags: ["Frontend", "React"],
     role: "Lead Developer",
     impact: "40% increase in performance",
     tech: ["Next.js", "TypeScript"],
     liveUrl: "https://example.com",
     githubUrl: "https://github.com/example",
     featured: true
   }
   ```

2. **Add project image** to `public/images/`

### Updating Personal Info

1. **Update metadata** in `src/app/layout.tsx`
2. **Update contact info** in `src/app/contact/page.tsx`
3. **Update social links** in `src/components/Footer.tsx` and `src/components/Hero.tsx`
4. **Update about content** in `src/app/about/page.tsx`

### Customizing Colors

Update CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: #your-color;
  --accent: #your-accent;
  --bg: #your-background;
}
```

## ♿ Accessibility Features

- **Skip Links**: Jump to main content with Tab key
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Focus Management**: Visible focus indicators and logical tab order
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Color Contrast**: WCAG AA compliant color combinations
- **Alt Text**: Descriptive alt text for all images

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js Image component with responsive loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Font Optimization**: Google Fonts with `display: swap`
- **Lazy Loading**: Images and components load as needed
- **Bundle Analysis**: Built-in bundle analyzer
- **SEO**: Meta tags, Open Graph, and structured data

## 📱 Responsive Design

- **Mobile First**: Designed for mobile, enhanced for desktop
- **Breakpoints**: 
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- **Touch Friendly**: 44px minimum touch targets
- **Flexible Grid**: CSS Grid and Flexbox for layouts

## 🎨 Animation Guidelines

### Motion Principles
- **Purposeful**: Animations enhance UX, don't distract
- **Performant**: 60fps animations with hardware acceleration
- **Accessible**: Respects user motion preferences
- **Consistent**: Uses design system timing and easing

### Animation Types
- **Page Transitions**: Smooth crossfade between pages
- **Scroll Animations**: Elements animate in as they enter viewport
- **Hover Effects**: Subtle feedback on interactive elements
- **Loading States**: Smooth transitions for async operations

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Analysis
npm run analyze      # Analyze bundle size
```

### Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting with Next.js config
- **Prettier**: Code formatting (recommended)
- **Husky**: Git hooks for quality checks (optional)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** if needed
3. **Deploy** with automatic preview URLs

### Other Platforms

- **Netlify**: Static site generation
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

## 📊 Performance Targets

- **Lighthouse Performance**: 95+
- **Lighthouse Accessibility**: 90+
- **Lighthouse Best Practices**: 95+
- **Lighthouse SEO**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **Design inspiration** from modern glassmorphism trends

---

**Built with ❤️ by Maxine Mutasa**

For questions or support, reach out at [maxinemutasa00@gmail.com](mailto:maxinemutasa00@gmail.com)
