import { StyleSheet } from 'react-native';
import { Theme } from '../types/styles';
import { palette } from './palette';

export const getGlobalStyles = (theme: Theme) => {
  const background = StyleSheet.create({
    primary: {
      backgroundColor: palette[theme].primary,
    },
    secondary: {
      backgroundColor: palette[theme].secondary,
    },
    warning: {
      backgroundColor: palette[theme].warning,
    },
    error: {
      backgroundColor: palette[theme].error,
    },
    info: {
      backgroundColor: palette[theme].info,
    },
  });

  return {
    background,
  };
};
