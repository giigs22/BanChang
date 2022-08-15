import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from './store'
import './assets/style.css'
import { i18n } from './i18n'
import dayjs from 'dayjs'

const app = createApp({
    extends:App,
    beforeCreate(){
        this.$store.dispatch('server/getSettingSensor').then((res)=>{
           
            app.config.globalProperties.$api_baseURL = res.data.sensor_api
            app.config.globalProperties.$api_login = res.data.sensor_api_token
            app.config.globalProperties.$api_user = res.data.sensor_api_user
            app.config.globalProperties.$api_pass = res.data.sensor_api_pass
            this.$store.dispatch('server/setting');
        })
    }
})
const store = createStore(app)
app.config.globalProperties.$api_backend = import.meta.env.VITE_API_SERVER
app.config.globalProperties.$interval_time = import.meta.env.VITE_INTERVAL_TIME
app.config.globalProperties.$dayjs = dayjs

app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
