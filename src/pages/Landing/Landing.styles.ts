import styled from 'styled-components'

import { ReactComponent as Logo } from '../../assets/images/svg/logo-stamp.svg'
import { theme } from '../../styles/theme'

interface Props {
  isOpen: boolean
}

export const LandingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 0;
  grid-template-areas:
    'title'
    'logo'
    'details';
  justify-items: center;
  align-items: center;
  background: ${theme.primaryDark};

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    height: ${theme.sizes.viewHeight['100']};
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
  }
`

export const LogoContainer = styled.div`
  grid-area: logo;
  /* width: ${theme.sizes.viewWidth['80']}; */
  /* height: ${theme.sizes.percentage['50']}; */
  align-self: start;
  justify-self: center;

  @media screen and (max-width: ${theme.pageSizes.largeMonitor}) {
    svg {
      margin-top: ${theme.sizes.rem['lg']};
      height: 60vh;
    }
  }

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    svg {
      margin-top: ${theme.sizes.rem['lg']};
      height: 60vh;
    }
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    svg {
      height: 60vh;
    }
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    margin-top: ${theme.sizes.rem['sm']};

    svg {
      width: 380px;
      height: 380px;
    }
  }

  // TODO: Add a query if max-width < ${theme.pageSizes.mobile}
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
    margin-top: 0;
    font-size: ${theme.sizes.rem['sm']};
  }
`

export const IntroText = styled.p`
  font: ${theme.defaultFont};
  font-size: ${theme.sizes.rem['lg']};
  color: ${theme.primaryMid};
  margin: 0;

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    font-size: ${theme.sizes.rem['mdlg']};
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
  }
`

export const NameSignature = styled.p<Props>`
  font-family: 'Charm', cursive;
  font-size: ${theme.sizes.rem['xl']};
  margin: 0;
  color: ${({ isOpen }) => (isOpen ? '#0D0C1D' : '#EFFFFA')};

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    font-size: ${theme.sizes.rem['lg']};
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
  }
`
