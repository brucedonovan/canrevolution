# Getting Started

## Project Overview

can(RE)volution is a modern Next.js marketing website for commercial beverage canning machine solutions. It features:

- **Responsive Design** - Works on all devices
- **Dynamic Theming** - 6 built-in color themes
- **Interactive Components** - Calculator, carousel, accordions
- **SEO Optimized** - Structured data, metadata, sitemap
- **Security Hardened** - Security headers, CSP, best practices

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd canrevolution
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Development Commands

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Structure

```
canrevolution/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── contact/
│   │   └── page.tsx            # Contact form page
│   └── appointments/
│       └── page.tsx            # Calendly integration page
├── components/                   # Reusable components
│   ├── Header.tsx              # Navigation header
│   ├── NavBar.tsx              # Navigation menu
│   ├── Hero.tsx                # Hero section
│   ├── Features.tsx            # Features with accordion
│   ├── ProductCarousel.tsx     # Product showcase
│   ├── MachineSpecs.tsx        # Machine specifications
│   ├── Pricing.tsx             # Pricing cards
│   ├── ProfitCalculator.tsx    # Interactive calculator
│   ├── BookDemo.tsx            # Demo booking CTA
│   ├── Footer.tsx              # Footer
│   └── StructuredData.tsx      # Schema markup
├── lib/
│   ├── theme.ts                # Theme configuration
│   ├── themeUtils.ts           # Theme utilities
│   └── metadata.ts             # SEO metadata
├── public/
│   ├── images/                 # Image assets
│   └── favicon.ico             # Favicon
├── docs/                        # Documentation
│   ├── INDEX.md                # Documentation index
│   ├── README.md               # This file
│   ├── THEME_SYSTEM.md         # Theme guide
│   ├── SECURITY.md             # Security audit
│   └── DEPLOYMENT.md           # Deployment guide
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript config
├── next.config.ts              # Next.js config
├── tailwind.config.js          # Tailwind CSS config
└── netlify.toml                # Netlify deployment config
```

## Pages

### Home (/)
Main landing page with:
- Navigation header
- Hero section with CTA
- Features showcase
- Product carousel
- Machine specifications
- Pricing comparison
- Profit calculator
- Booking section
- Footer

### Contact (/contact)
Contact form with:
- Business information
- Contact form fields
- Map/location (optional)
- Form submission

### Appointments (/appointments)
Calendly booking integration for scheduling demos.

## Key Features

### Theme System
6 pre-built themes with consistent color palettes:
- **canrevolution** - Professional blue
- **autumn** - Warm orange
- **nature** - Natural teal
- **dark** - Modern gray
- **noir** - Elegant black
- **sunshine** - Bright yellow

Switch themes by changing `defaultTheme` in `lib/theme.ts`.

### Components

**Header & Navigation**
- Responsive header with logo
- Smooth scroll navigation
- Mobile menu with slide-out
- Active state indicators

**Calculator**
- Interactive profit calculator
- Plan selector with radio groups
- Numeric input with validation
- Real-time calculations
- Visual results display

**Features**
- Accordion components
- Smooth animations
- Responsive grid layout

**Pricing**
- Card-based layout
- Featured/highlighted plan
- Expandable details
- Feature lists

### SEO
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Semantic HTML
- Image optimization

## Styling

The project uses **Tailwind CSS v4** with custom theme configuration.

### Adding Styles
```tsx
// Use Tailwind classes
<div className="bg-blue-500 text-white p-4">Content</div>

// Or inline theme styles
<div style={{ backgroundColor: theme.primary.light }}>Content</div>
```

## Environment Variables

No environment variables required for basic functionality.

For Netlify deployment, set:
- `NODE_VERSION=20` (build environment)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- **Lighthouse Score**: 95+
- **Build Time**: ~30-50s
- **Page Load**: <2s (fully optimized)

## Troubleshooting

### Issue: Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Issue: Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build fails
```bash
npm run lint  # Check for errors
npm run build
```

## Next Steps

1. **Customize Theme** - See [THEME_SYSTEM.md](./THEME_SYSTEM.md)
2. **Deploy** - See [DEPLOYMENT.md](./DEPLOYMENT.md)
3. **Security** - See [SECURITY.md](./SECURITY.md)

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)

## Support

For issues or questions:
1. Check existing documentation
2. Review component comments
3. Check build errors: `npm run build`
4. Review console logs: `npm run dev`

---

**Last Updated:** December 16, 2025
