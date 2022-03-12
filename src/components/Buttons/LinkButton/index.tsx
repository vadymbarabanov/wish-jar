import React from 'react';
import { TouchableOpacityProps, Text } from 'react-native';
import { BaseButton } from '../BaseButton';
import { styles } from './styles';

interface LinkButtonProps extends TouchableOpacityProps {
  text: string;
}

export const LinkButton = ({ text, ...rest }: LinkButtonProps) => {
  return (
    <BaseButton style={styles.linkButton} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </BaseButton>
  );
};
