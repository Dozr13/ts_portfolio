import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const PageTitleText = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${theme.sizes.rem['md']} ${theme.sizes.rem['lg']};
  color: ${theme.colors.primaryLight};
  font: ${theme.defaultFont};
  font-size: ${theme.sizes.rem['lg']};

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    margin: ${theme.sizes.rem['mdlg']};
    padding: ${theme.sizes.pxSize['zero']} ${theme.sizes.rem['sm']};
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    margin: ${theme.sizes.pxSize['xxs']} ${theme.sizes.rem['mdlg']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    font-size: ${theme.sizes.rem['lg']};
    margin: ${theme.sizes.pxSize['sm']} ${theme.sizes.pxSize['zero']};
    padding: ${theme.sizes.pxSize['zero']} ${theme.sizes.rem['lg']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobileMini}) {
    font-size: ${theme.sizes.rem['mdlg']};
    margin: ${theme.sizes.rem['sm']} ${theme.sizes.pxSize['zero']};
    padding: ${theme.sizes.pxSize['zero']} ${theme.sizes.rem['lg']};
  }
`

export const TitleBox = styled.div`
  grid-area: title;
  width: ${theme.sizes.viewWidth['100']};
  margin-bottom: ${theme.sizes.rem['mdlg']};
`
