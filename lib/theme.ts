/**
 * BACKWARD COMPATIBILITY EXPORT
 * =============================
 *
 * This file maintains backward compatibility with existing imports.
 * All theme definitions have been moved to @/styles/themes
 *
 * For new code, import directly from @/styles:
 * import { theme, getThemeColors } from '@/styles';
 */

// Re-export everything from the new centralized styles system
export { theme, getThemeColors, getAvailableThemes, type ThemeOption } from '@/styles/themes';
