import React from 'react';

import { StyledNav } from './Navbar.styles';
import Hamburger from '../Hamburger/Hamburger';

const Navbar = () => {
  return (
    <StyledNav>
      <Hamburger />
    </StyledNav>
  );
};

export default Navbar;