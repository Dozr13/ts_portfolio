import React, { useRef, useState } from 'react'

// import { animateScroll as scroll } from 'react-scroll';
import { ThemeProvider } from 'styled-components';

import Footer from './components/ui/Footer/Footer';
import Navbar from './components/ui/Navbar/Navbar';
import useOnClickOutside from './hooks/useOnClickOutside'
import AboutMe from './pages/AboutMe/AboutMe'
import Contact from './pages/Contact/Contact';
import Landing from './pages/Landing/Landing'
import Projects from './pages/Projects/Projects';
import { theme } from './styles/theme'
// import Hamburger from './components/ui/Hamburger/Hamburger';
// import SideMenu from './components/ui/SideMenu/SideMenu';
// import { MenuContext } from './context/MenuContext';
// import SocialLinksBar from './components/ui/SocialLinks/SocialLinksBar';
// import { SocialLinksPageBox } from './components/ui/SocialLinks/SocialLinksBar.styles';

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside({ ref: node, handler: () => setIsOpen(false) });


  return (
    <ThemeProvider theme={theme}>
      {/* <MenuContext.Provider value={{ isOpen, setIsOpen }}> */}
      <div ref={node}>
        <Navbar />
      </div>
      <Landing isOpen={isOpen} />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      {/* <SocialLinksPageBox>
          <SocialLinksBar backgroundColor='${theme.primaryDark}' />
        </SocialLinksPageBox> */}
      {/* </MenuContext.Provider> */}
    </ThemeProvider>
  );
};

export default App;
