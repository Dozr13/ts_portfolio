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
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, ${theme.sizes.percentage['10']});
  grid-row-gap: ${theme.sizes.rem['sm']};
  grid-template-areas:
    'github'
    'linkedIn'
    'instagram'
    'twitter'
    'resume';
  height: fit-content;
  width: fit-content;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: ${props => props.theme.transparent};

  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 150%;
    margin-right: 20px;
    background: ${props => props.theme.trim};
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-100%, 0);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 1px;
    height: 150%;
    border-left: 1px solid ${props => props.theme.trim};
    z-index: 0;
  }

  & > * {
    background: ${props => props.theme.background};
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    z-index: 2;
  }

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
  background: ${props => props.theme.background};
  border: ${theme.sizes.pxSize['md']} double ${props => props.theme.trim};
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
  grid-area: github;
  color: ${props => props.theme.githubColor};
`

export const LinkedInIcon = styled(RiLinkedinLine)`
  grid-area: linkedIn;
  color: ${props => props.theme.linkedInColor};
`

export const InstagramIcon = styled(RiInstagramLine)`
  grid-area: instagram;
  color: ${props => props.theme.instagramColor};
`

export const TwitterIcon = styled(RiTwitterLine)`
  grid-area: twitter;
  color: ${props => props.theme.twitterColor};
`

export const ResumeIcon = styled(RiFileList3Line)`
  grid-area: resume;
  color: ${props => props.theme.resumeColor};
`

export const GithubLink = styled.a``

export const LinkedInLink = styled.a``

export const InstagramLink = styled.a``

export const TwitterLink = styled.a``

export const ResumeLink = styled.a``
