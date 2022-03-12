import React from 'react';
import Svg, { Circle, Line } from 'react-native-svg';
import { IconProps } from '../types/Icon';

export const AddIcon = ({ color }: IconProps) => {
  return (
    <Svg width={30} height={30} viewBox="0 0 32 32">
      <Circle
        cx="16"
        cy="16"
        r="14"
        stroke={color}
        strokeWidth="3"
        fill="transparent"
      />
      <Line x1="16" x2="16" y1="7" y2="25" stroke={color} strokeWidth="3" />
      <Line x1="7" x2="25" y1="16" y2="16" stroke={color} strokeWidth="3" />
    </Svg>
  );
};
