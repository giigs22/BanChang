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
                        <h1 class="text-xl dark:text-white ml-10">eTourism</h1>
                        <div style="display:flex;">
                            <select v-model="tourismtype" class="form-select h-12 rounded text-sm w-full" style="float: left; width:60%;margin-right: 5%;" >
                            <option value="restaurant">Restaurant</option>
                            <option value="hotel">Hotel</option>
                            <option value="attraction">Attractions Point</option>
                            <option value="otop">OTOP Product</option>
                        </select>
                            <input type="checkbox" class="cus-checkbox" v-model="unassigned" @click="setUnassigned" style="float: left;margin-right: 1%;">
                            <label for="" class="dark:text-white" style="width: 16%;margin-right: 3%;">Only unassigned</label>

                            <div class="col-span-4 lg:col-span-1" style="float: left; width:30%;margin-right: 1%;">
                                <button class="btn-purple rounded w-full lg:w-auto" @click="chooseType">Choose</button>
                            </div>

                        </div>


                        <div class="grid grid-cols-12 gap-4 mb-5">
                            <div class="col-span-12 lg:col-span-3">
                                <div class="block-layer data-layer py-2 px-3 mt-4 dark:bg-nav-dark bg-white">
                                    <div class="list-data-layer">
                                    <div class="border-b dark:border-gray-600" v-for="item in sort_list_data" :key="item.id">
                                        <h2 class="dark:text-white text-md ml-14">{{item.name}}</h2>

                                        <img  v-if="item.typeOfThing ==='hotel' && item.active === true" src="@/assets/icon_hotel_green.svg" alt="" width="24">
                                        <img  v-if="item.typeOfThing ==='hotel' && item.active === false" src="@/assets/icon_hotel_red.svg" alt="" width="24">
                                        <img  v-if="item.typeOfThing ==='restaurant'  && item.active === true" src="@/assets/icon_restaurant_green.svg" alt="" width="24">
                                        <img  v-if="item.typeOfThing ==='restaurant' && item.active === false" src="@/assets/icon_restaurant_red.svg" alt="" width="24">
                                        <img  v-if="item.typeOfThing ==='attraction' && item.active === true" src="@/assets/icon_attraction_green.svg" alt="" width="24">
                                        <img  v-if="item.typeOfThing ==='attraction' && item.active === false" src="@/assets/icon_attraction_green.svg" alt="" width="24">
                                        <img  v-if="item.typeOfThing ==='otop' && item.active === true" src="@/assets/icon_otop_green.png" alt="" width="24">
                                        <img  v-if="item.typeOfThing ==='otop' && item.active === false" src="@/assets/icon_otop_red.png" alt="" width="24">

                                    </div>
                                    </div>

                                </div>

                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <MapView :datamap="group_map_data" />
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
    import MapView from '../../components/MapViewTourism.vue'
    import _ from 'lodash'
    import  dayjs from 'dayjs'

    export default {
        components: {
            TopMenu,
            FooterPage,
            MapView
        },
        data() {
            return {
                tourismtype: "restaurant",
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
                client:0,
                onlyUnassigned: false,
                unassigned:false
            }
        },
        computed: {
            sort_list_data: function () {
                return _.orderBy(this.list_data, 'id')
            }
        },
        async created() {
            await this.getData()
            // this.setStatus()
            // this.calPercent()
            // this.sumclient()
            // this.setMapData()
          //  setInterval(async() => {
                await this.getData()
                // this.setStatus()
                // this.calPercent()
                // this.sumclient()
                // this.setMapData()
           // }, this.$interval_time);
        },
        methods: {
            setUnassigned() {
                console.log('setUnassigned:this.unassigned:', this.unassigned)
                this.onlyUnassigned = !this.unassigned
                console.log('setUnassigned ran')
            },
            getComplaintData(){
                        var data = {
                            search:{
                                title:this.search.title,
                                start_date:this.search.start_date,
                                end_date:this.search.end_date,
                                order_by:this.search.order_by,
                                agency:this.search.agency
                            }
                        }
                        this.isLoading = true
                        return this.$store.dispatch('complaint/listdata',data).then((res)=>{
                            var data = res.data
                            this.count = data.count_all
                            this.list_comp = data.list_comp
                            this.stat = {
                                electricity:data.stat.electricity,
                                water:data.stat.water,
                                etc:data.stat.etc,
                                disturbance:data.stat.disturbance,
                            }
                            this.isLoading = false
                        })
                    },
            getData() {
                if (this.tourismtype !== '') {
                    var data = {
                        type: 'all',
                        sensor: this.tourismtype,
                        option: this.onlyUnassigned ? 'onlyUnassigned': ''
                    }
                    console.log(`getData:data:`)
                    console.log(JSON.stringify(data))
                    this.isLoading = true
                    const t = `etourism/${this.tourismtype}`
                    console.log(`etourism:t:${t}`)
                    return this.$store.dispatch(t, data).then((res) => {
                        var data = res.data
                        console.log("etourism:getDAta:dispatch:return:data:")
                        console.log(data)
                        this.list_data = data
                        this.isLoading = false
                        this.setMapData()
                    })
                }
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
                console.log('setMapData ran')
            },
            searchData(){
                this.$router.push('/view/eTourism/result')
            },
            chooseType() {
                console.log('chooseType:this.tourismtype:', this.tourismtype)
                this.getData()
            }
        }
    }
</script>
