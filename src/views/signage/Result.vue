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

                        <h1 class="text-xl text-white ml-10">Digital Signage</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg text-white">Search</h3>
                            <div class="grid grid-cols-12 form-search">
                                <div class="lg:col-span-6 col-span-12">
                                    <div class="grid grid-cols-4 gap-3">
                                        <div class="lg:col-span-3 col-span-4">
                                            <div class="grid grid-cols-4 gap-2">
                                                <!-- <div class="col-span-4 lg:col-span-2 flex lg:justify-end">
                                                    <select v-model="condition" class="h-12 rounded text-sm w-full" @change="keyword=null">
                                                    <option value="">{{$t('condition_type')}}</option>
                                                    <option value="id">ID</option>
                                                    <option value="name">Name</option>
                                                    <option value="device_id">Device ID</option>
                                                    <option value="device_name">Device Name</option>
                                                    <option value="status">Status</option>
                                                </select>
                                                </div> -->
                                                <div class="col-span-4">
                                                    <input type="text" :placeholder="$t('id')+','+$t('name')" class="form-input w-full" v-model="keyword" v-if="condition != 'status'">
                                                <select v-model="keyword" class="form-input w-full" v-else>
                                                    <option value="online">Online</option>
                                                    <option value="offline">Offline</option>
                                                </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-span-4 lg:col-span-1">
                                            <button class="btn-purple rounded w-full lg:w-auto"  @click="searchData">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <table class="table-auto w-full result-table">
                                <thead class="text-white font-bold bg-head-table text-lg">
                                    <tr>
                                        <td>Date-Time</td>
                                        <td class="text-center">Device Name</td>
                                        <td class="text-center">Location</td>
                                        <td class="text-center">Status</td>
                                    </tr>
                                </thead>
                                <tbody class="bg-white-op6">
                                    <tr :class="[item.status?'text-green-500':'text-red-500']" v-for="item in result_data" :key="item.device.id">
                                        <td class="p-3 border border-gray-600">
                                            {{$dayjs().format('dddd')}}<br>
                                            {{$dayjs().format('DD MMMM YYYY')}}<br>
                                            {{$dayjs().format('H:mm A')}}
                                        </td>
                                        <td class="border border-gray-600 text-center">{{item.device.device_name}}</td>
                                        <td class="border border-gray-600 text-center">{{item.location.lat}}<br>{{item.location.long}}</td>
                                        <td class="border border-gray-600 text-center">{{item.status==1?'On':'Off'}}</td>
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
    import UserService from '../../services/user.service'
    import dayjs from 'dayjs'

    export default {
        components: {
            TopMenu,
            FooterPage,
        },
        data() {
            return {
              condition:"",
              keyword:null,
              isLoading:false,
              result_data:[],
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
            searchData(){
                this.getDataFilter()
            },
            getDataFilter(){

                var data = {
                    widget:'digi_sig',
                    filter:{
                        cond:this.condition,
                        keyword:this.keyword,
                    }
                }
                this.isLoading = true
                return this.$store.dispatch('data/getFilterDs',data).then((res)=>{
                    var data = res.data
                    this.isLoading = false
                    this.result_data = data
                }).catch((err)=>{
                    UserService.checkUnauthen(err.response)
                })
            },


        }
    }
</script>