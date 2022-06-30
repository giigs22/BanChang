<template>
    <button class="px-2 py-1 border border-yellow-400" :class="[lang ==='en'?'bg-black':'bg-gray-500']" @click="switchLang('en')">EN</button>
    <button class="px-2 py-1 border border-yellow-400" :class="[lang ==='th'?'bg-black':'bg-gray-500']" @click="switchLang('th')">TH</button>
</template>
<script>
    export default {
        data() {
            return {
                lang: null
            }
        },
        created() {
            var lang = localStorage.getItem('lang')
            if (lang === null || lang === undefined) {
                localStorage.setItem('lang', 'en')
                this.lang = 'en'
            } else {
                localStorage.setItem('lang', lang)
                this.lang = lang
            }
        },
        methods: {
            switchLang(lang) {
                localStorage.setItem('lang', lang)
                this.lang = lang
            }
        }
    }
</script>