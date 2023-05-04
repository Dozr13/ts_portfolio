import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const PageTitleText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 5rem;
  padding: ${theme.sizes.rem['md']} ${theme.sizes.rem['lg']};
  color: ${props => props.theme.text};
  font: ${theme.defaultFont};
  font-size: ${theme.sizes.rem['lg']};

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    margin: ${theme.sizes.rem['mdlg']};
    margin-left: 7rem;
    padding: ${theme.sizes.pxSize['zero']} ${theme.sizes.rem['sm']};
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    padding: ${theme.sizes.pxSize['zero']} ${theme.sizes.rem['md']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    font-size: ${theme.sizes.rem['lg']};
    margin: ${theme.sizes.pxSize['sm']} ${theme.sizes.rem['md']};
    padding: ${theme.sizes.pxSize['zero']} ${theme.sizes.rem['lg']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobileMini}) {
    font-size: ${theme.sizes.rem['md']};
    margin: ${theme.sizes.rem['sm']} ${theme.sizes.rem['md']};
  }
`

export const TitleBox = styled.div`
  grid-area: title;
  width: ${theme.sizes.viewWidth['100']};
  margin-bottom: ${theme.sizes.rem['mdlg']};
`
