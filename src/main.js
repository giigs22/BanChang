import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from './store'
import { loadLocaleMessages,setI18nLanguage,i18n } from './i18n'
import dayjs from 'dayjs'
import AlertDialog from './components/utility/AlertDialog.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/style.css'
import './assets/style_th.css'
import './assets/responsive.css'

const app = createApp({
    extends:App,
    beforeCreate(){
        this.$store.dispatch('server/getSettingSensor').then((res)=>{
            app.config.globalProperties.$api_baseURL = res.data.sensor_api
            app.config.globalProperties.$api_login = res.data.sensor_api_token
            app.config.globalProperties.$api_user = res.data.sensor_api_user
            app.config.globalProperties.$api_pass = res.data.sensor_api_pass
            this.$store.dispatch('server/setting');
            this.$store.dispatch('server/setStatus',{type:'server_data',value:true})

        }).catch((err)=>{
            if(err.code === 'ERR_NETWORK'){
                this.$store.dispatch('server/setStatus',{type:'server_data',value:false})
            }
        })

    }
})
const store = createStore(app)
app.use(store)
app.use(VueAxios, axios)

app.component('AlertDialog',AlertDialog);


app.config.globalProperties.$api_backend = import.meta.env.VITE_API_SERVER
app.config.globalProperties.$interval_time = import.meta.env.VITE_INTERVAL_TIME
app.config.globalProperties.$dayjs = dayjs

app.use(router)
app.use(i18n)

const lang = localStorage.getItem('lang')
if(lang){
    loadLocaleMessages(i18n, lang)
    setI18nLanguage(i18n, lang)
    localStorage.setItem('lang',lang)
}else{
    loadLocaleMessages(i18n, 'en')
    setI18nLanguage(i18n, 'en')
    localStorage.setItem('lang','en')
}


app.mount('#app')
