import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';
import { Variant } from '../../../types/Styles';
import { useTheme } from '../../ThemeProvider';
import { BaseButton } from '../BaseButton';
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
    <BaseButton style={[styles.button, theme.background[variant]]} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </BaseButton>
  );
};
