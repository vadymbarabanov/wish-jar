import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { useStyles } from '../../helpers/hooks/useStyles';
import { createStyles } from './styles';

export const CentrifyWrapper: FC<ViewProps> = ({
  style,
  children,
  ...rest
}) => {
  const styles = useStyles(createStyles);

  return (
    <View style={styles.outerWrapper}>
      <View style={[styles.innerWrapper, style]} {...rest}>
        {children}
      </View>
    </View>
  );
};
