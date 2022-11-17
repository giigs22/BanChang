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
                        <h1 class="text-xl dark:text-white ml-10">{{$t('add_complaint_topic')}}</h1>
                        <div class="form-register mt-5 mb-5">
                            <Form @submit="addComplaintTopic" :validation-schema="schema">
                                <div class="grid grid-cols-9 text-sm lg:gap-40">
                                    <div class="col-span-full lg:col-span-3">

                                        <div class="my-3">
                                            <Field name="device_name" v-slot="{field}">
                                                <label class="dark:text-white">{{$t('device_name')}}</label>
                                                <input v-bind="field" v-model="device_name"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Ex.BC-P01-LNR01" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="device_name" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="device_name" v-slot="{field}">
                                                <label class="dark:text-white">{{$t('device_name')}}</label>
                                                <input v-bind="field" v-model="device_name"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Ex.BC-P01-LNR01" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="device_name" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="device_name" v-slot="{field}">
                                                <label class="dark:text-white">{{$t('device_name')}}</label>
                                                <input v-bind="field" v-model="device_name"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Ex.BC-P01-LNR01" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="device_name" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="device_name" v-slot="{field}">
                                                <label class="dark:text-white">{{$t('device_name')}}</label>
                                                <input v-bind="field" v-model="device_name"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Ex.BC-P01-LNR01" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="device_name" class="text-xs text-red-300" />
                                        </div>

                                    </div>
                                    

                                </div>
                                <div class="flex gap-3 justify-end mt-10">
                                    <button type="submit"
                                        class="px-5 py-2 rounded-md text-white btn-blue-gradient">{{$t('add_device')}}</button>
                                    <button type="reset"
                                        class="px-5 py-2 rounded-md text-white btn-red-gradient">{{$t('reset')}}</button>
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
                cate: null,
                device_name: null,
                device_id: null,
                type: null,
                name: null,
                location: null,
                type_cam: null,
                alert: {
                    active: false,
                    type: null,
                    msg: null
                },
                listcate: [],
                type_aqi: ['LNR', 'ENV'],
                group_pole: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
                    '17', '18', '19', '20', 'dc'
                ],
                group_camera: ['IPC', 'PTZ', 'OFCh', 'Bullet'],
                loading: false,

            }
        },
        created() {
            this.getlistCate()
        },
        methods: {
            getlistCate() {
                this.$store.dispatch('widget/getListCateAll').then((res) => {
                    this.listcate = res.data
                })
            },
            addWidget() {
                var data = {
                    cate: this.cate,
                    device_name: this.device_name,
                    device_id: this.device_id,
                    type: this.type,
                    name: this.name,
                    location: this.location,
                    type_cam: this.type_cam
                }
                this.loading = true
                this.$store.dispatch('widget/addDevice', data).then((res) => {
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