import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Jar } from '../screens/Jar';
import { WishList } from '../screens/WishList';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Wish List" component={WishList} />
      <Stack.Screen name="Jar" component={Jar} />
    </Stack.Navigator>
  );
};
