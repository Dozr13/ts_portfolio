import React from 'react';
import { StyledMenu } from './SideMenu.styles';

interface Props {
  open: boolean;
}

const SideMenu = ({ open }: Props) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">&#x1F9D9;&#x200D;&#x2642;&#xFE0F;</span>
        About me
      </a>
      <a href="/">
        <span role="img" aria-label="price">&#x1F50C;</span>
        Projects
      </a>
      <a href="/">
        <span role="img" aria-label="blog">&#x1F4DD;</span>
        Blog
      </a>
      <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
      </a>
    </StyledMenu>
  )
}
export default SideMenu;