import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../types/Styles';

export const createStyles: CreateStyles = (theme) => {
  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',

      marginVertical: 10,
      paddingVertical: 15,
      paddingHorizontal: 10,

      borderBottomWidth: 1,
      borderBottomColor: theme.primary,
    },
    text: {
      marginHorizontal: 20,

      fontSize: 20,
      color: theme.primary,
    },
  });

  return styles;
};
