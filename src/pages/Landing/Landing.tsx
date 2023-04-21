import React from 'react'

import { IntroContainer, IntroText, LandingContainer, LogoContainer, NameSignature, TitleText } from './Landing.styles'
import { ReactComponent as Logo } from '../../assets/images/svg/logo-stamp.svg';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
// import { TitleBox } from '../../components/ui/PageTitle/PageTitle.styles';

interface Props {
  isOpen: boolean;
}

const Landing = ({ isOpen }: Props) => {
  return (
    <LandingContainer id="home">
      {/* <TitleBox> */}
      <PageTitle title="Welcome" />
      {/* </TitleBox> */}
      <LogoContainer>
        <Logo title='WP Logo' />
      </LogoContainer>
      <IntroContainer>
        <IntroText>Hi! I'm</IntroText>
        <NameSignature isOpen={isOpen}>Wade Pate</NameSignature>
        <TitleText>Full-stack Developer</TitleText>
      </IntroContainer>
    </LandingContainer>
  )
}


export default Landing