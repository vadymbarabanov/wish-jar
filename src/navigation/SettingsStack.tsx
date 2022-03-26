import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getHeaderOptions } from '../helpers/navigation/getHeaderOptions';
import { SettingsStackRoutes } from './routes';
import { NewPassword } from '../screens/NewPassword';
import { OldPassword } from '../screens/OldPassword';
import { Settings } from '../screens/Settings';
import { Languages } from '../screens/Settings/Languages';
import type { StackScreenProps } from '@react-navigation/stack';

export type SettingsScreenProps = StackScreenProps<
  Record<SettingsStackRoutes, undefined>
>;

const Stack = createStackNavigator();

export const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName={SettingsStackRoutes.SETTINGS}>
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={SettingsStackRoutes.SETTINGS}
        component={Settings}
      />
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={SettingsStackRoutes.LANGUAGE}
        component={Languages}
      />
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={SettingsStackRoutes.OLD_PASSSWORD}
        component={OldPassword}
      />
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={SettingsStackRoutes.NEW_PASSSWORD}
        component={NewPassword}
      />
    </Stack.Navigator>
  );
};
