import React from 'react';
import { Input, InputProps } from '../Input';

export const EmailInput = ({ label = 'Email', ...rest }: InputProps) => {
  return (
    <Input
      keyboardType="email-address"
      textContentType="emailAddress"
      label={label}
      {...rest}
    />
  );
};
