import styled from 'styled-components'

import { theme } from '../../../styles/theme'

interface Props {
  backgroundColor: string
}

export const SocialLinksContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${theme.sizes.percentage['100']};
  background: ${props => props.backgroundColor};
`

export const SocialLinksHeader = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 0;
`

export const SocialLinksBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: ${theme.sizes.percentage['100']};
  padding: 1rem;
  border-radius: 0.5rem;
`

export const SocialLink = styled.a`
  svg {
    height: 3rem;
    width: 3rem;
  }
`

export const SocialLinksPageBox = styled.div`
  width: ${theme.sizes.percentage['100']};
  display: flex;
  justify-content: center;
  align-items: flex-end;
`