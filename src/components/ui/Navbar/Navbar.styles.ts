import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const StyledNav = styled.nav`
  position: fixed;
  width: ${theme.sizes.percentage['100']};
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  z-index: 50;
`
