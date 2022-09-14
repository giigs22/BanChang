<template>
    <div class="mx-10 my-20 min-h-screen">
        <!-- Content -->
        <!-- Main Section -->
        <div class="inner-content mx-10">
            <div class="main-content">
                <div class="block-content mb-5">
                    <loading v-model:active="loading" />
                    <h1 class="text-xl text-white ml-10">Change Password</h1>
                    <div class="form-register mt-5 mb-5">
                        <Form @submit="changePass" :validation-schema="schema">
                            <div class="grid grid-cols-9 text-sm lg:gap-20 2xl:gap-40">
                                <div class="col-span-3">
                                    <div class="my-3">
                                        <Field name="password" v-slot="{field}" v-model="password">
                                            <label class="text-white">New Password</label>
                                            <input  type="password" v-bind="field" class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                placeholder="New Password" :disabled="loading">
                                        </Field>
                                        <ErrorMessage name="email" class="text-xs text-red-300" />
                                    </div>
                                    <div class="my-3">
                                        <Field name="con_password" v-slot="{field}" v-model="con_password">
                                            <label class="text-white">Confirm Password Again</label>
                                            <input type="password" v-bind="field" class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                placeholder="Confirm Password" :disabled="loading">
                                        </Field>
                                        <ErrorMessage name="con_password" class="text-xs text-red-300" />
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-3 justify-end mt-10">
                                <button type="submit"
                                    class="px-5 py-2 rounded-md text-white btn-blue-gradient">Change Password</button>
                                <button type="reset"
                                    class="px-5 py-2 rounded-md text-white btn-red-gradient">Reset</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AlertDialog v-if="alert.active" :type="alert.type" :msg="alert.msg"></AlertDialog>
    <FooterPage class="2xl:fixed inset-x-0 bottom-0" />
</template>
<script>
    import FooterPage from './layout/FooterPage.vue'
    import {
        Form,
        Field,
        ErrorMessage
    } from "vee-validate"
    import * as yup from 'yup'
    import AlertDialog from '../components/utility/AlertDialog.vue'
    import VueClientRecaptcha from 'vue-client-recaptcha'

    export default {
        components: {
            FooterPage,
            Form,
            Field,
            ErrorMessage,
            AlertDialog,
            VueClientRecaptcha
        },
        data() {
            const schema = yup.object().shape({
                password: yup.string().required(),
                con_password: yup.string().required().oneOf([yup.ref('password'), null], 'Password not match'),
            })
            return {
                schema,
                password: null,
                con_password:null,
                loading: false,
                alert: {
                    active: false,
                    type: null,
                    msg: null
                },
                btnSubmit:true,
                token:null
            }
        },
        created(){
            this.token = this.$route.query.token
        },  
        methods: {
            changePass(){
                var data = {
                    password:this.password,
                    token:this.token
                }
                console.log(data);
                this.$store.dispatch('user/changepass',data).then((res)=>{
                    var success = res.data.success
                    if(success){
                        this.alert.active = true
                        this.alert.type = 'success'
                        this.alert.msg = res.data.message

                        setTimeout(() => {
                            this.closeAlert();
                            window.location.reload()
                        }, 2000);
                    }else{
                        this.alert.active = true
                        this.alert.type = 'error'
                        this.alert.msg = res.data.message

                        setTimeout(() => {
                            this.closeAlert();
                            window.location.reload()
                        }, 2000);
                    }
                }).catch((err)=>{
                    console.log(err);
                })
            },
            closeAlert() {
                this.alert.active = false
                this.alert.type = null
                this.alert.msg = null
            },
            
        }
    }
</script>