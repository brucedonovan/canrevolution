import { theme } from '../themes/index';

/**
 * Common styling utilities and helpers
 */

/**
 * Button styling utilities
 */
export const buttonStyles = {
  base: 'rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
  primary: {
    light: `text-white`,
    dark: `text-black`,
  },
  hover: 'hover:opacity-90',
  disabled: 'opacity-50 cursor-not-allowed',
};

/**
 * Text styling utilities
 */
export const textStyles = {
  h1: 'text-5xl font-semibold tracking-tight text-balance sm:text-7xl',
  h2: 'text-4xl font-bold tracking-tight sm:text-5xl',
  h3: 'text-3xl font-bold tracking-tight sm:text-4xl',
  body: 'text-base leading-relaxed',
  small: 'text-sm',
  muted: 'text-sm text-opacity-75',
};

/**
 * Card styling utilities
 */
export const cardStyles = {
  base: 'rounded-lg shadow-md p-6 transition-shadow hover:shadow-lg',
  light: `background-light border border-gray-200`,
  dark: `background-dark border border-gray-800`,
};

/**
 * Container utilities
 */
export const containerStyles = {
  base: 'mx-auto max-w-7xl px-6 lg:px-8',
  compact: 'mx-auto max-w-2xl px-4 sm:px-6',
  wide: 'mx-auto max-w-6xl px-6 lg:px-8',
};

/**
 * Flexbox utilities
 */
export const flexStyles = {
  center: 'flex items-center justify-center',
  between: 'flex items-center justify-between',
  column: 'flex flex-col',
};

/**
 * Gradient utilities
 */
export const gradientStyles = {
  primary: `linear-gradient(135deg, ${theme.gradient.from}, ${theme.gradient.to})`,
};

/**
 * Spacing utilities
 */
export const spacingStyles = {
  padding: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
  margin: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
};

/**
 * Shadow utilities
 */
export const shadowStyles = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
};

/**
 * Transition utilities
 */
export const transitionStyles = {
  fast: 'transition-all duration-150',
  normal: 'transition-all duration-300',
  slow: 'transition-all duration-500',
};

/**
 * Get responsive class names
 */
export function getResponsiveClass(mobile: string, tablet: string, desktop: string): string {
  return `${mobile} sm:${tablet} lg:${desktop}`;
}

/**
 * Merge multiple style objects
 */
export function mergeStyles(...styles: (Record<string, any> | undefined)[]): Record<string, any> {
  return Object.assign({}, ...styles.filter(Boolean));
}

/**
 * Generate theme-aware background styles
 */
export function getBackgroundStyle(isDark: boolean = false) {
  return {
    backgroundColor: isDark ? theme.background.dark : theme.background.light,
    color: isDark ? theme.text.onDark : theme.text.onLight,
  };
}

/**
 * Generate theme-aware border styles
 */
export function getBorderStyle(isDark: boolean = false) {
  return {
    borderColor: isDark ? theme.border.dark : theme.border.light,
    borderWidth: '1px',
  };
}

/**
 * Generate theme-aware card styles
 */
export function getCardStyle(isDark: boolean = false) {
  return {
    backgroundColor: isDark ? theme.background.darkCard : theme.background.lightCard,
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: shadowStyles.md,
  };
}

/**
 * Generate theme-aware button styles
 */
export function getButtonStyle(isDark: boolean = false) {
  return {
    backgroundColor: isDark ? theme.primary.dark : theme.primary.light,
    color: isDark ? theme.text.onLight : theme.text.onDark,
    padding: '0.625rem 0.875rem',
    borderRadius: '0.375rem',
    fontWeight: '600',
    fontSize: '0.875rem',
    cursor: 'pointer',
    border: 'none',
    transition: 'opacity 0.2s ease-in-out',
  };
}

export default {
  buttonStyles,
  textStyles,
  cardStyles,
  containerStyles,
  flexStyles,
  gradientStyles,
  spacingStyles,
  shadowStyles,
  transitionStyles,
  getResponseClass: getResponsiveClass,
  mergeStyles,
  getBackgroundStyle,
  getBorderStyle,
  getCardStyle,
  getButtonStyle,
};
