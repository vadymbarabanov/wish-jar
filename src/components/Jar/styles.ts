import { StyleSheet } from 'react-native';
import { ADD_ICON_WIDTH, JAR_WIDTH } from '.';
import { CreateStyles } from '../../types/Styles';

const LABEL_PADDING = 8;
const LINE_HEIGHT = 20;
const LABEL_WIDTH = JAR_WIDTH * 0.8;
const LABEL_HEIGHT = LINE_HEIGHT * 2 + LABEL_PADDING * 2;

export const createStyles: CreateStyles = () => {
  return StyleSheet.create({
    wrapper: {
      position: 'relative',
    },
    labelWrapper: {
      position: 'absolute',
      left: JAR_WIDTH * 0.5,
      transform: [
        { translateX: -LABEL_WIDTH * 0.5 },
        { translateY: JAR_WIDTH * 0.75 },
      ],

      justifyContent: 'center',

      width: LABEL_WIDTH,
      height: LABEL_HEIGHT,

      padding: LABEL_PADDING,

      borderRadius: 8,

      backgroundColor: '#eaeaea',
    },
    labelText: {
      fontSize: 16,
      lineHeight: LINE_HEIGHT,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
    },
    iconWrapper: {
      position: 'absolute',
      left: JAR_WIDTH * 0.5,
      transform: [
        { translateX: -ADD_ICON_WIDTH * 0.5 },
        { translateY: JAR_WIDTH * 0.7 },
      ],

      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
