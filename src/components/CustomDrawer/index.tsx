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
import { useTranslation } from 'react-i18next';

export const CustomDrawer = ({ navigation }: DrawerContentComponentProps) => {
  const styles = useStyles(createStyles);
  const { t } = useTranslation('drawer');

  return (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContainer}>
      <View>
        <CustomDrawerItem
          icon={SettingsIcon}
          label={t('settings')}
          onPress={() => navigation.navigate(DrawerRoutes.SETTINGS)}
        />
        <CustomDrawerItem
          icon={HelpIcon}
          label={t('help')}
          onPress={() => navigation.navigate(DrawerRoutes.HELP)}
        />
        <CustomDrawerItem
          icon={InfoIcon}
          label={t('about')}
          onPress={() => {}}
        />
      </View>

      <View style={styles.bottomSection}>
        <Warning text={t('save-jars-warning')} />
        <View style={styles.buttonContainer}>
          <Button
            text={t('button-text')}
            variant={Variant.WARNING}
            onPress={() => navigation.navigate(DrawerRoutes.AUTH)}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
