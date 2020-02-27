import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { Theme } from './types';
import defaultTheme from './defaultTheme';

const useTheme = () => {
  const context = useContext(ThemeContext);
  const hasContext: boolean = !!(context && Object.keys(context).length);

  return {
    theme: hasContext ? context as Theme : defaultTheme,
  };
};

export default useTheme;
