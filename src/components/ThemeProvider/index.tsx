import React, { FC, useState } from 'react';
import { useColorScheme } from 'react-native';
import { themes } from '../../styles/themes';
import { Theme } from '../../types/Styles';

const defaultThemeContext = {
  theme: themes[Theme.LIGHT],
  toggleTheme: () => {},
};

export const ThemeContext = React.createContext(defaultThemeContext);

export const ThemeProvider: FC = ({ children }) => {
  // Check user's prefered theme mode
  const preferedScheme = useColorScheme();

  const [theme, setTheme] = useState(
    preferedScheme === Theme.DARK ? Theme.DARK : Theme.LIGHT
  );

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const value = {
    theme: themes[theme],
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
