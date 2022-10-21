<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl dark:text-white ml-10">GroupUser List</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg dark:text-white">Search</h3>
                            <div class="grid grid-cols-12 form-search">
                                <div class="lg:col-span-6 col-span-12">
                                    <div class="grid grid-cols-4 gap-3">
                                        <div class="lg:col-span-3 col-span-full">
                                            <div class="grid grid-cols-4 gap-2">
                                            <div class="col-span-full lg:col-span-2">
                                                <input type="text" placeholder="ID.Name" class="form-input w-full">
                                            </div>
                                            <div class="col-span-full lg:col-span-1">
                                                <button class="btn-purple rounded w-full lg:w-auto h-12">Search</button>
                                            </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="my-5">
                                <button class="btn-purple rounded btn-blue-gradient flex gap-2" @click="add=true"><svg
                                        class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" /></svg> Add
                                    Group</button>
                            </div>
                        </div>

                        <div class="lg:overflow-hidden overflow-scroll">
                            <table class="table w-full shadow-sm">
                                <thead class="text-white bg-head-table rounded-md text-lg">
                                    <tr>
                                        <th class="p-5 rounded-tl-md">ID</th>

                                        <th>Name</th>

                                        <th class="rounded-tr-md">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="dark:text-white bg-body-table">
                                    <tr v-for="(item,index) in list" :key="index">
                                        <td class="text-center p-3 border dark:border-gray-500 border-slate-300">{{item.id}}</td>
                                        <td class="text-center border dark:border-gray-500 border-slate-300">{{item.name}}</td>
                                        <td class="text-center border dark:border-gray-500 border-slate-300"><button class="dark:text-cyan-300 text-cyan-600"
                                                @click="editUser(item.id)">Edit</button> <span class="text-white"> |
                                            </span>
                                            <a @click="delUser(item.id)" class="text-red-500 cursor-pointer">Delete</a>
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
    <AlertDelGroupUser v-if="confirm.active" @close="confirm.active=false" @confirm="confirmDel" :id="del_id"/>
    <AlertDialog v-if="alert.active" :type="alert.type" :msg="alert.msg" />
    <AddGroup v-if="add" @close="updateGroup('add')" />
    <EditGroup v-if="edit" :id="edit_id" @close="updateGroup('edit')" />
    <FooterPage />
</template>
<script>
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import AlertDialogConfirm from '../../components/utility/AlertDialogConfirm.vue'
    import AlertDialog from '../../components/utility/AlertDialog.vue'
    import Pagination from '../../components/utility/Pagination.vue'
    import AddGroup from '../../components/modals/AddGroupUser.vue'
    import EditGroup from '../../components/modals/EditGroupUser.vue'
    import AlertDelGroupUser from '../../components/utility/AlertDelGroupUser.vue'

    export default {
        components: {
            TopMenu,
            FooterPage,
            AlertDialogConfirm,
            AlertDialog,
            Pagination,
            AddGroup,
            EditGroup,
            AlertDelGroupUser
        },
        data() {
            return {
                list: [],
                filterdata: [],
                itemperpage: 10,
                count: 0,
                confirm: {
                    active: false,
                },
                alert: {
                    active: false,
                    type: null,
                    msg: null
                },
                edit_id: null,
                del_id: null,
                add: false,
                edit: false
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
                    this.list = res.data.list
                    this.count = res.data.count_all
                })
            },
            confirmDel(val) {
               var data ={
                id:this.del_id,
                data:val
               }
                this.$store.dispatch('user/destroyRole',data).then((res)=>{
                var data = res.data
                var success = res.data.success
                if(success){
                    this.confirm.active =false
                    this.alert.active = true
                    this.alert.type = 'success'
                    this.alert.msg = data.message
                    setTimeout(() => {
                        this.clearAlert()
                        this.getUserGroup()
                    }, 2000);
                    this.getUserGroup()
                }
            })
            
            },
            updateGroup(type) {
                if (type == 'add') {
                    this.add = !this.add
                } else {
                    this.edit = !this.edit
                }
                this.getUserGroup()
            },
            editUser(id) {
                this.edit = true
                this.edit_id = id
            },
            delUser(id) {
              this.confirm.active = true
                this.del_id = id
            },
            clearAlert(){
                  this.alert.active = false
                    this.alert.type = null
                    this.alert.msg = null
            }
        }
    }
</script>