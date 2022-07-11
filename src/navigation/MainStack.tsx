import React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import {
  getHeaderOptions,
  getHomeHeaderOptions,
} from '../helpers/navigation/getHeaderOptions';
import { MainStackRoutes } from './routes';
import { Home } from '../screens/Home';
import { Jar } from '../screens/Jar';
import { WishList } from '../screens/WishList';
import { AuthStack } from './AuthStack';
import { ParamListBase } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';

export interface MainStackParams extends ParamListBase {
  [MainStackRoutes.AUTH]: undefined;
  [MainStackRoutes.HOME]: undefined;
  [MainStackRoutes.JAR]: { isNewlyAdded: boolean };
  [MainStackRoutes.WISH_LIST]: undefined;
}

export type MainScreenProps<ScreenType extends MainStackRoutes> =
  StackScreenProps<MainStackParams, ScreenType> &
    DrawerScreenProps<MainStackParams, ScreenType>;

const Stack = createStackNavigator<MainStackParams>();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={MainStackRoutes.HOME}>
      <Stack.Screen
        options={({ navigation }: MainScreenProps<MainStackRoutes.HOME>) =>
          getHomeHeaderOptions(navigation)
        }
        name={MainStackRoutes.HOME}
        component={Home}
      />
      <Stack.Screen
        options={({ navigation }: MainScreenProps<MainStackRoutes.JAR>) =>
          getHeaderOptions(navigation)
        }
        name={MainStackRoutes.JAR}
        component={Jar}
        initialParams={{ isNewlyAdded: true }}
      />
      <Stack.Screen
        options={({ navigation }: MainScreenProps<MainStackRoutes.WISH_LIST>) =>
          getHeaderOptions(navigation)
        }
        name={MainStackRoutes.WISH_LIST}
        component={WishList}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={MainStackRoutes.AUTH}
        component={AuthStack}
      />
    </Stack.Navigator>
  );
};
