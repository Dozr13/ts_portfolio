import React from 'react'
import { StyledButton } from './Button.styles'

interface Props {
  title: string
}

const Button = ({ title }: Props) => {
  return (
    <StyledButton>{title}</StyledButton>
  )
}

export default Button