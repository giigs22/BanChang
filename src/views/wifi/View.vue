<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <loading v-model:active="isLoading" color="#202A5A" loader="dots" :is-full-page="false"
                            :opacity="0.1" class="rounded-lg" />
                        <h1 class="text-xl dark:text-white ml-10">Wifi</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg dark:text-white">Search</h3>
                            <div class="grid grid-cols-12 form-search">
                                <div class="lg:col-span-6 col-span-12">
                                    <div class="grid grid-cols-4 gap-3">
                                        <div class="lg:col-span-3 col-span-4">
                                            <div class="grid grid-cols-4 gap-2">
                                                <div class="col-span-4 lg:col-span-2 flex lg:justify-end">
                                                    <select name="" id="" class="h-12 rounded text-sm w-full">
                                                        <option value="">Condition Type</option>
                                                    </select>
                                                </div>
                                                <div class="col-span-4 lg:col-span-2">
                                                    <input type="text" placeholder="ID.Name" class="form-input w-full">
                                                </div>
                                                <div class="col-span-4 lg:col-span-2 lg:flex items-end lg:justify-end">
                                                    <label for="" class="dark:text-white mr-1 block">From</label>
                                                    <input type="text" placeholder="DD/MM/YYYY"
                                                        class="form-input w-full">
                                                </div>
                                                <div class="col-span-4 lg:col-span-2 lg:flex items-end">
                                                    <label for="" class="dark:text-white mr-1 block">To</label>
                                                    <input type="text" placeholder="DD/MM/YYYY"
                                                        class="form-input w-full">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-span-4 lg:col-span-1">
                                            <button class="btn-purple rounded w-full lg:w-auto" @click="searchData">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 gap-4 mb-5">
                            <div class="col-span-12 lg:col-span-3">
                                <div class="block-layer data-layer py-2 px-3 mt-4 dark:bg-nav-dark bg-white">
                                    <div class="list-data-layer">
                                    <div class="border-b dark:border-gray-600" v-for="item in sort_list_data" :key="item.id">
                                        <h2 class="dark:text-white text-md ml-14">{{item.name}}</h2>
                                        <div class="flex justify-around items-center my-2">
                                            <template v-if="item.status">
                                                <div class="rounded-full w-5 h-5 bg-green-500 border-4 dark:border-gray-500">
                                                </div>
                                                <div>
                                                    <img src="@/assets/icon_wifi_green.png" alt="">
                                                </div>
                                                <div>
                                                    <ul class="dark:text-white text-sm list-disc">
                                                        <li>Status : <span class="text-green-500">ON</span></li>
                                                        <li>Users : <span class="text-green-500">{{item.data.client[0].value}}</span></li>
                                                        <li>Time : <span class="text-green-500">{{$dayjs(item.data.client[0].ts).format('HH:mm A')}}</span></li>
                                                    </ul>
                                                </div>
                                            </template>
                                            <template v-else>
                                                <div class="rounded-full w-5 h-5 bg-red-500 border-4 dark:border-gray-500">
                                                </div>
                                                <div>
                                                    <img src="@/assets/icon_wifi_red.png" alt="">
                                                </div>
                                                <div>
                                                    <ul class="text-white text-sm list-disc">
                                                        <li>Status : <span class="text-red-500">OFF</span></li>
                                                        <li>Users : <span class="text-red-500">{{item.data.client[0].value}}</span></li>
                                                    <li>Time : <span class="text-red-500">{{$dayjs(item.data.client[0].ts).format('HH:mm A')}}</span></li>
                                                    </ul>
                                                </div>
                                            </template>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                  
                                </div>

                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <MapView :datamap="group_map_data" />
                            </div>
                            <div class="col-span-12 lg:col-span-3">
                                <div class="block-layer data-layer py-2 px-3 mt-4 dark:bg-nav-dark bg-block-content-light">
                                    <h1 class="text-2xl dark:text-white text-center my-3">Device Status</h1>
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
                                <div class="block-layer data-layer py-2 px-3 mt-4 dark:bg-nav-dark bg-block-content-light">
                                    <h1 class="dark:text-white text-lg text-center">User Used</h1>
                                    <h1 class="dark:text-white text-3xl text-center my-20">{{client}}</h1>
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
    import _ from 'lodash'
    import * as dayjs from 'dayjs'

    export default {
        components: {
            TopMenu,
            FooterPage,
            MapView
        },
        data() {
            return {
                group_map_data: [],
                list_data: [],
                isLoading: false,
                online:0,
                offline:0,
                abnormal:0,
                percent: {
                    online: 0,
                    abnormal: 0,
                    offline: 0
                },
                client:0
            }
        },
        computed: {
            sort_list_data: function () {
                return _.orderBy(this.list_data, 'id')
            }
        },
        async created() {
            await this.getData()
            this.setStatus()
            this.calPercent()
            this.sumclient()
            this.setMapData()
            setInterval(async() => {
                await this.getData()
            this.setStatus()
            this.calPercent()
            this.sumclient()
            this.setMapData()
            }, this.$interval_time);
        },
        methods: {
            getData() {
                var data = {
                    type: 'lastdata',
                    sensor: 'wifi',
                    option: 'view'

                }
                this.isLoading = true
                return this.$store.dispatch('data/getData', data).then((res) => {
                    var data = res.data
                    this.list_data = data
                    this.isLoading = false
                })
            },
            setStatus() {
                this.online = 0
                this.offline = 0
                this.list_data.forEach(el => {
                    if (el.status) {
                        this.online += 1
                    } else {
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
            sumclient(){
                var client = []
                var sum_client = 0
                this.list_data.forEach(el=>{
                        client.push(el.data.client[0].value)
                })
                client.forEach(el => {
                    sum_client += parseInt(el)
                });
                this.client = sum_client
            },
            setMapData(){
                this.group_map_data = this.list_data
            },
            searchData(){
                this.$router.push('/view/freewifi/result')
            }
        }
    }
</script>