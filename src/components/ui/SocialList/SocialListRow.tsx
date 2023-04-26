import React from "react";

import { RiGithubLine, RiLinkedinLine, RiInstagramLine, RiTwitterLine, RiFileList3Line } from "react-icons/ri";

import { GithubLink, InstagramLink, LinkedInLink, ResumeLink, SocialLink, SocialLinksHeader, SocialListRowContainer, TwitterLink } from "./SocialColumn.styles";

interface Props {
  header: string;
}

const SocialListRow = ({ header }: Props) => {
  return (
    <SocialListRowContainer>
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
    </SocialListRowContainer>
  );
};

export default SocialListRow;