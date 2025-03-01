export const AdapterTypes = {
  DEFAULT: 'element',
  ELEMENT: 'element',
  ANTDV: 'antdv',
} as const;

export type AdapterType = typeof AdapterTypes[keyof typeof AdapterTypes];
