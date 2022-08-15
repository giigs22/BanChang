<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10 mb-10">Widget Detail</h1>
                        <div>
                            <h2 class="text-white text-lg my-2">List Device</h2>
                            <table class="table  border-collapse text-white w-full bg-black-op8 rounded">
                                  <thead class="text-lg  bg-head-table">
                                    <tr class="border-b border-gray-600">
                                        <th class="p-2 border-r border-gray-600">ID</th>
                                        <th class="border-r border-gray-600">Device Name</th>
                                        <th class="border-r border-gray-600">Device ID</th>
                                        <th class="border-r border-gray-600">Sensor</th>
                                        <th class="border-r border-gray-600">Location Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in list_device">
                                        <td>{{item.id}}</td>
                                        <td>{{item.device_name}}</td>
                                        <td>{{item.device_id}}</td>
                                        <td>{{item.type}}</td>
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
    <FooterPage class="2xl:fixed inset-x-0 bottom-0" />
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
           this.getListDevice(cate)
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