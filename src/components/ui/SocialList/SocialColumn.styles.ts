import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiFileList3Line,
} from 'react-icons/ri'
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

  svg {
    height: ${theme.sizes.rem['md']};
    width: ${theme.sizes.rem['md']};
  }
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
  background: ${theme.colors.primaryDark};
  border: ${theme.sizes.pxSize['md']} double ${theme.colors.primaryMid};
  > * {
    margin: 0 auto;
  }

  svg {
    height: ${theme.sizes.rem['lg']};
    width: ${theme.sizes.rem['lg']};
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

export const GithubIcon = styled(RiGithubLine)`
  color: #000;
`

export const LinkedInIcon = styled(RiLinkedinLine)`
  color: #0077b5;
`

export const InstagramIcon = styled(RiInstagramLine)`
  color: #e1306c;
`

export const TwitterIcon = styled(RiTwitterLine)`
  color: #1da1f2;
`

export const ResumeIcon = styled(RiFileList3Line)`
  color: #f1f1f1;
`

export const GithubLink = styled.a`
  grid-area: github;
`

export const LinkedInLink = styled.a`
  grid-area: linkedIn;
`

export const InstagramLink = styled.a`
  grid-area: instagram;
`

export const TwitterLink = styled.a`
  grid-area: twitter;
`

export const ResumeLink = styled.a`
  grid-area: resume;
`
