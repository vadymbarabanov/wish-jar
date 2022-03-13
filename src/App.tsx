import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from './helpers/hooks/useTheme';
import Counter from './components/Counter';

export const App = () => {
  const { theme } = useTheme();

  const wrapperStyle = {
    flex: 1,
    padding: 16,
    backgroundColor: theme.primary,
  };

  return (
    <SafeAreaView style={wrapperStyle}>
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
      <Counter />
    </SafeAreaView>
  );
};
