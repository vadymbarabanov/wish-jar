import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export const BaseButton = ({ children, ...rest }: TouchableOpacityProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...rest}>
      {children}
    </TouchableOpacity>
  );
};
