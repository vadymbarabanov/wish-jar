import { StyleSheet } from 'react-native';
import buttonStyles from '../styles';

export const styles = StyleSheet.create({
  button: {
    padding: buttonStyles.padding,
    marginVertical: buttonStyles.marginVertical,
    borderRadius: buttonStyles.borderRadius,
  },
  text: {
    textAlign: 'center',
    fontSize: buttonStyles.fontSize,
  },
});
