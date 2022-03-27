import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { useTheme } from '../../../helpers/hooks/useTheme';
import { IconProps } from '../../../types/Icon';
import { BaseButton } from '../BaseButton';
import { createStyles } from './styles';

interface SettingsButtonProps extends TouchableOpacityProps {
  icon: (props: IconProps) => JSX.Element;
  text: string;
}

export const SettingsButton = ({
  icon: Icon,
  text,
  ...rest
}: SettingsButtonProps) => {
  const styles = useStyles(createStyles);
  const { theme } = useTheme();

  return (
    <BaseButton style={styles.button} {...rest}>
      <Icon color={theme.primary} />
      <Text style={styles.text}>{text}</Text>
    </BaseButton>
  );
};
