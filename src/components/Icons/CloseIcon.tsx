import React from 'react';
import Svg, { Line } from 'react-native-svg';
import { IconProps } from '../../types/Icon';

export const CloseIcon = ({ color }: IconProps) => {
  return (
    <Svg width={30} height={30} viewBox="0 0 32 32">
      <Line
        x1="6"
        x2="26"
        y1="6"
        y2="26"
        strokeWidth="6"
        stroke={color ?? 'black'}
      />
      <Line
        x1="26"
        x2="6"
        y1="6"
        y2="26"
        strokeWidth="6"
        stroke={color ?? 'black'}
      />
    </Svg>
  );
};
