import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../../types/Styles';

export const createStyles: CreateStyles = (theme) => {
  return StyleSheet.create({
    removeIcon: {
      backgroundColor: theme.error,
    },
    outline: {
      borderColor: '#fff',
    },
  });
};
