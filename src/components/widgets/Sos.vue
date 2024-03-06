<template>
    <div class="block-widgets col-span-12 lg:col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">{{$t('sos')}}</span>
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026" viewBox="0 0 43.026 43.026"
                class="bg-dark-light">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="" />
            </svg>
        </div>
        <div class="detail gap-10">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="145.018" height="145.018" viewBox="0 0 145.018 145.018" class="bg-dark-light w-32">
                    <path id="Icon_metro-help" data-name="Icon metro-help"
                        d="M75.079,1.928a72.509,72.509,0,1,0,72.509,72.509A72.509,72.509,0,0,0,75.079,1.928ZM47.889,74.437a27.191,27.191,0,1,1,27.191,27.191A27.191,27.191,0,0,1,47.889,74.437Zm85.818,24.284L108.581,88.313a36.349,36.349,0,0,0,0-27.753l25.126-10.408a63.61,63.61,0,0,1,0,48.568ZM99.364,15.81,88.956,40.935a36.35,36.35,0,0,0-27.754,0L50.8,15.809a63.613,63.613,0,0,1,48.569,0ZM16.452,50.153,41.578,60.56a36.347,36.347,0,0,0,0,27.753L16.452,98.721a63.611,63.611,0,0,1,0-48.568ZM50.8,133.064,61.2,107.938a36.349,36.349,0,0,0,27.753,0l10.408,25.126a63.611,63.611,0,0,1-48.568,0Z"
                        transform="translate(-2.571 -1.928)" fill="" />
                </svg>

            </div>
            <div class="dark:text-white">
                <p class="text-2xl"><span class="text-6xl">{{sos_count}}</span> {{$t('times')}}</p>
                <div class="text-center">
                    <p>{{$t('sos_latest')}}</p>
                    <!--05/09/2021 6:55-->
                    <p class="text-red-400" v-for="item in sort_list_data.slice(0,4)">{{$dayjs(item.ts).format('DD/MM/YYYY h:m')}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import dayjs from 'dayjs'
import _ from 'lodash'

export default {
    data() {
        return {    
            sos_count:0,
            list_calls:[],
            list_show:[]
        }
    },
    async created(){
        await this.getStatSos()
        this.caldata()
    },
    computed:{
        sort_list_data:function(){
                return _.orderBy(this.list_show,'ts',"desc")
        }
    },
    methods: {
        getStatSos(){
            return this.$store.dispatch('data/getStatSos').then((res)=>{
                this.list_calls = res.data
            })
        },
        caldata(){
            var list_value = []
            this.list_calls.forEach(el => {
                //console.log(el.data.calls[0]);
                var v = el.data.calls[0]
                if(v.value.length != 0){
                    list_value.push({ts:v.ts.ts,value:v.value})
                }
            });
            this.sos_count = list_value.length
            this.list_show = list_value;
            
        }
    },
}
</script>