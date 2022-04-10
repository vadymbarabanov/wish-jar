import React from 'react';
import { useStyles } from '../../../../helpers/hooks/useStyles';
import { ConfirmButtonProps } from '../../../../types/Buttons';
import { createStyles } from './styles';
import { IconButton } from '..';
import { CheckIcon } from '../../../Icons/CheckIcon';

export const CheckButton = ({ outlined, ...rest }: ConfirmButtonProps) => {
  const styles = useStyles(createStyles);

  return (
    <IconButton
      icon={<CheckIcon color="white" />}
      containerStyles={[styles.checkIcon, outlined && styles.outline]}
      outlined={outlined}
      {...rest}
    />
  );
};
