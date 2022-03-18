import { createStackNavigator } from '@react-navigation/stack';
import { NewPassword } from '../screens/NewPassword';
import { OldPassword } from '../screens/OldPAssword';
import { Settings } from '../screens/Settings';
import { SignUp } from '../screens/SignUp';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Language" component={SignUp} />
      <Stack.Screen name="Old Password" component={OldPassword} />
      <Stack.Screen name="New Password" component={NewPassword} />
    </Stack.Navigator>
  );
};
