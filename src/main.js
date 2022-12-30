import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { loadLocaleMessages,setI18nLanguage,i18n } from './i18n'
import dayjs from 'dayjs'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/style.css'
import './assets/style_th.css'
import './assets/responsive.css'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import AlertDialog from './components/utility/AlertDialog.vue'

const app = createApp({
    extends:App,
    beforeCreate(){
            this.$store.dispatch('server/setStatus',true)
            var theme = localStorage.getItem('theme')
            if(theme == null || theme == undefined){
                localStorage.setItem('theme','dark')
            }else{
                if(theme == 'dark'){
                    document.documentElement.classList.add('dark')
                }else{
                    document.documentElement.classList.remove('dark')
                }
            }
            var lang = localStorage.getItem('lang')
            if(lang == null || lang == undefined){
                localStorage.setItem('lang','en')
            }
    }
})
app.use(store)
app.use(VueAxios, axios)
app.use(VueVideoPlayer)
app.component('Loading',VueLoading)
app.component('AlertDialog',AlertDialog)

app.config.globalProperties.$api_backend = import.meta.env.VITE_API_SERVER
app.config.globalProperties.$etourism_service_backend = import.meta.env.ETOURISM_SERVICE
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
