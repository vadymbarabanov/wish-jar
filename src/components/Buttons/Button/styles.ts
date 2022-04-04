import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../types/Styles';
import buttonStyles from '../styles';

export const createStyles: CreateStyles = (theme, variant) => {
  return StyleSheet.create({
    button: {
      marginVertical: buttonStyles.marginVertical,
      padding: buttonStyles.padding,

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
};
