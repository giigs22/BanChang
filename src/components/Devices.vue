<template>
    <div class="block-layer dark:bg-block-layer-dark bg-block-layer-light-op5 relative mb-3 mt-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            {{$t('device')}}
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 bg-dark-light" viewBox="0 0 43.026 43.026">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="" />
            </svg>

        </div>
        <div class="flex flex-col ml-10 mt-5">
            <div class="flex text-green-500 text-2xl">
                <div class="text-right w-7">{{online}}</div>
                <div class="ml-3 text-left">{{$t('online')}}</div>
            </div> 
            <div class="flex text-red-500 text-2xl">
                    <div class="text-right w-7">{{offline}}</div>
                    <div class="ml-3 text-left">{{$t('offline')}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                online: 0,
                offline: 0
            }
        },
        async created(){
            await this.getstatus();
            setInterval(async() => {
                await this.getstatus();
            }, this.$interval_time);
        },
        methods: {
            getstatus(){
                return this.$store.dispatch('sensor/getStatus').then((res)=>{
                    var data = res.data
                    this.online = data.online
                    this.offline = data.offline
                })
            }
        }
    }
</script>