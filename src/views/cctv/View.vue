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

                        <h1 class="text-xl dark:text-white ml-10">{{$t('cctv_camera')}}</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg dark:text-white">{{$t('search')}}</h3>
                            <div class="grid grid-cols-12 form-search">
                                <div class="lg:col-span-6 col-span-12">
                                    <div class="grid grid-cols-4 gap-3">
                                        <div class="lg:col-span-3 col-span-4">
                                            <div class="grid grid-cols-4 gap-2">
                                                <div class="col-span-4 lg:col-span-2 flex lg:justify-end">
                                                    <select name="" id="" class="h-12 rounded text-sm w-full">
                                                        <option value="">{{$t('condition_type')}}</option>
                                                    </select>
                                                </div>
                                                <div class="col-span-4 lg:col-span-2">
                                                    <input type="text" :placeholder="$t('id')+','+$t('name')" class="form-input w-full">
                                                </div>
                                                <div class="col-span-4 lg:col-span-2 lg:flex items-end lg:justify-end">
                                                    <label for="" class="dark:text-white mr-1 block lg:w-16">{{$t('from')}}</label>
                                                    <input type="text" placeholder="DD/MM/YYYY"
                                                        class="form-input w-full">
                                                </div>
                                                <div class="col-span-4 lg:col-span-2 lg:flex items-end">
                                                    <label for="" class="dark:text-white mr-1 block lg:w-16">{{$t('to')}}</label>
                                                    <input type="text" placeholder="DD/MM/YYYY"
                                                        class="form-input w-full">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-span-4 lg:col-span-1">
                                            <button class="btn-purple rounded w-full lg:w-auto"
                                                @click="searchData">{{$t('search')}}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-12 gap-4 mb-5">
                            <div class="col-span-12 lg:col-span-3">
                                <div class="block-layer data-layer py-2 px-3 mt-4 dark:bg-nav-dark bg-white">
                                    <!-- cctv item -->
                                    <div class="list-data-layer">
                                        <div class="border-b dark:border-gray-600" v-for="item in sort_list_data"
                                            :key="item.id">
                                            <h2 class="dark:text-white text-md ml-14">{{item.name}}</h2>
                                            <div class="flex justify-around items-center my-2">
                                                <template v-if="item.status">
                                                    <div
                                                        class="rounded-full w-5 h-5 bg-green-600 border-4 dark:border-gray-500">
                                                    </div>
                                                    <div>
                                                        <img src="@/assets/icon_cctv_green.png" alt="">
                                                    </div>
                                                    <div>
                                                        <ul class="dark:text-white text-sm list-disc">
                                                            <li>{{$t('status')}} : <span class="text-green-600">{{$t('on')}}</span></li>
                                                            <!-- <li>Setting : <span class="text-yellow-500">720p 25fps</span></li>
                                                        <li>Time : <span class="text-yellow-500">08:00 AM</span></li> -->
                                                        </ul>
                                                    </div>
                                                </template>
                                                <template v-else>
                                                    <div
                                                        class="rounded-full w-5 h-5 bg-red-600 border-4 dark:border-gray-500">
                                                    </div>
                                                    <div>
                                                        <img src="@/assets/icon_cctv_red.png" alt="">
                                                    </div>
                                                    <div>
                                                        <ul class="dark:text-white text-sm list-disc">
                                                            <li>{{$t('status')}} : <span class="text-red-600">{{$t('off')}}</span></li>
                                                            <!-- <li>Setting : <span class="text-yellow-500">720p 25fps</span></li>
                                                        <li>Time : <span class="text-yellow-500">08:00 AM</span></li> -->
                                                        </ul>
                                                    </div>
                                                </template>

                                                <div>
                                                    <input v-model="selected" :value="item" type="checkbox"
                                                        class="mr-5 cus-checkbox">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex justify-between mt-5">
                                        <div class="flex items-center gap-3">
                                            <input type="checkbox" class="cus-checkbox" v-model="allSelect"
                                                @click="selectAll"> <label for="" class="dark:text-white">
                                                {{$t('all')}}</label>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="btn-purple disabled:opacity-50" @click="setMapData"
                                                :disabled="showbtn">{{$t('show')}}</button>
                                            <button class="btn-red" @click="clearAll">{{$t('clear')}}</button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <div class="flex gap-5 justify-end">
                                    <button :class="[tab_view=='1'?'btn-purple':'btn-gray']"
                                        @click="tab_view =1">{{$t('map')}}</button>
                                    <button :class="[tab_view=='2'?'btn-purple':'btn-gray']"
                                        @click="tab_view = 2">{{$t('camera')}}</button>
                                </div>
                                <MapView :datamap="group_map_data" ref="maplocation" v-if="tab_view ==1"/>
                                <VideoStream :listdata="list_data" v-else></VideoStream>
                            </div>
                            <div class="col-span-12 lg:col-span-3">
                                <div
                                    class="block-layer data-layer py-2 px-3 mt-4 dark:bg-nav-dark bg-block-content-light">
                                    <h1 class="text-2xl dark:text-white text-center my-3">{{$t('device_status')}}</h1>
                                    <div class="grid grid-cols-3 gap-1 my-5">
                                        <div class="col-span-1">
                                            <div class="bg-green-600 text-white flex flex-col items-center rounded-lg max-h-40 h-40">
                                                <h1 class="text-4xl head-status">{{$t('on')}}</h1>
                                                <h1 class="text-7xl">{{online}}</h1>
                                                <h1 class="text-sm mt-2 text-center">{{percent.online}}% {{$t('online')}}</h1>
                                            </div>
                                        </div>
                                        <div class="col-span-1">
                                            <div class="bg-yellow-400 text-white flex flex-col items-center rounded-lg max-h-40 h-40">
                                                <h1 class="text-4xl head-status">{{$t('ng')}}</h1>
                                                <h1 class="text-7xl">{{abnormal}}</h1>
                                                <h1 class="text-sm mt-2 text-center">{{percent.abnormal}}% {{$t('abnormal')}}</h1>
                                            </div>
                                        </div>
                                        <div class="col-span-1">
                                            <div class="bg-red-600 text-white flex flex-col items-center rounded-lg max-h-40 h-40">
                                                <h1 class="text-4xl head-status">{{$t('off')}}</h1>
                                                <h1 class="text-7xl">{{offline}}</h1>
                                                <h1 class="text-sm mt-2 text-center">{{percent.offline}}% {{$t('offline')}}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-layer data-layer py-2 px-3 mt-4 dark:bg-nav-dark bg-white">
                                    <StatData :status="{online,abnormal,offline}" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">{{$t('widgets')}}</h1>
                        <div class="grid grid-cols-6 gap-5 lg:px-20">
                            <div class="col-span-6 lg:col-span-3">
                                <CCTVSurviellance></CCTVSurviellance>
                            </div>
                            <div class="col-span-6 lg:col-span-3">
                                <Parking></Parking>
                            </div>
                            <div class="col-span-6 lg:col-span-3">
                                <CheckLicensePlate></CheckLicensePlate>
                            </div>
                            <div class="col-span-6 lg:col-span-3">
                                <LicensePlate></LicensePlate>
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
    import CCTVSurviellance from '../../components/widgets/CCTVSurviellance.vue';
    import Parking from '../../components/widgets/Parking.vue';
    import CheckLicensePlate from '../../components/widgets/CheckLicensePlate.vue';
    import LicensePlate from '../../components/widgets/LicensePlate.vue';
    import MapView from '../../components/MapView.vue'
    import StatData from './Stat.vue'
    import VideoStream from '../../components/VideoStream.vue'
    import _ from 'lodash'
    export default {
        components: {
            TopMenu,
            FooterPage,
            CCTVSurviellance,
            Parking,
            CheckLicensePlate,
            LicensePlate,
            MapView,
            StatData,
            VideoStream
        },
        data() {
            return {
                list_data: [],
                isLoading: false,
                selected: [],
                allSelect: false,
                showbtn: true,
                group_map_data: [],
                percent: {
                    online: 0,
                    abnormal: 0,
                    offline: 0
                },
                online: 0,
                abnormal: 0,
                offline: 0,
                tab_view: 1
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
            setInterval(async () => {
                this.clearAll()
                await this.getData()
                this.setStatus()
                this.calPercent()
            }, this.$interval_time);
        },
        watch: {
            selected: {
                handler(n, o) {
                    if (n.length > 0) {
                        this.showbtn = false
                    } else {
                        this.showbtn = true
                    }
                },
                deep: true
            }
        },
        methods: {
            getData() {
                var data = {
                    type: 'lastdata',
                    sensor: 'cctv',
                    option: 'view'

                }
                this.isLoading = true
                return this.$store.dispatch('data/getData', data).then((res) => {
                    var data = res.data
                    this.list_data = data
                    this.isLoading = false
                }).catch((err)=>{
                    console.error(err)
                })
            },
            selectAll() {
                this.selected = []
                var list = this.list_data
                var index = 0
                if (!this.allSelect) {
                    list.forEach(el => {
                        this.selected.push(el)
                        index++
                    });
                } else {
                    this.selected = []
                    this.allSelect = false
                }
            },
            setStatus() {
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
            clearAll() {
                this.selected = []
                this.allSelect = false
                this.group_map_data = []
            },
            setMapData() {
                this.group_map_data = this.selected
            },
            searchData() {
                this.$router.push('/view/cctv/result')
            }

        }
    }
</script>