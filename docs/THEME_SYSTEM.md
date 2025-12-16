# Theme System Guide

Complete guide to the can(RE)volution theme system - a centralized, dynamic color theming solution.

## Overview

The theme system provides a single source of truth for all colors used throughout the application. Change colors in one place and see updates everywhere.

## Theme Structure

Each theme includes these color categories:

### Primary Colors
```typescript
primary: {
  light: '#...',    // Main accent color (bright)
  dark: '#...'      // Secondary accent color (darker)
}
```

### Text Colors
```typescript
text: {
  onDark: '#...',      // Text on dark backgrounds
  onLight: '#...',     // Text on light backgrounds
  muted: '#...',       // Secondary text
  mutedDark: '#...'    // Secondary text on dark
}
```

### Background Colors
```typescript
background: {
  light: '#ffffff',    // White background
  medium: '#...',      // Mid-tone background
  dark: '#...',        // Dark background
  lightCard: '#...',   // Light card background
  darkCard: 'rgba...'  // Dark card background
}
```

### Border Colors
```typescript
border: {
  light: '#...',       // Light borders
  dark: '#...'         // Dark borders
}
```

### Gradients (optional)
```typescript
gradient: {
  from: '#...',        // Gradient start
  to: '#...'           // Gradient end
}
```

## Available Themes

### 1. canrevolution (Default)
Professional blue theme - suited for corporate/business use.

### 2. autumn
Warm orange theme - energetic and inviting.

### 3. nature
Natural teal theme - eco-friendly vibes.

### 4. dark
Modern gray theme - sophisticated and minimalist.

### 5. noir
Elegant black theme - premium and bold.

### 6. sunshine
Bright yellow theme - cheerful and optimistic.

## Switching Themes

### Method 1: Change Default Theme

Edit `lib/theme.ts`:
```typescript
export const defaultTheme = 'autumn'; // Change to desired theme
```

### Method 2: Runtime Theme Switching (Future)

To implement runtime switching, use a context provider:
```typescript
const ThemeContext = createContext<{ currentTheme: string }>({ currentTheme: 'canrevolution' });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('canrevolution');
  return (
    <ThemeContext.Provider value={{ currentTheme: theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

## Using Theme in Components

### Inline Styles (Recommended)

```typescript
import { theme } from '@/lib/theme';

export function MyComponent() {
  return (
    <div style={{ backgroundColor: theme.background.dark, color: theme.text.onDark }}>
      Themed content
    </div>
  );
}
```

### Multiple Color Properties

```typescript
<button
  style={{
    backgroundColor: theme.primary.light,
    color: theme.text.onDark,
    borderColor: theme.border.light,
    borderWidth: '2px'
  }}
>
  Click me
</button>
```

### Conditional Styling

```typescript
<div
  style={{
    backgroundColor: isActive ? theme.primary.light : theme.background.medium,
    color: isActive ? theme.text.onDark : theme.text.onLight
  }}
>
  Content
</div>
```

## Color Palette Design

When creating a new theme, consider:

### Contrast Ratios
- Text on background should have 4.5:1 contrast minimum
- Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Color Psychology
- Blue: Trust, corporate, calm
- Orange: Energy, warmth, creativity
- Green/Teal: Nature, growth, eco-friendly
- Gray: Professional, neutral, modern
- Black: Luxury, elegance, power
- Yellow: Happiness, optimism, warmth

### Accessibility
- Avoid color-only information
- Ensure sufficient contrast
- Test with color blindness simulators
- Provide text alternatives to color

## Creating a Custom Theme

1. **Copy a similar theme** as starting point
2. **Define colors** for your palette
3. **Ensure consistency** across all color groups
4. **Test contrast** for accessibility
5. **Update `defaultTheme`** in `lib/theme.ts`

Example:
```typescript
const themes = {
  customTheme: {
    primary: {
      light: '#FF6B6B',
      dark: '#C92A2A'
    },
    text: {
      onDark: '#FFFFFF',
      onLight: '#1C1C1C',
      muted: '#666666',
      mutedDark: '#CCCCCC'
    },
    background: {
      light: '#FFFFFF',
      medium: '#F8F8F8',
      dark: '#1A1A1A',
      lightCard: '#F0F0F0',
      darkCard: 'rgba(26, 26, 26, 0.8)'
    },
    border: {
      light: '#E0E0E0',
      dark: '#444444'
    }
  }
};
```

## Color Consistency

### Sections Using Each Color

**Primary Colors**
- Buttons (CTAs, primary actions)
- Links and hover states
- Highlights and emphasis
- Icons and accents

**Text Colors**
- Body text
- Headings
- Labels and descriptions
- Muted secondary text

**Background Colors**
- Page background
- Section backgrounds
- Card backgrounds
- Modal/overlay backgrounds

**Border Colors**
- Dividing lines
- Input borders
- Card borders
- Accent lines

## Best Practices

### DO ✅
- Use theme colors consistently
- Test contrast ratios
- Consider dark/light mode usage
- Update both light and dark variants
- Test all components with new theme

### DON'T ❌
- Hardcode color hex values
- Use arbitrary colors outside theme
- Forget about accessibility
- Apply only primary color
- Test on single component only

## Troubleshooting

### Colors not updating
1. Verify theme is imported: `import { theme } from '@/lib/theme'`
2. Check style prop syntax: `style={{ backgroundColor: ... }}`
3. Rebuild: `npm run build`

### Contrast too low
1. Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
2. Darken light colors or lighten dark colors
3. Verify both light/dark variants

### Theme not switching
1. Verify `defaultTheme` is set correctly
2. Restart dev server: `npm run dev`
3. Clear `.next` folder: `rm -rf .next`

## File Reference

- `lib/theme.ts` - Theme definitions (all 6 themes)
- `lib/themeUtils.ts` - Utility functions for theming
- Components using theme - Throughout `components/`

## Export Structure

```typescript
// In lib/theme.ts
export const theme: Theme;              // Current active theme
export const themes: Record<...>;       // All available themes
export type ThemeOption = keyof typeof themes;  // Theme names
export function getThemeOptions();      // Get theme list
```

## Advanced Usage

### Using Theme Utils

```typescript
import { getTextColorForBackground } from '@/lib/themeUtils';

const textColor = getTextColorForBackground(backgroundColor);
```

### Creating Theme Variants

```typescript
const customStyle = {
  backgroundColor: theme.background.light,
  borderColor: theme.border.light,
  color: theme.text.onLight,
  ...baseStyles
};
```

## Migration Guide (If Updating Themes)

1. Back up current `lib/theme.ts`
2. Update color values in theme object
3. Test each component with new colors
4. Verify contrast ratios
5. Test on multiple pages
6. Test on mobile devices
7. Commit changes

---

**Last Updated:** December 16, 2025
