import { library } from '@fortawesome/fontawesome-svg-core'

// Ícones Solid
import {
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowDown,
  faBagShopping,
  faBars,
} from '@fortawesome/free-solid-svg-icons'

// Ícones Brand
import {
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

export const icons = {
  instagram: 'fa-brands fa-instagram',
  facebook: 'fa-brands fa-facebook',

  'arrow-left': 'fa-solid fa-arrow-left',
  'arrow-right': 'fa-solid fa-arrow-right',
  'arrow-up': 'fa-solid fa-arrow-up',
  'arrow-down': 'fa-solid fa-arrow-down',

  'bag-shopping': 'fa-solid fa-bag-shopping',
  menu: 'fa-solid fa-bars',
}

export const iconNames = Object.keys(icons)

export function registerIcons() {
  library.add(
    faArrowLeft,
    faArrowRight,
    faArrowUp,
    faArrowDown,
    faBagShopping,
    faBars,
    faInstagram,
    faFacebook,
  )
}