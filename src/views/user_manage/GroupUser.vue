<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">GroupUser List</h1>
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
                            <div class="my-5">
                                <button class="btn-purple rounded btn-blue-gradient" @click="addGroup">Add
                                    Group</button>
                            </div>
                        </div>

                        <div class="">
                            <table class="table w-full shadow-sm">
                                <thead class="text-white bg-head-table rounded-md text-lg">
                                    <tr>
                                        <th class="p-5 rounded-tl-md">ID</th>

                                        <th>Name</th>

                                        <th class="rounded-tr-md">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="text-white bg-body-table">
                                    <tr v-for="(item,index) in list" :key="index">
                                        <td class="text-center p-3">{{item.id}}</td>
                                        <td class="text-center">{{item.name}}</td>
                                        <td class="text-center"><a class="text-cyan-300"
                                                :href="'/user/edit/'+item.id">Edit</a> <span class="text-white"> |
                                            </span>
                                            <a @click="delUser(item.id)" class="text-red-500 cursor-pointer">Delete</a>
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
    <AlertDialog v-if="alert.active" :type="alert.type" :msg="alert.msg" />
    <AddGroup v-if="add"/>
    <FooterPage />
</template>
<script>
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import * as dayjs from 'dayjs'
    import AlertDialogConfirm from '../../components/utility/AlertDialogConfirm.vue'
    import AlertDialog from '../../components/utility/AlertDialog.vue'
    import Pagination from '../../components/utility/Pagination.vue'
    import AddGroup from '../../components/modals/AddGroupUser.vue'
    export default {
        components: {
            TopMenu,
            FooterPage,
            AlertDialogConfirm,
            AlertDialog,
            Pagination,
            AddGroup
        },
        data() {
            return {
                list: [],
                filterdata: [],
                itemperpage: 10,
                count: 0,
                confirm: {
                    active: false,
                    type: null,
                    msg: null
                },
                alert: {
                    active: false,
                    type: null,
                    msg: null
                },
                del_id: null,
                add:false
            }
        },
        created() {
            this.getUserGroup()
        },
        methods: {
            getUserGroup() {
                var data = {
                    itemperpage: this.itemperpage,
                    start: this.start,
                    filter: this.filteredusers
                }
                return this.$store.dispatch('user/getListRole', data).then((res) => {
                    console.log(res);
                    this.list = res.data.list
                    this.count = res.data.count_all
                })
            },
            updateData(start) {
                this.start = start
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
                this.$store.dispatch('user/destroy', this.del_id).then((res) => {
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
                    } else {
                        this.alert.active = true
                        this.alert.type = "error"
                        this.alert.msg = data.message
                        setTimeout(() => {
                            this.closeAlert()
                            this.clodeConfirm()
                            this.loading = false

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