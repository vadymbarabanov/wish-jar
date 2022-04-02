import React from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { createStyles } from './styles';

interface CheckboxProps extends PressableProps {
  label: string;
  active?: boolean;
}

export const Checkbox = ({ label, active, ...rest }: CheckboxProps) => {
  const styles = useStyles(createStyles);

  return (
    <Pressable {...rest}>
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
    </Pressable>
  );
};
