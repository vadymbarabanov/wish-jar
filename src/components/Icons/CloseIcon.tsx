import React from 'react';
import Svg, { Line } from 'react-native-svg';
import { IconProps } from '../../types/Icon';

export const CloseIcon = ({ color }: IconProps) => {
  return (
    <Svg width={30} height={30} viewBox="0 0 32 32">
      <Line x1="7" x2="25" y1="7" y2="25" stroke={color} strokeWidth="3" />
      <Line x1="25" x2="7" y1="7" y2="25" stroke={color} strokeWidth="3" />
    </Svg>
  );
};
