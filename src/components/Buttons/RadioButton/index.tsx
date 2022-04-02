import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { createStyles } from './styles';

interface RadioButtonProps extends PressableProps {
  label: string;
  active?: boolean;
  wrapperStyle?: StyleProp<ViewStyle>;
}

export const RadioButton = ({ label, active, ...rest }: RadioButtonProps) => {
  const styles = useStyles(createStyles);

  return (
    <Pressable {...rest}>
      <View style={styles.wrapper}>
        <View style={styles.outerCircle}>
          {active && <View style={styles.innerCircle} />}
        </View>
        <Text style={styles.text}>{label}</Text>
      </View>
    </Pressable>
  );
};
