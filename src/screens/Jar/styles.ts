import { StyleSheet } from 'react-native';
import { JAR_WIDTH } from '.';
import { DEVICE_WIDTH } from '../../constants/device';
import { CreateStyles } from '../../types/Styles';

const WRAPPER_PADDING = 16;
const LABEL_WIDTH = JAR_WIDTH * 0.8;
const LABEL_LINE_HEIGHT = 26;
const LABEL_PADDING = 16;
const LABEL_HEIGHT = LABEL_LINE_HEIGHT * 2 + LABEL_PADDING * 2;

export const createStyles: CreateStyles = () => {
  return StyleSheet.create({
    wrapper: {
      flex: 1,
      justifyContent: 'center',
    },
    jarWrapper: {
      position: 'relative',

      alignItems: 'center',

      marginBottom: 48,
      paddingHorizontal: WRAPPER_PADDING,

      borderBottomWidth: 40,
      borderColor: '#57412f',
    },
    labelWrapper: {
      position: 'absolute',
      left: DEVICE_WIDTH * 0.5,
      transform: [
        { translateX: -LABEL_WIDTH * 0.5 },
        { translateY: JAR_WIDTH * 0.75 },
      ],

      justifyContent: 'center',

      width: LABEL_WIDTH,
      height: LABEL_HEIGHT,

      borderWidth: 1,
      borderRadius: 8,
      borderColor: 'gray',

      backgroundColor: '#eaeaea',
    },
    labelInput: {
      padding: 8,

      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
      lineHeight: LABEL_LINE_HEIGHT,
    },
    btnWrapper: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',

      width: '100%',

      paddingHorizontal: WRAPPER_PADDING,
    },
    btn: {
      width: DEVICE_WIDTH * 0.5 - 32,
      minWidth: 120,
    },
  });
};
