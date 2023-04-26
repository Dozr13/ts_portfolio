import styled from 'styled-components'

import { theme } from '../../../styles/theme'

export const SocialListColumnContainer = styled.div`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: repeat(5, ${theme.sizes.percentage['10']});
  grid-row-gap: ${theme.sizes.rem['md']};
  grid-template-areas:
    'github'
    'linkedIn'
    'instagram'
    'twitter'
    'resume';
  width: fit-content;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: ${theme.colors.transparent};
`

export const SocialListRowContainer = styled.div`
  width: ${theme.sizes.percentage['100']};
  display: grid;
  grid-template-columns: repeat(5, ${theme.sizes.percentage['20']});
  grid-template-rows: repeat(2, ${theme.sizes.percentage['20']});
  grid-row-gap: ${theme.sizes.rem['lg']};
  grid-template-areas:
    'text text text text text'
    'github linkedIn instagram twitter resume';
  align-items: center;
  align-content: center;
  justify-content: center;
  background: ${theme.colors.secondaryMid};

  > * {
    margin: 0 auto;
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
    height: ${theme.sizes.rem['md']};
    width: ${theme.sizes.rem['md']};
  }
`

export const GithubLink = styled.div`
  grid-area: github;
`

export const LinkedInLink = styled.div`
  grid-area: linkedIn;
`

export const InstagramLink = styled.div`
  grid-area: instagram;
`

export const TwitterLink = styled.div`
  grid-area: twitter;
`

export const ResumeLink = styled.div`
  grid-area: resume;
`
