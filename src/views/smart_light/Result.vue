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

                        <h1 class="text-xl text-white ml-10">Smart Light</h1>
                        <FilterSearch endpoint="smart_light_result" widget="smlight"></FilterSearch>

                        <div>
                            <table class="table-auto w-full result-table">
                                <thead class="text-white font-bold bg-head-table text-lg">
                                    <tr>
                                        <td>Date-Time</td>
                                        <td class="text-center">No</td>
                                        <td class="text-center">Location</td>
                                        <td class="text-center">Status</td>
                                        <td class="text-center">Usage</td>
                                    </tr>
                                </thead>
                                <tbody class="bg-white-op6">
                                    <tr :class="[item.status?'text-green-500':'text-red-500']" v-for="item in result_data" :key="item.device.id">
                                        <td class="p-3 border border-gray-600">
                                            <template v-if="item.date_data.diff > 0">
                                                {{$dayjs(item.date_data.start).format('DD/MM/YYYY')}}-{{$dayjs(item.date_data.end).format('DD/MM/YYYY')}}
                                            </template>
                                            <template v-else>
                                                {{$dayjs().format('dddd')}}<br>
                                            {{$dayjs().format('DD MMMM YYYY')}}<br>
                                            {{$dayjs().format('H:mm A')}}
                                            </template>
                                            </td>
                                        <td class="border border-gray-600 text-center">{{item.device.id}}</td>
                                        <td class="border border-gray-600 text-center">
                                            {{item.location.lat}}<br>{{item.location.long}}
                                        </td>
                                        <td class="border border-gray-600 text-center">{{item.status==1?'On':'Off'}}</td>
                                        <td class="border border-gray-600 text-center">{{(item.data.energy)?item.data.energy.toFixed(2):0}} kWh</td>
                                    </tr>
                                </tbody>
                            </table>
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
    import dayjs from 'dayjs'
    import FilterSearch from '../../components/utility/FilterSearch.vue'
    import UserService from '../../services/user.service'
    export default {
        components: {
            TopMenu,
            FooterPage,
            FilterSearch
        },
        data() {
            return {
              condition:null,
              keyword:null,
              start_date:null,
              end_date:null,
              isLoading:false,
              result_data:[]   
            }
        },
        async created() {
            this.setParams()
            await this.getDataFilter()
        },
        methods: {
            setParams(){
                this.condition = this.$route.params.cond != "" ? this.$route.params.cond: null
                this.keyword = this.$route.params.keyword != "" ? this.$route.params.keyword : null
                this.start_date = this.$route.params.start_date != "" ? this.$route.params.start_date : null
                this.end_date =  this.$route.params.end_date != "" ? this.$route.params.end_date : null
            },
            searchData(){
                this.getDataFilter()
            },
            getDataFilter(){
                var s_timestamp = this.start_date == null ? dayjs().startOf('day').valueOf(): dayjs(this.start_date).valueOf()
                var e_timestamp = this.end_date == null ? dayjs().endOf('day').valueOf() : dayjs(this.end_date).valueOf()

                var data = {
                    widget:'smlight',
                    filter:{
                        cond:this.condition,
                        keyword:this.keyword,
                        start_date:s_timestamp,
                        end_date:e_timestamp
                    }
                }
                this.isLoading = true
                return this.$store.dispatch('data/getFilter',data).then((res)=>{
                    this.isLoading = false
                    this.result_data = res.data
                }).catch((err)=>{
                    UserService.checkUnauthen(err.response)
                })
            },
        }
    }
</script>