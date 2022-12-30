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

                        <h1 class="text-xl dark:text-white ml-10">Maintenance</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg dark:text-white">{{$t('search')}}</h3>
                            <div class="grid grid-cols-12 form-search">
                                <div class="lg:col-span-6 col-span-12">
                                    <div class="grid grid-cols-4 gap-3">
                                        <div class="lg:col-span-3 col-span-4">
                                            <div class="grid grid-cols-4 gap-2">
                                            <div class="col-span-4 lg:col-span-2 flex lg:justify-end">
                                                <select v-model="condition" class="h-12 rounded text-sm w-full">
                                                    <option value="">{{$t('condition_type')}}</option>
                                                    <option value="name">Device Name</option>
                                                    <option value="pending">Status Pending</option>
                                                    <option value="maintenance">Status Maintenance</option>
                                                    <option value="success">Status Success</option>
                                                </select>
                                            </div>
                                            <div class="col-span-4 lg:col-span-2">
                                                <input type="text" placeholder="Device Name" class="form-input w-full" v-model="keyword">
                                            </div>
                                            </div>
                                        </div>
                                       <div class="col-span-4 lg:col-span-1">
                                        <button class="btn-purple rounded w-full lg:w-auto h-12" @click="searchData(0)">{{$t('search')}}</button>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <table class="table-auto w-full result-table">
                                <thead class="text-white font-bold bg-head-table text-lg">
                                    <tr>
                                        <td class="text-center">No</td>
                                        <td class="text-center">Device Name</td>
                                        <td class="text-center">Detail</td>
                                        <td class="text-center">Location</td>
                                        <td class="text-center">Status Device</td>
                                        <td class="text-center">Status Maintenance</td>
                                        <td class="text-center">Report by</td>
                                        <td class="text-center">Maintenance by</td>
                                        <td class="text-center">Last Updated</td>
                                    </tr>
                                </thead>
                                <tbody class="bg-white-op6">
                                
                                    <tr :class="setStatus(item.status_ma)" v-for="item in result_data">
                                        <td class="border border-gray-600 text-center">{{item.id}}</td>
                                        <td class="border border-gray-600 text-center">{{item.device}}</td>
                                        <td class="border border-gray-600 text-center">{{item.detail}}</td>
                                        <td class="border border-gray-600 text-center">{{item.location.lat}}<br>{{item.location.long}}</td>
                                        <td class="border border-gray-600 text-center" :class="[item.status?'text-green-600':'text-red-600']">{{item.status==1?'On':'Off'}}</td>
                                        <td class="border border-gray-600 text-center">{{item.status_ma.toUpperCase()}}</td>
                                        <td class="border border-gray-600 text-center">{{item.user_report}}</td>
                                        <td class="border border-gray-600 text-center">{{(item.user_ma == null)?'-':item.user_ma}}</td>
                                        <td class="border border-gray-600 text-center"> {{$dayjs(item.updated_at).format('dddd')}}<br>
                                            {{$dayjs(item.updated_at).format('DD MMMM YYYY')}}<br>
                                            {{$dayjs(item.updated_at).format('H:mm A')}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Pagination :count="count" :itemperpage="itemperpage" @changePage="searchData"/>

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
    import Pagination from '../../components/utility/Pagination.vue'
    import UserService from '../../services/user.service'
    export default {
        components: {
            TopMenu,
            FooterPage,
            Pagination
        },
        data() {
            return {
              condition:"",
              keyword:null,
              isLoading:false,
              result_data:[],
              itemperpage: 10,
              count: 0,
              start: 0,   
            }
        },
        computed: {

        },
        async created() {
            this.setParams()
            await this.getDataFilter()
        },
        methods: {
            setParams(){
                this.condition = this.$route.params.cond != "" ? this.$route.params.cond: null
                this.keyword = this.$route.params.keyword != "" ? this.$route.params.keyword : null
             
            },
            searchData(start){
                this.start = start
                this.getDataFilter()
            },
            setStatus(status){
                if(status == 'pending'){
                    return 'text-orange-500'
                }else if(status == 'maintenance'){
                    return 'text-yellow-500'
                }else{
                    return 'text-green-500'
                }
            },
            getDataFilter(){

                var data = {
                    widget:'maintenance',
                    filter:{
                        itemperpage: this.itemperpage,
                        start:this.start,
                        cond:this.condition,
                        keyword:this.keyword,
                    }
                }
                this.isLoading = true
                return this.$store.dispatch('sensor/getFilterMa',data).then((res)=>{
                    var data = res.data
                    this.isLoading = false
                    this.result_data = data.list
                    this.count = data.count_all
                }).catch((err)=>{
                    UserService.checkUnauthen(err.response)
                })
            },


        }
    }
</script>