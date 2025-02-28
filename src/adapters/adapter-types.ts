// src/adapters/adapter-types.ts
export const AdapterTypes = {
  ELEMENT: 'element',
  ANTDV: 'antdv',
} as const;

export type AdapterType = typeof AdapterTypes[keyof typeof AdapterTypes];
