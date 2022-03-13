import { StyleSheet } from 'react-native';
import { Palette } from '../../../types/Styles';
import buttonStyles from '../styles';

export const createStyles = (theme: Palette) => {
  const styles = StyleSheet.create({
    wrapper: {
      alignSelf: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',

      marginVertical: buttonStyles.marginVertical,
    },
    text: {
      fontSize: buttonStyles.fontSize,
    },
    square: {
      alignItems: 'center',
      justifyContent: 'center',

      width: 30,
      height: 30,

      borderWidth: 4,
      borderRadius: 2,
      borderColor: theme.placeholder,

      marginRight: 10,
    },
    check: {
      position: 'relative',
    },
    left: {
      width: 10,
      height: 5,

      borderRadius: 2,

      backgroundColor: theme.placeholder,

      position: 'absolute',
      bottom: -4,
      right: -1,

      transform: [{ rotate: '45deg' }],
    },
    right: {
      width: 15,
      height: 5,

      borderRadius: 2,

      backgroundColor: theme.placeholder,

      position: 'absolute',
      bottom: -2,
      left: -5,

      transform: [{ rotate: '-45deg' }],
    },
  });

  return styles;
};
