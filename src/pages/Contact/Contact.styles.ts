import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const ContactContainer = styled.div`
  height: ${theme.sizes.percentage['100']};
  width: ${theme.sizes.percentage['100']};
  position: relative;
  display: flex;
  justify-content: center;
  color: white;
  padding: ${theme.sizes.rem['lg']} ${theme.sizes.pxSize['zero']};
`
