import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getHeaderOptions } from '../helpers/navigation/getHeaderOptions';
import { AuthRoutes } from './routes';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Verification } from '../screens/Verification';
import { ResetPasswordStack } from './ResetPasswordStack';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthRoutes.SIGN_IN}
      screenOptions={{ animationTypeForReplace: 'pop', gestureEnabled: false }}
    >
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={AuthRoutes.SIGN_IN}
        component={SignIn}
      />
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={AuthRoutes.SIGN_UP}
        component={SignUp}
      />
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={AuthRoutes.VERIFICATION}
        component={Verification}
      />
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={AuthRoutes.RESET_PASSWORD}
        component={ResetPasswordStack}
      />
    </Stack.Navigator>
  );
};
