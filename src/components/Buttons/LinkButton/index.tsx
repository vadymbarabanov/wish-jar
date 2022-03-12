import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { styles } from './styles';

interface LinkButtonProps extends TouchableOpacityProps {
  text: string;
}

export const LinkButton = ({ text, ...rest }: LinkButtonProps) => {
  return (
    <TouchableOpacity style={styles.linkButton} {...rest} activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
