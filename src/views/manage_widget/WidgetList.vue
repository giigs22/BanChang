<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">Widgets</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg text-white"></h3>
                            <div class="flex justify-between form-search">
                                <div class="col-span-2 my-5">
                                    <a class="btn-purple rounded btn-blue-gradient" href="/widgets/create">Add
                                        Widget</a>
                                </div>
                                <div class="col-span-2">
                                    <input type="text" placeholder="ID,Name" class="form-input">
                                    <button class="btn-purple rounded ml-3 h-12">Search</button>
                                </div>
                            </div>
                        </div>

                        <div class="mb-5">
                            <table class="table  border-collapse text-white w-full bg-black-op8 rounded">
                                <thead class="text-lg  bg-head-table">
                                    <tr class="border-b border-gray-600">
                                        <th class="p-5 border-r border-gray-600">ID</th>
                                        <th class="border-r border-gray-600">Device Name</th>
                                        <th class="border-r border-gray-600">Device ID</th>
                                        <th class="border-r border-gray-600">Name</th>
                                        <th class="border-r border-gray-600">Location Name</th>
                                        <th class="border-r border-gray-600">Category Widget</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in list_device">
                                        <td class="p-1 text-center">{{item.id}}</td>
                                        <td class="text-center">{{item.device_name}}</td>
                                        <td class="text-center">{{item.device_id}}</td>
                                        <td class="text-center">{{(item.name == null)?'-':item.name}}</td>
                                        <td class="text-center">{{(item.location_name == null)?'-':item.location_name}}</td>
                                        <td class="text-center">{{item.widget.name}}</td>
                                        <td class="text-center">
                                            <a class="text-cyan-300" :href="'/widgets/edit/'+item.id">Edit</a> | 
                                            <button class="text-red-500" @click="delDevice(item.id)">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <Pagination :count="count" :itemperpage="itemperpage" @changePage="updateData" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
      <AlertDialogConfirm v-if="confirm.active" :type="confirm.type" :msg="confirm.msg" @submit="confirmDel"
        @close="closeConfirm" />
    <AlertDialog v-if="alert.active" :type="alert.type" :msg="alert.msg"/>
    <FooterPage />
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