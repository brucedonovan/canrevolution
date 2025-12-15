# Theme System Documentation

## Overview

The can(RE)volution app now has a centralized theming system that makes it easy to change colors and branding throughout the entire application.

## File Structure

- `lib/theme.ts` - Main theme configuration with color definitions
- `lib/themeUtils.ts` - Helper utilities for applying theme colors

## Quick Start: Changing Colors

### Method 1: Change Primary Color Palette

Edit `lib/theme.ts` and update the `primary` color object:

```typescript
export const theme = {
  primary: {
    50: 'indigo-50',      // Change all these to your desired color
    100: 'indigo-100',
    600: 'indigo-600',
    700: 'indigo-700',
    // ... etc
    light: 'indigo-600',  // Main accent on light backgrounds
    dark: 'indigo-400',   // Main accent on dark backgrounds
    accent: 'indigo-600', // Primary accent color
    hover: 'indigo-700',  // Hover state
  }
}
```

### Method 2: Use Color Presets

Pre-defined color presets are available in `theme.ts`. To add a new component using a preset:

```typescript
import { colorPresets } from '@/lib/theme'

// Available presets: 'indigo', 'blue', 'purple', 'emerald', 'amber', 'red'
const colors = colorPresets.blue  // Use blue theme
```

## Available Color Properties

### Primary Colors
- `light` - Use on light backgrounds (default: `indigo-600`)
- `dark` - Use on dark backgrounds (default: `indigo-400`)
- `accent` - Main accent color
- `hover` - Hover state color

### Text Colors
- `onLight` - Text on light backgrounds
- `onDark` - Text on dark backgrounds
- `muted` - Secondary text on light backgrounds
- `mutedDark` - Secondary text on dark backgrounds

### Background Colors
- `light` - Light background (white)
- `dark` - Dark background (black)
- `lightCard` - Light card background (gray-100)
- `darkCard` - Dark card background (gray-800/50)

## Using Theme Colors in Components

### Simple Usage
```typescript
import { theme } from '@/lib/theme'

export function MyComponent() {
  return (
    <div className={`text-${theme.primary.light}`}>
      Themed Text
    </div>
  )
}
```

### Using Helper Functions
```typescript
import { getAccentColor, getTextColor, classNames } from '@/lib/themeUtils'

export function MyComponent() {
  const accentColor = getAccentColor(false) // false = light mode
  const textColor = getTextColor(false)
  
  return (
    <div className={classNames(`text-${textColor}`, 'p-4')}>
      Themed Text
    </div>
  )
}
```

## Color Scheme Map

### Light Backgrounds (Most Common)
- Primary accent: `indigo-600`
- Text: `black`
- Muted text: `gray-600`
- Backgrounds: `white`
- Cards: `gray-100`
- Borders: `gray-200`

### Dark Backgrounds
- Primary accent: `indigo-400`
- Text: `white`
- Muted text: `gray-400`
- Backgrounds: `black`
- Cards: `gray-800/50`
- Borders: `gray-700`

## Tailwind Color Options

The app uses standard Tailwind CSS colors. Available palettes:

```
slate, gray, zinc, neutral, stone
red, orange, amber, yellow, lime, green
emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
```

## Example: Changing to Blue Theme

1. Open `lib/theme.ts`
2. Replace all `indigo-*` with `blue-*`
3. Update primary colors:

```typescript
export const theme = {
  primary: {
    50: 'blue-50',
    100: 'blue-100',
    // ... etc
    light: 'blue-600',
    dark: 'blue-400',
    accent: 'blue-600',
    hover: 'blue-700',
  }
}
```

4. Components will automatically update!

## Current Components Using Theme

- Header (navigation, gradients)
- Hero (accent colors)
- Features (accents, text colors)
- Pricing (primary colors, card backgrounds, text)

## Adding New Components

Always import theme utilities for consistency:

```typescript
import { theme } from '@/lib/theme'
import { getAccentColor, classNames } from '@/lib/themeUtils'

export function NewComponent() {
  return (
    <div className={`bg-${theme.background.lightCard} text-${theme.text.onLight}`}>
      {/* Component content */}
    </div>
  )
}
```

## Tips

- Use `light` and `dark` theme variants for flexibility
- Always maintain contrast ratios for accessibility (WCAG AA minimum)
- Test color changes on both light and dark backgrounds
- Use the preset colors as starting points for quick changes
