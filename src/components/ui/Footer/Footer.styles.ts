import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const StyledFooter = styled.footer`
  height: ${theme.sizes.percentage['100']};
  padding: ${theme.sizes.rem['xl']};
  background: ${props => props.theme.background};
  text-align: center;

  @media screen and (max-width: ${theme.pageSizes.mobileMini}) {
    padding: ${theme.sizes.rem['md']};
  }
`

export const FooterText = styled.span`
  color: ${props => props.theme.text};
  font: ${theme.defaultFont};
  font-size: ${theme.sizes.rem['mdsm']};
`

export const FooterTextBold = styled.span`
  color: ${props => props.theme.trim};
  font-size: ${theme.sizes.rem['md']};
  font-weight: 900;
  text-decoration: underline;
`
