<template>
    <TopMenu />
    <main class="m-3 lg:m-10">
        <div class="flex items-center justify-end my-3 lg:my-5" v-if="user_role == 'administrator'">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36" height="36"
                viewBox="0 0 36 36">
                <defs>
                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"
                        v-if="theme == 'dark'">
                        <stop offset="0" stop-color="#8466d5" />
                        <stop offset="1" stop-color="#d670c0" />
                    </linearGradient>
                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"
                        v-else>
                        <stop offset="0" stop-color="#035671" />
                        <stop offset="1" stop-color="#3596b5" />
                    </linearGradient>
                </defs>
                <path id="windows"
                    d="M14.755,19V33.079L0,31.046V19Zm0-16.075V17.177H0V4.954ZM36,19V36L16.377,33.3V19ZM36,0V17.178H16.377V2.7Z"
                    fill="url(#linear-gradient)" />
            </svg>
            <h1 class="text-md lg:text-xl dark:text-white ml-1">Video Wall</h1>
        </div>
        <!-- Content -->
        <section class="section-content dark:bg-content-dark bg-content-light">
            <!-- Main Section -->
            <div class="inner-content lg:mx-10">
                <div class="main-content">
                    <h1 class="lg:text-xl dark:text-white">{{$t('dashboard')}}</h1>
                    <div class="block-content dark:bg-block-content-dark bg-block-content-light relative">
                        <div class="flex justify-end">
                            <img src="@/assets/btn_top.png" alt="" class="w-11 h-11" v-if="theme == 'dark'">
                            <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="44" height="44" viewBox="0 0 55 55" class="">
                                <defs>
                                    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5"
                                        gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#3596b5" />
                                        <stop offset="1" stop-color="#035671" />
                                    </radialGradient>
                                    <filter id="_27530" x="0" y="0" width="55" height="55" filterUnits="userSpaceOnUse">
                                        <feOffset dy="3" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feFlood flood-opacity="0.161" />
                                        <feComposite operator="in" in2="blur" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                    <filter id="Path_1775" x="14.832" y="18.668" width="25.012" height="12.737"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset dy="0.5" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="0.5" result="blur-2" />
                                        <feFlood flood-opacity="0.161" />
                                        <feComposite operator="in" in2="blur-2" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                </defs>
                                <g id="Component_188_291" data-name="Component 188 – 291" transform="translate(9 6)">
                                    <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#_27530)">
                                        <circle id="_27530-2" data-name="27530" cx="18.5" cy="18.5" r="18.5"
                                            transform="translate(9 6)" fill="url(#radial-gradient)" />
                                    </g>
                                    <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Path_1775)">
                                        <path id="Path_1775-2" data-name="Path 1775" d="M0,0,9.43,7.334,19.208,0"
                                            transform="translate(36.94 28) rotate(180)" fill="none" stroke="#fff"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    </g>
                                </g>
                            </svg>
                        </div>



                        <Environment></Environment>
                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-12 lg:col-span-3">
                                <DataLayer @showmap="showMapData" @clearmap="clearMapData"></DataLayer>
                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <MapLocation ref="maplocation"></MapLocation>
                            </div>
                            <div class="col-span-12 lg:col-span-3">
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
            <div class="inner-content∂ lg:mx-10 mt-5">
                <div class="main-content">
                    <div class="block-content">
                        <div class="flex justify-end">
                            <img src="@/assets/btn_top.png" alt="" class="w-11 h-11" v-if="theme == 'dark'">
                            <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="44" height="44" viewBox="0 0 55 55" class="">
                                <defs>
                                    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5"
                                        gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#3596b5" />
                                        <stop offset="1" stop-color="#035671" />
                                    </radialGradient>
                                    <filter id="_27530" x="0" y="0" width="55" height="55" filterUnits="userSpaceOnUse">
                                        <feOffset dy="3" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feFlood flood-opacity="0.161" />
                                        <feComposite operator="in" in2="blur" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                    <filter id="Path_1775" x="14.832" y="18.668" width="25.012" height="12.737"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset dy="0.5" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="0.5" result="blur-2" />
                                        <feFlood flood-opacity="0.161" />
                                        <feComposite operator="in" in2="blur-2" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                </defs>
                                <g id="Component_188_291" data-name="Component 188 – 291" transform="translate(9 6)">
                                    <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#_27530)">
                                        <circle id="_27530-2" data-name="27530" cx="18.5" cy="18.5" r="18.5"
                                            transform="translate(9 6)" fill="url(#radial-gradient)" />
                                    </g>
                                    <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Path_1775)">
                                        <path id="Path_1775-2" data-name="Path 1775" d="M0,0,9.43,7.334,19.208,0"
                                            transform="translate(36.94 28) rotate(180)" fill="none" stroke="#fff"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    </g>
                                </g>
                            </svg>
                        </div>

                        <h1 class="text-xl dark:text-white">{{$t('widgets')}}</h1>
                        <div class="grid grid-cols-12 gap-1">
                            <component v-bind:is="component" v-for="component in components"></component>

                        </div>
                        <div class="py-5 clear-both"></div>

                    </div>
                </div>

            </div>
            <!-- End Widget -->
            <!-- Recent Complaint -->
            <div class="inner-content lg:mx-10 mt-5" v-if="user_role == 'administrator' || user_role=='staff'">
                <div class="main-content">
                    <div class="block-content dark:bg-block-content-dark bg-block-content-light">
                        <div class="flex justify-end">
                            <img src="@/assets/btn_top.png" alt="" class="w-11 h-11" v-if="theme == 'dark'">
                            <svg v-else xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="44" height="44" viewBox="0 0 55 55" class="">
                                <defs>
                                    <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5"
                                        gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#3596b5" />
                                        <stop offset="1" stop-color="#035671" />
                                    </radialGradient>
                                    <filter id="_27530" x="0" y="0" width="55" height="55" filterUnits="userSpaceOnUse">
                                        <feOffset dy="3" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feFlood flood-opacity="0.161" />
                                        <feComposite operator="in" in2="blur" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                    <filter id="Path_1775" x="14.832" y="18.668" width="25.012" height="12.737"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset dy="0.5" input="SourceAlpha" />
                                        <feGaussianBlur stdDeviation="0.5" result="blur-2" />
                                        <feFlood flood-opacity="0.161" />
                                        <feComposite operator="in" in2="blur-2" />
                                        <feComposite in="SourceGraphic" />
                                    </filter>
                                </defs>
                                <g id="Component_188_291" data-name="Component 188 – 291" transform="translate(9 6)">
                                    <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#_27530)">
                                        <circle id="_27530-2" data-name="27530" cx="18.5" cy="18.5" r="18.5"
                                            transform="translate(9 6)" fill="url(#radial-gradient)" />
                                    </g>
                                    <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Path_1775)">
                                        <path id="Path_1775-2" data-name="Path 1775" d="M0,0,9.43,7.334,19.208,0"
                                            transform="translate(36.94 28) rotate(180)" fill="none" stroke="#fff"
                                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                    </g>
                                </g>
                            </svg>
                        </div>
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
    import UserService from '../services/user.service';

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
                components: null
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.auth.status.loggedIn;
            },
            userWidget() {
                return localStorage.getItem('widget')
            },
            theme() {
                return this.$store.state.template.theme
            },
            user_role(){
                return this.$store.state.user.user_data?.data.user_group
            }
        },
        async created() {
            if (!this.loggedIn) {
                this.$store.dispatch('auth/logout');
                this.$router.push('/login')
            } else {
                if(this.userData == undefined || this.userData == null){
                await this.getUserData()
                }else{
                    setTimeout(() => {
                        this.setWidget()
                    }, 2000);
                }
            }
        },
        methods: {
            getUserData() {
                //this.alert.active = true
                return this.$store.dispatch('user/userData').then(() => {
                    setTimeout(() => {
                        this.setWidget()
                        //this.alert.active = false
                    }, 2000);

                }).catch((err)=>{
                    UserService.checkUnauthen(err.response)
                })
            },
            setWidget() {
                const listName = []
                if (this.userWidget !== '') {
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
            },
            showMapData(val) {
                this.$refs.maplocation.setDataLayer(val)
            },
            clearMapData() {
                this.$refs.maplocation.setDataLayer()
            }


        }

    }
</script>