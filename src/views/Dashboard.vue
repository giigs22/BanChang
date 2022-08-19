<template>
    <TopMenu />
    <main class="m-10">
        <div class="flex items-center justify-end my-5">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36" height="36"
                viewBox="0 0 36 36">
                <defs>
                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stop-color="#8466d5" />
                        <stop offset="1" stop-color="#d670c0" />
                    </linearGradient>
                </defs>
                <path id="windows"
                    d="M14.755,19V33.079L0,31.046V19Zm0-16.075V17.177H0V4.954ZM36,19V36L16.377,33.3V19ZM36,0V17.178H16.377V2.7Z"
                    fill="url(#linear-gradient)" />
            </svg>
            <h1 class="text-xl text-white ml-1">Video Wall</h1>
        </div>
        <!-- Content -->
        <section class="section-content">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <h1 class="text-xl text-white">Dashboard</h1>
                    <div class="block-content">
                        <img src="@/assets/btn_top.png" alt="" class="w-9 h-9 icon-top">
                        <Environment></Environment>
                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-3">
                                <DataLayer></DataLayer>
                            </div>
                            <div class="col-span-6">
                                <MapLocation></MapLocation>

                            </div>
                            <div class="col-span-3">
                                <Devices></Devices>
                                <SOS></SOS>
                                <Covid19></Covid19>
                            </div>
                        </div>
                        <div class="py-5 clear-both"></div>

                    </div>
                </div>
            </div>
            <!-- End Main Section-->
            <!-- Widget -->
            <div class="inner-content mx-10 mt-5">
                <div class="main-content">
                    <div class="block-content">
                        <img src="@/assets/btn_top.png" alt="" class="w-9 h-9 icon-top">

                        <h1 class="text-xl text-white">Widgets</h1>
                        <div class="grid grid-cols-12 gap-1">
                                <component v-bind:is="component" v-for="component in components"></component>

                        </div>
                        <div class="py-5 clear-both"></div>

                    </div>
                </div>

            </div>
            <!-- End Widget -->
            <!-- Recent Complaint -->
            <div class="inner-content mx-10 mt-5">
                <div class="main-content">
                    <div class="block-content">
                        <img src="@/assets/btn_top.png" alt="" class="w-9 h-9 ml-auto">
                        <RecentComplaint></RecentComplaint>
                        <div class="py-5 clear-both"></div>

                    </div>

                </div>
            </div>

            <!-- End Recent Complaint -->
        </section>
    </main>
    <FooterPage />
    <AlertConnectAPI v-if="alert.active" />
    <AlertDialogConfirm v-if="confirm.active" :msg="confirm.msg" :type="'error'" @close="closeAlert" />
</template>
<script>
    import {
        defineAsyncComponent
    } from 'vue';
    import Environment from '@/components/Environment.vue';
    import DataLayer from '@/components/DataLayer.vue';
    import MapLocation from '@/components/MapLocation.vue';
    import Devices from '@/components/Devices.vue';
    import Covid19 from '@/components/Covid19.vue';
    import SOS from '@/components/SOS.vue';
    import RecentComplaint from '@/components/RecentComplaint.vue';
    import TopMenu from '@/views/layout/TopMenu.vue';
    import FooterPage from '@/views/layout/FooterPage.vue';
    import AlertConnectAPI from '@/components/utility/AlertConnectAPI.vue'
    import AlertDialogConfirm from '@/components/utility/AlertDialogConfirm.vue'
    import widgetdata from '@/services/widget_data.json'

    const staticComp = {
            Environment,
            DataLayer,
            MapLocation,
            Devices,
            Covid19,
            SOS,
            RecentComplaint,
            TopMenu,
            FooterPage,
            AlertConnectAPI,
            AlertDialogConfirm,
    }
    
    

    export default {
        components: staticComp,
        data() {
            return {
                alert: {
                    active: false
                },
                confirm: {
                    active: false,
                    msg: null
                },
                components: null
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            },
            statusServer() {
                return this.$store.state.server.api_sensor.connect;
            },
            dataSensorAPI() {
                return this.$store.getters['auth/dataPlanet']
            },
            userWidget(){
                return localStorage.getItem('widget')
            }
        },
        async created() {
            if (!this.loggedIn) {
                this.$store.dispatch('auth/logout');
                this.$router.push('/login')
            } else {
                await this.getUserData()
                if (!this.statusServer) {
                    await this.loginPlanet()
                }
                //await this.checkExpire()
            }
        },
        methods: {
            loginPlanet() {
                this.alert.active = true
                return this.$store.dispatch('auth/login_planet', this.dataSensorAPI).then((res) => {
                    this.$store.dispatch('server/setStatus', true)
                    this.alert.active = false
                    location.reload()
                }).catch((err) => {
                    console.log(err);
                    if (err.code === "ECONNABORTED") {
                        this.$store.dispatch('server/sendLog', {
                            type: 'error',
                            msg: 'Error Connect Login time out.'
                        }).then((res) => {
                            var data = res.data
                            if (data.success) {
                                this.$store.dispatch('server/setStatus', false)
                                this.alert.active = false
                                this.confirm.active = true
                                this.confirm.msg = 'Unable to Connect Sensor!'
                            }
                        })
                    }
                    if (err.code === "ERR_NETWORK") {
                        this.$store.dispatch('server/sendLog', {
                            type: 'error',
                            msg: 'Error Network.'
                        }).then((res) => {
                            var data = res.data
                            if (data.success) {
                                this.$store.dispatch('server/setStatus', false)
                                this.alert.active = false
                                this.confirm.active = true
                                this.confirm.msg = 'Error Network!'
                            }
                        })
                    }
                })
            },
            closeAlert() {
                this.confirm.active = false
                this.confirm.msg = null
            },
            checkExpire() {
                return this.$store.dispatch('auth/checkExpire').then((res) => {
                    if (res) {
                        this.confirm.active = true
                        this.confirm.msg = 'Token is Expire!'
                        this.$store.dispatch('auth/logout')
                        this.$router.push('/login')
                    }
                })
            },
            getUserData() {
                this.alert.active = true
                this.$store.dispatch('user/userData').then(()=>{
                    setTimeout(() => {
                        this.setWidget()
                        this.alert.active = false
                    }, 2000);
                    
                })
            },
            setWidget(){
                const listName = []
                if(this.userWidget !== ''){
                    var result = widgetdata.filter(w => this.userWidget.includes(w.id));

                    result.forEach(el => {
                        listName.push(el.name.split(" ").join(""))
                    })
                    listName.forEach((component) => {
                        staticComp[component] = defineAsyncComponent(() =>
                            import("../components/widgets/" + component + ".vue")
                        );
                    });
                    this.components = listName;
                }
            }


        }

    }
</script>