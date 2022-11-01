<template>
    <div class="block-layer dark:bg-block-layer-dark bg-block-layer-light-op5 my-4">
        <div class="grid grid-cols-6 gap-3 overflow-y-scroll h-[500px]">
            <div v-for="item in listdata" class="lg:col-span-2 col-span-3">
            <h1 class="my-2 font-bold text-orange-400">{{item.name}}</h1>
            <video-player controls class="w-full h-32">
                <source :src="item.rtsp" type="rtsp/mp4">
            </video-player>
        </div>
        </div>
       
        
    </div>
</template>
<script>
    export default {
        props: ['listdata'],
        data() {
            return {

            }
        },
    }
</script>