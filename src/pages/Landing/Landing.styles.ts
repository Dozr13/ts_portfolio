import styled from "styled-components"

interface Props {
  isOpen: boolean
}

export const LandingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #303731;
  padding: 0 0 2.5rem 0;
`

export const LandingHeader = styled.header`
  height: 10vh;
  width: 100vw;
  position: absolute;
  top: 0;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 70%;
  width: 100%;
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
`

export const IntroText = styled.p`
  font-size: 2rem;
  margin-bottom: 0;
  flex: 1;
`

export const NameSignature = styled.p<Props>`
  font-family: "Charm", cursive;
  font-size: 3.5rem;
  margin: 0;
  color: ${({ isOpen }) => (isOpen ? "#0D0C1D" : "#EFFFFA")};
`

export const TitleText = styled.p`
  font-size: 1.3rem;
  margin-top: 0;
`

//! Full screen
// export const NameSignature = styled.p<Props>`
//   position: absolute;
//   top: 1%;
//   left: 2rem;
//   font-family: "Charm", cursive;
//   font-size: 3rem;
//   padding-left: 4rem;
//   margin-top: 2.5rem;
//   color: ${({ isOpen }) => (isOpen ? "#0D0C1D" : "#EFFFFA")};
// `
