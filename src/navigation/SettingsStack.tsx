import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getHeaderOptions } from '../helpers/navigation/getHeaderOptions';
import { SettingsStackRoutes } from './routes';
import { NewPassword } from '../screens/NewPassword';
import { OldPassword } from '../screens/OldPassword';
import { Settings } from '../screens/Settings';
import Languages from '../screens/Settings/Languages';
import type { StackScreenProps } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import {
  ResetPasswordStack,
  ResetPasswordStackParams,
} from './ResetPasswordStack';
import { NavigatorScreenParams, ParamListBase } from '@react-navigation/native';

interface SettingsStackParams extends ParamListBase {
  [SettingsStackRoutes.NEW_PASSSWORD]: undefined;
  [SettingsStackRoutes.LANGUAGES]: undefined;
  [SettingsStackRoutes.OLD_PASSSWORD]: undefined;
  [SettingsStackRoutes.RESET_PASSWORD]: NavigatorScreenParams<ResetPasswordStackParams>;
  [SettingsStackRoutes.SETTINGS]: undefined;
}

export type SettingsScreenProps<ScreenType extends SettingsStackRoutes> =
  StackScreenProps<SettingsStackParams, ScreenType>;

const Stack = createStackNavigator<SettingsStackParams>();

export const SettingsStack = () => {
  const { t } = useTranslation('header-titles');

  return (
    <Stack.Navigator initialRouteName={SettingsStackRoutes.SETTINGS}>
      <Stack.Screen
        options={({ navigation }) =>
          getHeaderOptions(navigation, t('settings'))
        }
        name={SettingsStackRoutes.SETTINGS}
        component={Settings}
      />
      <Stack.Screen
        options={({ navigation }) =>
          getHeaderOptions(navigation, t('language'))
        }
        name={SettingsStackRoutes.LANGUAGES}
        component={Languages}
      />
      <Stack.Screen
        options={({ navigation }) =>
          getHeaderOptions(navigation, t('change-password'))
        }
        name={SettingsStackRoutes.OLD_PASSSWORD}
        component={OldPassword}
      />
      <Stack.Screen
        options={({ navigation }) =>
          getHeaderOptions(navigation, t('change-password'))
        }
        name={SettingsStackRoutes.NEW_PASSSWORD}
        component={NewPassword}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={SettingsStackRoutes.RESET_PASSWORD}
        component={ResetPasswordStack}
      />
    </Stack.Navigator>
  );
};
