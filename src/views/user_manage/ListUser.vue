<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">Air Quality</h1>
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
                                        <td class="text-center"><span class="text-cyan-300">Edit</span> | <span
                                                class="text-red-500">Delete</span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="my-5 paginate flex justify-center">
                                <button class="btn-prev"
                                    :disabled="{'disabled': pagination.currentPage==pagination.items[0] || pagination.items.length==0}"
                                    :class="{'disabled:opacity-70': pagination.currentPage==pagination.items[0] || pagination.items.length==0}"
                                    @click="selectPage(pagination.items[0])"> {{'<<'}} </button>
                                <button class="btn-prev" 
                                :disabled="{'disabled': pagination.currentPage==1}"
                                :class="{'disabled:opacity-70': pagination.currentPage==1}"
                                    @click="selectPage(pagination.currentPage-1)"> {{'<'}}
                                </button>
                                <button class="btn-page" :class="[{'border border-yellow-600 shadow-sm shadow-orange-100': item == pagination.currentPage},{'':item !== pagination.currentPage}]"
                                    v-for="item in pagination.filtered" :key="item" @click="selectPage(item)"> {{item}} </button>
                                <button class="btn-next"
                                    :disabled="{'disabled': pagination.currentPage==pagination.items.length}"
                                    :class="{'disabled:opacity-70': pagination.currentPage==pagination.items.length}"
                                    @click="selectPage(pagination.currentPage+1)"> {{'>'}}
                                </button>
                                <button class="btn-next"
                                    :disabled="{'disabled': pagination.currentPage==pagination.items[pagination.items.length-1] || pagination.items.length==0}"
                                    :class="{'disabled:opacity-70': pagination.currentPage==pagination.items[pagination.items.length-1] || pagination.items.length==0}"
                                    @click="selectPage(pagination.items[pagination.items.length-1])"> {{'>>'}} </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <FooterPage />
</template>
<script>
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import * as dayjs from 'dayjs'

    export default {
        components: {
            TopMenu,
            FooterPage
        },
        data() {
            return {
                list_user: [],
                itemperpage: 3,
                start: 0,
                end: 3,
                countuser: 0,
                pagination: {
                    range: 5,
                    currentPage: 1,
                    itemPerPage: 3,
                    items: [],
                    filtered: null
                },
                filterdata: []
            }
        },
        created() {
            this.getUserData().then((res) => {
                this.buildPagination()
                this.selectPage(1)
            })
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
                    console.log(res);
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
        }
    }
</script>