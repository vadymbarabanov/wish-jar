import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../types/Styles';

export const createStyles: CreateStyles = (theme) => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.primary,
    },
    shelfContainer: {
      paddingHorizontal: 16,
    },
    shelfWrapper: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',

      marginVertical: 16,
      paddingHorizontal: 16,

      borderBottomWidth: 16,
      borderRadius: 10,
      borderColor: '#57412f',
    },
    singleJar: {
      justifyContent: 'flex-start',
    },
  });
};
