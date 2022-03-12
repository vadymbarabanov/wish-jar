import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';
import { styles } from './styles';

interface RadioButtonProps extends TouchableWithoutFeedbackProps {
  label: string;
  active?: boolean;
}

export const RadioButton = ({ label, active, ...rest }: RadioButtonProps) => {
  return (
    <TouchableWithoutFeedback {...rest}>
      <View style={styles.wrapper}>
        <View style={styles.outerCircle}>
          {active && <View style={styles.innerCircle} />}
        </View>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
