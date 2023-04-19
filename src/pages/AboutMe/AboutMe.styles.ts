import styled from "styled-components"

export const AboutMeContainer = styled.div`
  display: grid;
  grid-template-columns: 1rem 1fr 1rem;
  grid-template-rows: 0.5fr 1fr 5fr;
  grid-column-gap: 0px;
  grid-row-gap: 15px;
  width: 100vw;
  position: relative;
  color: white;
  background-color: #303731;
  align-items: end;
  padding: 2.5rem 0;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-gap: 1rem;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: 0.9fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "title"
      "photo"
      "info";
    grid-column-gap: 0px;
    grid-row-gap: 15px;
  }
`

export const PhotoBox = styled.div`
  grid-area: photo;
  top: 0;
  height: 200px;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  border-radius: 100%;
  margin: 0 1rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageOfSelf = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 30%;
  margin-right: 1rem;

  @media screen and (max-width: 425px) {
    width: 200px;
    height: 210px;
  }
`

export const InformationBox = styled.div`
  grid-area: info;
  width: 80%;
  background-color: gray;
  border: 2px solid blue;
  text-align: center;
  padding: 1rem;
  margin: 0 auto;
  margin-top: 1rem;

  @media screen and (max-width: 425px) {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
  }
`
