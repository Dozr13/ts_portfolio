import styled from 'styled-components'

import { theme } from '../../../styles/theme'

interface Props {
  isOpen: boolean
}

export const StyledMenu = styled.nav<Props>`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  height: ${theme.sizes.viewHeight['100']};
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    width: ${theme.sizes.percentage['50']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    width: ${theme.sizes.percentage['100']};
    padding-top: 1rem;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 3rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;

    @media screen and (max-width: ${theme.pageSizes.tablet}) {
      font-size: 1.5rem;
      text-align: center;
    }

    @media screen and (max-width: ${theme.pageSizes.mobile}) {
      font-size: 1.5rem;
    }

    &:hover {
      color: #343078;
    }
  }
`

export const MenuListItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${theme.sizes.percentage['70']};
  justify-content: space-evenly;
  list-style: none;
  text-align: center;
`

export const MenuListItem = styled.li``

export const MenuLink = styled.a``
