<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10 mb-10">Widget Detail</h1>
                        <div class="overflow-scroll lg:overflow-hidden">
                            <h2 class="text-white text-lg my-2">List Device</h2>
                            <table class="table  border-collapse text-white w-full bg-black-op8 rounded">
                                  <thead class="lg:text-lg  bg-head-table">
                                    <tr class="border-b border-gray-600">
                                        <th class="p-2 border-r border-gray-600">ID</th>
                                        <th class="border-r border-gray-600">Device Name</th>
                                        <th class="border-r border-gray-600">Device ID</th>
                                        <th class="border-r border-gray-600" v-if="cate_id == 1">Sensor</th>
                                        <th class="border-r border-gray-600" v-if="cate_id == 4">Group Pole</th>
                                        <th class="border-r border-gray-600" v-else>Name</th>
                                        <th class="border-r border-gray-600">Location Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in list_device">
                                        <td>{{item.id}}</td>
                                        <td>{{item.device_name}}</td>
                                        <td>{{item.device_id}}</td>
                                        <td v-if="item.widget_id == 1 || item.widget_id == 4">{{item.type}}</td>
                                        <td v-else>{{item.name}}</td>
                                        <td>{{(item.location_name==null)?'-':item.location_name}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <FooterPage/>
</template>
<script>
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'

    export default {
        components: {
            TopMenu,
            FooterPage,
        },
        data() {
            return {
                list_device:[],
                cate_id:null
            }
        },
        created() {
            this.cate_id = this.$route.params.id
           this.getListDevice(this.cate_id)
        },
        methods: {
          getListDevice(cate){
            this.$store.dispatch('widget/getListDeviceID',cate).then((res)=>{
                this.list_device = res.data
            })
          }
        }
    }
</script>