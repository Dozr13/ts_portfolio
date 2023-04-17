import React from 'react'

import { AboutMePageContainer, InformationBox, PhotoBox } from './AboutMe.styles'

const AboutMe = () => {
  return (
    <AboutMePageContainer>
      <PhotoBox>
        <img src={require('../../assets/images/self.jpg')} alt='Photo of Wade' style={{ height: '100%' }} />
      </PhotoBox>
      <InformationBox>
        Hi
      </InformationBox>
    </AboutMePageContainer>
  )
}

export default AboutMe