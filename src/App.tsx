import React, { useRef, useState } from 'react'
import Landing from './pages/Landing/Landing'
import AboutMe from './pages/Home/AboutMe'
import Hamburger from './components/ui/Hamburger/Hamburger';
import SideMenu from './components/ui/SideMenu/SideMenu';

const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<any>();
  return (
    <div>
      <div ref={node}>
        <Hamburger open={open} setOpen={setOpen} />
        <SideMenu open={open} />
      </div>
      <Landing />
      <AboutMe />
    </div>
  )
}

export default App