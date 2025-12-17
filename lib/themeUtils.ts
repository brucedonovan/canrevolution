/**
 * Theme Color Utilities
 * Provides helper functions for applying theme colors to Tailwind classes
 */

import { theme } from './theme';

/**
 * Build a themed button class string
 */
export function getButtonClass(
  variant: 'primary' | 'secondary' | 'ghost' = 'primary',
  isDark: boolean = false
): string {
  const baseClasses =
    'px-3 py-2 text-center text-sm/6 font-semibold rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2';

  switch (variant) {
    case 'primary':
      return `${baseClasses} bg-${isDark ? 'indigo-400' : 'indigo-600'} text-white hover:bg-indigo-700 focus-visible:outline-indigo-600`;
    case 'secondary':
      return `${baseClasses} bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:outline-gray-400`;
    case 'ghost':
      return `${baseClasses} bg-transparent text-${isDark ? 'white' : 'black'} hover:bg-${isDark ? 'white' : 'black'}/10`;
    default:
      return baseClasses;
  }
}

/**
 * Get accent color class for current theme
 */
export function getAccentColor(isDark: boolean = false): string {
  return isDark ? theme.primary.dark : theme.primary.light;
}

/**
 * Get text color class based on background
 */
export function getTextColor(isDark: boolean = false): string {
  return isDark ? theme.text.onDark : theme.text.onLight;
}

/**
 * Get muted text color class based on background
 */
export function getMutedTextColor(isDark: boolean = false): string {
  return isDark ? theme.text.mutedDark : theme.text.muted;
}

/**
 * Get background card color class based on theme
 */
export function getCardBackgroundColor(isDark: boolean = false): string {
  return isDark ? theme.background.darkCard : theme.background.lightCard;
}

/**
 * Get border color class based on theme
 */
export function getBorderColor(isDark: boolean = false): string {
  return isDark ? theme.border.dark : theme.border.light;
}

/**
 * Combine multiple Tailwind classes safely
 */
export function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Create a themed gradient string for use with Tailwind
 */
export function getGradientClass(isDark: boolean = false): string {
  if (isDark) {
    return 'bg-gradient-to-r from-indigo-600 to-indigo-400';
  }
  return 'bg-gradient-to-r from-indigo-600 to-indigo-500';
}
