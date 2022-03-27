import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { App } from './App';
import { CustomToast } from '../components/CustomToast';
import { ThemeProvider } from '../components/ThemeProvider';
import LoaderProvider from '../components/LoaderProvider';

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <LoaderProvider>
          <App />
          <CustomToast />
        </LoaderProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};
