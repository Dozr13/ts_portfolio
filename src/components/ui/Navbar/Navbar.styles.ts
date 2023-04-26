import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const StyledNav = styled.nav`
  position: fixed;
  width: ${theme.sizes.percentage['100']};
  height: ${theme.sizes.percentage['10']};
  padding: ${theme.sizes.pxSize['zero']};
  display: flex;
  justify-content: space-between;
  z-index: 9;
`
