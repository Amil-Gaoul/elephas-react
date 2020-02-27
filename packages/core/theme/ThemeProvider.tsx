import React from 'react';
import defaultTheme from './defaultTheme';
import { Theme } from './types';

type Props = {
  theme?: Theme,
  children: React.ReactNode,
};

const ThemeContext = React.createContext({});

const ThemeProvider = ({ theme = defaultTheme, children }: Props) => (
  <ThemeContext.Provider value={theme}>
    {children}
  </ThemeContext.Provider>
);

export default ThemeProvider;
export { ThemeContext };
