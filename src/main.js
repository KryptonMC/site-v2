import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faBook, faGithub, faDiscord)

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
