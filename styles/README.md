# Centralized Styles System Documentation

## Overview

The `styles/` directory contains all the styling system for the application, designed to be completely portable to other projects with minimal configuration.

## Directory Structure

```
styles/
├── index.ts              # Main export file
├── globals.css           # Global CSS (Tailwind + base styles)
├── themes/
│   └── index.ts          # Theme definitions (7 themes)
├── colors/
│   └── index.ts          # Color mappings & utilities
└── utilities/
    └── index.ts          # Styling helper functions
```

## Quick Start

### Importing Styles

```typescript
// Import theme
import { getAvailableThemes, getThemeColors, theme } from '@/styles';
// Import color helpers
import { rgbToHex, tailwindToCSS } from '@/styles/colors';
// Import utilities
import { buttonStyles, containerStyles, flexStyles } from '@/styles/utilities';
```

### Using in Components

```typescript
'use client';

import { theme } from '@/styles';
import { buttonStyles, containerStyles } from '@/styles/utilities';

export default function MyComponent() {
  return (
    <div className={containerStyles.base}>
      <button
        className={buttonStyles.base}
        style={{
          backgroundColor: theme.primary.light,
          color: 'white',
        }}
      >
        Click me
      </button>
    </div>
  );
}
```

## Theme System

### Available Themes

1. **winter** - Cool blues, silvers, and crisp white tones
2. **coffee** - Warm, earthy tones with rich brown accents
3. **ocean** - Deep ocean blues and teal accents
4. **indigo** - Classic indigo with purple accents
5. **emerald** - Fresh emerald green with natural tones
6. **canrevolution** - Warm earth tones with rich charcoal accents (current theme)
7. **summer** - Bright, vibrant sunny yellows and warm oranges

### Switching Themes

To change the theme globally:

1. Open `styles/themes/index.ts`
2. Find the line: `const CURRENT_THEME = 'canrevolution' as const;`
3. Replace `'canrevolution'` with another theme name
4. Run `npm run build`

All colors throughout the app will update automatically.

### Theme Color Structure

Each theme exports a `theme` object with:

```typescript
{
  primary: {
    50-900: string,      // Color scale
    light: string,       // For light mode
    dark: string,        // For dark mode
    accent: string,
    hover: string,
  },
  secondary: { ... },
  neutral: {
    white: string,
    black: string,
    lightGray: string,
    darkGray: string,
  },
  text: {
    onLight: string,     // Text color on light backgrounds
    onDark: string,      // Text color on dark backgrounds
    muted: string,
    mutedDark: string,
  },
  background: {
    light: string,
    medium: string,
    dark: string,
    lightCard: string,
    darkCard: string,
  },
  border: {
    light: string,
    dark: string,
  },
  gradient: {
    from: string,
    to: string,
  },
}
```

## Color System

### Converting Colors

```typescript
import { rgbToHex, tailwindToCSS } from '@/styles/colors';

// Convert Tailwind color names to hex
const hexColor = tailwindToCSS('blue-500'); // '#3b82f6'
const withOpacity = tailwindToCSS('slate-900/40'); // '#0f172a66'

// Convert RGB to hex
const hexFromRGB = rgbToHex(255, 100, 50); // '#ff6432'
```

## Utility Functions

### Layout Utilities

```typescript
import { containerStyles, flexStyles } from '@/styles/utilities';

// Container sizes
containerStyles.base; // mx-auto max-w-7xl px-6 lg:px-8
containerStyles.compact; // mx-auto max-w-2xl px-4 sm:px-6
containerStyles.wide; // mx-auto max-w-6xl px-6 lg:px-8

// Flexbox
flexStyles.center; // flex items-center justify-center
flexStyles.between; // flex items-center justify-between
flexStyles.column; // flex flex-col
```

### Text Utilities

```typescript
import { textStyles } from '@/styles/utilities';

textStyles.h1; // text-5xl font-semibold tracking-tight...
textStyles.h2; // text-4xl font-bold tracking-tight...
textStyles.body; // text-base leading-relaxed
textStyles.small; // text-sm
```

### Button Utilities

```typescript
import { buttonStyles, getButtonStyle } from '@/styles/utilities';

// Pre-defined classes
buttonStyles.base; // Base button structure
buttonStyles.hover; // Hover effects
buttonStyles.disabled; // Disabled state

// Theme-aware style objects
const style = getButtonStyle(isDark);
```

### Responsive Classes

```typescript
import { getResponsiveClass } from '@/styles/utilities';

const className = getResponsiveClass(
  'text-sm', // mobile
  'text-base', // tablet (sm and up)
  'text-lg' // desktop (lg and up)
);
// Result: "text-sm sm:text-base lg:text-lg"
```

### Style Merging

```typescript
import { mergeStyles } from '@/styles/utilities';

const combined = mergeStyles(
  { color: 'red' },
  { fontSize: '16px' },
  isDark ? { backgroundColor: 'black' } : { backgroundColor: 'white' }
);
```

### Theme-Aware Styles

```typescript
import {
  getBackgroundStyle,
  getBorderStyle,
  getButtonStyle,
  getCardStyle,
} from '@/styles/utilities';

// Get background with text color
const bgStyle = getBackgroundStyle(isDark);

// Get border style
const borderStyle = getBorderStyle(isDark);

// Get card style (background + padding + shadow)
const cardStyle = getCardStyle(isDark);

// Get button style
const btnStyle = getButtonStyle(isDark);
```

## Transporting to Another Project

To use this styling system in another project:

### Option 1: Copy the styles directory

```bash
# Copy the entire styles folder
cp -r styles/ /path/to/other/project/

# Update imports in that project
import { theme } from '@/styles';
```

### Option 2: Extract as npm package

Create a package structure and publish:

```json
{
  "name": "@yourorg/styles-system",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts"
}
```

Then install and use in other projects:

```bash
npm install @yourorg/styles-system
```

```typescript
import { containerStyles, theme } from '@yourorg/styles-system/styles';
```

## Global CSS

The `styles/globals.css` file includes:

- Tailwind CSS imports
- CSS custom properties (variables)
- Base element styling
- Accessibility considerations (prefers-reduced-motion)
- Dark mode support

Import it in your layout:

```typescript
// app/layout.tsx
import '@/styles/globals.css';
```

## Migration Guide

### From component inline styles to centralized system

**Before:**

```typescript
<button
  style={{
    backgroundColor: '#a08770',
    color: '#faf8f3',
    padding: '0.625rem 0.875rem',
    borderRadius: '0.375rem',
  }}
>
  Click
</button>
```

**After:**

```typescript
import { theme, getButtonStyle } from '@/styles';

<button style={getButtonStyle()}>
  Click
</button>
```

### Switching themes when exporting

1. Update `CURRENT_THEME` in `styles/themes/index.ts`
2. All imported theme values automatically reflect the new theme
3. No component changes needed!

## Best Practices

1. **Always import from `@/styles`** - Ensures consistency
2. **Use `theme` object for colors** - Theme changes will cascade
3. **Use utility functions for common patterns** - Reduces duplication
4. **Prefer style objects over inline strings** - Better maintainability
5. **Document custom styles** - If you add new utilities

## Extending the System

### Adding a new utility

Edit `styles/utilities/index.ts`:

```typescript
export const myNewStyle = {
  base: 'custom-class-combination',
  variant: 'another-variant',
};
```

### Adding a new theme

Edit `styles/themes/index.ts`:

```typescript
const themes = {
  // ... existing themes
  myNewTheme: {
    name: 'My Theme',
    description: 'Description here',
    primary: {
      /* colors */
    },
    // ... rest of structure
  },
};
```

## Troubleshooting

**Theme isn't changing?**

- Ensure you updated `CURRENT_THEME` in the correct file
- Run `npm run build` to rebuild
- Clear any build caches

**Styles not applying?**

- Check import path: should be `@/styles`
- Ensure globals.css is imported in layout
- Verify Tailwind is properly configured

**Colors look different in different projects?**

- Different Tailwind configurations can affect output
- Ensure `styles/colors` values match your Tailwind config
- Consider standardizing across projects
