import { StyleProp } from 'react-native';

export enum Variant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export type Palette = Record<string, string>;

export type CreateStyles = (
  theme: Palette,
  variant?: Variant
) => Record<string, StyleProp<any>>;
