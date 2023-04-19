import styled from "styled-components"

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1rem 1fr 1rem;
  grid-template-rows: 0.8fr repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 15px;
  height: 100%;
  width: 100vw;
  position: relative;
  color: white;
  background-color: #303731;
  align-items: end;
  padding: 2.5rem 0;
  justify-content: center;
  grid-template-areas: "title" "image1" "image2" "image3";

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: "title" "image1" "image2" "image3";
    grid-gap: 1rem;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: "title" "image1" "image2" "image3";
    grid-gap: 1rem;
  }
`

export const ProjectBox = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 1.5rem;
`

export const ProjectImage = styled.img`
  border: 1px double #fff;
  width: 100%;
`

export const ProjectTitle = styled.p`
  text-align: center;
  font: italic bold 1rem/1.5 "Roboto", sans-serif;
  margin: 0;
`

export const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`
