<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20 lg:min-h-screen">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl dark:text-white ml-10">Manage Dashboard Template</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg dark:text-white">All Dashboard Template</h3>
                            <div class="flex flex-col lg:flex-row justify-between form-search">
                                <div class="col-span-full lg:col-span-2 my-5">
                                <a class="btn-purple rounded btn-blue-gradient" href="/template/create">Create Template</a>
                                </div>
                                <div class="col-span-full lg:col-span-2">
                                    <input type="text" placeholder="ID,Name" class="form-input">
                                    <button class="btn-purple rounded ml-3 h-12">Search</button>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10 mb-5 overflow-scroll lg:overflow-hidden">
                           <table class="table  border-collapse w-full rounded">
                            <thead class="text-xl bg-head-table text-white">
                                <tr class="border-b border-gray-600">
                                    <th class="p-5 border-r border-gray-600">ID</th>
                                    <th class="p-5 border-r border-gray-600">Template Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody class="bg-body-table dark:text-white">
                                <tr class="border-b dark:border-gray-600 border-slate-300" v-for="item in list_temp" :key="item.id">
                                    <td class="text-center border-r border-gray-600 p-3">{{item.id}}</td>
                                    <td class="text-center border-r border-gray-600 p-3">{{item.name}}</td>
                                    <td class="text-center"><a class="dark:text-cyan-300 text-cyan-800" :href="'/template/edit/'+item.id">Edit</a> | <button class="text-red-500" @click="delTemplate(item.id)">Delete</button></td>
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
    <AlertDelTemplate v-if="confirm.active" @close="confirm.active=false" @confirm="confirmDel" :id="del_id"/>
    <AlertDialog v-if="alert.active" :type="alert.type" :msg="alert.msg"/>

    <FooterPage/>
</template>
<script>
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import Pagination from '../../components/utility/Pagination.vue'
    import AlertDelTemplate from '../../components/utility/AlertDelTemplate.vue'
import AlertDialog from '../../components/utility/AlertDialog.vue'
    export default {
        components: {
            TopMenu,
            FooterPage,
            Pagination,
            AlertDelTemplate,
            AlertDialog
        },
        data() {
            return {
               list_temp:[],
               filterdata: [],
               count:0,
               start:0,
               itemperpage:10,
               del_id:null,
               confirm:{
                active:false,
               },
                alert: {
                    active: false,
                    type: null,
                    msg: null
                },
            }
        },
        created() {
            this.getListTemplate()
        },
        methods: {
          getListTemplate(){
             var data = {
                    itemperpage:this.itemperpage,
                    start:this.start
                }
            return this.$store.dispatch('template/ListTemplate',data).then((res)=>{
                this.list_temp = res.data.list
                 this.count = res.data.count_all
            })
          },
          updateData(start){
                this.start= start
                this.getListTemplate()
          },
          delTemplate(id){
                this.del_id = id
                this.confirm.active = true
          },
          confirmDel(val){
            var data ={
                id:this.del_id,
                data:val
            }
             this.$store.dispatch('template/destroyDashboard',data).then((res)=>{
                var success = res.data.success
                if(success){
                    this.confirm.active = false
                    this.getListTemplate()
                }
             })
          }
        }
    }
</script>