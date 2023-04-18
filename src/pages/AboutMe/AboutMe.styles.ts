import styled from "styled-components"

export const AboutMeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2rem;
  height: 100vh;
  width: 100vw;
  position: relative;
  color: white;
  background-color: #303731;
  align-items: end;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "photo"
      "info";
    grid-gap: 1rem;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "photo"
      "info";
    grid-gap: 1rem;
  }
`

export const DescriptionBox = styled.div`
  position: relative;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const PhotoBox = styled.div`
  grid-area: photo;
  float: right;
  height: 100px;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  border-radius: 100%;
  margin: 0 0 1rem 1rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageOfSelf = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-right: 1rem;

  @media screen and (max-width: 425px) {
    float: right;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-left: 1rem;
  }
`

export const InformationBox = styled.div`
  grid-area: info;
  background-color: gray;
  border: 2px solid blue;
  text-align: justify;
  padding: 1rem;
`
