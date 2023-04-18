import React from 'react'
import myImage from "../../assets/images/myImage.jpg"

import { AboutMeContainer, DescriptionBox, ImageOfSelf, InformationBox, PhotoBox } from './AboutMe.styles'

const AboutMe = () => {
  return (
    <AboutMeContainer id='about-me'>
      <DescriptionBox>
        <PhotoBox>
          <ImageOfSelf src={myImage} alt='Photo of Wade' />
        </PhotoBox>
        <InformationBox>
          Welcome to my portfolio! I'm a seasoned software developer with a decade of experience in the oil and gas industry, having worked with top-tier companies such as HP and PlexTrac. I have a strong passion for code and enjoy the process of bringing ideas to life.

          My strength as a developer lies in my ability to solve complex problems with a tenacious mindset. I'm dedicated to delivering high-quality code that exceeds customer expectations, and I thrive on challenging projects that push my skills to the next level.

          Throughout my career, I've developed an extensive skillset in technologies such as React, Typescript, Node, PostgreSQL, Mongo, C#, ASP .NET, Linux, and JavaScript. I've worked on a variety of projects, ranging from web applications to complex data systems, and I have a proven track record of success.

          If you're seeking a developer who is driven, passionate, and skilled, then look no further. I'm excited to bring my expertise to your team and help you achieve your business objectives. Let's connect and explore how we can collaborate to create something amazing!
        </InformationBox>
      </DescriptionBox>
    </AboutMeContainer>
  )
}

export default AboutMe