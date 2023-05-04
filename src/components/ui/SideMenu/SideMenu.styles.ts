import styled from 'styled-components'

import { theme } from '../../../styles/theme'
import { IsOpenProps } from '../../../types/types'

export const MenuListItem = styled.li``

export const MenuLink = styled.a``

export const MenuWrapper = styled.div``

export const StyledMenu = styled.nav<IsOpenProps>`
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
    'socialLinks';

  list-style: none;
  align-items: end;
  justify-items: center;
  background: ${props => props.theme.text};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  height: ${theme.sizes.percentage['100']};
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 8;
  width: ${theme.sizes.percentage['25']};
  box-shadow: ${({ isOpen }) =>
    isOpen ? `0 5px 15px ${theme.darkTheme.buttonHover}` : 'none'};
  border-right: 4px ridge ${props => props.theme.background};

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    width: ${theme.sizes.percentage['40']};
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    width: ${theme.sizes.percentage['80']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    height: ${theme.sizes.percentage['100']};
    width: ${theme.sizes.percentage['100']};
  }

  ${MenuListItem} {
    transform: translateX(-150%);
    transition: transform 0.5s ease-in-out;

    &:nth-child(1) {
      transition-delay: 0.1s;
    }

    &:nth-child(2) {
      transition-delay: 0.2s;
    }

    &:nth-child(3) {
      transition-delay: 0.3s;
    }

    &:nth-child(4) {
      transition-delay: 0.4s;
    }

    &:nth-child(5) {
      transition-delay: 0.5s;
    }
  }

  ${MenuLink} {
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

    @media screen and (max-width: ${theme.pageSizes.mobile}) {
      font-size: ${theme.sizes.rem['md']};
    }

    @media screen and (max-width: ${theme.pageSizes.mobileMini}) {
      font-size: ${theme.sizes.rem['sm']};
    }

    &:hover {
      color: ${props => props.theme.buttonBackground};
    }
  }

  ${MenuListItem}:hover {
    ${MenuLink} {
      color: ${theme.darkTheme.buttonHover};
    }
  }

  ${MenuListItem}:hover ${MenuLink} span:first-child {
    color: #343078;
  }

  ${MenuListItem}:hover ${MenuLink} span:last-child {
    color: #343078;
  }

  ${({ isOpen }) =>
    isOpen &&
    `${MenuListItem} {
      transform: translateX(0);
    }`}
`
