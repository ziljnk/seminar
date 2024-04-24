import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSidePanel from 'vue3-side-panel';
import 'vue3-side-panel/dist/vue3-side-panel.css'

const app = createApp(App)

app
    .use(router)
    .use(VueSidePanel);

app.mount('#app')
