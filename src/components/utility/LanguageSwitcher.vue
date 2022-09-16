<template>
    <button class="px-2 py-1 border border-yellow-400" :class="[locale ==='en'?'bg-black':'bg-gray-500']" @click="switchLocale('en')">EN</button>
    <button class="px-2 py-1 border border-yellow-400" :class="[locale ==='th'?'bg-black':'bg-gray-500']" @click="switchLocale('th')">TH</button>
</template>
<script>
import { loadLocaleMessages,setI18nLanguage,i18n } from '../../i18n'
    export default {
        data() {
            return {
                locale: 'en'
            }
        },
        created(){
            var locale = localStorage.getItem('lang')
            if(locale){
                this.locale = locale
            }
        },
        methods: {
            switchLocale(locale) {
                this.locale = locale
                loadLocaleMessages(i18n, locale)
                setI18nLanguage(i18n, locale)
                localStorage.setItem('lang',locale)
            }
        }
    }
</script>