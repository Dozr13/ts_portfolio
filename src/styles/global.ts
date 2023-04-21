import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: ${theme.colors.primaryDark};
    color: ${theme.colors.primaryLight};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: ${theme.sizes.viewHeight['100']};
    width: ${theme.sizes.viewWidth['100']};
    justify-content: center;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }
  :focus {
    outline: none;
  }
`
