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
                        <h1 class="text-xl text-white ml-10">Register</h1>
                        <div class="form-register mt-5 mb-5">
                            <Form @submit="register" :validation-schema="schema">
                                <div class="grid grid-cols-9 text-sm gap-40">
                                    <div class="col-span-3">
                                        <div class="my-3">
                                            <Field name="idcard" v-slot="{field}">
                                                <label class="text-white">Employee ID or ID Card</label>
                                                <input v-bind="field" v-model="idcard"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="ID/ID Card" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="idcard" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="username" v-slot="{field}">
                                                <label class="text-white">Username</label>
                                                <input v-bind="field" v-model="username"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Username" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="username" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="password" v-slot="{field}">
                                                <label class="text-white">Password</label>
                                                <input v-bind="field" v-model="password" type="password"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Password" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="password" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="con_password" v-slot="{field}">
                                                <label class="text-white">Confirm Password</label>
                                                <input v-bind="field" type="password" v-model="con_password"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Confirm Password" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="con_password" class="text-xs text-red-300" />
                                        </div>
                                    </div>
                                    <div class="col-span-3">
                                        <div class="my-3">
                                            <Field name="position" v-slot="{field}">
                                                <label class="text-white">Position</label>
                                                <input v-bind="field" v-model="position"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Position" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="position" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="location" v-slot="{field}">
                                                <label class="text-white">Location</label>
                                                <input v-bind="field" v-model="location"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Location" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="location" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="email" v-slot="{field}">
                                                <label class="text-white">Email</label>
                                                <input v-bind="field" v-model="email"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="Email" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="email" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="phone" v-slot="{field}">
                                                <label class="text-white">Phone</label>
                                                <input v-bind="field" v-model="phone"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    placeholder="phone" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="phone" class="text-xs text-red-300" />
                                        </div>

                                    </div>
                                    <div class="col-span-3">
                                        <!-- <div class="flex justify-center flex-col w-32">
                                            <div class="bg-gray-200 p-3 rounded">
                                                <img src="@/assets/icon_picture.png" alt="" class="">
                                            </div>

                                            <button
                                                class="mt-3 px-5 py-2 rounded-md text-white btn-blue-gradient">Browse....</button>

                                        </div> -->

                                    </div>
                                </div>
                                <div class="flex gap-3 justify-end">
                                    <button type="submit"
                                        class="px-5 py-2 rounded-md text-white btn-blue-gradient">Register</button>
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
    <AlertDialog v-if="alert.active" :type="alert.type"></AlertDialog>
    <FooterPage class="fixed inset-x-0 bottom-0"/>
</template>
<script>
    import TopMenu from './layout/TopMenu.vue'
    import FooterPage from './layout/FooterPage.vue'
    import {
        Form,
        Field,
        ErrorMessage
    } from "vee-validate"
    import * as yup from 'yup'
    import AlertDialog from '../components/utility/AlertDialog.vue'
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
                idcard: yup.string().required(),
                username: yup.string().required(),
                password: yup.string().required(),
                con_password: yup.string().required().oneOf([yup.ref('password'), null], 'Password not match'),
                position: yup.string().required(),
                location: yup.string().required(),
                email: yup.string().email().required(),
                phone: yup.string().required()
            })
            return {
                schema,
                idcard: null,
                username: null,
                password: null,
                con_password: null,
                position: null,
                location: null,
                email: null,
                phone: null,
                loading: false,
                alert: {
                    active: false,
                    type: null
                }
            }
        },
        methods: {
            register() {
                var data = {
                    idcard: this.idcard,
                    username: this.username,
                    password: this.password,
                    position: this.position,
                    location: this.location,
                    email: this.email,
                    phone: this.phone
                }
                this.loading = true
                this.$store.dispatch('user/register', data).then((res) => {
                    var data = res.data
                    if (data.success) {
                        this.alert.active = true
                        this.alert.type = "success"
                    }
                    this.loading = false
                    setTimeout(() => {
                        this.alert.active = false
                        this.$router.push('/login')
                    }, 2000);
                }).catch((error) => console.error(error))
            }
        }
    }
</script>