import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const AboutMeContainer = styled.div`
  display: grid;
  grid-template-columns: 0.9fr;
  grid-template-rows: auto auto auto;
  grid-column-gap: 0px;
  grid-row-gap: 15px;
  grid-template-areas:
    'title'
    'photo'
    'info';
  width: 100vw;
  position: relative;
  color: white;
  background: ${theme.primaryDark};
  align-items: end;
  padding: 2.5rem 0;
  justify-content: center;

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    grid-template-columns: 0.9fr;
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    grid-template-columns: 0.8fr;
  }
`

export const PhotoBox = styled.div`
  grid-area: photo;
  top: 0;
  height: 200px;
  width: auto;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  border-radius: ${theme.sizes.percentage['100']};
  margin: 0 1rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    height: 270px;
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    height: 250px;
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    height: 220px;
  }
`

export const ImageOfSelf = styled.img`
  width: 100px;
  height: 100px;
  border-radius: ${theme.sizes.percentage['30']};
  margin-right: 1rem;
  height: auto;

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    width: 250px;
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    width: 230px;
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    width: 200px;
  }
`

export const InformationBox = styled.div`
  grid-area: info;
  width: ${theme.sizes.percentage['80']};
  background: gray;
  border: 2px solid blue;
  text-align: center;
  padding: 1rem;
  margin: 0 auto;
  margin-top: 1rem;
  font: ${theme.defaultFont};

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    font-size: 1.5rem;
  }
`
