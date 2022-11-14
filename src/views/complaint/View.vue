<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <loading v-model:active="isLoading" color="#202A5A" loader="dots" :is-full-page="false" :opacity="0.1" class="rounded-lg"/>

                        <h1 class="text-xl dark:text-white ml-10">Complaint</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg dark:text-white">Search</h3>
                            <div class="grid grid-cols-12 form-search">
                                <div class="col-span-12 lg:col-span-10">
                                    <div class="grid grid-cols-12 gap-3">
                                        <!-- <div class="col-span-12 lg:col-span-4 flex lg:justify-end">
                                            <select class="h-12 rounded text-sm w-full lg:w-2/3" disabled>
                                            <option value="">Condition Type</option>
                                        </select>
                                        </div> -->
                                        <div class="col-span-12 lg:col-span-8 flex lg:justify-end">
                                            <input v-model="search.title" type="text" placeholder="Title" class="form-input w-full lg:ml-20">
                                        </div>
                                        <div class="col-span-12 lg:col-span-4 flex flex-col lg:flex-row lg:items-end justify-end">
                                            <label for="" class="dark:text-white">Order by</label>
                                        <select v-model="search.order_by" class="h-12 rounded text-sm lg:ml-4 w-full lg:w-2/3">
                                            <option value="">Order by</option>
                                            <option value="asc">ASC</option>
                                            <option value="desc">DESC</option>
                                        </select>
                                        </div>
                                        <div class="col-span-12 lg:col-span-4 flex flex-col lg:flex-row lg:items-end justify-end">
                                            <label for="" class="dark:text-white">From</label>
                                        <input v-model="search.start_date" type="date" placeholder="DD/MM/YYYY" class="form-input lg:ml-3 w-full lg:w-2/3">
                                        </div>
                                        <div class="col-span-12 lg:col-span-4 flex flex-col lg:flex-row lg:items-end justify-end">
                                            <label for="" class="dark:text-white">To</label>
                                        <input v-model="search.end_date" type="date" placeholder="DD/MM/YYYY" class="form-input lg:ml-3 w-full lg:w-2/3">
                                        </div>
                                        <div class="col-span-12 lg:col-span-4 flex flex-col lg:flex-row lg:items-end justify-end">
                                            <label for="" class="dark:text-white">Agency</label>
                                        <input v-model="search.agency" type="text" placeholder="Unit name" class="form-input lg:ml-5 w-full file:lg:w-2/3">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-12 lg:col-span-2">
                                    <button class="h-12 btn-purple rounded my-3 lg:my-0 lg:ml-3 w-full lg:w-auto" @click="searchComp">Search</button>
                                    <button class="h-12 btn-red rounded my-3 lg:my-0 lg:ml-3 w-full lg:w-auto" @click="resetfilter">Reset</button>
                                </div>
                            </div>
                        </div>
                        <div class="lg:mx-20 my-10 bg-white-op6 p-2 lg:p-7 rounded-lg">
                            <div class="flex justify-between">
                                <h1 class="lg:text-xl font-bold dark:text-white uppercase">Complaint summary</h1>
                                <button class="btn-purple rounded py-1 px-2">Export CSV</button>
                            </div>
                            <div class="relative pt-1">
                                <Summary :data="stat"></Summary>
                            </div>
                           
                        </div>
                        <!--  Block List Complaint -->
                        <div class="lg:mx-20 my-5 flex flex-col gap-3">
                            <div class="block-comp" v-if="list_comp.length == 0"><h1 class="text-xl dark:text-white text-center">No Result Data.</h1></div>
                            <div v-else class="block-comp" v-for="item in list_comp" :key="item.id">
                                <div class="grid grid-cols-12 gap-4">
                                    <div class="col-span-12 lg:col-span-2">
                                        <img :src="item.img_comp[0]" class="w-full lg:w-full" v-if="item.img_comp.length > 0"/>
                                        <img src="@/assets/img_ex_complaint.png" class="w-full lg:w-full" v-else/>
                                    </div>
                                    <div class="col-span-12 lg:col-span-7">
                                        <div class="flex flex-col items-center justify-between lg:flex-row">
                                            <div>
                                                <h1 class="font-bold my-2 lg:text-lg text-left max-w-xl">{{item.title}}</h1>
                                            </div>
                                            <div class="rounded-md bg-green-600 text-white px-3 py-1 lg:ml-10 lg:w-32" v-if="item.type=='disturbance'">Disturbance
                                            </div>
                                            <div class="rounded-md bg-red-600 text-white px-3 py-1 lg:ml-10 lg:w-32" v-if="item.type=='electricity'">Electricity
                                            </div>
                                            <div class="rounded-md bg-cyan-600 text-white px-3 py-1 lg:ml-10 lg:w-32" v-if="item.type=='water'">Water
                                            </div>
                                            <div class="rounded-md bg-yellow-400 text-black px-3 py-1 lg:ml-10 lg:w-32" v-if="item.type=='etc'">Etc
                                            </div>
                                        </div>
                                        <p class="text-left my-2">{{item.detail}}</p>
                                       
                                        <div class="bg-white-op6 py-3 px-4 rounded-md mb-5" v-if="item.img_comp.length > 0">
                                            <h1 class="font-bold text-lg text-left mb-3">Picture</h1>
                                    <div class="grid grid-cols-12 gap-3">
                                        <div class="col-span-3" v-for="img in item.img_comp">
                                            <img :src="img" alt="" class="h-32" @click="openImage(img)">
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                                    </div>
                                    <div class="col-span-3">
                                        <div class="flex lg:justify-end gap-2 my-3">
                                            <button
                                                class="px-3 py-2 rounded-md text-white btn-blue-gradient">{{$t(item.status)}}</button>
                                            <a class=" bg-cyan-400 px-3 py-2 rounded-md dark:text-black text-white" :href="'complaint/reply/'+item.id">Reply</a>
                                            <button class="bg-red-600 px-3 py-2 rounded-md text-white"  @click="delcomp(item.id)">Delete</button>
                                        </div>

                                    </div>
                                </div>
                                <div class="lg:ml-52 my-5 text-sm flex flex-col text-left lg:flex-row gap-2 lg:gap-5">
                                            <div><span class="font-bold">By</span> {{item.name_complaint}}</div>
                                            <div><span class="font-bold">Location</span> {{item.location}}</div>
                                            <div><span class="font-bold">Date/Time</span> {{item.date_complaint}}</div>
                                            <div><span class="font-bold">Responsible Agency</span> {{item.respon_agen}}</div>
                                        </div>
                                        <div>
                                    <h1 class="font-bold text-lg text-left mb-5">{{$t('reply')}}</h1>
                                </div>
                                <div class="mx-10 p-5 text-left bg-block-content-dark rounded-md mb-5"
                                    v-for="item_re in item.reply">
                                    {{item_re.text_reply}}
                                    <div class="mt-10 text-sm flex flex-col text-left lg:flex-row gap-2 lg:gap-5">
                                        <div><span class="font-bold">{{$t('by')}}</span> {{item_re.user.name}}</div>
                                        <div><span class="font-bold">{{$t('date_time')}}</span> {{item_re.created_at}}
                                        </div>
                                    </div>
                                </div>      
                            </div>
                            
                             

                            <Pagination :count="count" :itemperpage="itemperpage" @changePage="updateData" v-if="list_comp.length > 0"/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <AlertDialogConfirm v-if="confirm.active" :type="confirm.type" :msg="confirm.msg" @submit="confirmDel"
        @close="closeConfirm" />
    <AlertDialog v-if="alert.active" :type="alert.type" :msg="alert.msg"/>
    <LightBoxImage :img_url="img_selected" v-if="lightbox" @close="closeLightbox"></LightBoxImage>
    <FooterPage />
</template>
<script>
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import Pagination from '../../components/utility/Pagination.vue'
    import AlertDialogConfirm from '../../components/utility/AlertDialogConfirm.vue'
    import Summary from './Summary.vue'
    import LightBoxImage from '../../components/modals/LightBoxImage.vue'

    export default {
        components: {
            TopMenu,
            FooterPage,
            Pagination,
            AlertDialogConfirm,
            Summary,
            LightBoxImage
        },
        data() {
            return {
                count:0,
                itemperpage:4,
                start:0,
                list_comp:[],
                confirm:{
                    active:false,
                    type:null,
                    msg:null
                },
                 alert: {
                    active: false,
                    type: null,
                    msg: null
                },
                del_id:null,
                isLoading:false,
                stat:{
                    electricity:0,
                    water:0,
                    etc:0,
                    disturbance:0,
                },
                search:{
                    title:null,
                    start_date:null,
                    end_date:null,
                    order_by:null,
                    agency:null
                },
                img_selected:null,
                lightbox:false
            }
        },
        async created() {
            await this.getComplaintData()
        },
        methods:{
            getComplaintData(){
                var data = {
                    itemperpage: this.itemperpage,
                    start: this.start,
                    search:{
                        title:this.search.title,
                        start_date:this.search.start_date,
                        end_date:this.search.end_date,
                        order_by:this.search.order_by,
                        agency:this.search.agency
                    }
                }
                var type = 'all'
                this.isLoading = true
                return this.$store.dispatch('complaint/listdata',{data,type}).then((res)=>{
                    var data = res.data
                    this.count = data.count_all
                    this.list_comp = data.list_comp
                    this.stat = {
                        electricity:data.stat.electricity?data.stat.electricity:0,
                        water:data.stat.water?data.stat.water:0,
                        etc:data.stat.etc?data.stat.etc:0,
                        disturbance:data.stat.disturbance?data.stat.disturbance:0,
                    }
                    this.isLoading = false
                }).catch((err)=>{
                    var err_data = err.response
                    if(err_data.status === 401){
                        this.alert.active = true
                        this.alert.type = 'error'
                        this.alert.msg = err_data.data.message

                        setTimeout(() => {
                            this.closeAlert()
                            this.$store.dispatch('auth/logout');
                        }, 2000);
                    }
                })
            },
            updateData(start){
                this.start= start
                this.getComplaintData()
            },
            searchComp(){
                this.getComplaintData()
            },
            confirmDel(){
                this.$store.dispatch('complaint/compDestroy',this.del_id).then((res)=>{
                    var data = res.data
                    if (data.success) {
                        this.alert.active = true
                        this.alert.type = "del_success"
                        this.alert.msg = data.message
                        this.loading = false
                        this.closeConfirm()
                    setTimeout(() => {
                        this.closeAlert()
                        this.getComplaintData()
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
                }).catch((err)=>{
                    var err_data = err.response
                    if(err_data.status === 401){
                        this.alert.active = true
                        this.alert.type = 'error'
                        this.alert.msg = err_data.data.message

                        setTimeout(() => {
                            this.closeAlert()
                            this.$store.dispatch('auth/logout');
                        }, 2000);
                    }
                })
            },
            delcomp(id){
                this.del_id = id
                this.confirm.active = true
                this.confirm.type = 'confirmdel'
                this.confirm.msg = 'Are you sure to Delete this Record?'
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
            openImage(val){
                this.img_selected = val
                this.lightbox = true
            },
            closeLightbox(){
                this.lightbox = false
            },
            resetfilter(){
                    this.search.title= null
                    this.search.start_date= null
                    this.search.end_date= null
                    this.search.order_by= null
                    this.search.agency= null
                    this.getComplaintData()
            }
            
        }
    }
</script>