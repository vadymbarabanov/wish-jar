import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../types/Styles';

export const createStyles: CreateStyles = (theme) => {
  return StyleSheet.create({
    title: {
      fontSize: 24,
      color: theme.text,
      textAlign: 'center',
    },
    checkbox: {
      marginVertical: 16,
    },
  });
};
