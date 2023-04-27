import { MutableRefObject, SetStateAction } from 'react'

// * MenuContext
export type MenuContextType = {
  isOpenContext: boolean
  setMenuOpen?: (isOpenContext: boolean) => void
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

// * Multiple uses
export interface IsOpenProps {
  isOpen: boolean
}
