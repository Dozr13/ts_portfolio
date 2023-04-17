import styled from "styled-components"

export const AboutMeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  color: white;
  background-color: #303731;
`

export const DescriptionBox = styled.div`
  height: 70%;
  width: 80%;
  position: relative;
  top: 50%;
  left: 50%;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */

  transform: translate(-50%, -50%);
`

export const PhotoBox = styled.div`
  float: left;
  height: 25%;
  width: auto;
  /* flex: 0; */
  /* position: absolute; */
  /* top: 0;
  left: 0; */
  border-right: 3px solid #000;
  border-bottom: 4px solid #000;
  border-radius: 100%;
  margin: 0 1rem 1rem 0;
  z-index: 1;
`

export const ImageOfSelf = styled.img`
  float: left;
  height: 100%;
  width: 100%;
  border-radius: 100%;
`

export const InformationBox = styled.div`
  height: 100%;
  width: 100%;
  /* flex: 1; */
  opacity: 0.8;
  background-color: gray;
  border: 2px solid blue;
  text-align: justify;
  text-indent: 2em;
`
