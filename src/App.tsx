import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Counter from './components/Counter';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Counter />
    </SafeAreaView>
  );
};

export default App;
