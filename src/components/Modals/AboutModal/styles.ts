import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../types/Styles';

export const createStyles: CreateStyles = (theme) => {
  return StyleSheet.create({
    title: {
      fontSize: 22,
      color: theme.text,
      textAlign: 'center',
    },
    description: {
      marginVertical: 20,

      fontSize: 18,
      color: theme.text,
      textAlign: 'center',
    },
    version: {
      color: 'gray',
      textAlign: 'center',
    },
  });
};
