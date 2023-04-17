import styled from "styled-components"

interface Props {
  open: boolean
}

export const StyledMenu = styled.nav<Props>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f1f1f1;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: center;
  padding: 2rem;
  padding-bottom: 0;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`
