import React, { useState } from 'react';
import { ClosedEyeIcon } from '../../Icons/ClosedEyeIcon';
import { EyeIcon } from '../../Icons/EyeIcon';
import { Input, InputProps } from '../Input';

export const PasswordInput = ({
  label = 'Password',
  ...rest
}: Omit<InputProps, 'icon' | 'onIconPress'>) => {
  const [hidden, setHidden] = useState(true);

  return (
    <Input
      label={label}
      onIconPress={() => setHidden(!hidden)}
      secureTextEntry={hidden}
      icon={hidden ? <EyeIcon /> : <ClosedEyeIcon />}
      {...rest}
    />
  );
};
