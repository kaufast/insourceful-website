import AOS from 'aos'
import 'aos/dist/aos.css'

export const initAOS = () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 120,
    delay: 0,
  })
}

export default AOS