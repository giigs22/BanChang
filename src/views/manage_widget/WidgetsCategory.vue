<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl dark:text-white ml-10">{{$t('category_widgets')}}</h1>
                        <div class="searchbox mt-5 mb-5">
                            <div class="flex flex-col lg:flex-row justify-between form-search">
                                <div class="col-span-full lg:col-span-2 my-5">
                                    <button class="btn-purple rounded btn-blue-gradient" @click="addCate">{{$t('add_category')}}</button>                              </div>
                                <div class="col-span-full lg:col-span-2">
                                    <input type="text" :placeholder="$t('id')+','+$t('name')" class="form-input">
                                    <button class="btn-purple rounded ml-3 h-12">{{$t('search')}}</button>
                                </div>
                            </div>
                        </div>
                        <div class="mb-5 lg:overflow-hidden overflow-scroll">
                            <table class="table  border-collapse w-full dark:bg-black-op8 bg-white rounded">
                                <thead class="text-lg  bg-head-table text-white">
                                    <tr class="border-b dark:border-gray-600 border-slate-300">
                                        <th class="p-5 border-r dark:border-gray-600 border-slate-300">{{$t('id')}}</th>
                                        <th class="border-r dark:border-gray-600 border-slate-300">{{$t('name')}}</th>
                                        <th class="border-r dark:border-gray-600 border-slate-300">{{$t('icon')}}</th>
                                        <th>{{$t('action')}}</th>
                                    </tr>
                                </thead>
                                <tbody class="dark:text-white">
                                    <tr v-for="item in list" :key="item.id">
                                        <td class="p-5 text-center border-r border-b dark:border-gray-600">{{item.id}}</td>
                                        <td class="text-center border-r border-b dark:border-gray-600">{{item.name}}</td>
                                        <td class="text-center border-r border-b dark:border-gray-600"><img :src="item.icon"
                                                alt="" class="w-12 mx-auto"></td>
                                        <td class="text-center border-r border-b dark:border-gray-600">
                                            <a :href="'/devices/cate/'+item.id" class="text-green-400">View</a> |
                                            <button @click="editCate(item.id,item.name)"
                                                class="dark:text-cyan-300 text-cyan-600">Edit</button> |
                                            <button @click="delCate(item.id)" class="text-red-500">Delete</button></td>
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
    <AddCateWidget v-if="add" @close="updateData" />
    <EditCateWidget v-if="edit.active" :id="edit.id" :namecate="edit.name" @close="updateData" />
    <AlertDialogConfirm v-if="confirm.active" :type="confirm.type" :msg="confirm.msg" @submit="confirmDel"
        @close="closeConfirm" />
    <AlertDialog v-if="alert.active" :type="alert.type" :msg="alert.msg" />
    <FooterPage />
</template>
<script>
    import TopMenu from '../layout/TopMenu.vue';
    import FooterPage from '../layout/FooterPage.vue';
    import Pagination from '../../components/utility/Pagination.vue'
    import AddCateWidget from '../../components/modals/AddCateWidget.vue'
    import EditCateWidget from '../../components/modals/EditCateWidget.vue'
    import AlertDialogConfirm from '../../components/utility/AlertDialogConfirm.vue'
    import AlertDialog from '../../components/utility/AlertDialog.vue'

    export default {
        components: {
            TopMenu,
            FooterPage,
            Pagination,
            AddCateWidget,
            EditCateWidget,
            AlertDialogConfirm,
            AlertDialog
        },
        data() {
            return {
                itemperpage: 10,
                start: 0,
                count: 0,
                list: [],
                add: false,
                edit: {
                    active: false,
                    id: null,
                    name: null
                },
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
                del_id: null

            }
        },
        created() {
            this.getwidgetCate()
        },
        methods: {
            getwidgetCate() {
                var data = {
                    itemperpage: this.itemperpage,
                    start: this.start
                }
                this.$store.dispatch('widget/getListCate', data).then((res) => {
                    this.list = res.data.list
                    this.count = res.data.count_all
                })
            },
            updateData(start) {
                this.add = false
                this.edit.active = false
                this.start = start
                this.getwidgetCate()
            },
            addCate() {
                this.add = true
            },
            editCate(id, name) {
                this.edit.active = true
                this.edit.id = id
                this.edit.name = name
            },
            delCate(id) {
                this.del_id = id
                this.confirm.active = true
                this.confirm.type = 'confirmdel'
                this.confirm.msg = 'Are you sure to Delete this Record?'
            },
            confirmDel() {
                this.$store.dispatch('widget/delCate', this.del_id).then((res) => {
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
                            this.closeConfirm()
                        }, 2000);
                    }
                })
            },
            closeConfirm() {
                this.del_id = null
                this.confirm.active = false
                this.confirm.type = null
                this.confirm.msg = null
            },
            closeAlert() {
                this.alert.active = false
                this.alert.type = null
                this.alert.msg = null
            },
        }
    }
</script>