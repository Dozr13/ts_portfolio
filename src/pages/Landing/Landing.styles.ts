import styled from "styled-components"

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
`

export const Logo = styled.img`
  width: 5vh;
  height: 3vh;
  margin: 55px;
`

export const NameSignature = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Charm", cursive;
  font-size: 3rem;
  padding-left: 3.5rem;
  margin-top: 3rem;
`
