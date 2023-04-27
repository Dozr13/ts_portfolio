import { animateScroll as scroll } from 'react-scroll'

import { UseScrollToElementProps } from '../types/types'

export const useScrollToElement = ({ id }: UseScrollToElementProps) => {
  scroll.scrollTo(document.getElementById(id)?.offsetTop || 0, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  })
}
