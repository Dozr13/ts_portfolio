import { MutableRefObject, SetStateAction } from 'react'

// * MenuContext
export type MenuContextType = {
  isOpenContext: boolean
  setMenuOpen?: (isOpenContext: boolean) => void
}

export interface IsOpenProps {
  isOpen: boolean
}

// * hooks
export type UseInputProps = {
  initialValue: string
}

export interface UseOnClickOutsideProps {
  ref: MutableRefObject<Element | null>
  handler: (value: SetStateAction<boolean>) => void
}

export interface UseScrollToElementProps {
  id: string
}

// * components
export interface ButtonProps {
  title: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

export interface CogWheelContainerProps {
  cogCount: number
  speed: number
}

export type StyledCogWheelsContainerProps = Omit<
  CogWheelContainerProps,
  'speed'
>

export interface CogWheelProps {
  radius: number
  speed: number
  direction: 'forward' | 'reverse'
  scrollPosition: number
}

export interface CogWheelItemProps {
  radius: number
  rotation: number
}

export interface FormProps {
  header?: string
  subHeader?: string
}

export interface PageTitleProps {
  title: string
}

export interface SideMenuProps {
  handleMenuItemClick: (id: string) => void
}

export interface SocialLinksProps {
  header: string
}

// * Theme
export type ThemeMode = 'lightTheme' | 'darkTheme'

export interface CurrentThemeProps {
  background: string
  trim: string
  text: string
  hover: string
  secondaryTrim: string
  transparent: string
  buttonBackground: string
  buttonText: string
  buttonHover: string
  githubColor: string
  linkedInColor: string
  instagramColor: string
  twitterColor: string
  resumeColor: string
  cogWheelBackground: string
  themeMode: 'lightTheme' | 'darkTheme' // add themeMode property with the two options
}
