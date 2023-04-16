import styled from "styled-components"

interface Props {
  open: boolean
}

export const StyledMenu = styled.nav<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f1f1f1;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 40vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

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

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`
