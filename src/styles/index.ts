import { StyleSheet } from 'react-native';
import { Theme } from '../types/styles';
import { palette } from './palette';

export const getGlobalStyles = (theme: Theme) => {
  return StyleSheet.create({
    backgroundPrimary: {
      backgroundColor: palette[theme].primary,
    },
    backgroundSecondary: {
      backgroundColor: palette[theme].secondary,
    },
  });
};
