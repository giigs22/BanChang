<template>
    <div class="block-layer dark:bg-block-layer-dark bg-block-layer-light-op5 my-4">
        <div class="grid grid-cols-6 gap-3 overflow-y-scroll h-[500px]">
            <div v-for="item in listdata" class="lg:col-span-2 col-span-3">
            <h1 class="my-2 font-bold" :class="[item.status?'text-green-600':'text-red-600']">{{item.name}}</h1>
            <div class="bg-black w-full h-32 relative">
                <div class="absolute inset-x-0 mx-auto">
                <button class="bg-slate-500 p-2 rounded-lg" @click="streamModal(item.rtsp)">
                <svg class="h-9 w-9 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg>
               </button>
            </div>
            </div>
        </div>
        </div>
    </div>
    <StreamCCTV :url_rtsp="select_link" v-if="showModal" @close="closeModal"></StreamCCTV>
</template>
<script>
import StreamCCTV from './modals/StreamCCTV.vue'

    export default {
        props: ['listdata'],
        components:{
            StreamCCTV
        },
        data() {
            return {
                select_link:null,
                showModal:false
            }
        },
        methods:{
            streamModal(rtsp){
                this.select_link = rtsp
                this.showModal = true
            },
            closeModal(){
                this.select_link= null
                this.showModal = false
            }
        }
    }
</script>