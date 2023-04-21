import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const PageTitleText = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  margin: ${theme.sizes.rem['lg']};
  color: ${theme.primaryLight};
  font: ${theme.defaultFont};
  font-size: ${theme.sizes.rem['lg']};

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    margin: ${theme.sizes.rem['mdlg']};
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    margin: ${theme.sizes.rem['mdsm']};
    ${theme.sizes.rem['mdlg']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    margin: 0 ${theme.sizes.rem['sm']};
  }
`

export const TitleBox = styled.div`
  grid-area: title;
  justify-self: center;
  margin-bottom: ${theme.sizes.rem['mdlg']};
`
