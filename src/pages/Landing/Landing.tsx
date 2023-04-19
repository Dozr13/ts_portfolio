import React from 'react'
import { ReactComponent as Logo } from '../../assets/images/svg/logo-stamp.svg';

import { IntroContainer, IntroText, LandingContainer, LogoContainer, NameSignature, TitleText } from './Landing.styles'
import PageTitle from '../../components/ui/PageTitle/PageTitle';

interface Props {
  isOpen: boolean;
}

const Landing = ({ isOpen }: Props) => {
  return (
    <LandingContainer id="home">
      <PageTitle title="Welcome" />
      {/* <LandingHeader>
        <NameSignature isOpen={isOpen}>Wade Pate</NameSignature>
      </LandingHeader> */}
      <LogoContainer>
        <Logo title='WP Logo' />
        <IntroContainer>
          <IntroText>Hi! I'm</IntroText>
          <NameSignature isOpen={isOpen}>Wade Pate</NameSignature>
          <TitleText>Full-stack Developer</TitleText>
        </IntroContainer>
      </LogoContainer>
    </LandingContainer>
  )
}


export default Landing