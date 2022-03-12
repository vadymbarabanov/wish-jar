import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../types/Icon';

export const CheckIcon = ({ color }: IconProps) => {
  return (
    <Svg width={25} height={25} viewBox="0 0 32 32">
      <Path fill={color} d="M27 4l-15 15-7-7-5 5 12 12 20-20z" />
    </Svg>
  );
};
