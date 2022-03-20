import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getHeaderOptions } from '../helpers/navigation/getHeaderOptions';
import { MainStackRoutes } from './routes';
import { Home } from '../screens/Home';
import { Jar } from '../screens/Jar';
import { WishList } from '../screens/WishList';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={MainStackRoutes.HOME}>
      <Stack.Screen
        options={{ headerShown: false }}
        name={MainStackRoutes.HOME}
        component={Home}
      />
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={MainStackRoutes.JAR}
        component={Jar}
      />
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={MainStackRoutes.WISH_LIST}
        component={WishList}
      />
    </Stack.Navigator>
  );
};
