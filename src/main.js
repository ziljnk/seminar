import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel';

const app = createApp(App)

app
    .use(router)
    .use(VueCarousel)

app.mount('#app')
