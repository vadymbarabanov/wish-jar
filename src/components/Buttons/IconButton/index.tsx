import React, { ReactElement } from 'react';
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { styles } from './styles';

interface IconButtonProps extends TouchableOpacityProps {
  icon: ReactElement;
  outlined?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
}

export const IconButton = ({
  icon,
  outlined,
  containerStyles,
  ...rest
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.iconButton, containerStyles, outlined && styles.outline]}
      {...rest}
    >
      {icon}
    </TouchableOpacity>
  );
};
