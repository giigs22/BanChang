import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.css'
import { i18n } from './i18n'

const app = createApp(App)
app.config.globalProperties.$api_baseURL = 'https://api.planetcloud.cloud/banchang/smartcity/'
app.config.globalProperties.$api_backend = 'http://localhost:8000/api/'
app.config.globalProperties.$interval_time = '60000' 

app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
