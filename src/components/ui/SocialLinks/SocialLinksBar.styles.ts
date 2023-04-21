import styled from 'styled-components'

import { theme } from '../../../styles/theme'

interface Props {
  backgroundColor: string
}

export const SocialLinksContainer = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(4, 3rem);
  grid-template-rows: auto auto;
  grid-gap: ${theme.sizes.rem['mdlg']};
  grid-template-areas:
    'text text text text'
    'github twitter linkedIn resume';
  width: ${theme.sizes.percentage['100']};
  align-items: end;
  align-content: center;
  justify-content: center;
  background: ${props => props.backgroundColor};

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
  }
`

export const SocialLinksHeader = styled.p`
  grid-area: text;
  justify-self: center;
  font-weight: bold;
  font-size: ${theme.sizes.rem['mdlg']};
  margin: 0;

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
  }
`

export const SocialLink = styled.a`
  svg {
    height: ${theme.sizes.rem['lg']};
    width: ${theme.sizes.rem['lg']};
  }
`

export const GithubLink = styled.div`
  grid-area: github;
`

export const TwitterLink = styled.div`
  grid-area: twitter;
`

export const LinkedInLink = styled.div`
  grid-area: linkedIn;
`

export const ResumeLink = styled.div`
  grid-area: resume;
`
