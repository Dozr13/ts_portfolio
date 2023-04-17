import styled from "styled-components"

interface Props {
  open: boolean
}

export const LandingContentContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #303731;
`

export const LandingHeader = styled.header`
  height: 10vh;
  width: 100vw;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const IntroText = styled.p`
  font-size: 2rem;
  margin-bottom: 0;
`

export const NameSignature = styled.p<Props>`
  position: absolute;
  bottom: 1%;
  font-family: "Charm", cursive;
  font-size: 3rem;
  margin-top: 0;
  color: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
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
//   color: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
// `
