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
                            <!-- Air Quality -->
                            <AirQuality></AirQuality>
                            <!-- Smart Lighting -->
                            <SmartLighting></SmartLighting>
                            <!-- Smart Pole Energy -->
                            <SmartPoleEnergy></SmartPoleEnergy>
                            <!-- CCTV Camera -->
                            <CCTVCamera></CCTVCamera>
                            <!-- CCTV Surviellance -->
                            <CCTVSurviellance></CCTVSurviellance>
                            <!-- Parking -->
                            <Parking></Parking>
                            <!-- Check license Plate -->
                            <CheckLicensePlate></CheckLicensePlate>
                            <!-- License Plate -->
                            <LicensePlate></LicensePlate>
                            <!-- Free WiFi -->
                            <FreeWifi></FreeWifi>
                            <!-- Digital Signage -->
                            <DigitalSignage></DigitalSignage>
                            <!-- Complaint -->
                            <Complaint></Complaint>
                            <!-- SOS -->
                            <Sos></Sos>
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
    <AlertConnectAPI v-if="alert.active"/>
    <AlertDialogConfirm v-if="confirm.active" :msg="'Unable to Connect'" :type="error"/>
</template>
<script>
    import Environment from '../components/Environment.vue';
    import DataLayer from '../components/DataLayer.vue';
    import MapLocation from '../components/MapLocation.vue';
    import Devices from '../components/Devices.vue';
    import Covid19 from '../components/Covid19.vue';
    import SOS from '../components/SOS.vue';
    import AirQuality from '../components/widgets/AirQuality.vue';
    import CCTVCamera from '../components/widgets/CCTVCamera.vue';
    import CCTVSurviellance from '../components/widgets/CCTVSurviellance.vue';
    import Parking from '../components/widgets/Parking.vue';
    import CheckLicensePlate from '../components/widgets/CheckLicensePlate.vue';
    import LicensePlate from '../components/widgets/LicensePlate.vue';
    import FreeWifi from '../components/widgets/FreeWifi.vue';
    import DigitalSignage from '../components/widgets/DigitalSignage.vue';
    import Complaint from '../components/widgets/Complaint.vue';
    import Sos from '../components/widgets/Sos.vue';
    import RecentComplaint from '../components/RecentComplaint.vue';
    import SmartLighting from '../components/widgets/SmartLighting.vue';
    import SmartPoleEnergy from '../components/widgets/SmartPoleEnergy.vue';
    import TopMenu from './layout/TopMenu.vue';
    import FooterPage from './layout/FooterPage.vue';
    import AlertConnectAPI from '../components/utility/AlertConnectAPI.vue'
    import LogService from '../services/log.service'
    import AlertDialogConfirm from '../components/utility/AlertDialogConfirm.vue'

    export default {
        components: {
            Environment,
            DataLayer,
            MapLocation,
            Devices,
            Covid19,
            SOS,
            AirQuality,
            CCTVCamera,
            CCTVSurviellance,
            Parking,
            CheckLicensePlate,
            LicensePlate,
            FreeWifi,
            DigitalSignage,
            Complaint,
            Sos,
            RecentComplaint,
            SmartLighting,
            SmartPoleEnergy,
            TopMenu,
            FooterPage,
            AlertConnectAPI,
            AlertDialogConfirm
        },
        data() {
            return {
                alert: {
                    active: false
                },
                confirm:{
                    active:false
                }
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            }
        },
        created() {
            if (!this.loggedIn) {
                this.$store.dispatch('auth/logout');
                this.$router.push('/login')
            }
            this.loginPlanet()
        },
        methods: {
            loginPlanet() {
                this.alert.active = true
                this.$store.dispatch('auth/login_planet').then((res) => {
                    console.log(res);
                }).catch((err) => {
                    if (err.code === "ECONNABORTED") {
                        LogService.sendLog('error', 'Error Connect Login time out.').then((res)=>{
                            var data = res.data
                            if(data.success){
                                this.alert.active = false
                                this.confirm.active = true
                            }
                        })
                        
                        
                    }
                })
            },

        }

    }
</script>