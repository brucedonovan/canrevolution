/**
 * CENTRALIZED STYLES SYSTEM
 * ==========================
 *
 * This is the main export file for the entire styling system.
 * All styling is centralized here for easy portability to other projects.
 *
 * Usage:
 * ------
 * import { theme, getThemeColors } from '@/styles';
 * import { buttonStyles, containerStyles } from '@/styles/utilities';
 * import { tailwindToCSS } from '@/styles/colors';
 */

// Re-export theme
export { theme, getThemeColors, getAvailableThemes, type ThemeOption } from './themes/index';

// Re-export colors
export { tailwindToCSS, rgbToHex, tailwindToHex } from './colors/index';

// Re-export utilities
export {
  buttonStyles,
  textStyles,
  cardStyles,
  containerStyles,
  flexStyles,
  gradientStyles,
  spacingStyles,
  shadowStyles,
  transitionStyles,
  getResponsiveClass,
  mergeStyles,
  getBackgroundStyle,
  getBorderStyle,
  getCardStyle,
  getButtonStyle,
} from './utilities/index';
