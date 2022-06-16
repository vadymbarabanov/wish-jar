import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { RemoveIcon } from '../../Icons/RemoveIcon';
import { IconButton } from '../IconButton';
import { createStyles } from './styles';

export const RemoveButton = (props: TouchableOpacityProps) => {
  const styles = useStyles(createStyles);

  return (
    <IconButton
      style={styles.buttonWrapper}
      icon={<RemoveIcon color="#fff" />}
      {...props}
    />
  );
};
