import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { About } from '../screens/About';
import { Help } from '../screens/Help';
import { AuthStack } from './AuthStack';
import { MainStack } from './MainStack';
import { SettingsStack } from './SettingsStack';

const Drawer = createDrawerNavigator();

export const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainStack} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Settings" component={SettingsStack} />
      <Drawer.Screen name="Sign In" component={AuthStack} />
    </Drawer.Navigator>
  );
};
