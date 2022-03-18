import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { App } from './App';
import { CustomToast } from './components/CustomToast';
import { ThemeProvider } from './components/ThemeProvider';

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <App />
        <CustomToast />
      </ThemeProvider>
    </NavigationContainer>
  );
};
