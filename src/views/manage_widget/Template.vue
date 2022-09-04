<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">Manage Dashboard Template</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg text-white">All Dashboard Template</h3>
                            <div class="flex justify-between form-search">
                                <div class="col-span-2 my-5">
                                <a class="btn-purple rounded btn-blue-gradient" href="/template/create">Create Template</a>
                                </div>
                                <div class="col-span-2">
                                    <input type="text" placeholder="ID,Name" class="form-input">
                                    <button class="btn-purple rounded ml-3 h-12">Search</button>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10 mb-5">
                           <table class="table  border-collapse text-white w-full bg-black-op8 rounded">
                            <thead class="text-xl">
                                <tr class="border-b border-gray-600">
                                    <th class="p-5 border-r border-gray-600">ID</th>
                                    <th class="p-5 border-r border-gray-600">Template Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-600" v-for="item in list_temp" :key="item.id">
                                    <td class="text-center border-r border-gray-600 p-3">{{item.id}}</td>
                                    <td class="text-center border-r border-gray-600 p-3">{{item.name}}</td>
                                    <td class="text-center"><a class="text-cyan-300" :href="'/template/edit/'+item.id">Edit</a> | <button class="text-red-500" @click="delTemplate(item.id)">Delete</button></td>
                                </tr>
                                
                            </tbody>
                           </table>
                          <Pagination :count="count" :itemperpage="itemperpage" @changePage="updateData"/>
                        </div>
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