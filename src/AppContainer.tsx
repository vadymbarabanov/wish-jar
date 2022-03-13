import React from 'react';
import { App } from './App';
import { CustomToast } from './components/CustomToast';
import { ThemeProvider } from './components/ThemeProvider';

export const AppContainer = () => {
  return (
    <ThemeProvider>
      <App />
      <CustomToast />
    </ThemeProvider>
  );
};
