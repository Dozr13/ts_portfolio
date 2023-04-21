import React from 'react'

import { IntroContainer, IntroText, LandingContainer, LogoContainer, LogoImage, NameSignature } from './Landing.styles'
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import { TitleBox } from '../../components/ui/PageTitle/PageTitle.styles';

interface Props {
  isOpen: boolean;
}

const Landing = ({ isOpen }: Props) => {
  return (
    <LandingContainer id="home">
      <TitleBox>
        <PageTitle title="Welcome" />
      </TitleBox>
      <LogoContainer>
        <LogoImage title='WP Logo' />
      </LogoContainer>
      <IntroContainer>
        <IntroText>Hi! I'm</IntroText>
        <NameSignature isOpen={isOpen}>Wade Pate</NameSignature>
        <IntroText>Full-stack Developer</IntroText>
      </IntroContainer>
    </LandingContainer>
  )
}


export default Landing