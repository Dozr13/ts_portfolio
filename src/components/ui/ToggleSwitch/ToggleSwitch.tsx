import React from 'react';

import { Checkbox, Label, Button, Switch } from './ToggleSwitch.styles';
import { ThemeMode } from '../../../types/types';


interface ToggleSwitchProps {
  toggleTheme: () => void;
  currentTheme: ThemeMode;
}

const ToggleSwitch = ({ toggleTheme, currentTheme }: ToggleSwitchProps) => {
  const isChecked = currentTheme === 'darkTheme';
  console.log(isChecked);

  return (
    <Switch>
      <Checkbox
        type="checkbox"
        checked={isChecked}
        onChange={toggleTheme}
      />
      <Label>
        {currentTheme ? 'Light Mode' : 'Dark Mode'}
        <Button className="react-switch-button" onClick={toggleTheme} />
      </Label>
    </Switch>
  );
};

export default ToggleSwitch;
