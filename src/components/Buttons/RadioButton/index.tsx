import React from 'react';
import {
  StyleProp,
  Text,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
  ViewStyle,
} from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { createStyles } from './styles';

interface RadioButtonProps extends TouchableWithoutFeedbackProps {
  label: string;
  active?: boolean;
  wrapperStyle?: StyleProp<ViewStyle>;
}

export const RadioButton = ({
  wrapperStyle,
  label,
  active,
  ...rest
}: RadioButtonProps) => {
  const styles = useStyles(createStyles);

  return (
    <View style={wrapperStyle}>
      <TouchableWithoutFeedback {...rest}>
        <View style={[styles.wrapper]}>
          <View style={styles.outerCircle}>
            {active && <View style={styles.innerCircle} />}
          </View>
          <Text style={styles.text}>{label}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
