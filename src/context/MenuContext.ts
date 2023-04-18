import { createContext } from "react"

export interface MenuContextType {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  setIsOpen: () => {},
})
