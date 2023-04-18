import React, { useContext } from 'react';
import { StyledBurger } from './Hamburger.styles';
import { MenuContext } from '../../../context/MenuContext';

const Hamburger = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  return (
    <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Hamburger;