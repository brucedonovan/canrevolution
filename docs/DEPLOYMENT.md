# Deployment Guide

Complete guide to deploying can(RE)volution to Netlify with security configuration.

## Overview

can(RE)volution is deployed to Netlify with:

- Static site generation via Next.js
- Security headers and Content Security Policy
- Optimized image delivery and caching
- Environment variable management
- HTTPS and automatic SSL

## Prerequisites

- Netlify account ([Sign up](https://netlify.com))
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js 20+ locally for building
- Access to domain (optional)

## Quick Deploy (Git-Connected)

### 1. Connect Repository to Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub, GitLab, Bitbucket)
4. Select `canrevolution` repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** 20
6. Click "Deploy site"

### 2. Configure Environment Variables (if needed)

In Netlify Dashboard:

1. Go to Site settings → Environment
2. Add variables (if any exist in your `.env.local`)
3. Redeploy

### 3. Connect Custom Domain (optional)

1. In Netlify Dashboard → Domain management
2. Add custom domain
3. Follow DNS configuration for your provider
4. Netlify provides free SSL certificate

## Security Configuration

### What's Included

The `netlify.toml` file provides:

#### Security Headers

```toml
[[headers]]
  for = "/*"

  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;"
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

#### Caching Headers

```toml
[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=86400"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=3600"
```

#### Redirects

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Security Features Explained

| Header                 | Purpose                | Value                             |
| ---------------------- | ---------------------- | --------------------------------- |
| CSP                    | Prevents XSS attacks   | Restricts script sources          |
| X-Content-Type-Options | Prevents MIME sniffing | `nosniff`                         |
| X-Frame-Options        | Prevents clickjacking  | `DENY` (no embedding)             |
| Referrer-Policy        | Controls referrer info | `strict-origin-when-cross-origin` |
| Permissions-Policy     | Restricts browser APIs | Disables geo/mic/camera           |

## Build Process

### Local Build

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Output is in .next folder
```

### Netlify Build

Netlify automatically:

1. Clones repository
2. Installs dependencies with npm
3. Runs `npm run build`
4. Deploys `.next` folder

### Build Optimization

- Source maps disabled in production (security)
- Compression enabled (faster delivery)
- Images optimized by Next.js
- Static assets cached indefinitely

## Environment Variables

### For Local Development

Create `.env.local`:

```env
# No sensitive variables currently required
# Add future API keys here
```

### For Netlify Deployment

1. Go to Site settings → Environment
2. Add any required variables
3. Netlify automatically injects at build time
4. Never expose secrets in public code

## Performance

### Metrics

- Build time: ~5-10 seconds on Netlify
- First contentful paint: < 1 second
- Lighthouse score: 95+ (typical)

### Optimization Techniques

- Static generation (fast)
- Image optimization via Next.js
- CSS minification with Tailwind
- JavaScript code splitting
- Caching headers on static assets

## Monitoring

### Netlify Analytics (included)

1. Go to Site analytics in Netlify Dashboard
2. Monitor:
   - Page views
   - Unique visitors
   - Top pages
   - Geographic distribution

### Recommended Additions

- **Sentry** - Error tracking
- **Plausible/Fathom** - Privacy-focused analytics
- **Google Search Console** - SEO monitoring

## Troubleshooting

### Build Fails

**Problem:** Build command fails

```
Solution:
1. Check npm dependencies: npm install
2. Verify Node version: npm run version
3. Check TypeScript errors: npm run type-check
4. Review build logs in Netlify
```

**Problem:** Pages return 404

```
Solution:
1. Verify netlify.toml redirect rule exists
2. Check .next folder is publish directory
3. Ensure pages are in app/ directory
```

### Performance Issues

**Problem:** Slow page loads

```
Solution:
1. Check image sizes in public/
2. Monitor bundle size: npm run analyze
3. Verify caching headers are set
4. Check Netlify build metrics
```

### Deployment Stuck

**Problem:** Deployment takes too long

```
Solution:
1. Increase Netlify timeout to 20 minutes
2. Check for large files in .next
3. Verify no infinite loops in build
4. Check network connectivity
```

## Rollback

### Revert to Previous Deploy

1. Go to Netlify Dashboard → Deploys
2. Find previous successful deploy
3. Click "Preview" to verify
4. Click "Publish deploy" to go live

### Manual Rollback

```bash
# From Git
git revert <commit-hash>
git push origin main
# Netlify auto-deploys

# Or manually
netlify deploy --prod --dir=.next
```

## Post-Deployment Checklist

- [ ] Site loads at custom domain
- [ ] HTTPS working (green padlock)
- [ ] Mobile responsive
- [ ] Navigation smooth scrolling
- [ ] Forms submit without error
- [ ] Images load properly
- [ ] Check Google Search Console
- [ ] Add domain to analytics
- [ ] Monitor Netlify logs for errors

## Continuous Deployment

### Automatic Deploys

Enabled by default when connected to Git:

- Commit to `main` branch → auto-deploy
- Merge pull request → auto-deploy
- Preview deploys on pull requests

### Disable Auto-Deploy

1. Site settings → Build & deploy
2. Uncheck "Auto publish"
3. Manually deploy from Netlify Dashboard

## Domain & DNS

### Configure Custom Domain

1. **Netlify-managed DNS**
   - Go to Domain management
   - Add domain
   - Update registrar to use Netlify nameservers
   - Takes 24-48 hours to propagate

2. **External DNS**
   - Add CNAME record pointing to Netlify URL
   - Or use A records provided by Netlify
   - Takes 5-30 minutes

### SSL Certificate

- Automatic via Let's Encrypt
- Renews automatically
- No configuration needed
- Free for all domains

## Advanced Configuration

### Custom Build Hooks

In `netlify.toml`:

```toml
[build]
  command = "npm run build && npm run ssg"
  functions = "netlify/functions"
  publish = ".next"
```

### Environment-Specific Builds

```toml
[build.environment]
  NODE_ENV = "production"
  NODE_VERSION = "20"
```

### Redirects & Rewrites

```toml
# Redirect old URLs
[[redirects]]
  from = "/old-page"
  to = "/new-page"
  status = 301

# Rewrite for SPA routing
[[redirects]]
  from = "/app/*"
  to = "/app/index.html"
  status = 200
```

## Support & Resources

- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Next.js Deployment:** [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **Netlify Support:** [netlify.com/support](https://netlify.com/support)
- **Security Checklist:** See `SECURITY.md`

---

**Last Updated:** December 16, 2025
