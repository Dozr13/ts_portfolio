import React, { useRef, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import Footer from './components/ui/Footer/Footer';
import Navbar from './components/ui/Navbar/Navbar';
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
      <div ref={node}>
        <Navbar />
      </div>
      <Landing isOpen={isOpen} />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
