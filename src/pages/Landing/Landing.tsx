import React from 'react'
import { ReactComponent as Logo } from '../../assets/images/svg/logo-stamp.svg';

import { IntroContainer, IntroText, LandingContentContainer, LogoContainer, NameSignature } from './Landing.styles'

interface Props {
  open: boolean;
}

const Landing = ({ open }: Props) => {
  return (
    <LandingContentContainer>
      {/* <LandingHeader>
        <NameSignature open={open}>Wade Pate</NameSignature>
      </LandingHeader> */}
      <LogoContainer>
        <Logo title='WP Logo' />
      </LogoContainer>
      <IntroContainer>
        <IntroText>Hi! I'm</IntroText>
        <NameSignature open={open}>Wade Pate</NameSignature>
      </IntroContainer>
    </LandingContentContainer>
  )
}


export default Landing