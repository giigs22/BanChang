<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl dark:text-white ml-10">{{$t('devices_list')}}</h1>
                        <div class="searchbox mt-5 mb-5">
                            <div class="flex flex-col lg:flex-row justify-between form-search">
                                <div class="col-span-full lg:col-span-2 my-5">
                                    <a class="btn-purple rounded btn-blue-gradient" href="/devices/create">{{$t('add_device')}}</a>                                </div>
                                <div class="col-span-full lg:col-span-2">
                                    <input type="text" :placeholder="$t('id')+','+$t('name')" class="form-input">
                                    <button class="btn-purple rounded ml-3 h-12">{{$t('search')}}</button>
                                </div>
                            </div>
                        </div>

                        
                        <div class="mb-5 lg:overflow-hidden overflow-scroll">
                            <table class="table  border-collaps w-full dark:bg-black-op8 bg-white rounded">
                                <thead class="text-lg  bg-head-table text-white">
                                    <tr class="border-b dark:border-gray-600">
                                        <th class="p-5 border-r dark:border-gray-600">{{$t('id')}}</th>
                                        <th class="border-r dark:border-gray-600">{{$t('device_name')}}</th>
                                        <th class="border-r dark:border-gray-600">{{$t('device_id')}}</th>
                                        <th class="border-r dark:border-gray-600">{{$t('name')}}</th>
                                        <th class="border-r dark:border-gray-600">{{$t('location_name')}}</th>
                                        <th class="border-r dark:border-gray-600">{{$t('category_widget')}}</th>
                                        <th>{{$t('action')}}</th>
                                    </tr>
                                </thead>
                                <tbody class="dark:text-white">
                                    <tr v-for="item in list_device">
                                        <td class="p-1 text-center border dark:border-gray-600 border-slate-300">{{item.id}}</td>
                                        <td class="text-center border dark:border-gray-600 border-slate-300">{{item.device_name}}</td>
                                        <td class="text-center border dark:border-gray-600 border-slate-300">{{item.device_id}}</td>
                                        <td class="text-center border dark:border-gray-600 border-slate-300">{{(item.name == null)?'-':item.name}}</td>
                                        <td class="text-center border dark:border-gray-600 border-slate-300">{{(item.location_name == null)?'-':item.location_name}}</td>
                                        <td class="text-center border dark:border-gray-600 border-slate-300">{{item.widget.name}}</td>
                                        <td class="text-center border dark:border-gray-600 border-slate-300">
                                            <a class="dark:text-cyan-300 text-cyan-800" :href="'/devices/edit/'+item.id">Edit</a> | 
                                            <button class="text-red-500" @click="delDevice(item.id)">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Pagination :count="count" :itemperpage="itemperpage" @changePage="updateData" />

                    </div>
                </div>
            </div>
        </section>
    </main>
      <AlertDialogConfirm v-if="confirm.active" :type="confirm.type" :msg="confirm.msg" @submit="confirmDel"
        @close="closeConfirm" />
    <AlertDialog v-if="alert.active" :type="alert.type" :msg="alert.msg"/>
    <FooterPage class="2xl:fixed inset-x-0 bottom-0"/>
</template>
<script>
    import TopMenu from '../layout/TopMenu.vue';
    import FooterPage from '../layout/FooterPage.vue';
    import AlertDialogConfirm from '../../components/utility/AlertDialogConfirm.vue'
    import AlertDialog from '../../components/utility/AlertDialog.vue'
    import Pagination from '../../components/utility/Pagination.vue'

    export default {
        components: {
            TopMenu,
            FooterPage,
            AlertDialogConfirm,
            AlertDialog,
            Pagination
        },
        data() {
            return {
                list_device: [],
                count: 0,
                itemperpage: 10,
                start: 0,
                confirm: {
                    active: false,
                    type: null,
                    msg:null
                },
                alert: {
                    active: false,
                    type: null,
                    msg: null
                },
                del_id: null
            }
        },
        created() {
            this.getListDevice()
        },
        methods: {
            getListDevice() {
                var data = {
                    itemperpage: this.itemperpage,
                    start: this.start
                }
                this.$store.dispatch('widget/listDevice',data).then((res) => {
                    this.list_device = res.data.list
                    this.count = res.data.count_all
                })
            },
            delDevice(id){
                this.del_id = id
                this.confirm.active = true
                this.confirm.type = 'confirmdel'
                this.confirm.msg = 'Are you sure to Delete this Record?'
            },
            updateData(start){
                this.start= start
                this.getListDevice()
            },
            confirmDel(){
                 this.$store.dispatch('widget/destroyDevice',this.del_id).then((res)=>{
                     var data = res.data
                    if (data.success) {
                        this.alert.active = true
                        this.alert.type = "del_success"
                        this.alert.msg = data.message
                        this.loading = false
                    setTimeout(() => {
                        this.alert.active = false
                        this.confirm.active = false
                        window.location.reload()
                    }, 2000);
                    }else{
                        this.alert.active = true
                        this.alert.type = "error"
                        this.alert.msg = data.message
                         setTimeout(() => {
                        this.closeAlert()
                        this.closeConfirm()
                        this.loading=false
                       
                    }, 2000);
                    }
                })
            },
            
        }
    }
</script>