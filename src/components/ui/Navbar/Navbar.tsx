import React from 'react';

import { StyledNav } from './Navbar.styles';
import { ThemeMode } from '../../../types/types';
import Hamburger from '../Hamburger/Hamburger';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

interface ToggleSwitchProps {
  toggleTheme: () => void;
  currentTheme: ThemeMode;
}

const Navbar = ({ currentTheme, toggleTheme }: ToggleSwitchProps) => {
  return (
    <StyledNav>
      <Hamburger />
      <ToggleSwitch currentTheme={currentTheme} toggleTheme={toggleTheme} />
    </StyledNav>
  );
};

export default Navbar;