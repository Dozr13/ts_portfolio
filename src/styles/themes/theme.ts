export type ThemeType = typeof darkTheme

export const commonColors = {
  githubColor: '#000',
  linkedInColor: '#0077b5',
  instagramColor: '#e1306c',
  twitterColor: '#1da1f2',
  resumeColor: '#F1F1F1',
  cogWheelBackground: '#FFF',
}

export const darkTheme = {
  ...commonColors,
  // * Main colors
  background: '#303731',
  trim: '#A2B9C2',
  text: '#FAF9F6',
  hover: '#343078',

  // * Secondary colors
  secondaryTrim: '#8d918d',
  transparent: 'transparent',

  // * Miscellaneous colors
  buttonBackground: '#0D0C1D',
  buttonText: '#EFFFFA',
  buttonHover: '#00BFFF',
}

export const lightTheme: ThemeType = {
  ...commonColors,
  // * Main colors
  text: '#303731',
  trim: '#0D0C1D',
  background: '#ECECEC',
  hover: 'red',

  // * Secondary colors
  secondaryTrim: '#8d918d',
  transparent: 'transparent',

  // * Miscellaneous colors
  buttonBackground: '#0D0C1D',
  buttonText: '#EFFFFA',
  buttonHover: '#00BFFF',
  resumeColor: '#0a0a0a',
}

const theme = darkTheme // set the light theme as the default.
export default theme
