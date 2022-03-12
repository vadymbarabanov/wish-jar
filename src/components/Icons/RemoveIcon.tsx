import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../types/Icon';

export const RemoveIcon = ({ color }: IconProps) => {
  return (
    <Svg width={25} height={25} viewBox="0 0 32 32">
      <Path
        fill={color}
        d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"
      />
      <Path
        fill={color}
        d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"
      />
    </Svg>
  );
};
