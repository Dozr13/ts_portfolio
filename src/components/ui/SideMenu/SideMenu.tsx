import React, { useContext, useEffect } from 'react';

import { MenuLink, MenuListItem, StyledMenu } from './SideMenu.styles';
import { MenuContext } from '../../../context/MenuContext';
import { SideMenuProps } from '../../../types/types';
import SocialListRow from '../SocialList/SocialListRow';


const SideMenu = ({ handleMenuItemClick }: SideMenuProps) => {
  const { isOpenContext } = useContext(MenuContext);

  useEffect(() => {
    if (isOpenContext) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpenContext]);

  return (
    <StyledMenu isOpen={isOpenContext}>
      <MenuListItem grid-area='aboutMe'>
        <MenuLink onClick={() => handleMenuItemClick("about-me")}>
          <span role="img" aria-label="about me">&#x1F9D9;&#x200D;&#x2642;&#xFE0F;</span>
          About me
        </MenuLink>
      </MenuListItem>
      <MenuListItem grid-area='projects'>
        <MenuLink onClick={() => handleMenuItemClick("projects")}>
          <span role="img" aria-label="projects">&#x1F50C;</span>
          Projects
        </MenuLink>
      </MenuListItem>
      <MenuListItem grid-area='contact'>
        <MenuLink onClick={() => handleMenuItemClick("contact")}>
          <span role="img" aria-label="contact">&#x1f4e9;</span>
          Contact
        </MenuLink>
      </MenuListItem>
      <MenuListItem grid-area='home'>
        <MenuLink onClick={() => handleMenuItemClick("home")}>
          <span role="img" aria-label="home">&#x1F51D;</span>
          Back to top
        </MenuLink>
      </MenuListItem>
      <SocialListRow header='Find me at:' grid-area='socialLinks' />
    </StyledMenu >
  );
};
export default SideMenu;