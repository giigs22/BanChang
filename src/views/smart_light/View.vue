<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">Smart Light</h1>
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
                                                <td class=""><span class="mr-5">{{item.id}}</span> {{item.name}}
                                                </td>
                                                <td class="text-center">{{(item.status)?'ON':'OFF'}}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <MapView :datamap="group_map_data"/>
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
    import axios from 'axios'
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import AuthService from '../../services/auth.services'
    import authHeader from '../../services/auth.header'
    import _ from 'lodash'
    import MapView from '../../components/MapView.vue'

    export default {
        components: {
            TopMenu,
            FooterPage,
            MapView
        },
        data() {
            return {
                list_device: [],
                list_data:[],
                online: 0,
                offline: 0,
                abnormal: 0,
                percent: {
                    online: 0,
                    offline: 0,
                    abnormal: 0,
                },
                map_data:[],
                group_map_data:[]
            }
        },
        async created() {
            await this.getListDeviceLT()
            if(this.statusAPI){
                this.clearData()
                await this.getLightAttr()
                this.calPercent()
                this.setMapData()
                setInterval(async() => {
                    this.clearData()
                    await this.getLightAttr()
                    this.calPercent()
                    this.setMapData()
                }, this.$interval_time);
            }else{
                this.setOfflineDevice()
                this.calPercent()
            }
        },
        computed:{
            api_baseURL() {
                return localStorage.getItem('api_baseURL');
            },
            dataSensorAPI() {
                return this.$store.getters['auth/dataPlanet']
            },
            sort_list_data(){
                return _.orderBy(this.list_data,'id')
            },
            statusAPI() {
                return this.$store.state.server.api_sensor.connect;
            },
        },
        methods: {
            getListDeviceLT() {
                return this.$store.dispatch('widget/getListDeviceID', 2).then((res) => {
                    this.list_device = res.data
                })
            },
            getLightAttr() {
                var options = {
                    headers: authHeader()
                }
                var promises = []
                this.list_device.forEach(el => {
                    var api_attr = 'api/plugins/telemetry/DEVICE/' + el.device_id + '/values/attributes'
                    var api_last = 'api/plugins/telemetry/DEVICE/' + el.device_id + '/values/timeseries'

                    promises.push(axios.get(this.api_baseURL + api_attr, options).then((res) => {
                         if (AuthService.Expire(res.data)) {
                             this.$store.dispatch('auth/login_planet', this.dataSensorAPI).then((
                                res) => {
                                var success = res.data.success
                                if (success) {
                                    this.$forceUpdate()
                                }
                            })
                        } else {
                        var data = res.data
                        var a = data.find((a) => {
                            return a.key == 'active'
                        })

                        var lat_key = _.findKey(data,function(k){
                            return k.key == 'lat' ||  k.key == 'latitude'
                        })
                        var long_key = _.findKey(data,function(k){
                            return k.key == 'long' ||  k.key == 'longitude'
                        })

                        this.map_data.push({id:el.id,location:{lat:data[lat_key].value,long:data[long_key].value}})

                        this.list_data.push({
                            id:el.id,
                            name: el.device_name,
                            status: a.value
                        })
                        if (a.value) {
                            this.online += 1
                            this.map_data.push({id:el.id,status:true})
                        } else {
                            this.offline += 1
                            this.map_data.push({id:el.id,status:false})
                        }
                        }
                    }).catch((err) => {
                            if (err.code === "ECONNABORTED" || err.code === "ERR_NETWORK") {
                                this.$store.dispatch('server/setStatus', {type:'server_sensor',value:false})
                            }
                    })
                    )

                     promises.push(
                        axios.get(this.api_baseURL+api_last,options).then((res)=>{
                        if (AuthService.Expire(res.data)) {
                            this.$store.dispatch('auth/login_planet', this.dataSensorAPI).then((
                                res) => {
                                var success = res.data.success
                                if (success) {
                                    this.$forceUpdate()
                                }
                            })
                        } else {
                            this.map_data.push({id:el.id,data:res.data,name:el.location_name == null?el.device_name:el.location_name,type:'smlight'})
                        }
                    }).catch((err) => {
                            if (err.code === "ECONNABORTED" || err.code === "ERR_NETWORK") {
                                this.$store.dispatch('server/setStatus', {type:'server_sensor',value:false})
                            }
                    })
                    )

                });
                return Promise.all(promises).then(() => {})



            },
            calPercent() {
                var all = this.list_device.length
                var per_online = (this.online * 100) / all
                var per_offline = (this.offline * 100) / all
                var per_abnormal = (this.abnormal * 100) / all
                this.percent.online = Math.round(per_online)
                this.percent.offline = Math.round(per_offline)
                this.percent.abnormal = Math.round(per_abnormal)
            },
            clearData(){
                this.list_device= []
                this.list_data=[]
                this.online = 0
                this.offline = 0
                this.abnormal = 0
                this.map_data = []
                this.group_map_data = []
            },
            setMapData(){
                var group_data = _.groupBy(this.map_data, m=>m.id)
                this.group_map_data = group_data
            },
            setOfflineDevice(){
                this.list_device.forEach(el=>{
                    this.list_data.push({
                            id: el.id,
                            name: el.device_name,
                            status: false
                    })
                    this.offline +=1

                    this.$store.dispatch('map/getMapDataDevice',el.id).then((res)=>{
                        var data = res.data
                        data['data'] = {monthlyEnergy:[{value:0}]}
                        this.group_map_data.push(data)
                    })
                })

            }

        }
    }
</script>