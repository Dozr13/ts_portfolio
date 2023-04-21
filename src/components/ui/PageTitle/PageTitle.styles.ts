import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const PageTitleText = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  margin: 3rem 7rem;
  color: ${theme.primaryLight};
  font: italic bold 3rem/1.5 'Roboto', sans-serif;

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    margin: 2rem 2rem;
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    margin: 1.5rem 2rem;
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    margin: 0 1rem;
  }
`

export const TitleBox = styled.div`
  grid-area: title;
  justify-self: center;
  margin-bottom: 2rem;
`
