import React from 'react';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme } from './theme';
import { ThemeMode } from '../types/types';

interface GlobalStyleProps {
  background: string;
  trim: string;
  text: string;
}

interface GlobalStylesProviderProps {
  themeMode: ThemeMode;
  background: string;
  trim: string;
  text: string;
}

const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  html,
  #root {
    margin: 0 auto;
  }
  body {
    margin: 0;
    padding: 0;
    align-items: center;
    background: ${props => props.background};
    color: ${props => props.text};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue';
    height: ${theme.sizes.percentage['100']};
    width: ${theme.sizes.percentage['100']};
    justify-content: center;
    text-rendering: optimizeLegibility;
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  :focus {
    outline: none;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
   .CogWheel:nth-child(odd) {
    top: calc(50% - 200px);
    right: 20px;
  }

  .CogWheel:nth-child(even) {
    top: calc(50% - 100px);
    right: 40px;
  }

  /* add some margin or padding between the cogwheels */
  .CogWheel + .CogWheel {
    margin-top: 20px;
  }
`;

const GlobalStylesProvider: React.FC<GlobalStylesProviderProps> = ({ themeMode, background }) => {
  const themeColors = themeMode === 'darkTheme' ? theme.darkTheme : theme.lightTheme;

  return (
    <ThemeProvider theme={themeColors}>
      <GlobalStyles background={background} trim={themeColors.trim} text={themeColors.text} />
    </ThemeProvider>
  );
};

export default GlobalStylesProvider;
