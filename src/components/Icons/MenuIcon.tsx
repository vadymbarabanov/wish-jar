import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../types/Icon';

export const MenuIcon = ({ color }: IconProps) => {
  return (
    <Svg width={30} height={30} viewBox="0 0 20 20">
      <Path
        fill={color ?? 'black'}
        d="M16.4 9h-12.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h12.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM16.4 13h-12.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1h12.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1zM3.6 7h12.8c0.552 0 0.6-0.447 0.6-1s-0.048-1-0.6-1h-12.8c-0.552 0-0.6 0.447-0.6 1s0.048 1 0.6 1z"
      />
    </Svg>
  );
};
