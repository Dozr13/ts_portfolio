import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const ThemeContainer = styled.div`
  width: ${theme.sizes.viewWidth['5']};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${theme.sizes.rem['sm']};

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    width: ${theme.sizes.viewWidth['10']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    width: ${theme.sizes.viewWidth['15']};
  }
`

export const Label = styled.span`
  font: ${theme.defaultFont};
  font-size: ${theme.sizes.pxSize['xl']};
`

export const SunIcon = styled(BsFillSunFill)`
  color: #fff;
  height: ${theme.sizes.percentage['100']};
  width: ${theme.sizes.percentage['100']};
`

export const MoonIcon = styled(BsFillMoonFill)`
  color: #000;
  height: ${theme.sizes.percentage['100']};
  width: ${theme.sizes.percentage['100']};
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${theme.sizes.percentage['50']};
  height: ${theme.sizes.percentage['50']};
  margin: ${theme.sizes.rem['sm']};

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    margin: ${theme.sizes.rem['xs']};
  }

  &:hover ${MoonIcon} {
    color: ${props => props.theme.buttonHover};
  }

  &:hover ${SunIcon} {
    color: ${props => props.theme.buttonHover};
  }
`
