<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl dark:text-white ml-10">{{$t('create_dashboard')}}</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg dark:text-white">{{$t('all_widgets')}}</h3>
                            <div class="grid grid-cols-12 form-search my-10">
                                <div class="col-span-full lg:col-span-3 flex-col lg:flex-row items-end gap-5">
                                    <div class="">
                                        <label for="" class="dark:text-white m-3">{{$t('template_name')}}</label>
                                        <input type="text" class="form-input" v-model="name_template">
                                    </div>
                                </div>
                                <div class="col-span-full lg:col-span-2">
                                    <div class="ml-2 mt-3 lg:mt-0">
                                        <button class="btn-purple rounded btn-blue-gradient h-12" @click="saveTemplate">{{$t('save_template')}}</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10 mb-5 block-content">
                            <h1 class="text-xl dark:text-white">{{$t('select_widget')}}</h1>
                            <div class="grid grid-cols-12 gap-1 my-5">
                                 <div class="block-widgets col-span-6 lg:col-span-4 hover:opacity-60 h-full max-h-full"
                                    @click="selectWidget(item.id)" id="wg-1" v-for="item in list_widget" :key="item.id">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="uppercase text-sm lg:text-lg">{{$t(item.name)}}</span>
                                    </div>
                                    <img :src="item.img" alt="" class="mx-auto w-1/3 my-5">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="my-5">
                        <h1 class="text-xl text-white mb-5">{{$t('dashboard_layout')}}</h1>

                        <draggable v-model="template" group="widget"
                            @start="drag=true" @end="drag=false" item-key="id" class="grid grid-cols-12 gap-1" @change="updatemove">
                            <template #item="{element,index}">
                                <div class="block-widgets col-span-6 lg:col-span-4 h-full max-h-full">
                                    <div class="flex justify-between">
                                         <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">{{$t(element.name)}}</span>
                                    </div>
                                    <button class="text-white p-1 bg-red-500 text-sm rounded" @click="removeWidget(index,element.id)">{{$t('remove')}}</button>

                                    </div>
                                   
                                    <img :src="element.img" alt="" class="mx-auto w-1/3 my-5">
                                </div>
                            </template>
                        </draggable>

                    </div>
                </div>
            </div>
        </section>
    </main>
    <FooterPage />
        <AlertDialogConfirm v-if="confirm.active" :msg="confirm.msg" :type="'error'" @close="closeConfirm" />
    <AlertDialog v-if="alert.active" :type="alert.type" :msg="alert.msg"/>

</template>
<script>
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import draggable from 'vuedraggable'
    import AlertDialogConfirm from '../../components/utility/AlertDialogConfirm.vue'
    import AlertDialog from '../../components/utility/AlertDialog.vue'
    import widget_data from '../../services/widget_data.json'

    export default {
        components: {
            TopMenu,
            FooterPage,
            draggable,
            AlertDialogConfirm,
            AlertDialog
        },
        data() {
            const list_widget = widget_data
            return {
                selected: [],
                drag: false,
                template: [],
                list_widget,
                name_template:null,
               confirm:{
                active:false,
                msg:null
               },
                alert: {
                    active: false,
                    type: null,
                    msg: null
                },
            }
        },
        async created() {

        },
        methods: {
            selectWidget(id) {
                if (!this.selected.includes(id)) {
                    this.selected.push(id)
                }
                var set_data = this.list_widget.filter(object1 => {
                    return this.selected.some(object2 => {
                    return object1.id === object2;
                    });
                });
                this.template= set_data
                //this.setElement()
            },
            setElement() {
                this.template = []
                var set_data = this.list_widget.filter(object1 => {
                    return this.selected.some(object2 => {
                    return object1.id === object2;
                    });
                });
                this.template= set_data
            },
            removeWidget(index){
                this.template.splice(index,1)
                this.selected.splice(index,1)
            },
            updatemove(){
                this.selected = []
                this.template.forEach(element => {
                    this.selected.push(element.id)
                });
            },
            saveTemplate(){
                if(this.name_template == ''){
                   this.confirm.active = true
                   this.confirm.msg = 'Please Insert Name'
                }else if(this.selected.length == 0){
                    this.confirm.active = true
                    this.confirm.msg = 'Please Select Widget'
                }else{
                    var data = {
                        name:this.name_template,
                        widget:this.selected
                    }
                    this.$store.dispatch('template/saveDashboard',data).then((res)=>{
                        var data = res.data
                        if(data.success){
                            this.alert.active = true
                            this.alert.type = "success"
                            this.alert.msg = data.message
                            setTimeout(() => {
                                this.$router.push('/template')
                            }, 2000);
                        }else{
                            this.confirm.active = true
                            this.confirm.msg = data.message
                        }
                    })
                }
            },
            closeConfirm(){
                this.confirm.active = false
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