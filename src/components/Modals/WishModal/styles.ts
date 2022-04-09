import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../types/Styles';

export const createStyles: CreateStyles = () => {
  return StyleSheet.create({
    title: {
      borderBottomWidth: 1,
      borderBottomColor: 'black',

      fontSize: 24,
      color: 'black',
      textAlign: 'center',
    },
    description: {
      marginTop: 16,
      padding: 16,

      borderRadius: 16,
      backgroundColor: '#efefef',

      fontSize: 18,
      color: 'black',
    },
    buttonsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',

      width: '100%',

      padding: 48,
      paddingBottom: 0,
    },
  });
};
