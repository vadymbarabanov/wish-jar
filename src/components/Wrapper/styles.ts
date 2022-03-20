import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../types/Styles';

export const createStyles: CreateStyles = () => {
  const styles = StyleSheet.create({
    outerWrapper: {
      height: '100%',
      justifyContent: 'center',
    },
    innerWrapper: {
      paddingHorizontal: 30,
    },
  });

  return styles;
};
