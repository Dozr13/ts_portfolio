import React, { useRef, useState } from 'react';

import CogWheelContainer from './components/ui/CogWheels/CogWheelContainer';
import Footer from './components/ui/Footer/Footer';
import Navbar from './components/ui/Navbar/Navbar';
import { MenuContext } from './context/MenuContext';
import useOnClickOutside from './hooks/useOnClickOutside';
import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import Landing from './pages/Landing/Landing';
import Projects from './pages/Projects/Projects';
import { ThemeMode } from './types/types';

interface AppProps {
  toggleTheme: () => void;
  currentTheme: ThemeMode;
}

const App = ({ currentTheme, toggleTheme }: AppProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside({ ref: node, handler: () => setIsOpen(false) });

  return (
    <MenuContext.Provider value={{ isOpenContext: isOpen, setMenuOpen: (isOpen: boolean) => setIsOpen(isOpen) }}>
      <CogWheelContainer
        cogCount={5}
        speed={10}
      />
      <div ref={node}>
        <Navbar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      </div>
      <Landing />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </MenuContext.Provider>
  );
};

export default App;
