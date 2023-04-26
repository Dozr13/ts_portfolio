import React from 'react';

import { IntroContainer, IntroText, LandingContainer, LandingSocialLinksContainer, LogoContainer, LogoImage, NameSignature } from './Landing.styles';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import { TitleBox } from '../../components/ui/PageTitle/PageTitle.styles';
import SocialList from '../../components/ui/SocialList/SocialList';

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
      <LandingSocialLinksContainer>
        <SocialList backgroundColor='#8d918d' grid-area='socialLinksBar' />
      </LandingSocialLinksContainer>
    </LandingContainer>
  );
};


export default Landing;