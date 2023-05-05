import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const StyledNav = styled.nav`
  position: fixed;
  width: ${theme.sizes.percentage['20']};
  height: ${theme.sizes.percentage['100']};
  padding: ${theme.sizes.pxSize['zero']};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 9;
`
