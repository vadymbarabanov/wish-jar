import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerRoutes } from './routes';
import { CustomDrawer } from '../components/CustomDrawer';
import { AuthStack } from './AuthStack';
import { MainStack } from './MainStack';
import { SettingsStack } from './SettingsStack';
import { HelpStack } from './HelpStack';

const Drawer = createDrawerNavigator();

export const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName={DrawerRoutes.HOME}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name={DrawerRoutes.HOME}
        options={{ headerShown: false }}
        component={MainStack}
      />
      <Drawer.Screen
        name={DrawerRoutes.HELP}
        options={{ headerShown: false }}
        component={HelpStack}
      />
      <Drawer.Screen
        name={DrawerRoutes.SETTINGS}
        options={{ headerShown: false }}
        component={SettingsStack}
      />
      <Drawer.Screen
        name={DrawerRoutes.AUTH}
        options={{ headerShown: false }}
        component={AuthStack}
      />
    </Drawer.Navigator>
  );
};
