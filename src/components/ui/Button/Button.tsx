import React from 'react'

import { StyledButton } from './Button.styles'

interface Props {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ title, type }: Props) => {
  return (
    <StyledButton type={type}>{title}</StyledButton>
  )
}

export default Button