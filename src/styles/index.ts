import { StyleSheet } from 'react-native';
import { Theme } from '../types/Styles';
import { themes } from './themes';

export const getGlobalStyles = (theme: Theme) => {
  const background = StyleSheet.create({
    primary: {
      backgroundColor: themes[theme].primary,
    },
    secondary: {
      backgroundColor: themes[theme].secondary,
    },
    warning: {
      backgroundColor: themes[theme].warning,
    },
    error: {
      backgroundColor: themes[theme].error,
    },
    info: {
      backgroundColor: themes[theme].info,
    },
  });

  const borderColor = StyleSheet.create({
    primary: {
      borderColor: themes[theme].primary,
    },
    secondary: {
      borderColor: themes[theme].secondary,
    },
    warning: {
      borderColor: themes[theme].warning,
    },
    error: {
      borderColor: themes[theme].error,
    },
    info: {
      borderColor: themes[theme].info,
    },
  });

  return {
    background,
    borderColor,
  };
};
