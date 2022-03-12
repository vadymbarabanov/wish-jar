import { StyleSheet } from 'react-native';
import { palette } from '../../../styles/palette';
import buttonStyles from '../styles';

const innerCircleBoxSize = 15;
const outerCircleBoxSize = 30;

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
  outerCircle: {
    justifyContent: 'center',
    alignItems: 'center',

    width: outerCircleBoxSize,
    height: outerCircleBoxSize,

    borderWidth: 4,
    borderRadius: outerCircleBoxSize / 2,
    borderColor: palette.placeholder,

    marginRight: 10,
  },
  innerCircle: {
    width: innerCircleBoxSize,
    height: innerCircleBoxSize,

    borderRadius: innerCircleBoxSize / 2,
    borderColor: palette.placeholder,
    backgroundColor: palette.placeholder,
  },
});
