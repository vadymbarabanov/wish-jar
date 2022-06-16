import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../types/Styles';

export const createStyles: CreateStyles = () => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
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

      borderBottomWidth: 24,
      borderRadius: 10,
      borderColor: '#57412f',
    },
    singleJar: {
      justifyContent: 'flex-start',
    },
  });
};
