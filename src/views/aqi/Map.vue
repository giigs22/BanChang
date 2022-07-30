<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">Air Quality</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg text-white">Search</h3>
                            <div class="grid grid-cols-12 form-search">
                                <div class="col-span-2 flex flex-col items-end gap-5">
                                    <div>
                                        <select name="" id="" class="h-12 rounded text-sm">
                                            <option value="">Condition Type</option>
                                        </select>
                                    </div>
                                    <div class="flex items-end">
                                        <label for="" class="text-white mr-1">From</label>
                                        <input type="text" placeholder="DD/MM/YYYY" class="form-input">
                                    </div>
                                </div>
                                <div class="col-span-2 flex flex-col items-end gap-5">
                                    <div>
                                        <input type="text" placeholder="ID.Name" class="form-input">
                                    </div>
                                    <div class="flex items-end">
                                        <label for="" class="text-white mr-1">To</label>
                                        <input type="text" placeholder="DD/MM/YYYY" class="form-input">
                                    </div>
                                </div>
                                <div class="col-span-2">
                                    <div class="ml-2">
                                        <button class="btn-purple rounded">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-12 gap-4 mb-5">
                            <div class="col-span-3">
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
                                            <tr class="border-b border-gray-700" v-for="(item,index) in list_device" :key="index"
                                                :class="[item.status?'text-green-600':'text-red-600']">
                                                <td class=""><span class="mr-5">00{{index+1}}</span> {{item.name}}
                                                </td>
                                                <td class="text-center">{{(item.status)?'ON':'OFF'}}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-span-6">
                                <div class="flex gap-5 my-4 justify-end">
                                    <button class="btn-purple">Map</button>
                                    <button class="btn-gray">Heatmap</button>
                                </div>
                                <img src="@/assets/map.png" alt="" class="w-full">
                            </div>
                            <div class="col-span-3">
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
                                                <h1 class="text-4xl">ON</h1>
                                                <h1 class="text-7xl">{{abnormal}}</h1>
                                                <h1 class="text-sm mt-2">{{percent.abnormal}}% Abnormal</h1>
                                            </div>
                                        </div>
                                        <div class="col-span-1">
                                            <div class="bg-red-600 text-white flex flex-col items-center rounded-lg">
                                                <h1 class="text-4xl">ON</h1>
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
    import axios from 'axios'
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import AuthService from '../../services/auth.services'
    import authHeader from '../../services/auth.header'

    export default {
        components: {
            TopMenu,
            FooterPage
        },
        data() {
            return {
                list_device: [],
                online: 0,
                abnormal: 0,
                offline: 0,
                percent:{
                    online:0,
                    abnormal:0,
                    offline:0
                }
            }
        },
        async created() {
            await this.getEnvAttr()
            await this.getLNRAttr()
            this.calPercent()
        },
        methods: {
            getEnvAttr() {
                var id_device = {name:'BC-P02-ENV01',id:'849e2830-318d-11ec-9f75-bdae041d8bb7'}
                var api_attr = 'api/plugins/telemetry/DEVICE/' + id_device.id + '/values/attributes'
                var options = {
                    headers: authHeader()
                }
                return axios.get(this.$api_baseURL + api_attr, options).then((res) => {
                    var data = res.data
                    var a = data.find((a) => {
                        return a.key == 'active'
                    })
                    
                    this.list_device.push({
                        name: id_device.name,
                        status: a.value
                    })
                    if (a.value) {
                        this.online += 1
                    } else {
                        this.offline += 1
                    }
                });
            },
            getLNRAttr() {
                var list_lnr_id = [{name:'BC-P01-LNR01',id:
                    '468000f0-3188-11ec-9f75-bdae041d8bb7'},
                    {name:'BC-P02-LNR02',id:'3da2b770-3188-11ec-9f75-bdae041d8bb7'},
                    {name:'BC-P03-LNR03',id:'2a05cfe0-3188-11ec-9f75-bdae041d8bb7'},
                    {name:'BC-P04-LNR04',id:'038dfbc0-3189-11ec-9f75-bdae041d8bb7'},
                    {name:'BC-P05-LNR05',id:'2def3f10-3188-11ec-9f75-bdae041d8bb7'},
                ]
                var options = {
                    headers: authHeader()
                }
                var promises = []

                list_lnr_id.forEach(el => {
                    var api_last = 'api/plugins/telemetry/DEVICE/' + el.id + '/values/attributes'
                    promises.push(axios.get(this.$api_baseURL + api_last, options).then((res) => {
                        var data = res.data
                        var a = data.find((a) => {
                            return a.key == 'active'
                        })
                        
                        this.list_device.push({
                            name: el.name,
                            status: a.value
                        })
                        if (a.value) {
                            this.online += 1
                        } else {
                            this.offline += 1
                        }

                    }).catch((err) => console.error(err)))

                });
                return Promise.all(promises).then(() => {})


            },
            calPercent(){
                var all = this.list_device.length
                var per_online = (this.online*100)/all
                var per_offline = (this.offline*100)/all
                var per_abnormal = (this.abnormal*100)/all
                this.percent.online = Math.round(per_online)
                this.percent.offline = Math.round(per_offline)
                this.percent.abnormal = Math.round(per_abnormal)
            }

        }
    }
</script>