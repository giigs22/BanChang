<template>
    <div class="mt-5 lg:mx-10 lg:my-20 min-h-screen">
        <!-- Content -->
        <!-- Main Section -->
        <div class="inner-content mx-4 lg:mx-10">
            <div class="main-content">
                <div class="block-content mb-5">
                    <loading v-model:active="loading" />
                    <h1 class="text-xl text-white ml-10">Forgot Password</h1>
                    <div class="form-register mt-5 mb-5">
                        <Form @submit="sendmail" :validation-schema="schema">
                            <div class="grid grid-cols-9 text-sm lg:gap-20 2xl:gap-40">
                                <div class="col-span-full lg:col-span-3">
                                    <div class="my-3">
                                        <Field name="email" v-slot="{field}" v-model="email">
                                            <label class="text-white">Email</label>
                                            <input v-bind="field" class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                placeholder="Email Address" :disabled="loading">
                                        </Field>
                                        <ErrorMessage name="email" class="text-xs text-red-300" />
                                    </div>
                                    <div class="my-3">
                                            <label class="text-white block">Verify Captcha</label>
                                            <VueClientRecaptcha class="flex" :value="inputValue" customTextColor="gray" count="6" hideLines="false" @isValid="checkValidCaptcha"/>
                                            <input type="text" class="form-input placeholder:text-gray-400 w-full lg:w-auto" v-model="inputValue" placeholder="Verify Code"/>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-3 justify-end mt-10">
                                <button type="submit"
                                    class="px-5 py-2 rounded-md text-white btn-blue-gradient disabled:opacity-70" :disabled="btnSubmit">Forgot</button>
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
                email: yup.string().email().required(),
            })
            return {
                schema,
                email: null,
                loading: false,
                alert: {
                    active: false,
                    type: null,
                    msg: null
                },
                inputValue:null,
                btnSubmit:true
            }
        },
        methods: {
            checkValidCaptcha(val){
                if(val){
                    this.btnSubmit = false
                }else{
                    this.btnSubmit = true
                }
            },
            sendmail(){
                this.$store.dispatch('user/forgotpass',this.email).then((res)=>{
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