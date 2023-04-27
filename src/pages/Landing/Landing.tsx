import React, { useContext } from 'react';

import { IntroContainer, IntroText, LandingContainer, LandingSocialLinksContainer, LogoContainer, LogoImage, NameSignature } from './Landing.styles';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import { TitleBox } from '../../components/ui/PageTitle/PageTitle.styles';
import SocialListColumn from '../../components/ui/SocialList/SocialListColumn';
import { MenuContext } from '../../context/MenuContext';

const Landing = () => {
  const { isOpenContext } = useContext(MenuContext);

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
        <NameSignature>Wade Pate</NameSignature>
        <IntroText>Full-stack Developer</IntroText>
      </IntroContainer>
      <LandingSocialLinksContainer isOpen={isOpenContext}>
        <SocialListColumn />
      </LandingSocialLinksContainer>
    </LandingContainer>
  );
};


export default Landing;