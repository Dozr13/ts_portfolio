import React from 'react'
import myImage from "../../assets/images/myImage.jpg"

import { AboutMePageContainer, InformationBox, PhotoBox } from './AboutMe.styles'

const AboutMe = () => {
  return (
    <AboutMePageContainer>
      <PhotoBox>
        <img src={myImage} alt='Photo of Wade' style={{ height: '100%' }} />
      </PhotoBox>
      <InformationBox>
        Hi
      </InformationBox>
    </AboutMePageContainer>
  )
}

export default AboutMe