import styled from 'styled-components'

import { theme } from '../../../styles/theme'

interface Props {
  isOpen: boolean
}

export const StyledBurger = styled.button<Props>`
  position: fixed;
  top: ${theme.sizes.rem['lg']};
  left: ${theme.sizes.rem['lg']};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${theme.sizes.rem['mdlg']};
  height: ${theme.sizes.rem['mdlg']};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 20;

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    position: fixed;
    top: ${theme.sizes.rem['sm']};
    left: ${theme.sizes.rem['sm']};
  }

  &:focus {
    outline: none;
  }

  div {
    width: ${theme.sizes.rem['mdlg']};
    height: ${theme.sizes.rem['xxs']};
    background: ${({ isOpen }) =>
      isOpen ? theme.colors.buttonDark : theme.colors.buttonLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
