import React, { useState } from 'react';

import { StyledBurger } from './Hamburger.styles';
import { scrollToElement } from '../../../hooks/useScrollToElement';
import SideMenu from '../SideMenu/SideMenu';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)


  const handleMenuItemClick = (id: string) => {
    scrollToElement(id)
    setIsOpen(false)
  }


  return (
    <>
      <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <SideMenu isOpen={isOpen} handleMenuItemClick={handleMenuItemClick} />
    </>
  )
}

export default Hamburger;