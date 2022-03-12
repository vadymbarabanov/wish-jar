import { StyleSheet } from 'react-native';
import { palette } from '../../../styles/palette';
import buttonStyles from '../styles';

export const styles = StyleSheet.create({
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
    borderColor: palette.placeholder,

    marginRight: 10,
  },
  check: {
    position: 'relative',
  },
  left: {
    width: 10,
    height: 5,

    borderRadius: 2,

    backgroundColor: palette.placeholder,

    position: 'absolute',
    bottom: -4,
    right: -1,

    transform: [{ rotate: '45deg' }],
  },
  right: {
    width: 15,
    height: 5,

    borderRadius: 2,

    backgroundColor: palette.placeholder,

    position: 'absolute',
    bottom: -2,
    left: -5,

    transform: [{ rotate: '-45deg' }],
  },
});