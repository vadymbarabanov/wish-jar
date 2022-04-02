import React from 'react';
import { NavigatorScreenParams, ParamListBase } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import type { StackScreenProps } from '@react-navigation/stack';
import { getHeaderOptions } from '../helpers/navigation/getHeaderOptions';
import { AuthStackRoutes } from './routes';
import {
  ResetPasswordStack,
  ResetPasswordStackParams,
} from './ResetPasswordStack';
import { DrawerStack } from './DrawerStack';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Verification } from '../screens/Verification';

export interface AuthStackParams extends ParamListBase {
  [AuthStackRoutes.SIGN_IN]: undefined;
  [AuthStackRoutes.SIGN_UP]: undefined;
  [AuthStackRoutes.RESET_PASSWORD]: NavigatorScreenParams<ResetPasswordStackParams>;
  [AuthStackRoutes.VERIFICATION]: undefined;
}

export type AuthScreenProps<ScreenType extends AuthStackRoutes> =
  StackScreenProps<AuthStackParams, ScreenType>;

const Stack = createStackNavigator<AuthStackParams>();

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
      <Stack.Screen
        options={{ headerShown: false }}
        name={AuthStackRoutes.HOME}
        component={DrawerStack}
      />
    </Stack.Navigator>
  );
};
