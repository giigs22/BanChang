<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl dark:text-white ml-10 mb-10">Widget Detail</h1>
                        <div class="overflow-scroll lg:overflow-hidden">
                            <h2 class="dark:text-white text-lg my-2">List Device</h2>
                            <table class="table  border-collapse w-full dark:bg-black-op8 bg-white rounded">
                                  <thead class="lg:text-lg  bg-head-table text-white">
                                    <tr class="border-b dark:border-gray-600 border-slate-300">
                                        <th class="p-2 border-r dark:border-gray-600 border-slate-300">ID</th>
                                        <th class="border-r dark:border-gray-600 border-slate-300">Device Name</th>
                                        <th class="border-r dark:border-gray-600 border-slate-300">Device ID</th>
                                        <th class="border-r dark:border-gray-600 border-slate-300" v-if="cate_id == 1">Sensor</th>
                                        <th class="border-r dark:border-gray-600 border-slate-300" v-if="cate_id == 4">Group Pole</th>
                                        <th class="border-r dark:border-gray-600 border-slate-300" v-else>Name</th>
                                        <th class="border-r dark:border-gray-600 border-slate-300">Location Name</th>
                                    </tr>
                                </thead>
                                <tbody class="dark:text-white">
                                    <tr v-for="item in list_device">
                                        <td class="border dark:border-gray-600 border-slate-300">{{item.id}}</td>
                                        <td class="border dark:border-gray-600 border-slate-300">{{item.device_name}}</td>
                                        <td class="border dark:border-gray-600 border-slate-300">{{item.device_id}}</td>
                                        <td class="border dark:border-gray-600 border-slate-300" v-if="item.widget_id == 1">{{item.type}}</td>
                                        <td class="border dark:border-gray-600 border-slate-300" v-if="item.widget_id == 4">{{item.type}}</td>
                                        <td class="border dark:border-gray-600 border-slate-300" v-else>{{item.name}}</td>
                                        <td class="border dark:border-gray-600 border-slate-300">{{(item.location_name==null)?'-':item.location_name}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <FooterPage class="2xl:fixed inset-x-0 bottom-0"/>
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