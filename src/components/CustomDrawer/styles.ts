import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../types/Styles';

export const createStyles: CreateStyles = (theme) => {
  const styles = StyleSheet.create({
    drawerContainer: {
      flex: 1,
      justifyContent: 'space-between',

      paddingTop: 30,

      backgroundColor: theme.primary,
    },
    iconContainer: {
      paddingLeft: 10,
    },
    text: {
      marginLeft: -17,

      color: theme.warning,
      fontSize: 20,
    },
  });
  return styles;
};
