import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

// this.axios.get(`${location.protocol}//${window.location.hostname}/api/routing/get.php`).then((res) => { app.config.globalProperties.$data = res.data;});
this.axios.get('http://localhost/[projects]/ForSchool-MinorcaWebSite/api/routing/get.php').then((res) => { app.config.globalProperties.$data = res.data;});


app.use(router).use(VueAxios, axios).mount('#app')

