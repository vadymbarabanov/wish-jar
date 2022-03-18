import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { About } from '../screens/About';
import { Help } from '../screens/Help';
import { Settings } from '../screens/Settings';
import { AuthStack } from './AuthStack';
import { MainStack } from './MainStack';

const Drawer = createDrawerNavigator();

export const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainStack} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Sign In" component={AuthStack} />
    </Drawer.Navigator>
  );
};
