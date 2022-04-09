import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../types/Styles';

export const createStyles: CreateStyles = () => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor: '#00000080',
    },
  });
};
