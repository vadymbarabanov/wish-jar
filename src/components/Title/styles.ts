import { StyleSheet } from 'react-native';
import { CreateStyles, Palette } from '../../types/Styles';

export const createStyles: CreateStyles = (theme: Palette) => {
  return StyleSheet.create({
    text: {
      fontSize: 35,
      fontWeight: 'bold',
      color: theme.text,
      textAlign: 'center',
    },
  });
};
