<template>
    <button class="px-2 py-1 border border-yellow-400 mr-2" :class="[theme==='dark'?'bg-black':'bg-gray-500']" @click="switchTheme('dark')">Dark</button><button
        class="px-2 py-1 border border-yellow-400" :class="[theme==='white'?'bg-black':'bg-gray-500']" @click="switchTheme('white')">White</button>
</template>
<script>
export default {
    data() {
        return {
            theme:null
        }
    },
    created(){
        var theme = localStorage.getItem('theme')
        if(theme === null || theme === undefined){
            localStorage.setItem('theme','dark')
            this.theme = 'dark'
            this.$store.dispatch('template/setTheme','dark')

        }else{
            localStorage.setItem('theme',theme)
            this.theme = theme
            this.$store.dispatch('template/setTheme',theme)
            if(theme == 'dark'){
                document.documentElement.classList.add('dark')
            }else{
                document.documentElement.classList.remove('dark')
            }
            
        }
    },
    methods:{
        switchTheme(theme){
            localStorage.setItem('theme',theme)
            this.theme = theme
            this.$store.dispatch('template/setTheme',theme)
            if(theme == 'dark'){
                document.documentElement.classList.add('dark')
            }else{
                document.documentElement.classList.remove('dark')
            }
        }
    }
}
</script>