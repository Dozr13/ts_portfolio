import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const StyledFooter = styled.footer`
  height: ${theme.sizes.percentage['100']};
  padding: ${theme.sizes.rem['xl']};
  background: ${theme.colors.primaryDark};
  text-align: center;

  @media screen and (max-width: ${theme.pageSizes.mobileMini}) {
    padding: ${theme.sizes.rem['md']};
  }
`

export const FooterText = styled.span`
  color: ${theme.colors.primaryLight};
  font: ${theme.defaultFont};
  font-size: ${theme.sizes.rem['md']};
`

export const FooterTextBold = styled.span`
  color: ${theme.colors.primaryMid};
  font-size: ${theme.sizes.rem['lg']};
  font-weight: 900;
  text-decoration: underline;
`
