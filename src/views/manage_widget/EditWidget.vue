<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <loading v-model:active="loading" />
                        <h1 class="text-xl dark:text-white ml-10">Add Widget</h1>
                        <div class="form-register mt-5 mb-5">
                            <Form @submit="updateWidget" :validation-schema="schema">
                                <div class="grid grid-cols-9 text-sm lg:gap-40">
                                    <div class="col-span-full lg:col-span-3">
                                        <div class="my-3">
                                            <label class="dark:text-white">Category</label>
                                            <Field name="cate" as="select" v-model="cate" class="form-select w-full"
                                                :disabled="loading">
                                                <option value="">Select Category Widget</option>
                                                <option :value="item.id" v-for="item in listcate" :key="item.id">
                                                    {{item.name}}</option>
                                            </Field>
                                            <ErrorMessage name="cate" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="device_name" v-slot="{field}"  v-model="device_name">
                                                <label class="dark:text-white">Device Name</label>
                                                <input v-bind="field"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Ex.BC-P01-LNR01" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="device_name" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="device_id" v-slot="{field}" v-model="device_id">
                                                <label class="dark:text-white">Device ID</label>
                                                <input v-bind="field"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Ex.468000f0-3188-11ec-9f75-bdae041d8bb7"
                                                    :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="device_id" class="text-xs text-red-300" />
                                        </div>

                                        <div class="my-3" v-if="cate == 1">
                                            <label class="dark:text-white">Type Sensor</label>
                                            <Field name="type" as="select" v-model="type" class="form-select w-full"
                                                :disabled="loading">
                                                <option value="">Select Type Sensor</option>
                                                <option :value="item" v-for="item in type_aqi">{{item}}</option>

                                            </Field>
                                            <ErrorMessage name="type" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3" v-if="cate == 4">
                                            <label class="dark:text-white">Group Camera Pole</label>
                                            <Field name="type" as="select" v-model="type" class="form-select w-full"
                                                :disabled="loading">
                                                <option value="">Select Group Pole</option>
                                                <option :value="item" v-for="item in group_pole">{{item}}</option>

                                            </Field>
                                            <ErrorMessage name="type" class="text-xs text-red-300" />
                                        </div>
                                    </div>
                                    <div class="col-span-full lg:col-span-3">
                                        <div class="my-3">
                                            <Field name="name" v-slot="{field}" v-model="name">
                                                <label class="dark:text-white">Name</label>
                                                <input v-bind="field"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Ex.Lighting 1" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="name" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="location" v-slot="{field}" v-model="location">
                                                <label class="dark:text-white">Location Name</label>
                                                <input v-bind="field"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Ex. BanChang Stadium" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="location" class="text-xs text-red-300" />
                                        </div>
                                    </div>

                                </div>
                                <div class="flex gap-3 justify-end mt-10">
                                    <button type="submit" class="px-5 py-2 rounded-md text-white btn-blue-gradient">Update
                                        Widget</button>
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
    <FooterPage class="2xl:fixed inset-x-0 bottom-0" />
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
                id:null,
                cate: null,
                device_name: null,
                device_id: null,
                type: null,
                name: null,
                location: null,
                alert: {
                    active: false,
                    type: null,
                    msg: null
                },
                listcate: [],
                type_aqi: ['LNR', 'ENV'],
                group_pole: ['1', '2', '3', '4', '5', 'dc'],
                loading: false,

            }
        },
        created() {
            this.getlistCate()
            this.getWidget()
        },
        methods: {
            getlistCate() {
                this.$store.dispatch('widget/getListCateAll').then((res) => {
                    this.listcate = res.data
                })
            },
            getWidget(){
                var id = this.$route.params.id
                this.$store.dispatch('widget/getWidgetID',id).then((res)=>{
                    var data = res.data
                    this.id = data.id
                    this.device_id = data.device_id
                    this.device_name = data.device_name
                    this.cate = data.widget_id
                    this.type = data.type
                    this.name = data.name
                    this.location = data.location_name
                })
            },
            updateWidget() {
                var data = {
                    id:this.id,
                    cate: this.cate,
                    device_name: this.device_name,
                    device_id: this.device_id,
                    type: this.type,
                    name: this.name,
                    location: this.location
                }
                this.loading = true
                this.$store.dispatch('widget/updateDevice', data).then((res) => {
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
                    } else {
                        this.alert.active = true
                        this.alert.type = "error"
                        this.alert.msg = data.message
                        setTimeout(() => {
                            this.closeAlert()
                            this.loading = false

                        }, 2000);
                    }
                })
            },
            closeAlert() {
                this.alert.active = false
                this.alert.type = null
                this.alert.msg = null
            }
        }
    }
</script>