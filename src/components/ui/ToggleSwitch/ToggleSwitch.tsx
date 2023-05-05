import React from 'react';

import { ButtonContainer, Label, MoonIcon, SunIcon, ThemeContainer } from './ToggleSwitch.styles';
import { ThemeMode } from '../../../types/types';

interface ToggleSwitchProps {
  toggleTheme: () => void;
  currentTheme: ThemeMode;
}

const ToggleSwitch = ({ toggleTheme, currentTheme }: ToggleSwitchProps) => {
  const isChecked = currentTheme === 'darkTheme';

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <ThemeContainer onClick={handleClick}>
      <Label>{currentTheme === 'darkTheme' ? 'Light' : 'Dark'}</Label>
      <ButtonContainer>
        {isChecked ? <SunIcon /> : <MoonIcon />}
      </ButtonContainer>
      <Label>Mode</Label>
    </ThemeContainer >
  );
};

export default ToggleSwitch;
