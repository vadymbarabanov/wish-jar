import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../../constants/device';
import { CreateStyles } from '../../../types/Styles';

export const createStyles: CreateStyles = () => {
  return StyleSheet.create({
    wrapper: {
      position: 'relative',

      width: DEVICE_WIDTH - 64,

      padding: 36,

      borderRadius: 20,

      backgroundColor: '#ffffff',
    },
    close: {
      position: 'absolute',
      right: 0,
    },
  });
};
