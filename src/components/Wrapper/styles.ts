import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../types/Styles';

export const createStyles: CreateStyles = () => {
  const styles = StyleSheet.create({
    outerWrapper: {
      justifyContent: 'center',

      height: '100%',
    },
    innerWrapper: {
      paddingHorizontal: 30,
    },
  });

  return styles;
};
