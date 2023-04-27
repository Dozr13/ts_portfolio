import React from "react";


import { GithubIcon, GithubLink, InstagramIcon, InstagramLink, LinkedInIcon, LinkedInLink, ResumeIcon, ResumeLink, SocialLinksHeader, SocialListRowContainer, TwitterIcon, TwitterLink } from "./SocialList.styles";
import { SocialLinksProps } from "../../../types/types";

const SocialListRow = ({ header }: SocialLinksProps) => {
  return (
    <SocialListRowContainer>
      <SocialLinksHeader>{header}</SocialLinksHeader>
      <GithubLink target="_blank" href="https://github.com/Dozr13" >
        <GithubIcon />
      </GithubLink>
      <LinkedInLink target="_blank" href="https://www.linkedin.com/in/wadejp8/">
        <LinkedInIcon />
      </LinkedInLink>
      <InstagramLink target="_blank" href="https://www.instagram.com/dozr13/?next=%2Freel%2FCTqMiOGgejy%2F">
        <InstagramIcon />
      </InstagramLink>
      <TwitterLink target="_blank" href="https://www.twitter.com/wadejp8">
        <TwitterIcon />
      </TwitterLink>
      <ResumeLink target="_blank" href="https://docs.google.com/document/d/1Ja0uqPVd4SAd6inF11Ov8-SxaeybiXui58eJSh0QOFI/edit?usp=sharing">
        <ResumeIcon />
      </ResumeLink>
    </SocialListRowContainer>
  );
};

export default SocialListRow;