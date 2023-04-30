import styled, { css } from 'styled-components'

import cogWheelImage from '../../../assets/images/png/cogWheel.png'
import { theme } from '../../../styles/theme'
import {
  CogWheelItemProps,
  StyledCogWheelsContainerProps,
} from '../../../types/types'

export const StyledCogWheelsContainer = styled.div<StyledCogWheelsContainerProps>`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 7;

  & > * {
    margin: -3px 0 -3px 0;
  }

  ${props =>
    props.cogCount % 2 === 0 &&
    css`
      animation-direction: reverse;
    `}
`

export const CogWheelItem = styled.div<CogWheelItemProps>`
  width: ${({ radius }) => radius * 2.5}px;
  height: ${({ radius }) => radius * 2.5}px;
  background-image: url(${cogWheelImage});
  background-size: cover;
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};

  @media screen and (max-width: ${theme.pageSizes.smallMonitor}) {
    width: ${({ radius }) => radius * 2}px;
    height: ${({ radius }) => radius * 2}px;
  }

  @media screen and (max-width: ${theme.pageSizes.mobileMini}) {
    width: ${({ radius }) => radius * 1.3}px;
    height: ${({ radius }) => radius * 1.3}px;
  }
`
