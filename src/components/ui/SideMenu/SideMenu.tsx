import React, { useContext } from 'react';
import { StyledMenu } from './SideMenu.styles';
import { MenuContext } from '../../../context/MenuContext';

interface Props {
  scrollToElement: (id: string) => void;
}

const SideMenu = ({ scrollToElement }: Props) => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  const handleMenuItemClick = (id: string) => {
    scrollToElement(id);
    setIsOpen(false);
  }

  return (
    <StyledMenu isOpen={isOpen}>
      <a onClick={() => handleMenuItemClick("about-me")}>
        <span role="img" aria-label="about me">&#x1F9D9;&#x200D;&#x2642;&#xFE0F;</span>
        About me
      </a>
      <a onClick={() => handleMenuItemClick("projects")}>
        <span role="img" aria-label="projects">&#x1F50C;</span>
        Projects
      </a>
      <a onClick={() => handleMenuItemClick("blog")}>
        <span role="img" aria-label="blog">&#x1F4DD;</span>
        Blog
      </a>
      <a onClick={() => handleMenuItemClick("contact")}>
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
      </a>
      <a onClick={() => handleMenuItemClick("home")}>
        <span role="img" aria-label="home">&#x1F51D;</span>
        Back to top
      </a>
    </StyledMenu>
  )
}
export default SideMenu;