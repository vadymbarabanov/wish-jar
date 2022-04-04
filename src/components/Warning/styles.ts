import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../types/Styles';

export const createStyles: CreateStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

      padding: 16,

      borderWidth: 1,
      borderColor: theme.warning,
    },
    text: {
      flex: 1,

      marginLeft: 10,

      color: theme.warning,
      textAlign: 'center',
      fontSize: 20,
    },
  });
};
