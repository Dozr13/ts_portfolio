import React from 'react';

import { StyledButton } from './Button.styles';
import { ButtonProps } from '../../../types/types';

const Button = ({ title, type }: ButtonProps) => {
  return (
    <StyledButton type={type}>{title}</StyledButton>
  );
};

export default Button;