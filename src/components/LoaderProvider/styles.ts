import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../types/Styles';

export const createStyles: CreateStyles = () => {
  return StyleSheet.create({
    outerWrapper: {
      position: 'relative',

      flex: 1,
    },
    innerWrapper: {
      position: 'absolute',

      justifyContent: 'center',
      alignItems: 'center',

      height: '100%',
      width: '100%',

      backgroundColor: '#ffffff60',
    },
  });
};
