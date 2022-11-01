<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl dark:text-white ml-10">{{$t('permissions')}}</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg dark:text-white">{{$t('search')}}</h3>
                            <div class="grid grid-cols-12 form-search">
                                <div class="lg:col-span-6 col-span-12">
                                    <div class="grid grid-cols-4 gap-3">
                                        <div class="lg:col-span-3 col-span-full">
                                            <div class="grid grid-cols-4 gap-2">
                                            <div class="col-span-full lg:col-span-2">
                                                <select class="form-select h-12 rounded text-sm w-full">
                                                    <option value=""></option>
                                                </select>                                            </div>
                                            <div class="col-span-full lg:col-span-1">
                                                <button class="btn-purple rounded w-full lg:w-auto h-12">{{$t('search')}}</button>
                                            </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="lg:overflow-hidden overflow-scroll">
                            <table class="table w-full shadow-sm">
                                <thead class="text-white bg-head-table rounded-md text-lg">
                                    <tr>
                                        <th class="p-5 rounded-tl-md">{{$t('id')}}</th>
                                        <th>{{$t('role_name')}}</th>
                                        <th>{{$t('permissions')}}</th>
                                        <th>{{$t('status')}}</th>
                                        <th class="rounded-tr-md">{{$t('action')}}</th>
                                    </tr>
                                </thead>
                                <tbody class="dark:text-white bg-body-table">
                                    <tr>
                                        <td class="text-center p-3">1</td>
                                        <td class="text-center">Administrator</td>
                                        <td class="text-sm lg:overflow-hidden overflow-scroll h-4">
                                            <p>Dashboard (View)</p>
                                            <p>Air Quality (View, Add, Edit, Delete)</p>
                                            <p>Smart Lighting (View, Add, Edit, Delete)</p>
                                            <p>Smart Lighting (View, Add, Edit, Delete)</p>
                                            <p>Free Internet (View, Add, Edit, Delete)</p>
                                            <p>CCTV (View, Add, Edit, Delete)</p>
                                            <p>Digital Signage (View, Add, Edit, Delete)</p>
                                            <p>Complaint (View, Reply, Edit, Delete)</p>
                                        </td>
                                        <td class="text-center">
                                            <div class="dark:text-green-500 text-green-800">Active</div>
                                            <!-- <div class="text-red-500">Inactive</div> -->
                                        </td>
                                        <td class="text-center"><a class="dark:text-cyan-300 text-cyan-600">Edit</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- <div class="my-5 paginate flex justify-center">
                                <button class="btn-prev"
                                    :disabled="{'disabled': pagination.currentPage==pagination.items[0] || pagination.items.length==0}"
                                    :class="{'disabled:opacity-70': pagination.currentPage==pagination.items[0] || pagination.items.length==0}"
                                    @click="selectPage(pagination.items[0])"> {{'<<'}} </button>
                                <button class="btn-prev" :disabled="{'disabled': pagination.currentPage==1}"
                                    :class="{'disabled:opacity-70': pagination.currentPage==1}"
                                    @click="selectPage(pagination.currentPage-1)"> {{'<'}}
                                </button>
                                <button class="btn-page"
                                    :class="[{'border border-yellow-600 shadow-sm shadow-orange-100': item == pagination.currentPage},{'':item !== pagination.currentPage}]"
                                    v-for="item in pagination.filtered" :key="item" @click="selectPage(item)"> {{item}}
                                </button>
                                <button class="btn-next"
                                    :disabled="{'disabled': pagination.currentPage==pagination.items.length}"
                                    :class="{'disabled:opacity-70': pagination.currentPage==pagination.items.length}"
                                    @click="selectPage(pagination.currentPage+1)"> {{'>'}}
                                </button>
                                <button class="btn-next"
                                    :disabled="{'disabled': pagination.currentPage==pagination.items[pagination.items.length-1] || pagination.items.length==0}"
                                    :class="{'disabled:opacity-70': pagination.currentPage==pagination.items[pagination.items.length-1] || pagination.items.length==0}"
                                    @click="selectPage(pagination.items[pagination.items.length-1])"> {{'>>'}} </button>
                            </div> -->


                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <AlertDialogConfirm v-if="confirm.active" :type="confirm.type" :msg="confirm.msg" @submit="confirmDel"
        @close="closeConfirm" />
    <AlertDialog v-if="alert.active" :type="alert.type" :msg="alert.msg" />
    <FooterPage />
</template>
<script>
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import AlertDialogConfirm from '../../components/utility/AlertDialogConfirm.vue'
    import AlertDialog from '../../components/utility/AlertDialog.vue'
    export default {
        components: {
            TopMenu,
            FooterPage,
            AlertDialogConfirm,
            AlertDialog
        },
        data() {
            return {
                list_user: [],
                itemperpage: 10,
                start: 0,
                end: 10,
                countuser: 0,
                pagination: {
                    range: 5,
                    currentPage: 1,
                    itemPerPage: 10,
                    items: [],
                    filtered: null
                },
                filterdata: [],
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
            // this.getUserData().then((res) => {
            //     this.buildPagination()
            //     this.selectPage(1)
            // })
        },
        watch: {
            'pagination.currentPage': function (n, o) {
                if (n !== o) {
                    this.getUserData().then((res) => {

                    })
                }
            },
            'pagination.itemPerPage': function (n, o) {
                if (n !== o) {
                    this.getUserData().then((res) => {
                        this.buildPagination();
                        this.selectPage(1)
                    })
                }
            },
            filterdata(n, o) {
                if (n !== 0) {
                    this.getUserData().then((res) => {
                        this.buildPagination();
                        this.selectPage(1)
                    })
                }
            }
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
            buildPagination() {
                let numberOfPage = Math.ceil(this.countuser / this.pagination.itemPerPage)
                this.pagination.items = []
                for (var i = 0; i < numberOfPage; i++) {
                    this.pagination.items.push(i + 1)
                }
            },
            selectPage(item) {
                this.pagination.currentPage = item

                let start = 0
                let end = 0
                if (this.pagination.currentPage < this.pagination.range - 2) {
                    start = 1
                    end = start + this.pagination.range - 1
                } else if (this.pagination.currentPage <= this.pagination.items.length && this.pagination.currentPage >
                    this.pagination.items.length - this.pagination.range + 2) {
                    start = this.pagination.items.length - this.pagination.range + 1
                    end = this.pagination.items.length
                } else {
                    start = this.pagination.currentPage - 2
                    end = this.pagination.currentPage + 2
                }
                if (start < 1) {
                    start = 1
                }
                if (end > this.pagination.items.length) {
                    end = this.pagination.items.length
                }

                this.pagination.filtered = []
                for (var i = start; i <= end; i++) {
                    this.pagination.filtered.push(i);
                }

                var sindex = (item - 1) * this.pagination.itemPerPage
                if (item < this.pagination.items.length) {
                    var eindex = sindex + (this.pagination.itemPerPage - 1)
                } else if (item == this.pagination.items.length) {
                    var eindex = sindex + (this.pagination.itemPerPage - 1)
                    if (eindex > this.countuser) {
                        eindex = this.countuser
                    } else {
                        eindex = eindex
                    }
                }
                this.start = sindex
                this.end = eindex

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