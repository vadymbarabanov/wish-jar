import { StyleSheet } from 'react-native';
import { CreateStyles } from '../../../types/Styles';
import buttonStyles from '../styles';

const innerCircleBoxSize = 15;
const outerCircleBoxSize = 30;

export const createStyles: CreateStyles = (theme) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',

      marginVertical: buttonStyles.marginVertical,
      paddingVertical: 5,
    },
    text: {
      fontSize: buttonStyles.fontSize,
      color: theme.text,
    },
    outerCircle: {
      justifyContent: 'center',
      alignItems: 'center',

      width: outerCircleBoxSize,
      height: outerCircleBoxSize,

      borderWidth: 4,
      borderRadius: outerCircleBoxSize / 2,
      borderColor: theme.secondary,

      marginRight: 10,
    },
    innerCircle: {
      width: innerCircleBoxSize,
      height: innerCircleBoxSize,

      borderRadius: innerCircleBoxSize / 2,

      backgroundColor: theme.secondary,
    },
  });
};
