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

                                <div class="col-span-2 flex flex-col items-end gap-5">
                                    <div>
                                        <input type="text" placeholder="ID.Name" class="form-input">
                                    </div>
                                </div>
                                <div class="col-span-2">
                                    <div class="ml-2">
                                        <button class="btn-purple rounded h-12 flex gap-2 items-center"><svg
                                                class="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24"
                                                stroke-width="2" stroke="currentColor" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="10" cy="10" r="7" />
                                                <line x1="21" y1="21" x2="15" y2="15" /></svg>Search</button>
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
                                        <td class="text-center"><button class="text-cyan-300"
                                                @click="editUser(item.id)">Edit</button> <span class="text-white"> |
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
                console.log(res);
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