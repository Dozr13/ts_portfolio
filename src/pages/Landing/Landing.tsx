import React, { useRef, useState } from 'react'
import { ReactComponent as Logo } from '../../assets/images/svg/logo-stamp.svg';

import { LandingContentContainer, LandingHeader, LogoContainer, NameSignature } from './Landing.styles'

const Landing = () => {
  return (
    <LandingContentContainer>
      <LandingHeader>
        <NameSignature>Wade Pate</NameSignature>
      </LandingHeader>
      <LogoContainer>
        <Logo src={require('../../assets/images/svg/logo-stamp.svg')} alt='WP Logo' />
      </LogoContainer>
    </LandingContentContainer>
  )
}

// const useOnClickOutside = (ref, handler) => {
//   React.useEffect(() => {
//     const listener = event => {
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }
//       handler(event);
//     };
//     document.addEventListener('mousedown', listener);

//     return () => {
//       document.removeEventListener('mousedown', listener);
//     };
//   },
//     [ref, handler],
//   );
// };

export default Landing