import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { styles } from '../styles';
import { IconButton } from '..';
import { ArrowIcon } from '../../../Icons/ArrowIcon';

export const BackButton = (props: TouchableOpacityProps) => {
  return (
    <IconButton
      containerStyles={styles.iconPadding}
      icon={<ArrowIcon />}
      {...props}
    />
  );
};
