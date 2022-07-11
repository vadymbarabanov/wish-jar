import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { styles } from '../styles';
import { IconButton } from '..';
import { MenuIcon } from '../../../Icons/MenuIcon';

export const MenuButton = (props: TouchableOpacityProps) => {
  return (
    <IconButton
      containerStyles={styles.iconPadding}
      icon={<MenuIcon />}
      {...props}
    />
  );
};
