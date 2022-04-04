import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../types/Styles';

export const createStyles: CreateStyles = () => {
  return StyleSheet.create({
    outerWrapper: {
      flex: 1,
      justifyContent: 'center',
    },
    innerWrapper: {
      paddingHorizontal: 30,
    },
  });
};
