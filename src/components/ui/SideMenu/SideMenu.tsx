import React from 'react';

import { MenuListItemsContainer, MenuLink, MenuListItem, StyledMenu } from './SideMenu.styles';
import SocialLinksBar from '../SocialLinks/SocialLinksBar';
import { SocialLinksPageBox } from '../SocialLinks/SocialLinksBar.styles';

interface Props {
  isOpen: boolean;
  handleMenuItemClick: (id: string) => void;
}

const SideMenu = ({ isOpen, handleMenuItemClick }: Props) => {
  console.log(isOpen)
  return (
    <StyledMenu isOpen={isOpen}>
      <MenuListItemsContainer>
        <MenuListItem>
          <MenuLink onClick={() => handleMenuItemClick("about-me")}>
            <span role="img" aria-label="about me">&#x1F9D9;&#x200D;&#x2642;&#xFE0F;</span>
            About me
          </MenuLink>
        </MenuListItem>
        <MenuListItem>
          <MenuLink onClick={() => handleMenuItemClick("projects")}>
            <span role="img" aria-label="projects">&#x1F50C;</span>
            Projects
          </MenuLink>
        </MenuListItem>
        <MenuListItem>
          <MenuLink onClick={() => handleMenuItemClick("contact")}>
            <span role="img" aria-label="contact">&#x1f4e9;</span>
            Contact
          </MenuLink>
        </MenuListItem>
        <MenuListItem>
          <MenuLink onClick={() => handleMenuItemClick("home")}>
            <span role="img" aria-label="home">&#x1F51D;</span>
            Back to top
          </MenuLink>
        </MenuListItem>
      </MenuListItemsContainer>
      <SocialLinksPageBox>
        <SocialLinksBar backgroundColor='#8d918d' />
      </SocialLinksPageBox>
    </StyledMenu>
  )
}
export default SideMenu;