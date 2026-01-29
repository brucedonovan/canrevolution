# Image Optimization Guide for can(RE)volution

This document outlines the image delivery optimization strategies implemented for the can(RE)volution Next.js application.

## Overview

Image optimization is critical for performance. Large, unoptimized images can account for 50-80% of page payload. This guide explains the optimizations in place and how to maintain them.

## Implemented Optimizations

### 1. **Next.js Image Optimization (Enabled in next.config.ts)**

The app now uses Next.js built-in image optimization with:

```typescript
images: {
  remotePatterns: [],
  formats: ['image/webp', 'image/avif'],  // Modern formats
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 31536000,  // 1 year cache
}
```

**Benefits:**
- Automatically converts images to WebP and AVIF (30-40% smaller than JPEG)
- Serves appropriately-sized images based on device viewport
- Images are cached for 1 year to reduce re-requests
- Removes previous `unoptimized: true` setting that was disabling all optimization

### 2. **Responsive Image Sizing with `sizes` Prop**

The `sizes` prop tells Next.js the actual display size of images, preventing oversized images from being sent to small devices.

**Examples used:**

```tsx
// Full viewport width (hero background)
<Image
  src="/images/hero-bg.png"
  sizes="100vw"
  fill
/>

// Responsive carousel images
<Image
  src={item.image}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  fill
/>

// Fixed-size product images
<Image
  src={tier.image}
  sizes="200px"  // Always 200px, no responsive needed
/>
```

**Impact:** Without `sizes`, Next.js defaults to 1024px, which is wasteful for mobile devices.

### 3. **Priority Loading**

High-impact above-the-fold images use `priority`:

```tsx
<Image
  src="/images/hero-bg.png"
  priority  // Loads immediately instead of lazy-loading
/>
```

Applied to:
- Hero background image (`/images/hero-bg.png`)
- Logo in navigation (`/images/logo.svg`)

Non-critical images automatically lazy-load.

## Image Asset Files

Current images in `/public/images`:

| File | Type | Usage | Optimization |
|------|------|-------|--------------|
| `hero-bg.png` | PNG | Full-width hero background | Can be converted to JPG/WebP for smaller size |
| `logo.svg` | SVG | Navigation logo | Already optimized (vector format) |
| `machine.png` | PNG | Product showcase | Should be optimized |
| `pricing-starter.png` | PNG | Pricing tier 1 | Should be optimized |
| `pricing-growth.png` | PNG | Pricing tier 2 | Should be optimized |
| `pricing-scale.png` | PNG | Pricing tier 3 | Should be optimized |
| `product-*.png` | PNG (5 files) | Product carousel | Should be optimized |

## Optimization Checklist for Images

### For Each New Image:

- [ ] **Format**: Use JPEG for photos, PNG for graphics with transparency, SVG for icons/logos
- [ ] **Size**: Max width should match largest display size (2048px for full-width)
- [ ] **Compression**: Use tools like TinyPNG, ImageOptim, or Squoosh before adding
- [ ] **Responsive**: Add `sizes` prop for responsive images
- [ ] **Alt Text**: Always include descriptive alt text for accessibility
- [ ] **Priority**: Only use `priority` for above-the-fold images

### Recommended Tools:

1. **TinyPNG** (online): https://tinypng.com - Great for PNGs and JPGs
2. **Squoosh** (online): https://squoosh.app - Modern formats (WebP, AVIF)
3. **ImageOptim** (Mac): One-click optimization with batch support
4. **GIMP/Photoshop**: Resize to actual display width before export

### Example Optimization Process:

```bash
# Before: 500KB PNG image
# After: TinyPNG compression → 150KB
# After: Convert to JPEG → 80KB
# Next.js at delivery time:
#   - Mobile (640px): ~25KB WebP
#   - Tablet (1080px): ~45KB WebP
#   - Desktop (1920px): ~80KB WebP
```

## Performance Impact

### Expected Improvements:

- **30-40%** reduction from WebP/AVIF conversion
- **50%+** reduction on mobile from correct sizing
- **Bandwidth savings**: Typical homepage savings of 2-3MB → 500-800KB
- **LCP (Largest Contentful Paint)**: 200-500ms improvement for image-heavy pages

### Monitoring:

Use these tools to verify improvements:

1. **Chrome DevTools Lighthouse**
   - Run audit → Performance tab
   - Target: 90+ score

2. **WebPageTest**: https://www.webpagetest.org
   - Detailed waterfall analysis
   - Check image byte sizes

3. **Bundle Analyzer**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```

## Image Delivery Architecture

```
User Request
    ↓
Next.js Image Optimization (ISR on first request)
    ↓
Convert to WebP/AVIF
    ↓
Resize based on device (via sizes prop)
    ↓
Cache on Netlify CDN (31536000s = 1 year)
    ↓
Serve to User Browser
```

## Future Optimizations

- [ ] Compress all current PNG images (20-30% savings)
- [ ] Consider SVG compression for large illustrations
- [ ] Implement placeholder blur while loading (`placeholder="blur"`)
- [ ] Use `Image` component for all static images (no `<img>` tags)
- [ ] Consider AVIF-only delivery for modern browsers (20-30% better than WebP)

## Troubleshooting

### Image looks blurry or low quality
- Increase source image quality
- Check that `sizes` prop is accurate to actual display size
- Verify image isn't being stretched with CSS

### Images not caching
- Check CDN cache headers
- Verify `minimumCacheTTL` is set correctly
- Ensure images have hash in filename if using static versioning

### High bandwidth usage
- Run Lighthouse audit to identify large images
- Check that unoptimized images aren't in public folder
- Verify all `Image` components have `sizes` prop for responsive images

## Resources

- [Next.js Image Documentation](https://nextjs.org/docs/app/api-reference/components/image)
- [Web.dev Image Optimization](https://web.dev/image-optimization/)
- [MDN: Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
