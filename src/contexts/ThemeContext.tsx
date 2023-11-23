// ThemeContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/themes/light';
import { darkTheme } from '../styles/themes/dark';

type Theme = typeof lightTheme | typeof darkTheme;

interface ThemeContextProps {
  children: ReactNode;
}

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(darkTheme);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? darkTheme : lightTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme: Theme) => (prevTheme.mode === 'light' ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
