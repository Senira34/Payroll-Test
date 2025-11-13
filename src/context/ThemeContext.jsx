import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    console.log('Initial theme from localStorage:', saved);
    if (saved) return saved;
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('System prefers dark:', prefersDark);
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    console.log('Theme changed to:', theme);
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      console.log('Added dark class to html');
    } else {
      root.classList.remove('dark');
      console.log('Removed dark class from html');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log('Toggle clicked, current theme:', theme);
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}