import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Counter from './components/Counter';
import { useTheme } from './components/ThemeProvider';

export const App = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[theme.background.primary, { flex: 1 }]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.background.primary.backgroundColor}
      />
      <Counter />
    </SafeAreaView>
  );
};
