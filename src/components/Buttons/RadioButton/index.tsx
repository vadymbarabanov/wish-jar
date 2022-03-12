import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { styles } from './styles';

interface RadioButtonProps extends TouchableOpacityProps {
  label: string;
  active?: boolean;
}

export const RadioButton = ({ label, active, ...rest }: RadioButtonProps) => {
  return (
    <TouchableOpacity style={styles.wrapper} {...rest}>
      <View style={styles.outerCircle}>
        {active && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
