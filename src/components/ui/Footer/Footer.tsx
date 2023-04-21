import React from 'react'

import { FooterText, FooterTextBold, StyledFooter } from './Footer.styles'

const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>
        Thank you for visiting my portfolio! Please note that I am constantly working to improve and update my work, so be sure to check back often for new projects and updates. In the coming weeks, I'll be adding more details about my creative process, showcasing some recent collaborations, and sharing some exciting news about upcoming projects.
        <br />
        <FooterTextBold>Stay tuned!</FooterTextBold>
      </FooterText>
    </StyledFooter>
  )
}

export default Footer