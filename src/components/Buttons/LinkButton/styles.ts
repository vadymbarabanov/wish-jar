import { StyleSheet } from 'react-native';
import { palette } from '../../../styles/palette';
import buttonStyles from '../styles';

export const styles = StyleSheet.create({
  text: {
    color: palette.link,
    fontSize: buttonStyles.fontSize,
    textAlign: 'center',
  },
  linkButton: {
    alignSelf: 'center',
    padding: buttonStyles.padding,
    marginVertical: buttonStyles.marginVertical,
  },
});
