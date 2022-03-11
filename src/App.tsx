import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Counter from './components/Counter';
import { useTheme } from './components/ThemeProvider';

export const App = () => {
  const { theme } = useTheme();

  const wrapperStyle = {
    flex: 1,
    padding: 16,
  };

  return (
    <SafeAreaView style={[theme.background.primary, wrapperStyle]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.background.primary.backgroundColor}
      />
      <Counter />
    </SafeAreaView>
  );
};
