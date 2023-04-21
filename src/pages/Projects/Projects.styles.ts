import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: ${theme.sizes.pxSize['zero']};
  grid-row-gap: ${theme.sizes.pxSize['lg']};
  height: ${theme.sizes.percentage['100']};
  width: ${theme.sizes.percentage['100']};
  position: relative;
  color: white;
  background: ${theme.primaryDark};
  align-items: end;
  padding: ${theme.sizes.pxSize['xl']} 0;
  grid-template-areas: 'title' 'info' 'image1' 'image2' 'image3';
  grid-gap: ${theme.sizes.rem['sm']};
`

export const ProjectImage = styled.img`
  border: 1px double #fff;
  width: ${theme.sizes.percentage['100']};
  margin-top: ${theme.sizes.rem['mdlg']};
`

export const ProjectTitle = styled.p`
  text-align: center;
  font: ${theme.defaultFont};
  font-size: ${theme.sizes.rem['lg']};
  margin: 0;

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    font-size: ${theme.sizes.rem['mdlg']};
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    font-size: ${theme.sizes.rem['md']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    font-size: ${theme.sizes.rem['mdsm']};
  }
`

export const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`

export const ProjectBox = styled.div`
  width: ${theme.sizes.percentage['90']};
  margin: 0 auto;
  margin-top: ${theme.sizes.rem['lg']};
  & > ${ProjectLink} {
    grid-area: image;
  }
  & > ${ProjectTitle} {
    grid-area: title;
  }
`
