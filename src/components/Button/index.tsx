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
      style={[
        styles.button,
        variant === Variant.PRIMARY
          ? theme.backgroundPrimary
          : theme.backgroundSecondary,
      ]}
      {...rest}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
