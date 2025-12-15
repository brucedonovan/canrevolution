/**
 * Centralized Theme Configuration
 * Update colors here to change the entire app's branding
 * 
 * Current Theme: Coffee Inspired
 * Warm, earthy tones with rich brown accents
 */

export const theme = {
  // Primary Colors - Coffee inspired (rich browns and warm tones)
  primary: {
    50: 'amber-50',
    100: 'amber-100',
    200: 'amber-200',
    300: 'amber-300',
    400: 'amber-400',
    500: 'amber-500',
    600: 'amber-600',
    700: 'amber-700',
    800: 'amber-800',
    900: 'amber-900',
    light: 'amber-700',      // For light backgrounds
    dark: 'amber-500',       // For dark backgrounds
    accent: 'amber-700',     // Main accent color (rich coffee brown)
    hover: 'amber-800',      // Hover state
  },

  // Secondary Colors - Warm accents
  secondary: {
    50: 'orange-50',
    100: 'orange-100',
    200: 'orange-200',
    300: 'orange-300',
    400: 'orange-400',
    500: 'orange-500',
    600: 'orange-600',
    700: 'orange-700',
    800: 'orange-800',
    900: 'orange-900',
  },

  // Neutral Colors
  neutral: {
    white: 'white',
    black: 'black',
    lightGray: 'gray-50',
    darkGray: 'gray-900',
  },

  // Text Colors
  text: {
    onLight: 'gray-900',         // Text on light backgrounds (dark brown-ish)
    onDark: 'amber-50',          // Text on dark backgrounds (cream)
    muted: 'gray-600',           // Muted text on light backgrounds
    mutedDark: 'amber-200',      // Muted text on dark backgrounds
  },

  // Background Colors
  background: {
    light: 'white',
    dark: 'amber-950',           // Very dark coffee brown
    lightCard: 'amber-50',       // Cream/light coffee card
    darkCard: 'amber-900/40',    // Dark coffee with transparency
  },

  // Border Colors
  border: {
    light: 'amber-200',          // Warm light border
    dark: 'amber-800',           // Dark coffee border
  },

  // Shadow Colors
  shadow: {
    light: 'shadow-sm',
    medium: 'shadow-md',
    dark: 'shadow-lg',
  },
} as const

/**
 * Helper function to get theme-aware color classes
 * @param isDark - Whether in dark mode
 * @returns Theme colors object
 */
export function getThemeColors(isDark: boolean = false) {
  return {
    primary: isDark ? theme.primary.dark : theme.primary.light,
    text: isDark ? theme.text.onDark : theme.text.onLight,
    background: isDark ? theme.background.dark : theme.background.light,
    card: isDark ? theme.background.darkCard : theme.background.lightCard,
    border: isDark ? theme.border.dark : theme.border.light,
    muted: isDark ? theme.text.mutedDark : theme.text.muted,
  }
}

/**
 * Color palette presets for easy theme switching
 * Coffee theme is now the default - use others as alternatives
 */
export const colorPresets = {
  coffee: {
    primary: { light: 'amber-700', dark: 'amber-500' },
    hover: 'amber-800',
    accent: 'amber-700',
  },
  indigo: {
    primary: { light: 'indigo-600', dark: 'indigo-400' },
    hover: 'indigo-700',
    accent: 'indigo-600',
  },
  blue: {
    primary: { light: 'blue-600', dark: 'blue-400' },
    hover: 'blue-700',
    accent: 'blue-600',
  },
  purple: {
    primary: { light: 'purple-600', dark: 'purple-400' },
    hover: 'purple-700',
    accent: 'purple-600',
  },
  emerald: {
    primary: { light: 'emerald-600', dark: 'emerald-400' },
    hover: 'emerald-700',
    accent: 'emerald-600',
  },
  amber: {
    primary: { light: 'amber-600', dark: 'amber-400' },
    hover: 'amber-700',
    accent: 'amber-600',
  },
  red: {
    primary: { light: 'red-600', dark: 'red-400' },
    hover: 'red-700',
    accent: 'red-600',
  },
} as const

export type ThemeKey = keyof typeof theme
export type PresetName = keyof typeof colorPresets
