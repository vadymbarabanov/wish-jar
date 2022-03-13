import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../types/Styles';

export const createStyles: CreateStyles = (theme) => {
  const styles = StyleSheet.create({
    outerWrapper: {
      marginVertical: 5,
    },
    innerWrapper: {
      flexDirection: 'row',
      alignItems: 'center',

      paddingHorizontal: 16,

      borderWidth: 2,
      borderRadius: 10,
      borderTopLeftRadius: 0,
      borderColor: theme.secondary,
    },
    input: {
      flex: 1,

      fontSize: 16,
    },
    label: {
      marginBottom: 10,
      marginLeft: 10,

      fontSize: 16,
    },
  });

  return styles;
};
