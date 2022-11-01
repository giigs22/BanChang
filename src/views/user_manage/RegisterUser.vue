<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20 lg:min-h-screen">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <loading v-model:active="loading" />
                        <h1 class="text-xl dark:text-white ml-10">{{$t('register')}}</h1>
                        <div class="form-register mt-5 mb-5">
                            <Form @submit="register" :validation-schema="schema">
                                <div class="grid grid-cols-9 text-sm lg:gap-20 2xl:gap-40">
                                    <div class="col-span-full lg:col-span-3">
                                        <div class="my-3">
                                            <Field name="idcard" v-slot="{field}">
                                                <label class="dark:text-white">{{$t('employee_id')}}</label>
                                                <input v-bind="field" v-model="idcard"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    :placeholder="$t('id')+'/'+$t('idcard')" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="idcard" class="text-xs text-red-300" />
                                        </div>
                                         <div class="my-3">
                                            <Field name="name" v-slot="{field}">
                                                <label class="dark:text-white">{{$t('name')}}</label>
                                                <input v-bind="field" v-model="name"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    :placeholder="$t('name')" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="idcard" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="username" v-slot="{field}">
                                                <label class="dark:text-white">{{$t('username')}}</label>
                                                <input v-bind="field" v-model="username"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    :placeholder="$t('username')" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="username" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <div class="flex gap-3">
                                                <Field name="password" v-slot="{field}">
                                                    <div class="flex flex-col">
                                                        <label class="dark:text-white">{{$t('password')}}</label>
                                                        <input v-bind="field" v-model="password" type="password"
                                                            class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                            :placeholder="$t('password')" :disabled="loading">
                                                        <ErrorMessage name="password" class="text-xs text-red-300" />

                                                    </div>

                                                </Field>
                                                <Field name="con_password" v-slot="{field}">
                                                    <div class="flex flex-col">
                                                        <label class="dark:text-white">{{$t('con_password')}}</label>
                                                        <input v-bind="field" type="password" v-model="con_password"
                                                            class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                            :placeholder="$t('con_password')" :disabled="loading">
                                                        <ErrorMessage name="con_password"
                                                            class="text-xs text-red-300" />

                                                    </div>

                                                </Field>
                                            </div>

                                        </div>
                                        <div class="my-3">
                                             <label class="dark:text-white">{{$t('role')}}</label>
                                            <Field name="role" as="select" v-model="role" class="form-select w-full" :disabled="loading">
                                                        <option value="">{{$t('select_group_user')}}</option>
                                                        <option :value="item.id" v-for="item in list_role"
                                                            :key="item.id">{{item.name}}</option>
                                            </Field>
                                            <ErrorMessage name="role" class="text-xs text-red-300" />
                                        </div>
                                    </div>
                                    <div class="col-span-full lg:col-span-3">
                                        <div class="my-3">
                                            <Field name="position" v-slot="{field}">
                                                <label class="dark:text-white">{{$t('position')}}</label>
                                                <input v-bind="field" v-model="position"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    :placeholder="$t('position')" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="position" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="location" v-slot="{field}">
                                                <label class="dark:text-white">{{$t('location')}}</label>
                                                <input v-bind="field" v-model="location"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    :placeholder="$t('location')" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="location" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="email" v-slot="{field}">
                                                <label class="dark:text-white">{{$t('email')}}</label>
                                                <input v-bind="field" v-model="email"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    :placeholder="$t('email')" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="email" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                            <Field name="phone" v-slot="{field}">
                                                <label class="dark:text-white">{{$t('phone')}}</label>
                                                <input v-bind="field" v-model="phone"
                                                    class="form-input w-full placeholder:text-gray-400 disabled:opacity-70"
                                                    :placeholder="$t('phone')" :disabled="loading">
                                            </Field>
                                            <ErrorMessage name="phone" class="text-xs text-red-300" />
                                        </div>
                                        <div class="my-3">
                                              <label class="dark:text-white">{{$t('status')}}</label>
                                            <Field name="status" as="select" v-model="status" class="form-select w-full" :disabled="loading">
                                                        <option value="1">{{$t('active')}}</option>
                                                        <option value="0">{{$t('disable')}}</option>
                                            </Field>
                                             <ErrorMessage name="status" class="text-xs text-red-300" />
                                        </div>

                                    </div>
                                    <div class="col-span-full lg:col-span-3">
                                        <div class="flex justify-center flex-col w-32">
                                            <div class="bg-gray-200 p-3 rounded" @click="$refs.profile.click()">
                                                <img src="@/assets/icon_picture.png" alt="" class="max-h-30 mx-auto"
                                                    id="preview">
                                            </div>
                                            <input type="file" class="hidden" ref="profile" @change="previewFile">
                                            <button type="button" @click="$refs.profile.click()"
                                                class="mt-3 px-5 py-2 rounded-md text-white btn-blue-gradient">{{$t('browse')}}....</button>

                                        </div>

                                    </div>
                                </div>
                                <div class="flex gap-3 justify-end mt-10">
                                    <button type="submit"
                                        class="px-5 py-2 rounded-md text-white btn-blue-gradient">{{$t('register')}}</button>
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
                idcard: yup.string().required(),
                name: yup.string().required(),
                username: yup.string().required(),
                password: yup.string().required(),
                con_password: yup.string().required().oneOf([yup.ref('password'), null], 'Password not match'),
                position: yup.string().required(),
                location: yup.string().required(),
                email: yup.string().email().required(),
                phone: yup.string().required(),
                role: yup.string().required().nullable(),
            })
            return {
                schema,
                idcard: null,
                name:null,
                username: null,
                password: null,
                con_password: null,
                position: null,
                location: null,
                email: null,
                phone: null,
                status: '1',
                role: '',
                loading: false,
                alert: {
                    active: false,
                    type: null,
                    msg: null
                },
                list_role: [],
                file:null,
            }
        },
        created() {
            this.getRole()
        },
        mounted() {
            this.getRole()
        },
        methods: {
            register() {
                var data = {
                    idcard: this.idcard,
                    name:this.name,
                    username: this.username,
                    password: this.password,
                    position: this.position,
                    location: this.location,
                    email: this.email,
                    phone: this.phone,
                    role:this.role,
                    status:this.status,
                    profile:this.file
                }
                this.loading = true
                this.$store.dispatch('user/register', data).then((res) => {
                    var data = res.data
                    if (data.success) {
                        this.alert.active = true
                        this.alert.type = "success"
                        this.alert.msg = "Data has been saved successfully"
                        this.loading = false
                    setTimeout(() => {
                        this.alert.active = false
                        this.$router.push('/user/list')
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
                    
                }).catch((error) => console.error(error))
        },
            closeAlert() {
                this.alert.active = false
                this.alert.type = null
                this.alert.msg = null
            },
            getRole() {
                this.$store.dispatch('user/getRole').then((res) => {
                    this.list_role = res.data
                })
            },
            previewFile(e) {
                var file = e.target.files[0];
                var imgfile;

                if (file !== undefined) {
                    var type = file.type
                    var allowedExtension = ['image/jpeg', 'image/jpg', 'image/png'];

                    if (allowedExtension.includes(type)) {
                        var img = document.createElement("img");
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            img.src = e.target.result

                            img.onload = function (e) {
                                var canvas = document.createElement('canvas');
                                var ctx = canvas.getContext("2d");
                                ctx.drawImage(img, 0, 0);

                                var MAX_WIDTH = 104;
                                var MAX_HEIGHT = 119;
                                var width = img.width;
                                var height = img.height;

                                if (width > height) {
                                    if (width > MAX_WIDTH) {
                                        height *= MAX_WIDTH / width;
                                        width = MAX_WIDTH;
                                    }
                                } else {
                                    if (height > MAX_HEIGHT) {
                                        width *= MAX_HEIGHT / height;
                                        height = MAX_HEIGHT;
                                    }
                                }
                                canvas.width = width;
                                canvas.height = height;
                                var ctx = canvas.getContext("2d");
                                ctx.drawImage(img, 0, 0, width, height);

                                var dataurl = canvas.toDataURL(type);
                                document.getElementById('preview').src = dataurl
                                imgfile = dataurl
                            }
                        }
                        reader.readAsDataURL(file);
                        setTimeout(() => {
                            this.file = imgfile
                        }, 1000);
                    } else {
                        this.alert.active = true
                        this.alert.type = 'error',
                            this.alert.msg = 'Please Upload File [.jpeg, .jpg, .png] '
                        setTimeout(() => {
                            this.closeAlert()
                        }, 2000);
                    }
                }
            }
        }
    }
</script>