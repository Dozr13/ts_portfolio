import React, { useRef, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll';
import Landing from './pages/Landing/Landing'
import AboutMe from './pages/AboutMe/AboutMe'
import Hamburger from './components/ui/Hamburger/Hamburger';
import SideMenu from './components/ui/SideMenu/SideMenu';
import useOnClickOutside from './hooks/useOnClickOutside'
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme'
import Blog from './pages/Blog/Blog';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside({ ref: node, handler: () => setOpen(false) });

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
      <div ref={node}>
        <Hamburger open={open} setOpen={setOpen} />
        <SideMenu open={open} scrollToElement={scrollToElement} setOpen={setOpen} />
      </div>
      <Landing open={open} />

      <AboutMe />

      <Projects />

      <Blog />

      <Contact />
    </ThemeProvider>
  )
}

export default App
