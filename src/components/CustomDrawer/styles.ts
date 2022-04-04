import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../types/Styles';

export const createStyles: CreateStyles = (theme) => {
  return StyleSheet.create({
    drawerContainer: {
      flex: 1,
      justifyContent: 'space-between',

      paddingTop: 30,

      backgroundColor: theme.primary,
    },
    itemContainer: {
      marginVertical: 0,
      marginHorizontal: 0,

      borderRadius: 0,
    },
    itemIconContainer: {
      paddingLeft: 10,
    },
    itemLabel: {
      marginLeft: -17,

      color: theme.warning,
      fontSize: 20,
    },
    buttonContainer: {
      paddingTop: 20,
    },
    bottomSection: {
      margin: 20,
    },
  });
};
