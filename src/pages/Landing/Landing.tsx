import React, { useRef, useState } from 'react'
import { ReactComponent as Logo } from '../../assets/images/svg/logo-stamp.svg';

import { LandingContentContainer, LandingHeader, LogoContainer, NameSignature } from './Landing.styles'

interface Props {
  open: boolean;
}

const Landing = ({ open }: Props) => {
  return (
    <LandingContentContainer>
      <LandingHeader>
        <NameSignature open={open}>Wade Pate</NameSignature>
      </LandingHeader>
      <LogoContainer>
        <Logo src={require('../../assets/images/svg/logo-stamp.svg')} alt='WP Logo' />
      </LogoContainer>
    </LandingContentContainer>
  )
}


export default Landing