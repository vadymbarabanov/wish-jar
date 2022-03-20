import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../constants/device';
import { CreateStyles } from '../../types/Styles';

export const createStyles: CreateStyles = (theme) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',

      minHeight: 60,
      width: DEVICE_WIDTH - 32,

      borderRadius: 15,

      backgroundColor: theme.info,
    },
    sideLine: {
      height: '100%',
      width: 7,

      marginLeft: 35,
      marginRight: 20,
    },
    sideLineError: {
      backgroundColor: theme.error,
    },
    sideLineSuccess: {
      backgroundColor: theme.success,
    },
    title: {
      color: 'white',
      fontSize: 16,
    },
  });

  return styles;
};
