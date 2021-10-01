import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

// axios.get(`${location.protocol}//${window.location.hostname}/api/routing/languages.php`).then((res) => {app.provide('in_languages', res.data);})
axios.get('http://localhost/[projects]/ForSchool-MinorcaWebSite/api/routing/languages.php').then((res) => {app.provide('in_languages', res.data); })

app.use(router).use(VueAxios, axios).mount('#app')

