<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">User List</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg text-white">Search</h3>
                            <div class="grid grid-cols-12  form-search">
                                <div class="col-span-2 gap-5 flex flex-col items-end">
                                    <div>
                                        <select class="rounded-md h-12">
                                            <option value="">Condition Type</option>
                                            <option value="regis_date">Register Date</option>
                                        </select>
                                    </div>
                                    <div class="flex items-end">
                                        <label for="" class="text-white mr-1">From</label>
                                        <input type="text" placeholder="DD/MM/YYYY" class="form-input">
                                    </div>
                                </div>
                                <div class="col-span-2 flex flex-col items-end gap-5">
                                    <div>
                                        <input type="text" placeholder="ID.Name" class="form-input">
                                    </div>
                                    <div class="flex items-end">
                                        <label for="" class="text-white mr-1">To</label>
                                        <input type="text" placeholder="DD/MM/YYYY" class="form-input">
                                    </div>
                                </div>
                                <div class="col-span-2">
                                    <div class="ml-2">
                                        <button class="btn-purple rounded">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="">
                            <table class="table w-full shadow-sm">
                                <thead class="text-white bg-head-table rounded-md text-lg">
                                    <tr>
                                        <th class="p-5 rounded-tl-md">ID</th>
                                        <th>Register Date</th>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th class="rounded-tr-md">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="text-white bg-body-table">
                                    <tr v-for="(item,index) in list_user" :key="index"
                                        :class="[item.status ==='0'?'text-red-500':'']">
                                        <td class="text-center p-3">{{item.id}}</td>
                                        <td class="w-52">
                                            {{$dayjs(item.register_date).format('dddd,')}}<br>
                                            {{$dayjs(item.register_date).format('DD MMMM YYYY')}}
                                        </td>
                                        <td class="text-center">{{item.name}}</td>
                                        <td class="text-center">{{item.username}}</td>
                                        <td class="text-center">{{item.role}}</td>
                                        <td class="text-center">
                                            <div class="text-green-500" v-if="item.status ==='1'">Active</div>
                                            <div class="text-red-500" v-else>Inactive</div>
                                        </td>
                                        <td class="text-center"><a class="text-cyan-300"
                                                :href="'/user/edit/'+item.id">Edit</a> <span class="text-white"> | </span>
                                            <a @click="delUser(item.id)" class="text-red-500 cursor-pointer">Delete</a></td>
                                    </tr>
                                </tbody>
                            </table>
                            <Pagination :count="countuser" :itemperpage="itemperpage" @changePage="updateData"/>

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
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import * as dayjs from 'dayjs'
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
                list_user: [],
                filterdata: [],
                itemperpage: 10,
                countuser: 0,
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
            this.getUserData()
        },
        methods: {
            getUserData() {
                var data = {
                    itemperpage: this.itemperpage,
                    start: this.start,
                    filter: this.filteredusers
                }
                return this.$store.dispatch('user/getUserData', data).then((res) => {
                    this.list_user = res.data.list_user
                    this.countuser = res.data.count_all
                })
            },
          updateData(start){
                this.start= start
                this.getUserData()
          },
            filterData(data) {
                this.filterdata = data
            },
            delUser(id) {
                this.del_id = id
                this.confirm.active = true
                this.confirm.type = 'confirmdel'
                this.confirm.msg = 'Are you sure to Delete this Record?'
            },
            confirmDel() {
                this.$store.dispatch('user/destroy',this.del_id).then((res)=>{
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
            closeConfirm() {
                this.del_id = null
                this.confirm.active = false
                this.confirm.type = null
                this.comfirm.msg = null
            },
             closeAlert() {
                this.alert.active = false
                this.alert.type = null
                this.alert.msg = null
            },
        }
    }
</script>