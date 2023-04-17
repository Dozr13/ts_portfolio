import React from 'react'
import { ReactComponent as Logo } from '../../assets/images/svg/logo-stamp.svg';

import { IntroContainer, IntroText, LandingContainer, LogoContainer, NameSignature, TitleText } from './Landing.styles'

interface Props {
  open: boolean;
}

const Landing = ({ open }: Props) => {
  return (
    <LandingContainer id="home">
      {/* <LandingHeader>
        <NameSignature open={open}>Wade Pate</NameSignature>
      </LandingHeader> */}
      <LogoContainer>
        <Logo title='WP Logo' />
      </LogoContainer>
      <IntroContainer>
        <IntroText>Hi! I'm</IntroText>

        <NameSignature open={open}>Wade Pate</NameSignature>

        <TitleText>Full-stack Developer</TitleText>
      </IntroContainer>
    </LandingContainer>
  )
}


export default Landing