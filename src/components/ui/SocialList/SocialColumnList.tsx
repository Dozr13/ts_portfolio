import React from "react";

import { RiFileList3Line, RiGithubLine, RiInstagramLine, RiLinkedinLine, RiTwitterLine } from 'react-icons/ri';

import { GithubLink, InstagramLink, LinkedInLink, ResumeLink, SocialLink, SocialListContainer, SocialLinksHeader, TwitterLink } from "./SocialColumnList.styles";

interface Props {
  backgroundColor: string;
  header?: string;
}

const SocialList = ({ backgroundColor, header }: Props) => {
  return (
    <SocialListContainer backgroundColor={backgroundColor}>
      <SocialLinksHeader>{header}</SocialLinksHeader>
      <GithubLink>
        <SocialLink target="_blank" href="https://github.com/Dozr13" >
          <RiGithubLine style={{ color: '#000' }} />
        </SocialLink>
      </GithubLink>
      <LinkedInLink>
        <SocialLink target="_blank" href="https://www.linkedin.com/in/wadejp8/" >
          <RiLinkedinLine style={{ color: '	 #0077b5' }} grid-area='linkedIn' />
        </SocialLink>
      </LinkedInLink>
      <InstagramLink>
        <SocialLink target="_blank" href="https://www.instagram.com/dozr13/?next=%2Freel%2FCTqMiOGgejy%2F" >
          <RiInstagramLine style={{ color: '	#1DA1F2' }} grid-area='twitter' />
        </SocialLink>
      </InstagramLink>
      <TwitterLink>
        <SocialLink target="_blank" href="https://www.twitter.com/wadejp8" >
          <RiTwitterLine style={{ color: '	#1DA1F2' }} grid-area='twitter' />
        </SocialLink>
      </TwitterLink>
      <ResumeLink>
        <SocialLink target="_blank" href="https://docs.google.com/document/d/1Ja0uqPVd4SAd6inF11Ov8-SxaeybiXui58eJSh0QOFI/edit?usp=sharing" >
          <RiFileList3Line style={{ color: '#FFF' }} grid-area='resume' />
        </SocialLink>
      </ResumeLink>
    </SocialListContainer>
  );
};

export default SocialList;