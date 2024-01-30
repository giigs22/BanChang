<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <loading v-model:active="isLoading" color="#202A5A" loader="dots" :is-full-page="false"
                            :opacity="0.1" class="rounded-lg" />
                        <h1 class="text-xl dark:text-white ml-10">{{$t('sos')}}</h1>
                        
                        <FilterSearch endpoint="sos_result" widget="sos"></FilterSearch>

                        <div class="grid grid-cols-12 gap-4 mb-5">
                            <div class="col-span-12 lg:col-span-3">
                                <div class="block-layer data-layer py-2 px-3 mt-4 dark:bg-nav-dark bg-white">
                                    <table class="dark:text-white w-full">
                                        <thead>
                                            <tr>
                                                <th
                                                    class="font-normal text-lg text-center border-r border-gray-700 w-1/2">
                                                    {{$t('location')}}</th>
                                                <th class="font-normal text-lg text-center">{{$t('status')}}</th>
                                            </tr>
                                        </thead>

                                    </table>
                                    <div v-if="sort_list_data.length == 0" class="text-white text-center my-5">{{$t('no_data')}}</div>
                                    <div class="m-1 p-1 lg:m-2 lg:p-2 list-data-layer dark:bg-black-op8" v-else>
                                        <table class="w-full">
                                            <tbody class="text-sm">
                                                <tr class="border-b dark:border-gray-700"
                                                    v-for="(item,index) in sort_list_data" :key="index"
                                                    :class="[item.status?'text-green-600':'text-red-600']">
                                                    <td class="">
                                                        {{index+1}}
                                                    </td>
                                                    <td>
                                                        {{item.name}}
                                                    </td>
                                                    <td class="w-1/2 text-center">{{(item.status)?'ON':'OFF'}}</td>
                                                </tr>

                                            </tbody>

                                        </table>
                                    </div>

                                </div>
                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <MapView :datamap="group_map_data" />
                            </div>
                            <div class="col-span-12 lg:col-span-3">
                                <div class="block-layer data-layer py-2 px-3 mt-4 dark:bg-nav-dark bg-block-content-light">
                                    <h1 class="text-2xl dark:text-white text-center my-3">{{$t('device_status')}}</h1>
                                    <div class="grid grid-cols-3 gap-1 my-5">
                                        <div class="col-span-1">
                                            <div class="bg-green-600 text-white flex flex-col items-center rounded-lg max-h-40 h-40">
                                                <h1 class="text-4xl head-status">{{$t('no')}}</h1>
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
    import FilterSearch from '../../components/utility/FilterSearch.vue'
    import _ from 'lodash'

    export default {
        components: {
            TopMenu,
            FooterPage,
            MapView,
            FilterSearch
        },
        data() {
            return {
                list_data: [],
                group_map_data: [],
                isLoading: false,
                online: 0,
                abnormal: 0,
                offline: 0,
                percent: {
                    online: 0,
                    abnormal: 0,
                    offline: 0
                },
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
            this.setMapData()
            setInterval(async () => {
                await this.getData()
                this.setStatus()
                this.calPercent()
                this.setMapData()
            }, this.$interval_time);
        },
        methods: {
            getData() {
                var data = {
                    type: 'lastdata',
                    sensor: 'sos',
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
            setMapData() {
                this.group_map_data = this.list_data
            },
            searchData(){
                this.$router.push('/sos/result')
            }
        }

    }
</script>