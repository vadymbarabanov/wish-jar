import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../types/Styles';

export const createStyles: CreateStyles = () => {
  const styles = StyleSheet.create({
    marginBottom: {
      marginBottom: 30,
    },
  });

  return styles;
};
