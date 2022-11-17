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
                        <h1 class="text-xl dark:text-white ml-10">{{$t('update_complaint_topic')}}</h1>
                        <div class="form-register mt-5 mb-5">
                            <Form @submit="updateComplaintTopic" :validation-schema="schema">
                                <div class="grid grid-cols-6 text-sm lg:gap-40">
                                    <div class="col-span-full lg:col-span-3">

                                        <div class="my-3">
                                            <Field name="topic_en" v-slot="{field}" v-model="topic_en">
                                                <label class="dark:text-white">{{$t('en')}}</label>
                                                <input v-bind="field"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="topic_en" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="topic_th" v-slot="{field}" v-model="topic_th">
                                                <label class="dark:text-white">{{$t('th')}}</label>
                                                <input v-bind="field"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="topic_th" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="complaint_type" v-slot="{field}" v-model="complaint_type">
                                                <label class="dark:text-white">{{$t('type')}}</label>
                                                <input v-bind="field"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="complaint_type" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                             <label class="text-white">{{$t('target_role')}}</label>
                                            <Field name="target_role" as="select" v-model="target_role" class="form-select w-full" :disabled="loading">
                                                        <option value="">{{$t('select_group_user')}}</option>
                                                        <option :value="item.slug" v-for="item in list_role"
                                                            :key="item.id">{{item.name}}</option>
                                            </Field>
                                            <ErrorMessage name="target_role" class="text-xs text-red-300" />
                                        </div>

                                    </div>
                                    
                                </div>
                                <div class="flex gap-3 justify-end mt-10">
                                    <button type="submit"
                                        class="px-5 py-2 rounded-md text-white btn-blue-gradient">{{$t('update')}}</button>
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
    import UserService from '../../services/user.service'
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
                topic_en: yup.string().required('Please Insert Data'),
                topic_th: yup.string().required('Please Insert Data'),
                complaint_type: yup.string().required('Please Insert Data'),
                target_role:yup.string().required('Please Insert Data')
            })
            return {
                schema,
                topic_en:null,
                topic_th:null,
                complaint_type:null,
                target_role:null,
                loading: false,
                alert: {
                    active: false,
                    type: null,
                    msg: null
                },
                list_role:[]

            }
        },
        created(){
            this.getTopic()
            this.getRole()
        },
        methods: { 
            getTopic(){
                var id = this.$route.params.id;
                this.$store.dispatch('complaint/getTopicID',id).then((res)=>{
                    var data = res.data
                    this.topic_en = data.en
                    this.topic_th = data.th
                    this.complaint_type = data.complaintType
                    this.target_role = data.targetRole
                }).catch((err)=>{
                    UserService.checkUnauthen(err.response)
                })
            },
            updateComplaintTopic() {
                var data = {
                   id:this.$route.params.id,
                   topic_en:this.topic_en,
                   topic_th:this.topic_th,
                   complaint_type:this.complaint_type,
                   target_role:this.target_role
                }
                this.loading = true
                this.$store.dispatch('complaint/updateTopic', data).then((res) => {
                    var data = res.data
                    if (data.success) {
                        this.alert.active = true
                        this.alert.type = "success"
                        this.alert.msg = data.message
                        this.loading = false
                        setTimeout(() => {
                            this.alert.active = false
                            this.$router.push('/complaint_topic')
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
                }).catch((err)=>{
                    UserService.checkUnauthen(err.response)
                })
            },
            getRole() {
                this.$store.dispatch('user/getRole').then((res) => {
                    this.list_role = res.data
                }).catch((err)=>{
                    UserService.checkUnauthen(err.response)
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