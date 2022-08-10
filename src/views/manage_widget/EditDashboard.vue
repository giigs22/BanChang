<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">Create Dashboard</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg text-white">All Widgets</h3>
                            <div class="grid grid-cols-12 form-search my-10">
                                <div class="col-span-6 flex items-end gap-5">
                                    <div>
                                        <label for="" class="text-white m-3">Template Name</label>
                                        <input type="text" class="form-input" v-model="name_template">
                                    </div>
                                    <div class="ml-2">
                                        <button class="btn-purple rounded btn-blue-gradient h-12" @click="updateTemplate">Update Template</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10 mb-5 block-content">
                            <h1 class="text-xl text-white">Select Widget</h1>
                            <div class="grid grid-cols-12 gap-1 my-5">
                                <div class="block-widgets col-span-4 hover:opacity-60 h-full max-h-full"
                                    @click="selectWidget(item.id)" id="wg-1" v-for="item in list_widget" :key="item.id">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="uppercase">{{item.name}}</span>
                                    </div>
                                    <img :src="item.img" alt="" class="mx-auto w-1/3 my-5">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="my-5">
                        <h1 class="text-xl text-white mb-5">Dashboard Layout</h1>

                        <draggable v-model="template" group="widget"
                            @start="drag=true" @end="drag=false" item-key="id" class="grid grid-cols-12 gap-1" @change="updatemove">
                            <template #item="{element,index}">
                                <div class="block-widgets col-span-4 h-full max-h-full">
                                    <div class="flex justify-between">
                                         <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">{{element.name}}</span>
                                    </div>
                                    <button class="text-white p-1 bg-red-500 text-sm rounded" @click="removeWidget(index,element.id)">Remove</button>

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
            var id = this.$route.params.id
            this.getListWidget(id)
        },
        methods: {
            getListWidget(id){
                this.$store.dispatch('widget/getTemplate',id).then((res)=>{
                    var list_wg = []
                    res.data.widgets.forEach(el => {
                        list_wg.push(el.id)
                    });
                    this.selected = list_wg
                    this.name_template = res.data.name
                    this.setElement()

                });
            },
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
            updateTemplate(){
                if(this.name_template == ''){
                   this.confirm.active = true
                   this.confirm.msg = 'Please Insert Name'
                }else if(this.selected.length == 0){
                    this.confirm.active = true
                    this.confirm.msg = 'Please Select Widget'
                }else{
                    var data = {
                        id:this.$route.params.id,
                        name:this.name_template,
                        widget:this.selected
                    }
                    this.$store.dispatch('widget/updateDashboard',data).then((res)=>{
                        var data = res.data
                        if(data.success){
                            this.alert.active = true
                            this.alert.type = "success"
                            this.alert.msg = data.message
                            setTimeout(() => {
                                this.$router.push('/view/template')
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