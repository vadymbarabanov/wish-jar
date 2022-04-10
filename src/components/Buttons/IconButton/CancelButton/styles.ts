import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../../types/Styles';

export const createStyles: CreateStyles = (theme) => {
  return StyleSheet.create({
    closeIcon: {
      backgroundColor: theme.error,
    },
    outline: {
      borderColor: '#fff',
    },
  });
};
