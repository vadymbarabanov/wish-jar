import { Palette, Theme } from '../types/Styles';

export const themes: Record<Theme, Palette> = {
  dark: {
    primary: '#2E394B',
    secondary: '#A0A28B',
    error: '#973A1A',
    warning: '#997322',
    info: '#03466E',
    link: '#1AA7EC',
    placeholder: '#F8F7ED',
    success: 'green',
  },
  light: {
    primary: '#687489',
    secondary: '#EAECD2',
    error: '#DF7651',
    warning: '#E2B75A',
    info: '#3783B1',
    link: '#1AA7EC',
    placeholder: '#F8F7ED',
    success: 'green',
  },
};
