import { StyleSheet } from 'react-native';
import { Palette } from '../../../types/Styles';
import buttonStyles from '../styles';

export const createStyles = (theme: Palette) => {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      alignItems: 'center',

      marginVertical: buttonStyles.marginVertical,
    },
    text: {
      fontSize: buttonStyles.fontSize,
      color: theme.text,
    },
    square: {
      alignItems: 'center',
      justifyContent: 'center',

      width: 30,
      height: 30,

      marginRight: 10,

      borderWidth: 4,
      borderRadius: 2,
      borderColor: theme.placeholder,
    },
    check: {
      position: 'relative',
    },
    left: {
      position: 'absolute',
      bottom: -4,
      right: -1,
      transform: [{ rotate: '45deg' }],

      width: 10,
      height: 5,

      borderRadius: 2,

      backgroundColor: theme.placeholder,
    },
    right: {
      position: 'absolute',
      bottom: -2,
      left: -5,
      transform: [{ rotate: '-45deg' }],

      width: 15,
      height: 5,

      borderRadius: 2,

      backgroundColor: theme.placeholder,
    },
  });

  return styles;
};
