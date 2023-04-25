import React from 'react';

import { AboutMeContainer, ImageOfSelf, InformationBox, PhotoBox, SkillList, SkillListItem } from './AboutMe.styles';
import myImage from "../../assets/images/jpg/myImage.jpg";
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import { TitleBox } from '../../components/ui/PageTitle/PageTitle.styles';

const AboutMe = () => {
  return (
    <AboutMeContainer id='about-me'>
      <TitleBox>
        <PageTitle title="About Me" />
      </TitleBox>
      <PhotoBox>
        <ImageOfSelf src={myImage} alt='Photo of Wade' />
      </PhotoBox>
      <InformationBox>
        <strong>Welcome to my portfolio!</strong>
        <hr />
        <strong>Hello, my name is Wade,</strong>
        <br />
        and I'm a skilled software developer with over a decade of experience in the oil and gas industry. I've transitioned my career by attending DevMountain coding boot camp at the Web Development program remotely, which equipped me with the latest web development skills and best practices.
        <br />
        <br />
        Currently, I work with In Time Tec, a company that partners with top-tier clients such as HP and PlexTrac. With my strong passion for coding and a tenacious mindset, I'm always ready to tackle complex problems and deliver high-quality code that exceeds customer expectations. My track record of success demonstrates my ability to handle challenging projects and take my skills to the next level.
        <br />
        <br />
        I have extensive experience with various technologies such as
        <SkillList>
          <SkillListItem>React</SkillListItem>
          <SkillListItem>JavaScript</SkillListItem>
          <SkillListItem>Typescript</SkillListItem>
          <SkillListItem>Node</SkillListItem>
          <SkillListItem>PostgreSQL</SkillListItem>
          <SkillListItem>MongoDB</SkillListItem>
          <SkillListItem>C#</SkillListItem>
          <SkillListItem>WPF</SkillListItem>
          <SkillListItem>Linux</SkillListItem>
          <SkillListItem>ASP .NET</SkillListItem>
        </SkillList>
        I've worked on diverse projects ranging from web applications to complex data systems.
        <br />
        <br />
        I'm committed to ongoing professional growth and continuously seek ways to improve my skills and knowledge. If you're looking for a driven, passionate, and skilled developer to join your team, I'm the one you're searching for. Let's collaborate and create something amazing that helps your business achieve its objectives. Please don't hesitate to contact me to discuss your project further.
      </InformationBox>
    </AboutMeContainer >
  );
};

export default AboutMe;