import { darkTheme, lightTheme } from './themes/theme'

export const theme = {
  // darkTheme: {
  //   // * Main colors
  //   primaryDark: '#303731',
  //   primaryMid: '#A2B9C2',
  //   primaryLight: '#FAF9F6',
  //   primaryHover: '#343078',

  //   // * Secondary colors
  //   secondaryMid: '#8d918d',
  //   transparent: 'transparent',

  //   // * Miscellaneous colors
  //   buttonDark: '#0D0C1D',
  //   buttonLight: '#EFFFFA',
  //   buttonHover: '#00BFFF',
  // },

  // lightTheme: {
  //   // * Main colors
  //   primaryDark: '#FAF9F6',
  //   primaryMid: '#A2B9C2',
  //   primaryLight: '#303731',
  //   primaryHover: '#343078',

  //   // * Secondary colors
  //   secondaryMid: '#8d918d',
  //   transparent: 'transparent',

  //   // * Miscellaneous colors
  //   buttonDark: '#0D0C1D',
  //   buttonLight: '#EFFFFA',
  //   buttonHover: '#00BFFF',
  // },
  darkTheme: darkTheme,
  lightTheme: lightTheme,

  // * Fonts
  defaultFont: 'bold 1rem/1.5 Roboto, sans-serif',

  sizes: {
    pxSize: {
      zero: '0',
      xxs: '1px',
      xs: '2px',
      sm: '4px',
      mdsm: '6px',
      md: '8px',
      mdlg: '10px',
      lg: '12px',
      xl: '14px',
      xxl: '16px',
    },

    rem: {
      xxs: '0.25rem',
      xs: '0.5rem',
      sm: '1.1rem',
      ssm: '1.3rem',
      mdsm: '1.5rem',
      md: '1.8rem',
      mdlg: '2rem',
      lg: '3rem',
      xl: '5rem',
      xxl: '7rem',
    },

    percentage: {
      10: '10%',
      20: '20%',
      25: '25%',
      30: '30%',
      40: '40%',
      50: '50%',
      60: '60%',
      70: '70%',
      80: '80%',
      90: '90%',
      100: '100%',
    },

    viewHeight: {
      10: '10vh',
      20: '20vh',
      30: '30vh',
      40: '40vh',
      50: '50vh',
      60: '60vh',
      70: '70vh',
      80: '80vh',
      90: '90vh',
      100: '100vh',
    },

    viewWidth: {
      10: '10vw',
      20: '20vw',
      30: '30vw',
      40: '40vw',
      50: '50vw',
      60: '60vw',
      70: '70vw',
      80: '80vw',
      90: '90vw',
      100: '100vw',
    },
  },

  pageSizes: {
    // * Page sized
    mobileMini: '385px',
    mobile: '480px',
    tablet: '913px',
    smallMonitor: '1280px',
    largeMonitor: '1580px',
  },
}
