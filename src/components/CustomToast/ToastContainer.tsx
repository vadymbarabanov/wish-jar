import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { ToastConfigParams } from 'react-native-toast-message';
import { useStyles } from '../../helpers/hooks/useStyles';
import { ToastType } from '../../types/Toast';
import { createStyles } from './styles';

export const ToastContainer = ({
  text1,
  text2,
  type,
  onPress,
}: ToastConfigParams<any>) => {
  const styles = useStyles(createStyles);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View
          style={[
            styles.sideLine,
            type === ToastType.ERROR
              ? styles.sideLineError
              : styles.sideLineSuccess,
          ]}
        />
        <View>
          <Text style={styles.title}>{text1}</Text>
          {text2 && <Text>{text2}</Text>}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
