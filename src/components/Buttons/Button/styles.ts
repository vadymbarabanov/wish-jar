import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../types/Styles';
import buttonStyles from '../styles';

export const createStyles: CreateStyles = (theme, variant) => {
  const styles = StyleSheet.create({
    button: {
      padding: buttonStyles.padding,
      marginVertical: buttonStyles.marginVertical,

      borderRadius: buttonStyles.borderRadius,

      backgroundColor: theme[variant!],
    },
    text: {
      fontSize: buttonStyles.fontSize,
      textAlign: 'center',
    },
    disabledButton: {
      backgroundColor: theme.disabled,
    },
  });

  return styles;
};
