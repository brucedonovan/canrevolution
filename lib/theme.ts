/**
 * CENTRALIZED THEME CONFIGURATION
 * ================================
 * 
 * TO CHANGE THE ENTIRE APP THEME:
 * 1. Find the section below marked "CURRENT THEME SELECTION"
 * 2. Replace 'winter' with one of: 'coffee', 'indigo', 'blue', 'purple', 'emerald', 'ocean'
 * 3. All colors throughout the app will update automatically!
 * 4. Run: npm run build
 * 
 * Example: Change from 'winter' to 'coffee'
 *   const CURRENT_THEME = 'coffee'
 */

// ============================================================================
// CURRENT THEME SELECTION - CHANGE THIS ONE LINE TO SWITCH THEMES!
// ============================================================================
const CURRENT_THEME = 'winter' as const

// ============================================================================
// THEME DEFINITIONS
// ============================================================================

type ThemeName = typeof CURRENT_THEME
type ThemeColors = typeof themes.winter

const themes = {
  winter: {
    name: 'Winter',
    description: 'Cool blues, silvers, and crisp white tones',
    primary: {
      50: 'blue-50',
      100: 'blue-100',
      200: 'blue-200',
      300: 'blue-300',
      400: 'blue-400',
      500: 'blue-500',
      600: 'blue-600',
      700: 'blue-700',
      800: 'blue-800',
      900: 'blue-900',
      light: 'blue-600',
      dark: 'cyan-400',
      accent: 'blue-600',
      hover: 'blue-700',
    },
    secondary: {
      50: 'slate-50',
      100: 'slate-100',
      200: 'slate-200',
      300: 'slate-300',
      400: 'slate-400',
      500: 'slate-500',
      600: 'slate-600',
      700: 'slate-700',
      800: 'slate-800',
      900: 'slate-900',
    },
    neutral: {
      white: 'white',
      black: 'black',
      lightGray: 'slate-50',
      darkGray: 'slate-900',
    },
    text: {
      onLight: 'slate-900',
      onDark: 'slate-50',
      muted: 'slate-600',
      mutedDark: 'slate-300',
    },
    background: {
      light: 'white',
      dark: 'slate-900',
      lightCard: 'blue-50',
      darkCard: 'slate-800/40',
    },
    border: {
      light: 'blue-200',
      dark: 'slate-700',
    },
    gradient: {
      from: '#0369a1',
      to: '#06b6d4',
    },
  },
  coffee: {
    name: 'Coffee',
    description: 'Warm, earthy tones with rich brown accents',
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
      light: 'amber-700',
      dark: 'amber-500',
      accent: 'amber-700',
      hover: 'amber-800',
    },
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
    neutral: {
      white: 'white',
      black: 'black',
      lightGray: 'gray-50',
      darkGray: 'gray-900',
    },
    text: {
      onLight: 'gray-900',
      onDark: 'amber-50',
      muted: 'gray-600',
      mutedDark: 'amber-200',
    },
    background: {
      light: 'white',
      dark: 'amber-950',
      lightCard: 'amber-50',
      darkCard: 'amber-900/40',
    },
    border: {
      light: 'amber-200',
      dark: 'amber-800',
    },
    gradient: {
      from: '#d97706',
      to: '#b45309',
    },
  },
  ocean: {
    name: 'Ocean',
    description: 'Deep ocean blues and teal accents',
    primary: {
      50: 'teal-50',
      100: 'teal-100',
      200: 'teal-200',
      300: 'teal-300',
      400: 'teal-400',
      500: 'teal-500',
      600: 'teal-600',
      700: 'teal-700',
      800: 'teal-800',
      900: 'teal-900',
      light: 'teal-600',
      dark: 'cyan-400',
      accent: 'teal-600',
      hover: 'teal-700',
    },
    secondary: {
      50: 'slate-50',
      100: 'slate-100',
      200: 'slate-200',
      300: 'slate-300',
      400: 'slate-400',
      500: 'slate-500',
      600: 'slate-600',
      700: 'slate-700',
      800: 'slate-800',
      900: 'slate-900',
    },
    neutral: {
      white: 'white',
      black: 'black',
      lightGray: 'slate-50',
      darkGray: 'slate-900',
    },
    text: {
      onLight: 'slate-900',
      onDark: 'slate-50',
      muted: 'slate-600',
      mutedDark: 'slate-300',
    },
    background: {
      light: 'white',
      dark: 'slate-900',
      lightCard: 'teal-50',
      darkCard: 'slate-800/40',
    },
    border: {
      light: 'teal-200',
      dark: 'slate-700',
    },
    gradient: {
      from: '#0d9488',
      to: '#06b6d4',
    },
  },
  indigo: {
    name: 'Indigo',
    description: 'Classic indigo with purple accents',
    primary: {
      50: 'indigo-50',
      100: 'indigo-100',
      200: 'indigo-200',
      300: 'indigo-300',
      400: 'indigo-400',
      500: 'indigo-500',
      600: 'indigo-600',
      700: 'indigo-700',
      800: 'indigo-800',
      900: 'indigo-900',
      light: 'indigo-600',
      dark: 'indigo-400',
      accent: 'indigo-600',
      hover: 'indigo-700',
    },
    secondary: {
      50: 'gray-50',
      100: 'gray-100',
      200: 'gray-200',
      300: 'gray-300',
      400: 'gray-400',
      500: 'gray-500',
      600: 'gray-600',
      700: 'gray-700',
      800: 'gray-800',
      900: 'gray-900',
    },
    neutral: {
      white: 'white',
      black: 'black',
      lightGray: 'gray-50',
      darkGray: 'gray-900',
    },
    text: {
      onLight: 'black',
      onDark: 'white',
      muted: 'gray-600',
      mutedDark: 'gray-400',
    },
    background: {
      light: 'white',
      dark: 'black',
      lightCard: 'gray-100',
      darkCard: 'gray-800/50',
    },
    border: {
      light: 'gray-200',
      dark: 'gray-700',
    },
    gradient: {
      from: '#4f46e5',
      to: '#7c3aed',
    },
  },
  emerald: {
    name: 'Emerald',
    description: 'Fresh emerald green with natural tones',
    primary: {
      50: 'emerald-50',
      100: 'emerald-100',
      200: 'emerald-200',
      300: 'emerald-300',
      400: 'emerald-400',
      500: 'emerald-500',
      600: 'emerald-600',
      700: 'emerald-700',
      800: 'emerald-800',
      900: 'emerald-900',
      light: 'emerald-600',
      dark: 'emerald-400',
      accent: 'emerald-600',
      hover: 'emerald-700',
    },
    secondary: {
      50: 'gray-50',
      100: 'gray-100',
      200: 'gray-200',
      300: 'gray-300',
      400: 'gray-400',
      500: 'gray-500',
      600: 'gray-600',
      700: 'gray-700',
      800: 'gray-800',
      900: 'gray-900',
    },
    neutral: {
      white: 'white',
      black: 'black',
      lightGray: 'gray-50',
      darkGray: 'gray-900',
    },
    text: {
      onLight: 'black',
      onDark: 'white',
      muted: 'gray-600',
      mutedDark: 'gray-400',
    },
    background: {
      light: 'white',
      dark: 'black',
      lightCard: 'gray-100',
      darkCard: 'gray-800/50',
    },
    border: {
      light: 'gray-200',
      dark: 'gray-700',
    },
    gradient: {
      from: '#059669',
      to: '#10b981',
    },
  },
} as const

// Export the current theme
export const theme = themes[CURRENT_THEME]

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
 * Get all available theme options
 */
export function getAvailableThemes() {
  return Object.entries(themes).map(([key, value]) => ({
    id: key,
    name: value.name,
    description: value.description,
  }))
}

export type ThemeOption = keyof typeof themes
