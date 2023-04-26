import styled from 'styled-components'

import { theme } from '../../../styles/theme'

interface Props {
  isOpen: boolean
}

export const StyledMenu = styled.nav<Props>`
  position: inherit;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 0px;
  grid-row-gap: 0;
  grid-template-areas:
    'aboutMe'
    'projects'
    'contact'
    'home'
    'socialLinksBar';

  list-style: none;
  align-items: end;
  justify-items: center;
  background: #f1f1f1;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  height: ${theme.sizes.viewHeight['100']};
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 8;

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    width: ${theme.sizes.percentage['50']};
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    width: ${theme.sizes.percentage['80']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    height: ${theme.sizes.percentage['100']};
    width: ${theme.sizes.percentage['100']};
  }

  a {
    font: ${theme.defaultFont};
    font-size: ${theme.sizes.rem['mdlg']};
    text-transform: uppercase;
    padding: ${theme.sizes.rem['lg']} 0;
    font-weight: bold;
    letter-spacing: ${theme.sizes.rem['xs']};
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: center;
    cursor: pointer;

    @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    }

    @media screen and (max-width: ${theme.pageSizes.tablet}) {
    }

    @media screen and (max-width: ${theme.pageSizes.mobile}) {
      font-size: ${theme.sizes.rem['md']};
    }

    @media screen and (max-width: ${theme.pageSizes.mobileMini}) {
      font-size: ${theme.sizes.rem['mdsm']};
    }

    &:hover {
      color: #343078;
    }
  }
`

export const MenuListItem = styled.li``

export const MenuLink = styled.a``
