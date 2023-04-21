import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const ProjectsContainer = styled.div`
  display: grid;
  /* grid-template-columns: 1rem 1fr 1rem; */

  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: ${theme.sizes.percentage['0']};
  grid-row-gap: ${theme.sizes.pxSize['lg']};
  height: ${theme.sizes.percentage['100']};
  width: ${theme.sizes.viewWidth['100']};
  position: relative;
  color: white;
  background: ${theme.primaryDark};
  align-items: end;
  padding: 2.5rem 0;
  /* justify-content: center; */
  grid-template-areas: 'title' 'info' 'image1' 'image2' 'image3';
  grid-gap: 1rem;

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
  }
`

export const ProjectIntroText = styled.span`
  grid-area: info;
  font: ${theme.defaultFont};
  font-size: 3rem;
  margin: 0 auto;
  text-align: center;
  width: ${theme.sizes.percentage['50']};
  border: 2px solid blue;
`

export const ProjectBox = styled.div`
  width: ${theme.sizes.percentage['90']};
  margin: 0 auto;
  margin-top: 1.5rem;
`

export const ProjectImage = styled.img`
  border: 1px double #fff;
  width: ${theme.sizes.percentage['100']};
`

export const ProjectTitle = styled.p`
  text-align: center;
  font: italic bold 1rem/1.5 'Roboto', sans-serif;
  margin: 0;
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

export const ProjectInfoBox = styled.div`
  grid-area: info;
  width: ${theme.sizes.percentage['100']};
  background: gray;
  border: 2px solid blue;
  text-align: center;
  padding: 1rem;
  margin-top: 1rem;
  /* font: ${theme.defaultFont}; */

  font-size: 1.5rem;

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    font-size: 1.5rem;
  }
`
