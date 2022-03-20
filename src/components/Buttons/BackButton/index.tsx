import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ArrowIcon } from '../../Icons/ArrowIcon';
import { BaseButton } from '../BaseButton';

export const BackButton = (props: TouchableOpacityProps) => {
  return (
    <BaseButton {...props}>
      <ArrowIcon color="black" />
    </BaseButton>
  );
};
