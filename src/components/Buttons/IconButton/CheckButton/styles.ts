import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../../types/Styles';

export const createStyles: CreateStyles = (theme) => {
  return StyleSheet.create({
    checkIcon: {
      backgroundColor: theme.success,
    },
    outline: {
      borderColor: '#fff',
    },
  });
};
