import { StackNavigationOptions } from '@react-navigation/stack';

export type GetOptions<T = { goBack: () => void }> = (
  navigation: T,
  title?: string
) => StackNavigationOptions;
