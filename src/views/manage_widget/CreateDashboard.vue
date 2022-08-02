<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">Create Dashboard</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg text-white">All Widgets</h3>
                            <div class="grid grid-cols-12 form-search my-10">
                                <div class="col-span-6 flex items-end gap-5">
                                    <div>
                                        <label for="" class="text-white m-3">Template Name</label>
                                        <input type="text" name="" id="" class="form-input">
                                    </div>
                                    <div class="ml-2">
                                        <button class="btn-purple rounded btn-blue-gradient h-12"
                                            href="/view/create_dashboard">Save Template</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10 mb-5 block-content">
                            <h1 class="text-xl text-white">Select Widget</h1>
                            <div class="grid grid-cols-12 gap-1 my-5">
                                <div class="block-widgets col-span-4" @click="selectWidget(1)">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="uppercase">Air Quality</span>
                                    </div>
                                    <img src="@/assets/icon_widget_aqi.png" alt="" class="mx-auto w-1/3 my-5">
                                </div>
                                <div class="block-widgets col-span-4" @click="selectWidget(2)">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="uppercase">Smart Lighting</span>
                                    </div>
                                    <img src="@/assets/icon_widget_smartlight.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4" @click="selectWidget(3)">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">Smart Pole Energy</span>
                                    </div>
                                    <img src="@/assets/icon_widget_smartpole.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4" @click="selectWidget(4)">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">CCTV Camera</span>
                                    </div>
                                    <img src="@/assets/icon_widget_cctv.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4" @click="selectWidget(5)">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">CCTV Surviellance</span>
                                    </div>
                                    <img src="@/assets/icon_widget_cctvsur.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4" @click="selectWidget(6)">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">Parking</span>
                                    </div>
                                    <img src="@/assets/icon_widget_parking.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4" @click="selectWidget(7)">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">Check License Plate</span>
                                    </div>
                                    <img src="@/assets/icon_widget_checklicense.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4" @click="selectWidget(8)">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">License Plate</span>
                                    </div>
                                    <img src="@/assets/icon_widget_licenseplate.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4" @click="selectWidget(9)">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">Free Wifi</span>
                                    </div>
                                    <img src="@/assets/icon_widget_freewifi.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4" @click="selectWidget(10)">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">Digital Signage</span>
                                    </div>
                                    <img src="@/assets/icon_widget_digital.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4" @click="selectWidget(11)">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">Complaint</span>
                                    </div>
                                    <img src="@/assets/icon_widget_complaint.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                                <div class="block-widgets col-span-4" @click="selectWidget(12)">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        <span class="text-sm uppercase">SOS</span>
                                    </div>
                                    <img src="@/assets/icon_widget_sos.png" alt="" class="mx-auto w-1/3 my-5">

                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="my-5">
                        <h1 class="text-xl text-white mb-5">Dashboard Layout</h1>
                        <div class="grid grid-cols-12 gap-1">
                            <div class="block-widgets col-span-4">
                                <img src="@/assets/icon_plus.png" alt="" class="mx-auto w-1/4 my-5">

                            </div>
                            <div class="block-widgets col-span-4">
                                <img src="@/assets/icon_plus.png" alt="" class="mx-auto w-1/4 my-5">

                            </div>
                            <div class="block-widgets col-span-4">
                                <img src="@/assets/icon_plus.png" alt="" class="mx-auto w-1/4 my-5">

                            </div>
                            <div class="block-widgets col-span-4">
                                <img src="@/assets/icon_plus.png" alt="" class="mx-auto w-1/4 my-5">

                            </div>
                            <div class="block-widgets col-span-4">
                                <img src="@/assets/icon_plus.png" alt="" class="mx-auto w-1/4 my-5">

                            </div>
                            <div class="block-widgets col-span-4">
                                <img src="@/assets/icon_plus.png" alt="" class="mx-auto w-1/4 my-5">

                            </div>
                            <div class="block-widgets col-span-4">
                                <img src="@/assets/icon_plus.png" alt="" class="mx-auto w-1/4 my-5">

                            </div>
                            <div class="block-widgets col-span-4">
                                <img src="@/assets/icon_plus.png" alt="" class="mx-auto w-1/4 my-5">

                            </div>
                            <div class="block-widgets col-span-4">
                                <img src="@/assets/icon_plus.png" alt="" class="mx-auto w-1/4 my-5">

                            </div>
                            <div class="block-widgets col-span-4">
                                <img src="@/assets/icon_plus.png" alt="" class="mx-auto w-1/4 my-5">

                            </div>
                            <div class="block-widgets col-span-4">
                                <img src="@/assets/icon_plus.png" alt="" class="mx-auto w-1/4 my-5">

                            </div>
                            <div class="block-widgets col-span-4">
                                <img src="@/assets/icon_plus.png" alt="" class="mx-auto w-1/4 my-5">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <FooterPage />
</template>
<script>
    import axios from 'axios'
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import AuthService from '../../services/auth.services'
    import authHeader from '../../services/auth.header'

    export default {
        components: {
            TopMenu,
            FooterPage
        },
        data() {
            return {
                selected:[]
            }
        },
        async created() {

        },
        methods: {
            selectWidget(id){
                
            }
        }
    }
</script>