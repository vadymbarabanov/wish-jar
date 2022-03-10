import React from 'react';
import { App } from './App';
import { ThemeProvider } from './components/ThemeProvider';

export const AppContainer = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};
