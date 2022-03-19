import React from 'react';
import { View } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import { createStyles } from './styles';
import { useStyles } from '../../helpers/hooks/useStyles';
import { useTheme } from '../../helpers/hooks/useTheme';
import { IconProps } from '../../types/Icon';

interface DrawerItemProps {
  label: string;
  onPress: () => void;
  icon: (props: IconProps) => JSX.Element;
}

export const CustomDrawerItem = ({
  label,
  onPress,
  icon: Icon,
}: DrawerItemProps) => {
  const styles = useStyles(createStyles);
  const { theme } = useTheme();

  return (
    <DrawerItem
      label={label}
      onPress={onPress}
      icon={() => (
        <View style={styles.iconContainer}>
          <Icon color={theme.warning} />
        </View>
      )}
      labelStyle={styles.text}
      style={{ borderRadius: 0, marginVertical: 0, marginHorizontal: 0 }}
      pressColor={theme.info}
      activeTintColor={theme.info}
    />
  );
};
