import styled from 'styled-components'

import { theme } from '../../styles/theme'

interface Props {
  isOpen: boolean
}

export const LandingContainer = styled.div`
  height: ${theme.sizes.viewHeight['100']};
  width: ${theme.sizes.viewWidth['100']};
  background: ${theme.primaryDark};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1fr 0.5fr;
  grid-column-gap: 0px;
  grid-row-gap: 50px;
  grid-template-areas: 'title' 'logo' 'details';
`

export const LandingHeader = styled.header`
  position: absolute;
  /* height: ${theme.sizes.percentage['0']}; */
  width: ${theme.sizes.percentage['100']};
  top: ${theme.sizes.pxSize['zero']};
`

export const LogoContainer = styled.div`
  grid-area: logo;
  width: ${theme.sizes.viewWidth['100']};
  height: ${theme.sizes.percentage['50']};
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  height: auto;

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
  }
`

export const IntroContainer = styled.div`
  grid-area: details;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* height: ${theme.sizes.percentage['100']}; */
  padding-bottom: 15rem;

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    /* padding-bottom: 10rem; */
  }
`

export const IntroText = styled.p`
  font-size: 2rem;
  margin-bottom: 0;
  flex: 1;
`

export const NameSignature = styled.p<Props>`
  font-family: 'Charm', cursive;
  font-size: 3.5rem;
  margin: 0;
  color: ${({ isOpen }) => (isOpen ? '#0D0C1D' : '#EFFFFA')};
`

export const TitleText = styled.p`
  font-size: 1.3rem;
  margin-top: 0;
`
