import React, { useRef, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import CogWheelContainer from './components/ui/CogWheels/CogWheelContainer';
import Footer from './components/ui/Footer/Footer';
import Navbar from './components/ui/Navbar/Navbar';
import { MenuContext } from './context/MenuContext';
import useOnClickOutside from './hooks/useOnClickOutside';
import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import Landing from './pages/Landing/Landing';
import Projects from './pages/Projects/Projects';
import { theme } from './styles/theme';


const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside({ ref: node, handler: () => setIsOpen(false) });

  return (
    <ThemeProvider theme={theme}>
      <MenuContext.Provider value={{ isOpenContext: isOpen, setMenuOpen: (isOpen: boolean) => setIsOpen(isOpen) }}>
        <CogWheelContainer
          cogCount={5}
          speed={10}
        />
        <div ref={node}>
          <Navbar />
        </div>
        <Landing />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </MenuContext.Provider>
    </ThemeProvider>
  );
};

export default App;
