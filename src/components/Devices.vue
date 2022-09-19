<template>
    <div class="block-layer relative mb-3 mt-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            {{$t('device')}}
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 43.026 43.026">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
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
import _ from 'lodash'
    export default {
        data() {
            return {
                online: 0,
                offline: 0
            }
        },
        computed: {
           device_status(){
            return this.$store.state.widget.status_device
           }
        },
        watch:{
            device_status:{
                deep:true,
                handler(){
                    this.showStatusDevice()
                }
            }
        },
        methods: {
           showStatusDevice(){
            var data = this.device_status
            var keys = _.keys(data)
            var on = 0
            var off = 0
            keys.forEach(el=>{
                on +=  _.get(data,el+'.online')
                
            })
            keys.forEach(el=>{
                off += _.get(data,el+'.offline')
            })
            this.online = on
            this.offline = off
           }
        }
    }
</script>