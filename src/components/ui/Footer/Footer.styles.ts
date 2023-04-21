import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const StyledFooter = styled.footer`
  height: ${theme.sizes.percentage['100']};
  padding: ${theme.sizes.rem['mdlg']};
  background: ${theme.primaryDark};
  text-align: center;
`

export const FooterText = styled.span`
  color: ${theme.primaryLight};
  font: ${theme.defaultFont};
  font-size: ${theme.sizes.rem['md']};
`

export const FooterTextBold = styled.span`
  color: ${theme.primaryMid};
  font-size: ${theme.sizes.rem['lg']};
  font-weight: 900;
  text-decoration: underline;
`
