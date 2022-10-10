<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">Air Quality</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg text-white">Search</h3>
                            <div class="grid grid-cols-12 form-search">
                                <div class="lg:col-span-6 col-span-12">
                                    <div class="grid grid-cols-4 gap-3">
                                        <div class="lg:col-span-3 col-span-4">
                                            <div class="grid grid-cols-4 gap-2">
                                            <div class="col-span-4 lg:col-span-2 flex lg:justify-end">
                                                <select name="" id="" class="h-12 rounded text-sm w-full lg:w-auto">
                                                    <option value="">Condition Type</option>
                                                </select>
                                            </div>
                                            <div class="col-span-4 lg:col-span-2">
                                                <input type="text" placeholder="ID.Name" class="form-input lg:ml-5 w-full lg:w-auto">
                                            </div>
                                            <div class="col-span-4 lg:col-span-2 lg:flex items-end lg:justify-end">
                                                <label for="" class="text-white mr-1 block">From</label>
                                            <input type="text" placeholder="DD/MM/YYYY" class="form-input w-full lg:w-auto">
                                            </div>
                                            <div class="col-span-4 lg:col-span-2 lg:flex items-end">
                                                <label for="" class="text-white mr-1 block">To</label>
                                            <input type="text" placeholder="DD/MM/YYYY" class="form-input w-full lg:w-auto">
                                            </div>
                                            </div>
                                        </div>
                                       <div class="col-span-4 lg:col-span-1">
                                        <button class="btn-purple rounded w-full lg:w-auto">Search</button>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-12 gap-4 mb-5">
                            <div class="col-span-12 lg:col-span-3">
                                <div class="block-layer data-layer py-2 px-3 mt-4">
                                    <table class="text-white w-full">
                                        <thead>
                                            <tr>
                                                <th
                                                    class="font-normal text-lg text-center border-r border-gray-700 w-1/2">
                                                    Location</th>
                                                <th class="font-normal text-lg text-center">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-sm">
                                            <tr class="border-b border-gray-700" v-for="(item,index) in sort_list_data"
                                                :key="index" :class="[item.status?'text-green-600':'text-red-600']">
                                                <td class=""><span class="mr-5">{{index+1}}</span> {{item.name}}
                                                </td>
                                                <td class="text-center">{{(item.status)?'ON':'OFF'}}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <MapView :datamap="group_map_data" heatmap="true"/>
                            </div>
                            <div class="col-span-12 lg:col-span-3">
                                <div class="block-layer data-layer py-2 px-3 mt-4">
                                    <h1 class="text-2xl text-white text-center my-3">Device Status</h1>
                                    <div class="grid grid-cols-3 gap-1 my-5">
                                        <div class="col-span-1">
                                            <div class="bg-green-600 text-white flex flex-col items-center rounded-lg">
                                                <h1 class="text-4xl">ON</h1>
                                                <h1 class="text-7xl">{{online}}</h1>
                                                <h1 class="text-sm mt-2">{{percent.online}}% Online</h1>
                                            </div>
                                        </div>
                                        <div class="col-span-1">
                                            <div class="bg-yellow-400 text-white flex flex-col items-center rounded-lg">
                                                <h1 class="text-4xl">NG</h1>
                                                <h1 class="text-7xl">{{abnormal}}</h1>
                                                <h1 class="text-sm mt-2">{{percent.abnormal}}% Abnormal</h1>
                                            </div>
                                        </div>
                                        <div class="col-span-1">
                                            <div class="bg-red-600 text-white flex flex-col items-center rounded-lg">
                                                <h1 class="text-4xl">OFF</h1>
                                                <h1 class="text-7xl">{{offline}}</h1>
                                                <h1 class="text-sm mt-2">{{percent.offline}}% Offline</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-layer data-layer py-2 px-3 mt-4">
                                    <h5 class="text-white text-center my-3">Air Quality Summary</h5>
                                    <table class="w-full my-3">
                                        <tr style="color:#00F9CF">
                                            <td>Excellent</td>
                                            <td>0</td>
                                        </tr>
                                        <tr style="color:#4CBF08">
                                            <td>Satisfactory</td>
                                            <td>0</td>
                                        </tr>
                                        <tr style="color:#FFEB50">
                                            <td>Moderate</td>
                                            <td>0</td>
                                        </tr>
                                        <tr style="color:#FFB14C">
                                            <td>Unhealthy</td>
                                            <td>0</td>
                                        </tr>
                                        <tr style="color:#BF4957">
                                            <td>Very Unhealthy</td>
                                            <td>0</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <FooterPage />
</template>
<script>
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import MapView from '../../components/MapView.vue'
    import _, { orderBy } from 'lodash'

    export default {
        components: {
            TopMenu,
            FooterPage,
            MapView
        },
        data() {
            return {
                list_device: [],
                list_data: [],
                online: 0,
                abnormal: 0,
                offline: 0,
                percent: {
                    online: 0,
                    abnormal: 0,
                    offline: 0
                },
                env_sensor: [],
                lnr_sensor: [],
                map_data:[],
                group_map_data:[]
            }
        },
        computed: {
            sort_list_data:function(){
                return _.orderBy(this.list_data,'id')
            }
        },
        async created() {
            
            await this.getData()
            this.setStatus()
            this.calPercent()
            this.setMapData()

            setInterval(async() => {
                await this.getData()
                this.setStatus()
                this.calPercent()
                this.setMapData()
            }, this.$interval_time);

        },
        methods: {
            getData(){
                var data = {
                    type:'lastdata',
                    sensor:'env',
                    option:'view'

                }
                return this.$store.dispatch('data/getData',data).then((res)=>{
                    var data = res.data
                    this.list_data = data

                })
            },
            setStatus(){
                this.list_data.forEach(el=>{
                    if(el.status){
                        this.online += 1
                    }else{
                        this.offline += 1
                    }
                })
            },
            calPercent() {
                var all = this.list_data.length
                var per_online = (this.online * 100) / all
                var per_offline = (this.offline * 100) / all
                var per_abnormal = (this.abnormal * 100) / all
                this.percent.online = Math.round(per_online)
                this.percent.offline = Math.round(per_offline)
                this.percent.abnormal = Math.round(per_abnormal)
            },
            setMapData(){
                this.group_map_data = this.list_data
            },
            

        }
    }
</script>