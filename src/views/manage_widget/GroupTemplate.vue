<template>
    <TopMenu/>
     <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl dark:text-white ml-10 mb-5">{{$t('group_user_template')}}</h1>
                         <div class="searchbox mt-5 mb-5">
                            <div class="flex justify-between form-search">
                               
                                <div class="col-span-2">
                                    <input type="text" :placeholder="$t('id')+','+$t('name')" class="form-input">
                                    <button class="btn-purple rounded ml-3 h-12">{{$t('search')}}</button>
                                </div>
                            </div>
                        </div>
                        <div class="lg:overflow-hidden overflow-scroll">
                            <table class="table w-full shadow-sm">
                                <thead class="text-white bg-head-table rounded-md text-lg">
                                    <tr>
                                        <th class="p-5 rounded-tl-md">{{$t('group_user')}}</th>
                                        <th>{{$t('template')}}</th>
                                        <th class="rounded-tr-md">{{$t('action')}}</th>
                                    </tr>
                                </thead>
                                <tbody class="dark:text-white bg-body-table">
                                   <tr v-for="item in list_group" :key="item.id" class="border-b dark:border-gray-600">
                                    <td class="text-center p-2">{{item.name}}</td>
                                    <td class="text-center">
                                        <span v-if="item.templates[0] == null" class="text-gray-400 text-sm">No Setting Template</span>
                                        <span v-else class="text-md text-green-600">{{item.templates[0].name}}</span>
                                    </td>
                                    <td class="text-center"><button class="dark:text-cyan-300 text-cyan-800" @click="setting(item.id)">Setting</button></td>
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
    <SelectTemplate v-if="set_active" @close="close" :id="set_id"/>
    <FooterPage class="2xl:fixed inset-x-0 bottom-0"/>
</template>
<script>
import TopMenu from '../layout/TopMenu.vue'
import FooterPage from '../layout/FooterPage.vue'
import Pagination from '../../components/utility/Pagination.vue'
import SelectTemplate from '../../components/modals/SelectTemplate.vue'
export default{
    components:{
        TopMenu,
        FooterPage,
        Pagination,
        SelectTemplate
    },
    data() {
        return {
            list_group:[],
            set_active:false,
            set_id:null,
            itemperpage:10,
            count:0
        }
    },
    created(){
        this.getListdata()
    },
    methods:{
        getListdata(){
            this.$store.dispatch('template/groupUserTemp').then((res)=>{
                this.list_group = res.data.list
                this.count = res.data.count_all
            })
        },
        setting(id){
            this.set_active = true
            this.set_id = id
        },
        close(){
            this.set_active = false
            this.getListdata()
        }
    }
}
</script>