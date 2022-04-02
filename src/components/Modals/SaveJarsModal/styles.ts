import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../types/Styles';

export const createStyles: CreateStyles = (theme) => {
  const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      fontSize: 24,
      color: theme.text,
    },
    checkbox: {
      marginVertical: 16,
    },
  });

  return styles;
};
