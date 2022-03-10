import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Counter from './components/Counter';
import { ThemeProvider } from './components/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <Counter />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
