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
                                        <button class="btn-purple rounded btn-blue-gradient h-12" @click="saveTemplate">Save Template</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10 mb-5 block-content">
                            <h1 class="text-xl text-white">Select Widget</h1>
                            <div class="grid grid-cols-12 gap-1 my-5">
                                <div class="block-widgets col-span-4 hover:opacity-60 h-full max-h-full"
                                    @click="selectWidget(1)" id="wg-1">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="uppercase">Air Quality</span>
                                    </div>
                                    <img src="@/assets/icon_widget_aqi.png" alt="" class="mx-auto w-1/3 my-5">
                                </div>
                                <div class="block-widgets col-span-4 hover:opacity-60 h-full max-h-full"
                                    @click="selectWidget(2)" id="wg-2">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="uppercase">Smart Lighting</span>
                                    </div>
                                    <img src="@/assets/icon_widget_smartlight.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4 hover:opacity-60 h-full max-h-full"
                                    @click="selectWidget(3)" id="wg-3">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">Smart Pole Energy</span>
                                    </div>
                                    <img src="@/assets/icon_widget_smartpole.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4 hover:opacity-60 h-full max-h-full"
                                    @click="selectWidget(4)" id="wg-4">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">CCTV Camera</span>
                                    </div>
                                    <img src="@/assets/icon_widget_cctv.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4 hover:opacity-60 h-full max-h-full"
                                    @click="selectWidget(5)" id="wg-5">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">CCTV Surviellance</span>
                                    </div>
                                    <img src="@/assets/icon_widget_cctvsur.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4 hover:opacity-60 h-full max-h-full"
                                    @click="selectWidget(6)" id="wg-6">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">Parking</span>
                                    </div>
                                    <img src="@/assets/icon_widget_parking.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4 hover:opacity-60 h-full max-h-full"
                                    @click="selectWidget(7)" id="wg-7">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">Check License Plate</span>
                                    </div>
                                    <img src="@/assets/icon_widget_checklicense.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4 hover:opacity-60 h-full max-h-full"
                                    @click="selectWidget(8)" id="wg-8">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">License Plate</span>
                                    </div>
                                    <img src="@/assets/icon_widget_licenseplate.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4 hover:opacity-60 h-full max-h-full"
                                    @click="selectWidget(9)" id="wg-9">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">Free Wifi</span>
                                    </div>
                                    <img src="@/assets/icon_widget_freewifi.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4 hover:opacity-60 h-full max-h-full"
                                    @click="selectWidget(10)" id="wg-10">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">Digital Signage</span>
                                    </div>
                                    <img src="@/assets/icon_widget_digital.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4 hover:opacity-60 h-full max-h-full"
                                    @click="selectWidget(11)" id="wg-11">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">Complaint</span>
                                    </div>
                                    <img src="@/assets/icon_widget_complaint.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4 hover:opacity-60 h-full max-h-full"
                                    @click="selectWidget(12)" id="wg-12">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">SOS</span>
                                    </div>
                                    <img src="@/assets/icon_widget_sos.png" alt="" class="mx-auto w-1/3 my-5">

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

    export default {
        components: {
            TopMenu,
            FooterPage,
            draggable,
            AlertDialogConfirm,
            AlertDialog
        },
        data() {
            const list_widget = [
                {
                    id: 1,
                    name:'Air Quality',
                    img: '/src/assets/icon_widget_aqi.png'
                },
                 {
                    id: 2,
                    name:'Smart Lighting',
                    img: '/src/assets/icon_widget_smartlight.png'
                },
                 {
                    id: 3,
                    name:'Smart Pole Energy',
                    img: '/src/assets/icon_widget_smartpole.png'
                },
                 {
                    id: 4,
                    name:'CCTV Camera',
                    img: '/src/assets/icon_widget_cctv.png'
                },
                 {
                    id: 5,
                    name:'CCTV Survielance',
                    img: '/src/assets/icon_widget_cctvsur.png'
                },
                 {
                    id: 6,
                    name:'Parking',
                    img: '/src/assets/icon_widget_parking.png'
                },
                 {
                    id: 7,
                    name:'Check License Plate',
                    img: '/src/assets/icon_widget_checklicense.png'
                },
                 {
                    id: 8,
                    name:'License Plate',
                    img: '/src/assets/icon_widget_licenseplate.png'
                },
                 {
                    id: 9,
                    name:'Free Wifi',
                    img: '/src/assets/icon_widget_freewifi.png'
                },
                 {
                    id: 10,
                    name:'Digital Signage',
                    img: '/src/assets/icon_widget_digital.png'
                },
                 {
                    id: 11,
                    name:'Complaint',
                    img: '/src/assets/icon_widget_complaint.png'
                },
                 {
                    id: 12,
                    name:'SOS',
                    img: '/src/assets/icon_widget_sos.png'
                },
            ]
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
                    this.$store.dispatch('widget/saveDashboard',data).then((res)=>{
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