import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
    faHeart, 
    faMoon, 
    faBell,
    faAddressBook, 
    faCalendar, 
    faThumbsUp
} from '@fortawesome/free-regular-svg-icons'

import { faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'

library.add([
    faHeart, 
    faMoon, 
    faAddressBook, 
    faBell,
    faCalendar,
    faAngleRight,
    faAngleLeft,
    faThumbsUp
])

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
