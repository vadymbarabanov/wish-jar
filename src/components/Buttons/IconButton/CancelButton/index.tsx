import React from 'react';
import { useStyles } from '../../../../helpers/hooks/useStyles';
import { ConfirmButtonProps } from '../../../../types/Buttons';
import { createStyles } from './styles';
import { CloseIcon } from '../../../Icons/CloseIcon';
import { IconButton } from '..';

export const CancelButton = ({ outlined, ...rest }: ConfirmButtonProps) => {
  const styles = useStyles(createStyles);

  return (
    <IconButton
      icon={<CloseIcon color="white" />}
      containerStyles={[styles.closeIcon, outlined && styles.outline]}
      outlined={outlined}
      {...rest}
    />
  );
};
