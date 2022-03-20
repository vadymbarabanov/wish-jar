import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NewPassword } from '../screens/NewPassword';
import { OldPassword } from '../screens/OldPassword';
import { Settings } from '../screens/Settings';
import { SignUp } from '../screens/SignUp';
import type { StackScreenProps } from '@react-navigation/stack';

export type SettingsScreenProps = StackScreenProps<{
  Settings: undefined;
  Language: undefined;
  'New Password': undefined;
  'Old Password': undefined;
}>;

const Stack = createStackNavigator();

export const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Language" component={SignUp} />
      <Stack.Screen name="Old Password" component={OldPassword} />
      <Stack.Screen name="New Password" component={NewPassword} />
    </Stack.Navigator>
  );
};
