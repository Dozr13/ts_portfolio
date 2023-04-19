import styled from "styled-components"

export const PageTitleText = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  margin: 3rem 7rem;
  font: italic bold 3rem/1.5 "Roboto", sans-serif;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "title"
      "photo"
      "info";
    grid-gap: 1rem;
  }

  @media screen and (max-width: 425px) {
    margin: 0 1rem;
  }
`

export const TitleBox = styled.div`
  grid-area: title;
  justify-self: center;
  margin-bottom: 2rem;
`
