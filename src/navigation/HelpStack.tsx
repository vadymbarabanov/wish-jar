import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getHeaderOptions } from '../helpers/navigation/getHeaderOptions';
import { HelpStackRoutes } from './routes';
import { Help } from '../screens/Help';

const Stack = createStackNavigator();

export const HelpStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={HelpStackRoutes.HELP}
      screenOptions={{ animationTypeForReplace: 'pop', gestureEnabled: false }}
    >
      <Stack.Screen
        options={({ navigation }) => getHeaderOptions(navigation)}
        name={HelpStackRoutes.HELP}
        component={Help}
      />
    </Stack.Navigator>
  );
};
