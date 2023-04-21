import { animateScroll as scroll } from 'react-scroll'

export const scrollToElement = (id: string) => {
  scroll.scrollTo(document.getElementById(id)?.offsetTop || 0, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
  })
}
