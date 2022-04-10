import React from 'react';
import { useStyles } from '../../../../helpers/hooks/useStyles';
import { ConfirmButtonProps } from '../../../../types/Buttons';
import { createStyles } from './styles';
import { IconButton } from '..';
import { RemoveIcon } from '../../../Icons/RemoveIcon';

export const DeleteButton = ({ outlined, ...rest }: ConfirmButtonProps) => {
  const styles = useStyles(createStyles);

  return (
    <IconButton
      icon={<RemoveIcon color="white" />}
      containerStyles={[styles.removeIcon, outlined && styles.outline]}
      outlined={outlined}
      {...rest}
    />
  );
};
