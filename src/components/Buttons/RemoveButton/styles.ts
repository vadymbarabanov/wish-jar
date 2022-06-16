import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../types/Styles';

export const createStyles: CreateStyles = (theme) => {
  return StyleSheet.create({
    buttonWrapper: {
      padding: 8,

      borderRadius: 8,

      backgroundColor: theme.error,
    },
  });
};
