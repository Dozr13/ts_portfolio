import React from 'react';

import { AboutMeContainer, ImageOfSelf, InformationBox, PhotoBox } from './AboutMe.styles';
import myImage from "../../assets/images/myImage.jpg";
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
        <strong>Hi</strong>, <strong>I'm Wade</strong>,
        <br />
        a seasoned software developer with a decade of experience in the oil and gas industry, having worked with top-tier companies such as HP and PlexTrac. I have a strong passion for code and enjoy the process of bringing ideas to life.
        <br />
        <br />
        My strength as a developer lies in my ability to solve complex problems with a tenacious mindset. <br /> I'm dedicated to delivering high-quality code that exceeds customer expectations, and I thrive on challenging projects that push my skills to the next level.
        <br />
        <br />
        Throughout my career, I've developed an extensive skillset in technologies such as React, Typescript, Node, PostgreSQL, Mongo, C#, ASP .NET, Linux, and JavaScript. I've worked on a variety of projects, ranging from web applications to complex data systems, and I have a proven track record of success.
        <br />
        <br />
        If you're seeking a developer who is driven, passionate, and skilled, then look no further. I'm excited to bring my expertise to your team and help you achieve your business objectives.
        <br />
        Let's connect and explore how we can collaborate to create something amazing!
      </InformationBox>
    </AboutMeContainer >
  );
};

export default AboutMe;