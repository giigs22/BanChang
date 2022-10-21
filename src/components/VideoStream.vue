<template>
    <div class="block-layer dark:bg-block-layer-dark bg-block-layer-light-op5 my-4">
        <div v-for="item in listdata">
            <video-player controls>
                <source :src="item.rtsp" type="rtsp/mp4">
            </video-player>
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