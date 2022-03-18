import { createStackNavigator } from '@react-navigation/stack';
import { NewPassword } from '../screens/NewPassword';
import { ResetPassword } from '../screens/ResetPassword';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Verification } from '../screens/Verification';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In" component={SignIn} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="Reset Password" component={ResetPassword} />
      <Stack.Screen name="New Password" component={NewPassword} />
    </Stack.Navigator>
  );
};
