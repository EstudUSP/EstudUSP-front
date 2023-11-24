// ThemeContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/themes/light';
import { darkTheme } from '../styles/themes/dark';
import { Theme } from '../@types/styled';


interface ThemeContextProps {
  children: ReactNode;
}

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {

  const savedTheme = localStorage.getItem('theme');
  const initialTheme: Theme = savedTheme === 'dark' ? darkTheme : lightTheme;

  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    // Se não houver um tema salvo, verifica o tema padrão do navegador
    if (!savedTheme) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDarkMode ? darkTheme : lightTheme);
    }
  }, [savedTheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme.mode === 'light' ? darkTheme : lightTheme;
      
      // Salva o tema escolhido no localStorage
      localStorage.setItem('theme', newTheme.mode);
      
      return newTheme;
    });
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
