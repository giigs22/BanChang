<template>
    <div class="flex flex-col items-center justify-center min-h-screen dark:bg-body-dark bg-[#D5ECF4]">
        <img src="@/assets/logo.png" alt="" class="mx-auto w-32 lg:w-fit">
        <h1 class="text-xl lg:text-3xl dark:text-white">เทศบาลตำบลบ้านฉางจังหวัดระยอง</h1>
        <div class="flex items-center flex-col gap-4 w-full lg:w-1/2 xl:w-1/4 mt-4 px-10">
            <Form @submit="handlelogin" :validation-schema="schema" class="w-full">
                <div class="">
                    <Field name="username" v-slot="{field}">
                        <input v-bind="field" v-model="username"
                            class="form-input placeholder:text-gray-400 disabled:opacity-70 block w-full"
                            :placeholder="$t('username')" :disabled="loading">
                    </Field>
                    <ErrorMessage name="username" class="text-xs text-red-500" />
                </div>
                <div class="mt-4">
                    <Field name="password" v-slot="{field}">
                        <input v-bind="field" type="password" v-model="password"
                            class="form-input placeholder:text-gray-400 disabled:opacity-70 block w-full"
                            :placeholder="$t('password')" :disabled="loading">
                    </Field>
                    <ErrorMessage name="password" class="text-xs text-red-500" />
                </div>

                <button type="submit" :disabled="loading"
                    class="flex items-center justify-center px-2 py-2 bg-violet-gradient text-white rounded w-full mt-5 text-lg disabled:opacity-70">
                    <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg> {{$t('login')}}</button>
                <div v-if="message" class="text-sm text-red-500 text-center my-3">
                    {{message}}
                </div>
            </form>
            <div class="mt-5 relative w-full flex items-center justify-center">
                <button class="px-1 py-2 bg-violet-gradient text-white rounded w-24 absolute">{{$t('or')}}</button>
                <hr class="border border-cyan-500 w-full">
            </div>
            <div class="mt-3 flex items-center gap-5">
                <a href="/register" class="dark:text-cyan-500 text-cyan-800">{{$t('register')}}</a>
                <p class="text-cyan-500">|</p>
                <a href="/forgetpass" class="dark:text-cyan-500 text-cyan-800">{{$t('forget_password')}}</a>
            </div>
        </div>
    </div>
    <FooterPage class="2xl:fixed inset-x-0 bottom-0" />
</template>
<script>
    import {
        Form,
        Field,
        ErrorMessage
    } from "vee-validate"
    import * as yup from 'yup'
    import FooterPage from './layout/FooterPage.vue'
    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
            FooterPage
        },
        data() {
            const schema = yup.object().shape({
                username: yup.string().required(this.$i18n.t("required.username")),
                password: yup.string().required(this.$i18n.t("required.password"))
            })
            return {
                username: "",
                password: "",
                schema,
                loading: false,
                message: ""
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            },
            serverDB(){
                return this.$store.state.server.api_data.connect
            }
        },
        watch:{
            serverDB(n,o){
                if(n){
                    this.message = ''
                }else{
                     this.message = 'Not Connect to Server.'
                }
            }
        },  
        created() { 
            if(this.loggedIn) {
                this.$router.push("/");
            }
            else{
                  localStorage.setItem('token',JSON.stringify({value:null,expire:null}))
            }
        },
        methods: {
            handlelogin() {
                this.loading = true
                var user = {
                    username: this.username,
                    password: this.password
                }
                this.$store.dispatch("auth/login", user).then((res) => {
                    var data = res
                    if (!data.success) {
                        this.message = data.message
                        this.loading = false
                        this.$store.dispatch('server/setStatus',false)
                    } else {
                        this.$router.push("/")
                        this.$store.dispatch('server/setStatus',true)
                    }
                }).catch((err)=>{
                    if(err.code === 'ERR_NETWORK'){
                        this.$store.dispatch('server/setStatus',false)
                        window.location.reload()
                    }
                })

            },

        }
    }
</script>