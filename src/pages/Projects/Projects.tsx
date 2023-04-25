import React from 'react';

import { ProjectsContainer, ProjectImage, ProjectTitle, ProjectBox, ProjectLink } from './Projects.styles';
import billTrax from '../../assets/images/png/billTrax.png';
import gitReactComponents from '../../assets/images/png/gitReactComponents.png';
import loremCakes from '../../assets/images/png/loremCakes.png';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import { TitleBox } from '../../components/ui/PageTitle/PageTitle.styles';

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <TitleBox>
        <PageTitle title="Projects" />
      </TitleBox>
      <ProjectBox>
        <ProjectLink target='_blank' rel='noreferrer' href='https://github.com/Dozr13/Bill_Track'>
          <ProjectImage src={billTrax} alt='Image of BillTrax application' />
          <ProjectTitle>BillTrax</ProjectTitle>
        </ProjectLink>
      </ProjectBox>
      <ProjectBox>
        <ProjectLink target='_blank' rel='noreferrer' href='https://github.com/Dozr13/lorem-cakes'>
          <ProjectImage src={loremCakes} alt='Image of Lorem Cakes application' />
          <ProjectTitle>Lorem Cakes</ProjectTitle>
        </ProjectLink>
      </ProjectBox>
      <ProjectBox>
        <ProjectLink target='_blank' rel='noreferrer' href='https://github.com/GitReactComponents/git-react-comps'>
          <ProjectImage src={gitReactComponents} alt='Image of Git React Components application' />
          <ProjectTitle>Git React Components</ProjectTitle>
        </ProjectLink>
      </ProjectBox>
    </ProjectsContainer>
  );
};

export default Projects;