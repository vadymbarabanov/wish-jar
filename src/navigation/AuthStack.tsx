import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getHeaderOptions } from '../helpers/navigation/getHeaderOptions';
import { AuthStackRoutes } from './routes';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Verification } from '../screens/Verification';
import { ResetPasswordStack } from './ResetPasswordStack';
import type { StackScreenProps } from '@react-navigation/stack';

export type AuthScreenProps = StackScreenProps<
  Record<AuthStackRoutes, undefined>
>;

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthStackRoutes.SIGN_IN}
      screenOptions={{ animationTypeForReplace: 'pop', gestureEnabled: false }}
    >
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={AuthStackRoutes.SIGN_IN}
        component={SignIn}
      />
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={AuthStackRoutes.SIGN_UP}
        component={SignUp}
      />
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={AuthStackRoutes.VERIFICATION}
        component={Verification}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={AuthStackRoutes.RESET_PASSWORD}
        component={ResetPasswordStack}
      />
    </Stack.Navigator>
  );
};
