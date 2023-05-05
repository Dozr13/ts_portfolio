import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { ThemeMode } from './types/types';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const Index = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('darkTheme');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme');
  };

  const themeColors = currentTheme === 'darkTheme' ? theme.darkTheme : theme.lightTheme;

  return (
    <React.StrictMode>
      <ThemeProvider theme={themeColors}>
        <GlobalStyles
          background={themeColors.background}
          trim={themeColors.trim}
          text={themeColors.text}
          themeMode={currentTheme}
        />
        <App toggleTheme={toggleTheme} currentTheme={currentTheme} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

root.render(<Index />);
