<template>
    <div class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
       <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
           <transition name="bg-fade">
               <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
           </transition>
           <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
           <transition name="alertbox">
               <div
                   class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 sm:align-middle lg:w-1/2 lg:h-[630px] w-full">
                   <div class="bg-black h-full text-center flex">
                    <div class="mx-auto flex items-center justify-center h-full">
                        <svg v-if="playVideo == false" class="animate-spin -ml-1 mr-3 h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
        <path class="opacity-10" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
                    </div>
                    
                        <video-player @error="handleError" class="mx-auto" controls :options="option" v-if="playVideo"/>

                   </div>
                   <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row fixed bottom-0 justify-end">
                       <button @click="close()" type="button"
                           class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-500 text-slate-100 font-medium focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                           {{$t('close')}}
                       </button>
                   </div>
               </div>
           </transition>
       </div>
   </div>
</template>
<script>
import UserService from '../../services/user.service'
export default {
   props:['url_rtsp'],
   data() {
       return {
        option: {
                    autoplay: true,
                    control: true,
                    fluid:true,
                    sources: [{
                        src:""
                    }]

                },
                playVideo:false,
                stream:null
       }
   },
   async created(){
            await this.postRtsp()
            this.stream = setInterval(async() => {
                await this.postRtsp()
            }, 39999);
        },
   methods:{
    postRtsp(){
        this.playVideo = false
        return this.$store.dispatch('data/StreamCCTV',this.url_rtsp).then((res)=>{
            this.option.sources[0].src = res.data.live_url
            this.setPlay()
        }).catch((err)=>{
            UserService.checkUnauthen(err.response)
        })
    },
    setPlay(){
        this.playVideo = true
    },
    close(){
        this.playVideo = false
        clearInterval(this.stream)
        this.$emit('close')
    },
    handleError(e){
        var error = e.type
        if(error == 'error'){
            setTimeout(() => {
                this.postRtsp()
            }, 5000);
        }
    },
   }
}
</script>