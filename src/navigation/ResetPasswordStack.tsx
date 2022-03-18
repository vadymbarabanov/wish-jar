import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NewPassword } from '../screens/NewPassword';
import { ResetPassword } from '../screens/ResetPassword';
import { Verification } from '../screens/Verification';

const Stack = createStackNavigator();

export const ResetPasswordStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Reset Password" component={ResetPassword} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="New Password" component={NewPassword} />
    </Stack.Navigator>
  );
};
