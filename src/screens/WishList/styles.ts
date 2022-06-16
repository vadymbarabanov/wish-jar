import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../types/Styles';

export const createStyles: CreateStyles = () => {
  return StyleSheet.create({
    card: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      margin: 8,
      padding: 16,

      borderWidth: 2,
      borderRadius: 4,
      borderColor: 'gray',
    },
    label: {
      color: '#000',
      fontSize: 20,
    },
  });
};
