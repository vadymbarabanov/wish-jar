import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../types/Styles';

export const createStyles: CreateStyles = (theme) => {
  return StyleSheet.create({
    text: {
      marginBottom: 32,

      fontSize: 22,
      color: theme.text,
      textAlign: 'center',
    },
    buttonsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    icon: {
      borderRadius: 8,
    },
    checkIcon: {
      backgroundColor: theme.success,
    },
    closeIcon: {
      backgroundColor: theme.error,
    },
  });
};
