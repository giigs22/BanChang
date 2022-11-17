<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20 lg:min-h-screen">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl dark:text-white ml-10">{{$t('complaint_topic')}}</h1>
                        <div class="searchbox mt-5 mb-5">
                            <div class="flex flex-col lg:flex-row justify-between form-search">
                                <div class="col-span-full lg:col-span-2 my-5">
                                <a class="btn-purple rounded btn-blue-gradient h-12 flex items-center" href="/complaint_topic/create">
                                    <svg class="h-6 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg> {{$t('create')}}</a>
                                </div>
                                <div class="col-span-full lg:col-span-2">
                                    <input type="text" placeholder="ID,Topic" class="form-input" v-model="search">
                                    <button class="btn-purple rounded ml-3 h-12" @click="getListData">{{$t('search')}}</button>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10 mb-5 overflow-scroll lg:overflow-hidden">
                           <table class="table  border-collapse w-full rounded">
                            <thead class="text-xl bg-head-table text-white">
                                <tr class="border-b border-gray-600">
                                    <th class="p-5 border-r border-gray-600">{{$t('id')}}</th>
                                    <th class="p-5 border-r border-gray-600">{{$t('en')}}</th>
                                    <th class="p-5 border-r border-gray-600">{{$t('th')}}</th>
                                    <th class="p-5 border-r border-gray-600">{{$t('type')}}</th>
                                    <th class="p-5 border-r border-gray-600">{{$t('target_role')}}</th>
                                    <th>{{$t('action')}}</th>
                                </tr>
                            </thead>
                            <tbody class="bg-body-table dark:text-white">
                                <tr class="border-b dark:border-gray-600 border-slate-300" v-for="item in list_temp">
                                    <td class="text-center border-r border-gray-600 p-3">{{item.id}}</td>
                                    <td class="text-center border-r border-gray-600 p-3">{{item.en}}</td>
                                    <td class="text-center border-r border-gray-600 p-3">{{item.th}}</td>
                                    <td class="text-center border-r border-gray-600 p-3">{{item.complaintType}}</td>
                                    <td class="text-center border-r border-gray-600 p-3">{{item.targetRole}}</td>
                                    <td class="text-center"><a class="dark:text-cyan-300 text-cyan-800" :href="'/complaint_topic/edit/'+item.id">Edit</a> | <button @click="delTopic(item.id)" class="text-red-500">Delete</button></td>
                                </tr>
                                
                            </tbody>
                           </table>
                        </div>
                        <Pagination :count="count" :itemperpage="itemperpage" @changePage="updateData"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <AlertDialog v-if="alert.active" :type="alert.type" :msg="alert.msg"/>
    <AlertDialogConfirm v-if="confirm.active" :type="confirm.type" :msg="confirm.msg" @submit="confirmDel"
        @close="closeConfirm" />
    <FooterPage/>
</template>
<script>
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import Pagination from '../../components/utility/Pagination.vue'
import AlertDialog from '../../components/utility/AlertDialog.vue'
import AlertDialogConfirm from '../../components/utility/AlertDialogConfirm.vue'
import userService from '../../services/user.service'
    export default {
        components: {
            TopMenu,
            FooterPage,
            Pagination,
            AlertDialog,
            AlertDialogConfirm
        },
        data() {
            return {
               list_temp:[],
               count:0,
               start:0,
               itemperpage:10,
               del_id:null,
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
                search:null
            }
        },
        created() {
            this.getListData()
        },
        methods: {
            getListData(){
                if(this.search != null){
                    var data = {
                    itemperpage:this.itemperpage,
                    start:this.start,
                    filter:this.search
                }
                }else{
                    var data = {
                    itemperpage:this.itemperpage,
                    start:this.start
                }
                }
            
            return this.$store.dispatch('complaint/ListTopic',data).then((res)=>{
                this.list_temp = res.data.list
                 this.count = res.data.count_all
            }).catch((err)=>{
                userService.checkUnauthen(err.response)
            })
          },
          updateData(start){
                this.start= start
                this.getListData()
          },
          delTopic(id){
                this.del_id = id
                this.confirm.active = true
                this.confirm.type = 'confirmdel'
                this.confirm.msg = 'Are you sure to Delete this Record?'
          },
          confirmDel(){
             this.$store.dispatch('complaint/destroyTopic',this.del_id).then((res)=>{
                var success = res.data.success
                if(success){
                    this.confirm.active = false
                    this.confirm.type = null
                    this.confirm.msg = null
                    this.getListData()
                }
             })
          }
        }
    }
</script>