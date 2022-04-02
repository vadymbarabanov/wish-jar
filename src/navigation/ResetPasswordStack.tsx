import React from 'react';
import { ParamListBase } from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { getHeaderOptions } from '../helpers/navigation/getHeaderOptions';
import { ResetPasswordStackRoutes } from './routes';
import { NewPassword } from '../screens/NewPassword';
import { ResetPassword } from '../screens/ResetPassword';
import { Verification } from '../screens/Verification';

export interface ResetPasswordStackParams extends ParamListBase {
  [ResetPasswordStackRoutes.NEW_PASSSWORD]: undefined;
  [ResetPasswordStackRoutes.RESET_PASSWORD]: undefined;
  [ResetPasswordStackRoutes.VERIFICATION]: undefined;
}

export type ResetPasswordScreenProps<
  ScreenType extends ResetPasswordStackRoutes
> = StackScreenProps<ResetPasswordStackParams, ScreenType>;

const Stack = createStackNavigator<ResetPasswordStackParams>();

export const ResetPasswordStack = () => {
  return (
    <Stack.Navigator initialRouteName={ResetPasswordStackRoutes.RESET_PASSWORD}>
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={ResetPasswordStackRoutes.RESET_PASSWORD}
        component={ResetPassword}
      />
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={ResetPasswordStackRoutes.VERIFICATION}
        component={Verification}
      />
      <Stack.Screen
        options={({ navigation }) => ({ ...getHeaderOptions(navigation) })}
        name={ResetPasswordStackRoutes.NEW_PASSSWORD}
        component={NewPassword}
      />
    </Stack.Navigator>
  );
};
