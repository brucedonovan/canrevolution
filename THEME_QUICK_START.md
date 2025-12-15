# 🎨 Theme System - Quick Start Guide

## Change Theme in 30 Seconds

### Step 1: Open the theme file
```bash
lib/theme.ts
```

### Step 2: Find this line (near the top)
```typescript
const CURRENT_THEME = 'winter' as const
```

### Step 3: Replace 'winter' with any of these themes:
- `'winter'` - Cool blues and slate (current)
- `'coffee'` - Warm browns and amber
- `'ocean'` - Deep teal and ocean blues
- `'indigo'` - Classic indigo and purple
- `'emerald'` - Fresh green tones

### Step 4: Build
```bash
npm run build
```

### Example: Switch to Coffee Theme
```typescript
// Before:
const CURRENT_THEME = 'winter' as const

// After:
const CURRENT_THEME = 'coffee' as const
```

Done! The entire app theme updates automatically. ☕

---

## How It Works

All components import from the centralized theme:

```typescript
// In any component:
import { theme } from '@/lib/theme'

// Use colors:
<div className={`bg-${theme.primary.light} text-${theme.text.onLight}`}>
```

When you change `CURRENT_THEME`, all colors throughout the app update automatically because they reference the theme object.

---

## Available Themes

### 🟦 Winter
- **Colors**: Blue-600 primary, Slate-900 backgrounds
- **Vibe**: Cool, crisp, professional
- **Best for**: Tech, modern, clean aesthetic

### ☕ Coffee
- **Colors**: Amber-700 primary, Amber-950 backgrounds  
- **Vibe**: Warm, inviting, cozy
- **Best for**: Cafes, warm brands, comfort

### 🌊 Ocean
- **Colors**: Teal-600 primary, Slate-900 backgrounds
- **Vibe**: Fresh, calm, natural
- **Best for**: Water, tech, nature themes

### 💜 Indigo
- **Colors**: Indigo-600 primary, Black backgrounds
- **Vibe**: Bold, professional, elegant
- **Best for**: Corporate, formal, traditional

### 🌿 Emerald
- **Colors**: Emerald-600 primary, Black backgrounds
- **Vibe**: Natural, sustainable, growth
- **Best for**: Eco-friendly, health, wellness

---

## Adding a New Theme

1. Open `lib/theme.ts`
2. Add new theme object to the `themes` object:

```typescript
const themes = {
  // ... existing themes ...
  
  sunset: {
    name: 'Sunset',
    description: 'Warm oranges and reds',
    primary: {
      // ... colors ...
    },
    // ... rest of theme ...
  },
}
```

3. Change `CURRENT_THEME` to use it:
```typescript
const CURRENT_THEME = 'sunset' as const
```

---

## Using Theme in Components

### Option 1: Direct import
```typescript
import { theme } from '@/lib/theme'

function MyComponent() {
  return (
    <div className={`bg-${theme.background.light} text-${theme.text.onLight}`}>
      Content
    </div>
  )
}
```

### Option 2: Use the hook
```typescript
import { useTheme } from '@/hooks/useTheme'

function MyComponent() {
  const colors = useTheme()
  return (
    <div className={`bg-${colors.bgLight} text-${colors.textLight}`}>
      Content
    </div>
  )
}
```

### Option 3: Get theme colors
```typescript
import { getThemeColors } from '@/lib/theme'

const lightMode = getThemeColors(false)
const darkMode = getThemeColors(true)
```

---

## Theme Structure

Each theme includes:

- **primary** - Main accent colors (50-900 shades + light, dark, accent, hover)
- **secondary** - Supporting colors (50-900 shades)
- **neutral** - White, black, gray
- **text** - Text colors for different backgrounds
- **background** - Light/dark backgrounds and cards
- **border** - Border colors
- **gradient** - Gradient colors (from, to hex values)

---

## Pro Tips

✅ **Update theme once, affects entire app**
- No need to hunt through component files
- All colors are synchronized

✅ **Easy A/B testing**
- Change theme, rebuild, compare
- Quick visual testing

✅ **Consistent branding**
- All components use the same color palette
- No mismatched colors

✅ **Scalable**
- Add new themes without touching components
- Easy to maintain color consistency

---

## Troubleshooting

**Q: Theme didn't change?**
A: Make sure you ran `npm run build` after changing the theme

**Q: Colors still show old theme?**
A: Clear cache: `rm -rf .next && npm run build`

**Q: Want to customize a theme?**
A: Edit the theme object in `lib/theme.ts`, no component changes needed!

---

**Happy theming! 🎨**
