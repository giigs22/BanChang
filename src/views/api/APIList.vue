<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10 mb-10">API Setting</h1>
                        <div class="grid grid-cols-2 gap-10">
                            <div class="col-span-1">
                                <h2 class="font-bold text-white mb-5">Sensor Setting</h2>
                                <div class="grid mb-3">
                                    <label for="" class="text-white">API</label>
                                    <input type="text" class="form-input disabled:bg-gray-300" v-model="sensor.api" :disabled="disable">
                                </div>
                                <div class="grid mb-3">
                                    <label for="" class="text-white">API Login Token</label>
                                    <input type="text" class="form-input disabled:bg-gray-300" v-model="sensor.login_token" :disabled="disable">
                                </div>
                                 <div class="grid mb-3">
                                    <label for="" class="text-white">Username</label>
                                    <input type="text" class="form-input disabled:bg-gray-300" v-model="sensor.user" :disabled="disable">
                                </div>
                                 <div class="grid mb-3">
                                    <label for="" class="text-white">Password</label>
                                    <input type="text" class="form-input disabled:bg-gray-300" v-model="sensor.pass" :disabled="disable">
                                </div>
                            </div>
                            <div class="col-span-1">
                              <h2 class="font-bold text-white mb-5">Web Application Setting</h2>
                                <div class="grid">
                                    <label for="" class="text-white">API</label>
                                    <input type="text" class="form-input disabled:bg-gray-300" v-model="web.api" :disabled="disable">
                                </div>
                            </div>
                        </div>


                        <div class="flex gap-3 justify-end mt-10">
                             <button class="px-5 py-2 rounded-md text-white btn-red-gradient"
                                @click="disable = false">Edit</button>
                            <button class="px-5 py-2 rounded-md text-white btn-blue-gradient disabled:opacity-60" :disabled="disable"
                                @click="updateAPI">Update</button>

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
    import AlertDialog from '../../components/utility/AlertDialog.vue'

    export default {
        components: {
            TopMenu,
            FooterPage,
            AlertDialog
        },
        data() {
            return {
                disable:true,
                sensor:{
                    api:null,
                    login_token:null,
                    user:null,
                    pass:null
                },
                web:{
                    api:null
                },
                  alert: {
                    active: false,
                    type: null,
                    msg: null
                },
            }
        },
        created() {
            this.getDataSetting()
        },
        methods: {
            getDataSetting(){
                this.$store.dispatch('server/apiSetting').then((res)=>{
                    console.log(res);
                    var data = res.data
                    this.sensor.api = data.sensor_api
                    this.sensor.login_token = data.sensor_api_token
                    this.sensor.user = data.sensor_api_user
                    this.sensor.pass = data.sensor_api_pass
                    this.web.api = data.web_api
                })
            },  
            updateAPI() {
                var data = {
                    sensor_api:this.sensor.api,
                    sensor_api_token:this.sensor.login_token,
                    sensor_api_user:this.sensor.user,
                    sensor_api_pass:this.sensor.pass,
                    web_api:this.web.api
                }
                this.$store.dispatch('server/apiUpdate',data).then((res)=>{
                      var data = res.data
                    if (data.success) {
                        this.alert.active = true
                        this.alert.type = "success"
                        this.alert.msg = data.message
                    setTimeout(() => {
                        this.alert.active = false
                        window.location.reload()
                    }, 2000);
                    }else{
                        this.alert.active = true
                        this.alert.type = "error"
                        this.alert.msg = data.message
                         setTimeout(() => {
                        this.closeAlert()
                    }, 2000);
                    }
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