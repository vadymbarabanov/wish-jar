import React from 'react';
import { TextProps, Text } from 'react-native';
import { useStyles } from '../../helpers/hooks/useStyles';
import { createStyles } from './styles';

interface TitleProps extends TextProps {
  text: string;
}

export const Title = ({ style, text, ...rest }: TitleProps) => {
  const styles = useStyles(createStyles);

  return (
    <Text style={[styles.text, style]} {...rest}>
      {text}
    </Text>
  );
};
