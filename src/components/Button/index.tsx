import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Variant } from '../../types/styles';
import { useTheme } from '../ThemeProvider';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  variant?: Variant;
}

export const Button = ({
  variant = Variant.PRIMARY,
  text,
  ...rest
}: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, theme.background[variant]]}
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
