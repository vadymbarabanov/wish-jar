import { StyleSheet } from 'react-native';
import { Theme } from '../types/Styles';
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

  const borderColor = StyleSheet.create({
    primary: {
      borderColor: palette[theme].primary,
    },
    secondary: {
      borderColor: palette[theme].secondary,
    },
    warning: {
      borderColor: palette[theme].warning,
    },
    error: {
      borderColor: palette[theme].error,
    },
    info: {
      borderColor: palette[theme].info,
    },
  });

  return {
    background,
    borderColor,
  };
};
