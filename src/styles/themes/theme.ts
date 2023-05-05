export type ThemeType = typeof darkTheme

export const commonColors = {
  githubColor: '#000',
  linkedInColor: '#0077b5',
  instagramColor: '#e1306c',
  twitterColor: '#1da1f2',
  resumeColor: '#F1F1F1',

  buttonBackground: '#0D0C1D',
  buttonHover: '#00BFFF',
  buttonText: '#EFFFFA',
}

export const darkTheme = {
  ...commonColors,
  // * Main colors
  background: '#303731',
  trim: '#A2B9C2',
  text: '#FAF9F6',

  // * Secondary colors
  secondaryBackground: '#002E64',
  secondaryTrim: '#8d918d',
  secondaryText: '#0d0C1D',
  transparent: 'transparent',
}

export const lightTheme: ThemeType = {
  ...commonColors,
  // * Main colors
  background: '#ECECEC',
  text: '#303731',
  trim: '#0D0C1D',

  // * Secondary colors
  secondaryBackground: '#BFBFBF',
  secondaryTrim: '#8d918d',
  secondaryText: '#ECECEC',
  transparent: 'transparent',

  // * Miscellaneous colors
  resumeColor: '#0a0a0a',
}

const theme = darkTheme
export default theme
