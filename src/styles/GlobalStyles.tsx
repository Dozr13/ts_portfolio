import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
   html,
  #root {
    margin: 0 auto;
  }
  body {
    margin: 0;
    padding: 0;
    align-items: center;
    background: ${theme.colors.primaryDark};
    color: ${theme.colors.primaryLight};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue';
    height: ${theme.sizes.percentage['100']};
    width: ${theme.sizes.percentage['100']};
    justify-content: center;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
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
`;

export default GlobalStyles;
