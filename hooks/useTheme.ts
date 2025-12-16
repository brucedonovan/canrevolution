'use client';

import { theme } from '@/lib/theme';

/**
 * Hook to access theme colors throughout the app
 * Usage: const colors = useTheme()
 */
export function useTheme() {
  return {
    // Primary accent colors
    primaryLight: theme.primary.light,
    primaryDark: theme.primary.dark,
    primaryAccent: theme.primary.accent,
    primaryHover: theme.primary.hover,

    // Text colors
    textLight: theme.text.onLight,
    textDark: theme.text.onDark,
    textMuted: theme.text.muted,
    textMutedDark: theme.text.mutedDark,

    // Backgrounds
    bgLight: theme.background.light,
    bgDark: theme.background.dark,
    bgLightCard: theme.background.lightCard,
    bgDarkCard: theme.background.darkCard,

    // Borders
    borderLight: theme.border.light,
    borderDark: theme.border.dark,

    // Secondary colors
    secondary: theme.secondary,

    // All theme object
    all: theme,
  };
}
