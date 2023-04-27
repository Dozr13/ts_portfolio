import { createContext } from 'react'

import { MenuContextType } from '../types/types'

export const MenuContext = createContext<MenuContextType>({
  isOpenContext: false,
})
