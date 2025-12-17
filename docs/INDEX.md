# can(RE)volution Documentation

Complete documentation for the can(RE)volution project - a Next.js marketing website for beverage canning machine solutions.

## 📋 Table of Contents

1. **[README](./README.md)** - Project overview, setup, and getting started
2. **[THEME_SYSTEM](./THEME_SYSTEM.md)** - Color theming and customization
3. **[SECURITY](./SECURITY.md)** - Security audit and best practices
4. **[DEPLOYMENT](./DEPLOYMENT.md)** - Netlify deployment guide
5. **[SEO](./SEO.md)** - Search engine optimization implementation

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Development server runs at: http://localhost:3000

## 📁 Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── contact/           # Contact page
│   └── appointments/      # Appointments page
├── components/            # Reusable React components
├── lib/                   # Utilities and configurations
│   ├── theme.ts          # Theme configuration (6 themes)
│   └── metadata.ts       # SEO metadata
├── public/               # Static assets
└── docs/                 # Documentation
```

## 🎨 Theme System

The app includes 6 pre-built color themes:

- **canrevolution** (default) - Blue/professional
- **autumn** - Orange/warm
- **nature** - Teal/nature
- **dark** - Gray/modern
- **noir** - Black/elegant
- **sunshine** - Yellow/bright

Switch themes by changing the default in `lib/theme.ts`.

## 🔒 Security

- Static Next.js site with minimal attack surface
- TypeScript strict mode enabled
- XSS protection via React auto-escaping
- Security headers configured via `netlify.toml`
- No hardcoded secrets or API keys

See [SECURITY.md](./SECURITY.md) for full audit.

## 🌐 Deployment

Deploy to Netlify with:

```bash
npm run build
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📞 Contact & Support

For questions about the canning solutions, visit the contact page or check out:

- Website: https://canrevolution.com
- Instagram: @can.revolution
- Email: hello@canrevolution.com

---

**Last Updated:** December 16, 2025
