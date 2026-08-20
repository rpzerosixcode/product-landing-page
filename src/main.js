import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { registerIcons } from './icons'

import './styles/tokens.css'
import './styles/global.css'

registerIcons()

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')