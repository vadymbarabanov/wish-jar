import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../../constants/device';
import { CreateStyles } from '../../../types/Styles';

export const createStyles: CreateStyles = () => {
  return StyleSheet.create({
    modalsWrapper: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',

      width: '100%',

      paddingHorizontal: 16,
    },
    btn: {
      width: DEVICE_WIDTH * 0.5 - 32,
      minWidth: 120,
    },
  });
};
