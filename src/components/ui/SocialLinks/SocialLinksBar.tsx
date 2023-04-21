import React from "react";

import { FaGithub, FaTwitter, FaLinkedin, FaFilePdf } from "react-icons/fa";

import { SocialLink, SocialLinksBarWrapper, SocialLinksContainer, SocialLinksHeader } from "./SocialLinksBar.styles";

interface Props {
  backgroundColor: string
}

const SocialLinksBar = ({ backgroundColor }: Props) => {
  return (
    <SocialLinksContainer backgroundColor={backgroundColor}>
      <SocialLinksHeader>Find me on:</SocialLinksHeader>
      <SocialLinksBarWrapper>
        <SocialLink target="_blank" href="https://github.com/Dozr13">
          <FaGithub style={{ color: '#000' }} />
        </SocialLink>
        <SocialLink target="_blank" href="https://www.twitter.com/wadejp8">
          <FaTwitter style={{ color: '	#1DA1F2' }} />
        </SocialLink>
        <SocialLink target="_blank" href="https://www.linkedin.com/in/wadejp8/">
          <FaLinkedin style={{ color: '	 #0077b5' }} />
        </SocialLink>
        <SocialLink target="_blank" href="https://docs.google.com/document/d/1Ja0uqPVd4SAd6inF11Ov8-SxaeybiXui58eJSh0QOFI/edit?usp=sharing">
          <FaFilePdf style={{ color: '#FFF' }} />
        </SocialLink>
      </SocialLinksBarWrapper>
    </SocialLinksContainer>
  );
};

export default SocialLinksBar;