import styled from 'styled-components'

import { ReactComponent as Logo } from '../../assets/images/svg/logo-stamp.svg'
import { theme } from '../../styles/theme'

export const LandingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr 0.5fr;
  grid-column-gap: 0px;
  grid-row-gap: 0;
  grid-template-areas:
    'title'
    'logo'
    'details';
  justify-content: center;
  align-items: center;
  background: ${theme.colors.primaryDark};
  height: ${theme.sizes.viewHeight['100']};

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
  }

  @media screen and (max-width: ${theme.pageSizes.mobileMini}) {
  }
`

export const LogoContainer = styled.div`
  grid-area: logo;
  align-self: start;
  justify-self: center;

  @media screen and (max-width: ${theme.pageSizes.largeMonitor}) {
    svg {
      margin-top: ${theme.sizes.viewHeight['10']};
      height: ${theme.sizes.viewHeight['50']};
    }
  }

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    svg {
      margin-top: ${theme.sizes.rem['lg']};
      height: ${theme.sizes.viewHeight['60']};
    }
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    svg {
      margin-top: ${theme.sizes.viewHeight['10']};
      height: ${theme.sizes.viewHeight['60']};
    }
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    margin-top: ${theme.sizes.rem['sm']};

    svg {
      height: ${theme.sizes.viewHeight['40']};
    }
  }

  @media screen and (max-width: ${theme.pageSizes.mobileMini}) {
    margin-top: ${theme.sizes.rem['mdlg']};
    svg {
      height: ${theme.sizes.viewHeight['40']};
    }
  }
`

export const LogoImage = styled(Logo)`
  width: 100%;
  height: 100%;
`

export const IntroContainer = styled.div`
  grid-area: details;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${theme.sizes.pxSize['xl']};

  @media screen and (max-width: ${theme.pageSizes.largeMonitor}) {
  }

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    font-size: ${theme.sizes.rem['mdlg']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    font-size: ${theme.sizes.rem['sm']};
    padding-bottom: ${theme.sizes.viewHeight['10']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobileMini}) {
    padding-bottom: ${theme.sizes.rem['xxl']};
  }
`

export const IntroText = styled.p`
  font: ${theme.defaultFont};
  font-size: ${theme.sizes.rem['lg']};
  color: ${theme.colors.primaryMid};
  margin: 0;

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    font-size: ${theme.sizes.rem['mdlg']};
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    font-size: ${theme.sizes.rem['mdsm']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobileMini}) {
    font-size: ${theme.sizes.rem['sm']};
  }
`

export const NameSignature = styled.p`
  font-family: 'Charm', cursive;
  font-size: ${theme.sizes.rem['xl']};
  margin: 0;

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    font-size: ${theme.sizes.rem['lg']};
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
  }
`

export const LandingSocialLinksContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 10px;
  width: fit-content;
  height: fit-content;
  z-index: 8;
`
