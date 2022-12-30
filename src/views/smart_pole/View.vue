<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <loading v-model:active="isLoading" color="#202A5A" loader="dots" :is-full-page="false" :opacity="0.1" class="rounded-lg"/>

                        <h1 class="text-xl dark:text-white ml-10">{{$t('smart_pole_energy')}}</h1>
                        <FilterSearch endpoint="smart_pole_result" widget="smpole"></FilterSearch>

                        <div class="grid grid-cols-12 gap-4 mb-5">
                            <div class="col-span-12 lg:col-span-3">
                                <div class="block-layer data-layer py-2 px-3 mt-4 dark:bg-nav-dark bg-white">
                                    <TableListData :list_data="sort_list_data" ref="ListData"></TableListData>
                                </div>
                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <MapView :datamap="group_map_data"/>
                            </div>
                            <div class="col-span-12 lg:col-span-3">
                                <div class="block-layer data-layer py-2 px-3 mt-4 dark:bg-nav-dark bg-block-content-light">
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
    import _ from 'lodash'
    import MapView from '../../components/MapView.vue'
    import FilterSearch from '../../components/utility/FilterSearch.vue'
    import TableListData from './TableListData.vue'
    import UserService from '../../services/user.service'

    export default {
        components: {
    TopMenu,
    FooterPage,
    MapView,
    FilterSearch,
    TableListData
},
        data() {
            return {
               list_data:[],
               online:0,
               offline:0,
               abnormal:0,
               percent: {
                    online: 0,
                    offline: 0,
                    abnormal: 0,
                },
                group_map_data:[],
                isLoading:false,
                search:{
                    condition:null,
                    keyword:null,
                    start_date:null,
                    end_date:null
                }
            }
        },
        async created() {
            await this.getData()
            this.setStatus()
            this.setMapData()
             setInterval(async() => {
                await this.getData()
                this.setStatus()
                this.setMapData()
            }, this.$interval_time);
        },
        computed:{
            sort_list_data(){
                return _.orderBy(this.list_data,'id')
            }
        },
        methods: {
            getData(){
                var data = {
                    type:'lastdata',
                    sensor:'smart_pole',
                    option:'view'

                }
                this.isLoading = true
                return this.$store.dispatch('data/getData',data).then((res)=>{
                    var data = res.data
                    this.list_data = data
                    this.isLoading = false
                }).catch((err)=>{
                    UserService.checkUnauthen(err.response)
                })
            },
            setStatus(){
                this.online = 0
                this.offline = 0
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
            searchData(){
                this.$router.push({
                    name:'smart_pole_result',
                    params:{
                    cond:this.search.condition,
                    keyword:this.search.keyword,
                    start_date:this.search.start_date,
                    end_date:this.search.end_date
                    }
                })
            }
        }
    }
</script>