import React from 'react'
import myImage from "../../assets/images/myImage.jpg"

import { AboutMeContainer, DescriptionBox, ImageOfSelf, InformationBox, PhotoBox } from './AboutMe.styles'

const AboutMe = () => {
  return (
    <AboutMeContainer id='about-me'>
      <DescriptionBox>
        <InformationBox>
          <PhotoBox>
            <ImageOfSelf src={myImage} alt='Photo of Wade' />
          </PhotoBox>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, perspiciatis nostrum sed adipisci distinctio sit minima cumque rem aspernatur eveniet aut tempore corporis possimus! Non deserunt veritatis libero. Accusantium, saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. A porro praesentium autem dignissimos sapiente vero voluptate modi mollitia, maiores odit deserunt magni nisi, corporis temporibus pariatur ipsa, ab delectus! Debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates voluptatum a deleniti architecto facilis in unde et sed dolores, rem eligendi nam ut quia quidem soluta repellendus nemo ipsam excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur dolore recusandae? Eaque dicta fugiat suscipit! Harum, et! Suscipit obcaecati aliquam repellendus sed assumenda numquam quidem earum dicta quasi porro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis maxime iste, molestiae laudantium minima sed temporibus eos velit repellat fugit modi iure, sequi distinctio quod ipsa eius unde sapiente porro!
        </InformationBox>
      </DescriptionBox>
    </AboutMeContainer>
  )
}

export default AboutMe