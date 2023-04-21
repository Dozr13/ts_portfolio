import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const StyledFooter = styled.footer`
  height: ${theme.sizes.percentage['100']};
  margin: 0;
  padding: 2rem;
  background: ${theme.primaryDark};
  text-align: center;
`

export const FooterText = styled.span`
  color: ${theme.primaryLight};
  font: ${theme.defaultFont};
  line-height: 1.8rem;
`

export const FooterTextBold = styled.span`
  font-size: 1.5rem;
  font-weight: 900;
  margin-top: 0.5rem;
  text-decoration: underline;
`
