import React from 'react';
import { View } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useStyles } from '../../helpers/hooks/useStyles';
import { Variant } from '../../types/Styles';
import { DrawerRoutes } from '../../navigation/routes';
import { createStyles } from './styles';
import { HelpIcon } from '../Icons/HelpIcon';
import { InfoIcon } from '../Icons/InfoIcon';
import { SettingsIcon } from '../Icons/SettingsIcon';
import { Warning } from '../Warning';
import { Button } from '../Buttons/Button';
import { CustomDrawerItem } from './DrawerItem';

export const CustomDrawer = ({ navigation }: DrawerContentComponentProps) => {
  const styles = useStyles(createStyles);

  return (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContainer}>
      <View>
        <CustomDrawerItem
          icon={SettingsIcon}
          label="Settings"
          onPress={() => navigation.navigate(DrawerRoutes.SETTINGS)}
        />
        <CustomDrawerItem
          icon={HelpIcon}
          label="Help"
          onPress={() => navigation.navigate(DrawerRoutes.HELP)}
        />
        <CustomDrawerItem icon={InfoIcon} label="About" onPress={() => {}} />
      </View>

      <View style={styles.bottomSection}>
        <Warning text="To save your jars, please, sign in!" />
        <View style={styles.buttonContainer}>
          <Button
            text="Sign In"
            variant={Variant.WARNING}
            onPress={() => navigation.navigate(DrawerRoutes.AUTH)}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
