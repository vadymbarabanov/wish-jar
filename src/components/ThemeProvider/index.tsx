import React, { useContext, FC, useState } from 'react';
import { useColorScheme } from 'react-native';
import { getGlobalStyles } from '../../styles';
import { Theme } from '../../types/styles';

const defaultThemeContext = {
  theme: getGlobalStyles(Theme.LIGHT),
  toggleTheme: () => {},
};

const ThemeContext = React.createContext(defaultThemeContext);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC = ({ children }) => {
  // Check user's prefered theme mode
  const preferedScheme = useColorScheme();

  const [theme, setTheme] = useState(
    preferedScheme === Theme.DARK ? Theme.DARK : Theme.LIGHT
  );

  const toggleTheme = () => {
    if (theme === Theme.LIGHT) {
      return setTheme(Theme.DARK);
    }
    setTheme(Theme.LIGHT);
  };

  const value = {
    theme: getGlobalStyles(theme),
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
