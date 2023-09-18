import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faXmark, faFacebook, faInstagram, faGithub, faTwitter)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
