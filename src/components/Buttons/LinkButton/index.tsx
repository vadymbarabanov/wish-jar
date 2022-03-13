import React from 'react';
import { TouchableOpacityProps, Text } from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { createStyles } from './styles';
import { BaseButton } from '../BaseButton';

interface LinkButtonProps extends TouchableOpacityProps {
  text: string;
}

export const LinkButton = ({ text, ...rest }: LinkButtonProps) => {
  const styles = useStyles(createStyles);

  return (
    <BaseButton style={styles.linkButton} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </BaseButton>
  );
};
