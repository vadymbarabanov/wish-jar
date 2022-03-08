import { Provider } from 'mobx-react';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Counter from './components/Counter';
import { counter } from './mobx/Counter';

const App = () => {
  return (
    <Provider counter={counter}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <Counter />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
