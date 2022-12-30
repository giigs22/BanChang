<template>
    <div class="block-widgets col-span-12 lg:col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">{{$t('license_plate')}}</span>
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026" viewBox="0 0 43.026 43.026"
                class="bg-dark-light">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="" />
            </svg>
        </div>
        <div class="detail mt-8">
            <table class="tabel border-collapse dark:text-white text-sm bg-table-head w-full">
                <thead class="bg-table-head">
                    <tr>
                        <td class="pl-20">{{$t('plate')}}</td>
                        <td>{{$t('timestamp')}}</td>
                    </tr>
                </thead>
                <tbody class="bg-table-body">
                    <tr>
                        <td colspan="2">
                            <div class="h-36 overflow-y-scroll">
                               <table class="w-full">
                                <tr v-for="item in list_plate">
                                    <td class="pl-20 border-table">{{item.plate}}</td>
                                    <td class="border-table">{{item.ts}}</td>
                                </tr>
                               </table>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
<script>
import _, { forEach } from 'lodash'
import dayjs from 'dayjs'

export default {
    data() {
        return {
            list_plate:[]
        }
    },
    created(){
        this.getData()
    },
    methods: {
        getData(){
                var data = {
                    type:'lastdata',
                    sensor:'license_plate',
                }
                return this.$store.dispatch('data/getData',data).then((res)=>{
                    var data = res.data
                    var list_data = []
                    data.forEach(el => {
                        list_data.push({
                            plate:el,
                            ts:dayjs().format('DD/MM/YYYY HH:mm')
                        })
                    });
                    this.list_plate = list_data
                })

            },
    },
}
</script>