/**
 * Tailwind Color to CSS Hex Mapping
 * Maps Tailwind color names to actual hex values
 */
const tailwindToHex: Record<string, string> = {
  // Blues
  'blue-50': '#eff6ff',
  'blue-100': '#dbeafe',
  'blue-200': '#bfdbfe',
  'blue-300': '#93c5fd',
  'blue-400': '#60a5fa',
  'blue-500': '#3b82f6',
  'blue-600': '#2563eb',
  'blue-700': '#1d4ed8',
  'blue-800': '#1e40af',
  'blue-900': '#1e3a8a',
  'cyan-400': '#22d3ee',

  // Yellows
  'yellow-50': '#fefce8',
  'yellow-100': '#fef3c7',
  'yellow-200': '#fde68a',
  'yellow-300': '#fcd34d',
  'yellow-400': '#facc15',
  'yellow-500': '#eab308',
  'yellow-600': '#ca8a04',
  'yellow-700': '#a16207',
  'yellow-800': '#854d0e',
  'yellow-900': '#713f12',

  // Ambers
  'amber-50': '#fffbeb',
  'amber-100': '#fef3c7',
  'amber-200': '#fde68a',
  'amber-300': '#fcd34d',
  'amber-400': '#fbbf24',
  'amber-500': '#f59e0b',
  'amber-600': '#d97706',
  'amber-700': '#b45309',
  'amber-800': '#92400e',
  'amber-900': '#78350f',
  'amber-950': '#451a03',

  // Oranges
  'orange-50': '#fff7ed',
  'orange-100': '#ffedd5',
  'orange-200': '#fed7aa',
  'orange-300': '#fdba74',
  'orange-400': '#fb923c',
  'orange-500': '#f97316',
  'orange-600': '#ea580c',
  'orange-700': '#c2410c',
  'orange-800': '#9a3412',
  'orange-900': '#7c2d12',

  // Teals
  'teal-50': '#f0fdfa',
  'teal-100': '#ccfbf1',
  'teal-200': '#99f6e4',
  'teal-300': '#5eead4',
  'teal-400': '#2dd4bf',
  'teal-500': '#14b8a6',
  'teal-600': '#0d9488',
  'teal-700': '#0f766e',
  'teal-800': '#134e4a',
  'teal-900': '#0f2f2f',

  // Slates
  'slate-50': '#f8fafc',
  'slate-100': '#f1f5f9',
  'slate-200': '#e2e8f0',
  'slate-300': '#cbd5e1',
  'slate-400': '#94a3b8',
  'slate-500': '#64748b',
  'slate-600': '#475569',
  'slate-700': '#334155',
  'slate-800': '#1e293b',
  'slate-900': '#0f172a',

  // Indigos
  'indigo-50': '#eef2ff',
  'indigo-100': '#e0e7ff',
  'indigo-200': '#c7d2fe',
  'indigo-300': '#a5b4fc',
  'indigo-400': '#818cf8',
  'indigo-500': '#6366f1',
  'indigo-600': '#4f46e5',
  'indigo-700': '#4338ca',
  'indigo-800': '#3730a3',
  'indigo-900': '#312e81',

  // Grays
  'gray-50': '#f9fafb',
  'gray-100': '#f3f4f6',
  'gray-200': '#e5e7eb',
  'gray-300': '#d1d5db',
  'gray-400': '#9ca3af',
  'gray-500': '#6b7280',
  'gray-600': '#4b5563',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',

  // Emeralds
  'emerald-50': '#f0fdf4',
  'emerald-100': '#dcfce7',
  'emerald-200': '#bbf7d0',
  'emerald-300': '#86efac',
  'emerald-400': '#4ade80',
  'emerald-500': '#22c55e',
  'emerald-600': '#16a34a',
  'emerald-700': '#15803d',
  'emerald-800': '#166534',
  'emerald-900': '#134e4a',

  // Neutrals
  white: '#ffffff',
  black: '#000000',
};

/**
 * Convert a Tailwind color name to hex
 */
export function tailwindToCSS(colorName: string): string {
  // Handle opacity modifiers like 'slate-900/40'
  if (colorName.includes('/')) {
    const [color, opacity] = colorName.split('/');
    const hex = tailwindToHex[color] || colorName;
    const opacityPercent = parseInt(opacity) / 100;
    return (
      hex +
      Math.round(opacityPercent * 255)
        .toString(16)
        .padStart(2, '0')
    );
  }

  return tailwindToHex[colorName] || colorName;
}

/**
 * Convert RGB values to hex
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
}
