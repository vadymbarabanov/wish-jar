import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { createStyles } from './styles';

interface RadioButtonProps extends TouchableWithoutFeedbackProps {
  label: string;
  active?: boolean;
}

export const RadioButton = ({ label, active, ...rest }: RadioButtonProps) => {
  const styles = useStyles(createStyles);

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
