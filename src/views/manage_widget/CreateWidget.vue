<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <loading v-model:active="loading" />
                        <h1 class="text-xl text-white ml-10">Add Widget</h1>
                        <div class="form-register mt-5 mb-5">
                            <Form @submit="addWidget" :validation-schema="schema">
                                <div class="grid grid-cols-9 text-sm gap-40">
                                    <div class="col-span-3">
                                        <div class="my-3">
                                            <label class="text-white">Category</label>
                                            <Field name="cate" as="select" v-model="cate" class="form-select w-full" :disabled="loading">
                                                        <option value="">Select Category Widget</option>
                                                        <option :value="item.id" v-for="item in listcate"
                                                            :key="item.id">{{item.name}}</option>
                                            </Field>
                                            <ErrorMessage name="cate" class="text-xs text-red-300" />
                                        </div>
                                         <div class="my-3">
                                            <Field name="device_name" v-slot="{field}">
                                                <label class="text-white">Device Name</label>
                                                <input v-bind="field" v-model="device_name"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Ex.BC-P01-LNR01" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="device_name" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="device_id" v-slot="{field}">
                                                <label class="text-white">Device ID</label>
                                                <input v-bind="field" v-model="device_id"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Ex.468000f0-3188-11ec-9f75-bdae041d8bb7" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="device_id" class="text-xs text-red-300" />
                                        </div>
                                        
                                        <div class="my-3" v-if="cate == 1">
                                             <label class="text-white">Type Sensor</label>
                                            <Field name="type" as="select" v-model="type" class="form-select w-full" :disabled="loading">
                                                        <option value="">Select Type Sensor</option>
                                                        <option :value="item" v-for="item in type_aqi">{{item}}</option>

                                            </Field>
                                            <ErrorMessage name="type" class="text-xs text-red-300" />
                                        </div>
                                          <div class="my-3" v-if="cate == 4">
                                             <label class="text-white">Group Camera Pole</label>
                                            <Field name="type" as="select" v-model="type" class="form-select w-full" :disabled="loading">
                                                        <option value="">Select Group Pole</option>
                                                        <option :value="item" v-for="item in group_pole">{{item}}</option>

                                            </Field>
                                            <ErrorMessage name="type" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3" v-if="cate == 4">
                                             <label class="text-white">Type Camera</label>
                                            <Field name="type_cam" as="select" v-model="type_cam" class="form-select w-full" :disabled="loading">
                                                        <option value="">Select Type Camera</option>
                                                        <option :value="item" v-for="item in group_camera">{{item}}</option>

                                            </Field>
                                            <ErrorMessage name="type_cam" class="text-xs text-red-300" />
                                        </div>
                                    </div>
                                    <div class="col-span-3">
                                         <div class="my-3">
                                            <Field name="name" v-slot="{field}">
                                                <label class="text-white">Name</label>
                                                <input v-bind="field" v-model="name"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Ex.Lighting 1" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="name" class="text-xs text-red-300" />
                                        </div>
 <div class="my-3">
                                            <Field name="location" v-slot="{field}">
                                                <label class="text-white">Location Name</label>
                                                <input v-bind="field" v-model="location"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Ex. BanChang Stadium" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="location" class="text-xs text-red-300" />
                                        </div>
                                    </div>
                                  
                                </div>
                                <div class="flex gap-3 justify-end mt-10">
                                    <button type="submit"
                                        class="px-5 py-2 rounded-md text-white btn-blue-gradient">Add Widget</button>
                                    <button type="reset"
                                        class="px-5 py-2 rounded-md text-white btn-red-gradient">Reset</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <AlertDialog v-if="alert.active" :type="alert.type" :msg="alert.msg"></AlertDialog>
    <FooterPage class="fixed inset-x-0 bottom-0" />
</template>
<script>
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import {
        Form,
        Field,
        ErrorMessage
    } from "vee-validate"
    import * as yup from 'yup'
    import AlertDialog from '../../components/utility/AlertDialog.vue'
    export default {
        components: {
            TopMenu,
            FooterPage,
            Form,
            Field,
            ErrorMessage,
            AlertDialog
        },
        data() {
            const schema = yup.object().shape({
                cate: yup.string().required('Please Select Category Widget').nullable(),
                device_name: yup.string().required('Please Insert Device Name'),
                device_id: yup.string().required('Please Insert Device ID'),
            })
            return {
                schema,
                cate:null,
                device_name:null,
                device_id:null,
                type:null,
                name:null,
                location:null,
                type_cam:null,
                alert: {
                    active: false,
                    type: null,
                    msg: null
                },
                listcate:[],
                type_aqi:['LNR','ENV'],
                group_pole:['1','2','3','4','5','dc'],
                group_camera:['IPC','PTZ','OFCh'],
                loading:false,
           
            }
        },
        created(){
            this.getlistCate()
        },
        methods: {
          getlistCate(){
            this.$store.dispatch('widget/getListCateAll').then((res)=>{
                this.listcate = res.data
            })
          },
          addWidget(){
            var data = {
                cate:this.cate,
                device_name:this.device_name,
                device_id:this.device_id,
                type:this.type,
                name:this.name,
                location:this.location,
                type_cam:this.type_cam
            }
            this.loading = true
            this.$store.dispatch('widget/addDevice',data).then((res)=>{
                 var data = res.data
                    if (data.success) {
                        this.alert.active = true
                        this.alert.type = "success"
                        this.alert.msg = data.message
                        this.loading = false
                    setTimeout(() => {
                        this.alert.active = false
                        this.$router.push('/widgets/list')
                    }, 2000);
                    }else{
                        this.alert.active = true
                        this.alert.type = "error"
                        this.alert.msg = data.message
                         setTimeout(() => {
                        this.closeAlert()
                        this.loading=false
                       
                    }, 2000);
                    }
            })
          },
          closeAlert(){
            this.alert.active = false
            this.alert.type = null
            this.alert.msg = null
          }
        }
    }
</script>