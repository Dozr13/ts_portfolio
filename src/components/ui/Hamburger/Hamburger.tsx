import React, { useContext } from 'react';

import { StyledBurger } from './Hamburger.styles';
import { MenuContext } from '../../../context/MenuContext';
import { scrollToElement } from '../../../hooks/useScrollToElement';
import SideMenu from '../SideMenu/SideMenu';

const Hamburger = () => {
  const { isOpenContext, setMenuOpen } = useContext(MenuContext);
  const handleMenuContext = () => {
    if (setMenuOpen) {
      setMenuOpen(!isOpenContext);
    }
  };

  const handleMenuItemClick = (id: string) => {
    scrollToElement(id);
    handleMenuContext();
  };

  return (
    <>
      <StyledBurger isOpen={isOpenContext} onClick={handleMenuContext}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <SideMenu handleMenuItemClick={handleMenuItemClick} />
    </>
  );
};

export default Hamburger;