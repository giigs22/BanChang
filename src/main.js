import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.css'
import { i18n } from './i18n'


const app = createApp(App)
app.config.globalProperties.$api_baseURL = import.meta.env.VITE_API_PLANET
app.config.globalProperties.$api_backend = import.meta.env.VITE_API_SERVER
app.config.globalProperties.$interval_time = import.meta.env.VITE_INTERVAL_TIME
app.config.globalProperties.$reconnect_time = import.meta.env.VITE_RECONNECT_TIME


app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')

