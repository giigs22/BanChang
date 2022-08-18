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
                           
                           <!-- <AirQuality></AirQuality> -->
                          
                             <!-- <SmartLighting></SmartLighting>
                           
                            <SmartPoleEnergy></SmartPoleEnergy>
                            
                            <CCTVCamera></CCTVCamera>
                        
                            <CCTVSurviellance></CCTVSurviellance>
                           
                            <Parking></Parking>
                            
                            <CheckLicensePlate></CheckLicensePlate>
                           
                            <LicensePlate></LicensePlate>
                           
                            <FreeWifi></FreeWifi>
                            
                            <DigitalSignage></DigitalSignage>
                            
                            <Complaint></Complaint>
                           
                            <Sos></Sos> -->
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
    import { defineAsyncComponent } from 'vue';
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
    
    //import AirQuality from '../components/widgets/AirQuality.vue';
    //import SmartLighting from '../components/widgets/SmartLighting.vue';
    //import SmartPoleEnergy from '../components/widgets/SmartPoleEnergy.vue';
    //import CCTVCamera from '../components/widgets/CCTVCamera.vue';
    //import CCTVSurviellance from '../components/widgets/CCTVSurviellance.vue';
    //import Parking from '../components/widgets/Parking.vue';
    //import CheckLicensePlate from '../components/widgets/CheckLicensePlate.vue';
    //import LicensePlate from '../components/widgets/LicensePlate.vue';
    //import FreeWifi from '../components/widgets/FreeWifi.vue';
    //import DigitalSignage from '../components/widgets/DigitalSignage.vue';
    //import Complaint from '../components/widgets/Complaint.vue';
    //import Sos from '../components/widgets/Sos.vue';
    const listComponents = {}
    const listName = []
    const userWidget = localStorage.getItem('widget')
    
    var result = widgetdata.filter( w => userWidget.includes(w.id));
    
    result.forEach(el=>{
        listName.push(el.name.split(" ").join(""))
    })
    listName.forEach((component) => { 
        listComponents[component] = defineAsyncComponent(() =>
            import("@/components/widgets/" + component + ".vue")
        );
    });
    
    export default {
        components: {
            Environment,
            DataLayer,
            MapLocation,
            Devices,
            Covid19,
            SOS,
            //AirQuality,
            //SmartLighting,
            //SmartPoleEnergy,
            //CCTVCamera,
            //CCTVSurviellance,
            //Parking,
            //CheckLicensePlate,
            //LicensePlate,
            //FreeWifi,
            //DigitalSignage,
            //Complaint,
            //Sos,
            RecentComplaint,
            TopMenu,
            FooterPage,
            AlertConnectAPI,
            AlertDialogConfirm,
        },
        data() {
            return {
                alert: {
                    active: false
                },
                confirm: {
                    active: false,
                    msg: null
                },
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            },
            statusServer() {
                return this.$store.state.server.api_sensor.connect;
            },
            dataSensorAPI(){
               return this.$store.getters['auth/dataPlanet']
            },
        },
        async created() {
            await this.getUserData()
            if (!this.loggedIn) {
                this.$store.dispatch('auth/logout');
                this.$router.push('/login')
            } else {
                if (!this.statusServer) {
                    await this.loginPlanet()
                }
                //await this.getUserData()
                //await this.checkExpire()
            }
        },
        methods: {
            loginPlanet() {
                this.alert.active = true
                return this.$store.dispatch('auth/login_planet',this.dataSensorAPI).then((res) => {
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
                return this.$store.dispatch('user/userData').then(() => {})
            }


        }

    }
</script>