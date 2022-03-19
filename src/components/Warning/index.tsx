import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from '../../helpers/hooks/useStyles';
import { createStyles } from './styles';
import { WarningIcon } from '../Icons/WarningIcon';

interface WarningProps {
  text: string;
}

export const Warning = ({ text }: WarningProps) => {
  const styles = useStyles(createStyles);

  return (
    <View style={styles.container}>
      <WarningIcon />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
