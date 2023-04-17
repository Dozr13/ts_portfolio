import React, { useRef, useState } from 'react'
import Landing from './pages/Landing/Landing'
import AboutMe from './pages/Home/AboutMe'
import Hamburger from './components/ui/Hamburger/Hamburger';
import SideMenu from './components/ui/SideMenu/SideMenu';
import useOnClickOutside from './hooks/useOnClickOutside'
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme'

const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside({ ref: node, handler: () => setOpen(false) });

  return (
    <ThemeProvider theme={theme}>
      <div ref={node}>
        <Hamburger open={open} setOpen={setOpen} />
        <SideMenu open={open} />
      </div>
      <Landing open={open} />
      <AboutMe />
    </ThemeProvider>
  )
}

export default App