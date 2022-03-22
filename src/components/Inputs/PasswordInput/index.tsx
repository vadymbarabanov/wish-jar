import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ClosedEyeIcon } from '../../Icons/ClosedEyeIcon';
import { EyeIcon } from '../../Icons/EyeIcon';
import { Input, InputProps } from '../Input';

export const PasswordInput = ({
  style,
  label,
  ...rest
}: Omit<InputProps, 'icon' | 'onIconPress'>) => {
  const [hidden, setHidden] = useState(true);
  const { t } = useTranslation('common');

  return (
    <Input
      style={style}
      label={label ?? t('password')}
      onIconPress={() => setHidden(!hidden)}
      keyboardType={!hidden ? 'visible-password' : undefined}
      textContentType="password"
      secureTextEntry={hidden}
      icon={hidden ? <EyeIcon /> : <ClosedEyeIcon />}
      {...rest}
    />
  );
};
