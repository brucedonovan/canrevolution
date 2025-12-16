/**
 * CENTRALIZED THEME CONFIGURATION
 * ================================
 * 
 * TO CHANGE THE ENTIRE APP THEME:
 * 1. Find the section below marked "CURRENT THEME SELECTION"
 * 2. Replace 'summer' with one of: 'coffee', 'winter', 'ocean', 'indigo', 'emerald'
 * 3. All colors throughout the app will update automatically!
 * 4. Run: npm run build
 * 
 * Example: Change from 'summer' to 'coffee'
 *   const CURRENT_THEME = 'coffee'
 */

// ============================================================================
// CURRENT THEME SELECTION - CHANGE THIS ONE LINE TO SWITCH THEMES!
// ============================================================================
const CURRENT_THEME = 'canrevolution' as const

// ============================================================================
// THEME DEFINITIONS
// ============================================================================

const themes = {
  winter: {
    name: 'Winter',
    description: 'Cool blues, silvers, and crisp white tones',
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      light: '#2563eb',
      dark: '#22d3ee',
      accent: '#2563eb',
      hover: '#1d4ed8',
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    neutral: {
      white: '#ffffff',
      black: '#000000',
      lightGray: '#f8fafc',
      darkGray: '#0f172a',
    },
    text: {
      onLight: '#0f172a',
      onDark: '#f8fafc',
      muted: '#475569',
      mutedDark: '#cbd5e1',
    },
    background: {
      light: '#ffffff',
      medium: '#e0f2fe',
      dark: '#0f172a',
      lightCard: '#eff6ff',
      darkCard: 'rgba(30, 41, 59, 0.4)',
    },
    border: {
      light: '#bfdbfe',
      dark: '#334155',
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
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      light: '#b45309',
      dark: '#f59e0b',
      accent: '#b45309',
      hover: '#92400e',
    },
    secondary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    neutral: {
      white: '#ffffff',
      black: '#000000',
      lightGray: '#f9fafb',
      darkGray: '#111827',
    },
    text: {
      onLight: '#111827',
      onDark: '#fffbeb',
      muted: '#4b5563',
      mutedDark: '#fef3c7',
    },
    background: {
      light: '#ffffff',
      medium: '#fff5eb',
      dark: '#451a03',
      lightCard: '#fffbeb',
      darkCard: 'rgba(120, 53, 15, 0.4)',
    },
    border: {
      light: '#fef3c7',
      dark: '#92400e',
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
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#134e4a',
      900: '#0f2f2f',
      light: '#0d9488',
      dark: '#22d3ee',
      accent: '#0d9488',
      hover: '#0f766e',
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    neutral: {
      white: '#ffffff',
      black: '#000000',
      lightGray: '#f8fafc',
      darkGray: '#0f172a',
    },
    text: {
      onLight: '#0f172a',
      onDark: '#f8fafc',
      muted: '#475569',
      mutedDark: '#cbd5e1',
    },
    background: {
      light: '#ffffff',
      medium: '#e0fdf4',
      dark: '#0f172a',
      lightCard: '#f0fdfa',
      darkCard: 'rgba(30, 41, 59, 0.4)',
    },
    border: {
      light: '#99f6e4',
      dark: '#334155',
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
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
      light: '#4f46e5',
      dark: '#818cf8',
      accent: '#4f46e5',
      hover: '#4338ca',
    },
    secondary: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    neutral: {
      white: '#ffffff',
      black: '#000000',
      lightGray: '#f9fafb',
      darkGray: '#111827',
    },
    text: {
      onLight: '#000000',
      onDark: '#ffffff',
      muted: '#4b5563',
      mutedDark: '#9ca3af',
    },
    background: {
      light: '#ffffff',
      medium: '#f3f4f6',
      dark: '#1f2937',
      lightCard: '#f3f4f6',
      darkCard: 'rgba(31, 41, 55, 0.4)',
    },
    border: {
      light: '#e5e7eb',
      dark: '#374151',
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
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#134e4a',
      light: '#16a34a',
      dark: '#4ade80',
      accent: '#16a34a',
      hover: '#15803d',
    },
    secondary: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    neutral: {
      white: '#ffffff',
      black: '#000000',
      lightGray: '#f9fafb',
      darkGray: '#111827',
    },
    text: {
      onLight: '#000000',
      onDark: '#ffffff',
      muted: '#4b5563',
      mutedDark: '#9ca3af',
    },
    background: {
      light: '#ffffff',
      medium: '#f3f4f6',
      dark: '#000000',
      lightCard: '#f3f4f6',
      darkCard: 'rgba(31, 41, 55, 0.5)',
    },
    border: {
      light: '#e5e7eb',
      dark: '#374151',
    },
    gradient: {
      from: '#059669',
      to: '#10b981',
    },
  },
  canrevolution: {
    name: 'CanRevolution',
    description: 'Warm earth tones with rich charcoal accents - Premium brand aesthetic',
    primary: {
      50: '#faf8f3',
      100: '#f5f0e8',
      200: '#e8dfd1',
      300: '#d4c4ad',
      400: '#b8a08a',
      500: '#a08770',
      light: '#a08770',
      dark: '#c9b39f',
      accent: '#d4c4ad',
      hover: '#8b7055',
    },
    secondary: {
      50: '#2a2825',
      100: '#3d3a34',
      200: '#4a4640',
      300: '#54504a',
      400: '#5f5952',
      500: '#68615b',
      600: '#72685f',
      700: '#7a6f66',
      800: '#82776d',
      900: '#3d3a34',
    },
    neutral: {
      white: '#faf8f3',
      black: '#2a2825',
      lightGray: '#f5f0e8',
      darkGray: '#3d3a34',
    },
    text: {
      onLight: '#2a2825',
      onDark: '#faf8f3',
      muted: '#68615b',
      mutedDark: '#d4c4ad',
    },
    background: {
      light: '#faf8f3',
      medium: '#f5f0e8',
      dark: '#2a2825',
      lightCard: '#f5f0e8',
      darkCard: 'rgba(58, 55, 50, 0.6)',
    },
    border: {
      light: '#e8ddf5',
      dark: '#4a4640',
    },
    gradient: {
      from: '#a08770',
      to: '#c9b39f',
    },
  },
  summer: {
    name: 'Summer',
    description: 'Bright, vibrant sunny yellows and warm oranges',
    primary: {
      50: '#fefce8',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
      light: '#eab308',
      dark: '#fb923c',
      accent: '#ca8a04',
      hover: '#a16207',
    },
    secondary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    neutral: {
      white: '#ffffff',
      black: '#000000',
      lightGray: '#fffbeb',
      darkGray: '#451a03',
    },
    text: {
      onLight: '#451a03',
      onDark: '#fffbeb',
      muted: '#b45309',
      mutedDark: '#fef3c7',
    },
    background: {
      light: '#ffffff',
      medium: '#fef9e7',
      dark: '#451a03',
      lightCard: '#fefce8',
      darkCard: 'rgba(120, 53, 15, 0.4)',
    },
    border: {
      light: '#fcd34d',
      dark: '#ea580c',
    },
    gradient: {
      from: '#f59e0b',
      to: '#fbbf24',
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
