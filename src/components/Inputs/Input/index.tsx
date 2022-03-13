import React, { ReactElement } from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { createStyles } from './styles';

export interface InputProps extends TextInputProps {
  label?: string;
  icon?: ReactElement;
  onIconPress?: () => void;
}

export const Input = ({ label, icon, onIconPress, ...rest }: InputProps) => {
  const styles = useStyles(createStyles);

  return (
    <View style={styles.outerWrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.innerWrapper}>
        <TextInput style={[styles.input]} {...rest} />
        {icon && (
          <TouchableOpacity onPress={onIconPress}>{icon}</TouchableOpacity>
        )}
      </View>
    </View>
  );
};
