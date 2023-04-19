import React, { useRef, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll';
import Landing from './pages/Landing/Landing'
import AboutMe from './pages/AboutMe/AboutMe'
import Hamburger from './components/ui/Hamburger/Hamburger';
import SideMenu from './components/ui/SideMenu/SideMenu';
import useOnClickOutside from './hooks/useOnClickOutside'
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme'
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import { MenuContext } from './context/MenuContext';
// import SocialLinksBar from './components/ui/SocialLinks/SocialLinksBar';
// import { SocialLinksPageBox } from './components/ui/SocialLinks/SocialLinksBar.styles';

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside({ ref: node, handler: () => setIsOpen(false) });

  // Scroll to a given element ID using smooth scrolling
  const scrollToElement = (id: string) => {
    scroll.scrollTo(document.getElementById(id)?.offsetTop || 0, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <MenuContext.Provider value={{ isOpen, setIsOpen }}>
        <div ref={node}>
          <Hamburger />
          <SideMenu scrollToElement={scrollToElement} />
        </div>
        <Landing isOpen={isOpen} />
        <AboutMe />
        <Projects />
        <Contact />
        {/* <SocialLinksPageBox>
          <SocialLinksBar backgroundColor='#303731' />
        </SocialLinksPageBox> */}
      </MenuContext.Provider>
    </ThemeProvider>
  );
};

export default App;
