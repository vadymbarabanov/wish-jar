import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { Variant } from '../../../types/Styles';
import { createStyles } from './styles';
import { BaseButton } from '../BaseButton';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  variant?: Variant;
}

export const Button = ({
  variant = Variant.PRIMARY,
  text,
  ...rest
}: ButtonProps) => {
  const styles = useStyles(createStyles, variant);

  return (
    <BaseButton style={styles.button} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </BaseButton>
  );
};
