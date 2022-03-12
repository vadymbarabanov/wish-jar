import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';
import { styles } from './styles';

interface CheckboxProps extends TouchableWithoutFeedbackProps {
  label: string;
  active?: boolean;
}

export const Checkbox = ({ label, active, ...rest }: CheckboxProps) => {
  return (
    <TouchableWithoutFeedback {...rest}>
      <View style={styles.wrapper}>
        <View style={styles.square}>
          {active && (
            <View style={styles.check}>
              <View style={styles.left} />
              <View style={styles.right} />
            </View>
          )}
        </View>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
