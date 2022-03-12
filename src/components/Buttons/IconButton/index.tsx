import React, { ReactElement } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './styles';

interface IconButtonProps {
  icon: ReactElement;
  outlined?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
}

export const IconButton = ({
  icon,
  outlined,
  containerStyles,
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.iconButton, containerStyles, outlined && styles.outline]}
    >
      {icon}
    </TouchableOpacity>
  );
};
