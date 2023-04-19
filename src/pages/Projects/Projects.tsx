import React from 'react'
import billTrax from '../../assets/images/billTrax.png'
import gitReactComponents from '../../assets/images/gitReactComponents.png'
import loremCakes from '../../assets/images/loremCakes.png'
import { ProjectsContainer, ProjectImage, ProjectTitle, ProjectBox, ProjectLink } from './Projects.styles'
import PageTitle from '../../components/ui/PageTitle/PageTitle'
import { TitleBox } from '../../components/ui/PageTitle/PageTitle.styles'

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <TitleBox>
        <PageTitle title="Projects" />
      </TitleBox>

      <ProjectBox grid-area='image1'>
        <ProjectLink target='_blank' rel='noreferrer' href='https://github.com/Dozr13/Bill_Track'>
          <ProjectImage src={billTrax} alt='Image of BillTrax application' />
          <ProjectTitle>BillTrax</ProjectTitle>
        </ProjectLink>
      </ProjectBox>

      <ProjectBox grid-area='image2'>
        <ProjectLink target='_blank' rel='noreferrer' href='https://github.com/Dozr13/lorem-cakes'>
          <ProjectImage src={loremCakes} alt='Image of Lorem Cakes application' />
          <ProjectTitle>Lorem Cakes</ProjectTitle>
        </ProjectLink>
      </ProjectBox>

      <ProjectBox grid-area='image3'>
        <ProjectLink target='_blank' rel='noreferrer' href='https://github.com/GitReactComponents/git-react-comps'>
          <ProjectImage src={gitReactComponents} alt='Image of Git React Components application' />
          <ProjectTitle>Git React Components</ProjectTitle>
        </ProjectLink>
      </ProjectBox>
    </ProjectsContainer>
  )
}

export default Projects