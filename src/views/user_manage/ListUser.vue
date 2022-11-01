<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20 lg:min-h-screen">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl dark:text-white ml-10">{{$t('user_list')}}</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg dark:text-white">{{$t('search')}}</h3>
                            <div class="grid grid-cols-12 form-search">
                                <div class="lg:col-span-6 col-span-12">
                                    <div class="grid grid-cols-4 gap-3">
                                        <div class="lg:col-span-3 col-span-4">
                                            <div class="grid grid-cols-4 gap-2">
                                            <div class="col-span-4 lg:col-span-2 flex lg:justify-end">
                                                <select name="" id="" class="h-12 rounded text-sm w-full">
                                                    <option value="">{{$t('condition_type')}}</option>
                                                </select>
                                            </div>
                                            <div class="col-span-4 lg:col-span-2">
                                                <input type="text" :placeholder="$t('id')+','+$t('name')" class="form-input w-full">
                                            </div>
                                            <div class="col-span-4 lg:col-span-2 lg:flex items-end lg:justify-end">
                                                <label for="" class="dark:text-white mr-1 block lg:w-16">{{$t('from')}}</label>
                                            <input type="text" placeholder="DD/MM/YYYY" class="form-input w-full">
                                            </div>
                                            <div class="col-span-4 lg:col-span-2 lg:flex items-end">
                                                <label for="" class="dark:text-white mr-1 block lg:w-16">{{$t('to')}}</label>
                                            <input type="text" placeholder="DD/MM/YYYY" class="form-input w-full">
                                            </div>
                                            </div>
                                        </div>
                                       <div class="col-span-4 lg:col-span-1">
                                        <button class="btn-purple rounded w-full lg:w-auto h-15">{{$t('search')}}</button>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:overflow-hidden overflow-scroll">
                            <table class="w-full shadow-sm">
                                <thead class="text-white bg-head-table rounded-md lg:text-lg">
                                    <tr>
                                        <th class="p-5 rounded-tl-md">{{$t('id')}}</th>
                                        <th>{{$t('register_date')}}</th>
                                        <th>{{$t('name')}}</th>
                                        <th>{{$t('username')}}</th>
                                        <th>{{$t('role')}}</th>
                                        <th>{{$t('status')}}</th>
                                        <th class="rounded-tr-md">{{$t('action')}}</th>
                                    </tr>
                                </thead>
                                <tbody class="dark:text-white bg-body-table">
                                    <tr v-for="(item,index) in list_user" :key="index"
                                        :class="[item.status ==='0'?'text-red-500':'']">
                                        <td class="text-center p-3 border dark:border-gray-500 border-slate-300">{{item.id}}</td>
                                        <td class="w-52 border dark:border-gray-500 border-slate-300">
                                            {{$dayjs(item.register_date).format('dddd,')}}<br>
                                            {{$dayjs(item.register_date).format('DD MMMM YYYY')}}
                                        </td>
                                        <td class="text-center border dark:border-gray-500 border-slate-300">{{item.name}}</td>
                                        <td class="text-center border dark:border-gray-500 border-slate-300">{{item.username}}</td>
                                        <td class="text-center border dark:border-gray-500 border-slate-300">{{item.role}}</td>
                                        <td class="text-center border dark:border-gray-500 border-slate-300">
                                            <div class="text-green-500" v-if="item.status ==='1'">Active</div>
                                            <div class="text-red-500" v-else>Inactive</div>
                                        </td>
                                        <td class="text-center border dark:border-gray-500 border-slate-300"><a class="dark:text-cyan-300 text-cyan-600"
                                                :href="'/user/edit/'+item.id">Edit</a> <span class="text-white"> | </span>
                                            <a @click="delUser(item.id)" class="text-red-500 cursor-pointer">Delete</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Pagination :count="countuser" :itemperpage="itemperpage" @changePage="updateData"/>
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