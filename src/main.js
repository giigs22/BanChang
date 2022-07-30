import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.css'
import { i18n } from './i18n'
import dayjs from 'dayjs'

const local_token = JSON.parse(localStorage.getItem('token'))
if(local_token === null){
  localStorage.setItem('token',JSON.stringify({value:null,expire:null}))
}

const local_token_planet = localStorage.getItem('token_planet')
if(local_token_planet === null){
  localStorage.setItem('token_planet',null)
}

const app = createApp(App)
app.config.globalProperties.$api_baseURL = import.meta.env.VITE_API_PLANET
app.config.globalProperties.$api_backend = import.meta.env.VITE_API_SERVER
app.config.globalProperties.$interval_time = import.meta.env.VITE_INTERVAL_TIME
app.config.globalProperties.$dayjs = dayjs

app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
