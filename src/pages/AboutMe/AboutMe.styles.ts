import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const AboutMeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem 1fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 15px;
  grid-template-areas:
    'title'
    'photo'
    'info';
  position: relative;
  color: white;
  align-items: end;
  padding: ${theme.sizes.pxSize['lg']} 0;
  justify-items: center;

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
  }
`

export const PhotoBox = styled.div`
  grid-area: photo;
  top: 0;
  height: ${theme.sizes.viewHeight['30']};
  width: ${theme.sizes.viewWidth['70']};
  border-left: 4px double black;
  border-bottom: 4px double black;
  border-radius: ${theme.sizes.percentage['100']};
  margin: 0 ${theme.sizes.rem['sm']};
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${theme.sizes.rem['lg']} ${theme.sizes.pxSize['zero']};

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    height: ${theme.sizes.viewHeight['40']};
    width: ${theme.sizes.viewWidth['90']};
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    height: ${theme.sizes.viewHeight['30']};
    margin: ${theme.sizes.rem['mdlg']} ${theme.sizes.pxSize['zero']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    height: ${theme.sizes.viewHeight['20']};
    margin: ${theme.sizes.viewHeight['10']} ${theme.sizes.pxSize['zero']}
      ${theme.sizes.rem['md']} ${theme.sizes.pxSize['zero']};
  }
`

export const ImageOfSelf = styled.img`
  width: ${theme.sizes.viewHeight['30']};
  border-radius: ${theme.sizes.percentage['30']};
  margin-right: ${theme.sizes.rem['sm']};

  @media screen and (max-width: ${theme.pageSizes.largeMonitor}) {
    width: ${theme.sizes.viewWidth['20']};
  }

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    width: ${theme.sizes.viewWidth['30']};
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    width: ${theme.sizes.viewWidth['40']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    width: ${theme.sizes.viewWidth['50']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobileMini}) {
    width: ${theme.sizes.viewWidth['50']};
  }
`

export const InformationBox = styled.div`
  grid-area: info;
  width: ${theme.sizes.viewWidth['90']};
  background: ${props => props.theme.trim};
  color: ${props => props.theme.background};
  border: 2px solid blue;
  text-align: center;
  padding: ${theme.sizes.rem['sm']};
  margin: 0 auto;
  margin-top: ${theme.sizes.rem['sm']};
  font: ${theme.defaultFont};
  font-size: ${theme.sizes.rem['mdlg']};
  border-radius: 30px;

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    width: ${theme.sizes.viewWidth['80']};
    font-size: ${theme.sizes.rem['md']};
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    width: ${theme.sizes.viewWidth['70']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobileMini}) {
    width: ${theme.sizes.viewWidth['70']};
  }
`

export const SkillList = styled.ul`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  width: ${theme.sizes.percentage['50']};
  text-align: center;
  margin: ${theme.sizes.rem['md']} auto;
  list-style: none;
  padding: 0;

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    font-size: ${theme.sizes.rem['mdlg']};
    width: ${theme.sizes.percentage['60']};
  }

  @media screen and (max-width: ${theme.pageSizes.tablet}) {
    font-size: ${theme.sizes.rem['mdsm']};
    width: ${theme.sizes.percentage['100']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobile}) {
    font-size: ${theme.sizes.rem['mdsm']};
    width: ${theme.sizes.percentage['100']};
  }

  @media screen and (max-width: ${theme.pageSizes.mobileMini}) {
    columns: 1;
    width: ${theme.sizes.percentage['100']};
  }
`

export const SkillListItem = styled.li`
  width: ${theme.sizes.percentage['100']};
`
