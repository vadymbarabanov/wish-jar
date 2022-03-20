import React, { useState } from 'react';
import { ClosedEyeIcon } from '../../Icons/ClosedEyeIcon';
import { EyeIcon } from '../../Icons/EyeIcon';
import { Input, InputProps } from '../Input';

export const PasswordInput = ({
  style,
  label = 'Password',
  ...rest
}: Omit<InputProps, 'icon' | 'onIconPress'>) => {
  const [hidden, setHidden] = useState(true);

  return (
    <Input
      style={style}
      label={label}
      onIconPress={() => setHidden(!hidden)}
      keyboardType={!hidden ? 'visible-password' : undefined}
      textContentType="password"
      secureTextEntry={hidden}
      icon={hidden ? <EyeIcon /> : <ClosedEyeIcon />}
      {...rest}
    />
  );
};
