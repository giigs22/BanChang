<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">CCTV Camera</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg text-white">Search</h3>
                            <div class="grid grid-cols-12 form-search">
                                <div class="col-span-2 flex flex-col items-end gap-5">
                                    <div>
                                        <select name="" id="" class="h-12 rounded text-sm">
                                            <option value="">Condition Type</option>
                                        </select>
                                    </div>
                                    <div class="flex items-end">
                                        <label for="" class="text-white mr-1">From</label>
                                        <input type="text" placeholder="DD/MM/YYYY" class="form-input">
                                    </div>
                                </div>
                                <div class="col-span-2 flex flex-col items-end gap-5">
                                    <div>
                                        <input type="text" placeholder="ID.Name" class="form-input">
                                    </div>
                                    <div class="flex items-end">
                                        <label for="" class="text-white mr-1">To</label>
                                        <input type="text" placeholder="DD/MM/YYYY" class="form-input">
                                    </div>
                                </div>
                                <div class="col-span-2">
                                    <div class="ml-2">
                                        <button class="btn-purple rounded">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-12 gap-4 mb-5">
                            <div class="col-span-3">
                                <div class="block-layer data-layer py-2 px-3 mt-4">
                                    <!-- cctv item -->
                                    <div class="border-b border-gray-600">
                                        <h2 class="text-white text-md ml-14">Cam 01 สนามกีฬา</h2>
                                        <div class="flex justify-around items-center my-2">
                                            <div class="rounded-full w-5 h-5 bg-yellow-500 border-4 border-gray-500">
                                            </div>
                                            <div>
                                                <img src="@/assets/icon_cctv_yellow.png" alt="">
                                            </div>
                                            <div>
                                                <ul class="text-white text-sm list-disc">
                                                    <li>Status : <span class="text-yellow-500">Ng</span></li>
                                                    <li>Setting : <span class="text-yellow-500">720p 25fps</span></li>
                                                    <li>Time : <span class="text-yellow-500">08:00 AM</span></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <input type="checkbox" value="main" class="mr-5 cus-checkbox">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- cctv item -->
                                    <!-- cctv item -->
                                    <div class="border-b border-gray-600">
                                        <h2 class="text-white text-md ml-14">Cam 01 สนามกีฬา</h2>
                                        <div class="flex justify-around items-center my-2">
                                            <div class="rounded-full w-5 h-5 bg-green-600 border-4 border-gray-500">
                                            </div>
                                            <div>
                                                <img src="@/assets/icon_cctv_green.png" alt="">
                                            </div>
                                            <div>
                                                <ul class="text-white text-sm list-disc">
                                                    <li>Status : <span class="text-green-500">Ng</span></li>
                                                    <li>Setting : <span class="text-green-500">720p 25fps</span></li>
                                                    <li>Time : <span class="text-green-500">08:00 AM</span></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <input type="checkbox" value="main" class="mr-5 cus-checkbox">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- cctv item -->
                                    <!-- cctv item -->
                                    <div class="border-b border-gray-600">
                                        <h2 class="text-white text-md ml-14">Cam 01 สนามกีฬา</h2>
                                        <div class="flex justify-around items-center my-2">
                                            <div class="rounded-full w-5 h-5 bg-red-600 border-4 border-gray-500"></div>
                                            <div>
                                                <img src="@/assets/icon_cctv_red.png" alt="">
                                            </div>
                                            <div>
                                                <ul class="text-white text-sm list-disc">
                                                    <li>Status : <span class="text-red-500">Ng</span></li>
                                                    <li>Setting : <span class="text-red-500">720p 25fps</span></li>
                                                    <li>Time : <span class="text-red-500">08:00 AM</span></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <input type="checkbox" value="main" class="mr-5 cus-checkbox">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- cctv item -->
                                    <div class="flex justify-between mt-5">
                                        <div class="flex items-center gap-3">
                                            <input type="checkbox" value="" class="cus-checkbox"> <label for=""
                                                class="text-white">
                                                All</label>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="btn-purple">Show</button>
                                            <button class="btn-red">Clear</button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-span-6">
                                <div class="flex gap-5 my-4 justify-end">
                                    <button class="btn-purple">Map</button>
                                    <button class="btn-gray">Camera</button>
                                </div>
                                <img src="@/assets/map.png" alt="" class="w-full">
                            </div>
                            <div class="col-span-3">
                                <div class="block-layer data-layer py-2 px-3 mt-4">
                                    <h1 class="text-2xl text-white text-center my-3">Device Status</h1>
                                    <div class="grid grid-cols-3 gap-1 my-5">
                                        <div class="col-span-1">
                                            <div class="bg-green-600 text-white flex flex-col items-center rounded-lg">
                                                <h1 class="text-4xl">ON</h1>
                                                <h1 class="text-7xl">0</h1>
                                                <h1 class="text-sm mt-2">0% Online</h1>
                                            </div>
                                        </div>
                                        <div class="col-span-1">
                                            <div class="bg-yellow-400 text-white flex flex-col items-center rounded-lg">
                                                <h1 class="text-4xl">ON</h1>
                                                <h1 class="text-7xl">0</h1>
                                                <h1 class="text-sm mt-2">0% Abnormal</h1>
                                            </div>
                                        </div>
                                        <div class="col-span-1">
                                            <div class="bg-red-600 text-white flex flex-col items-center rounded-lg">
                                                <h1 class="text-4xl">ON</h1>
                                                <h1 class="text-7xl">0</h1>
                                                <h1 class="text-sm mt-2">0% Offline</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-layer data-layer py-2 px-3 mt-4">
                                    <ul class="text-white flex text-lg text-center border-b border-gray-600">
                                        <li class="w-1/2 py-1 px-3 hover:bg-gray-500">Event</li>
                                        <li class="w-1/2 py-1 px-3 hover:bg-gray-500">Parking</li>
                                    </ul>
                                    <div id="tab1">
                                        <ul class="text-white p-2 list-event">
                                            <li>Camera Malfunction <span class="text-red-600">11</span></li>
                                            <li>Trespasser <span class="text-red-600">20</span></li>
                                            <li>Suspected Face Detection <span class="text-red-600">22</span></li>
                                            <li>Group Cluster Detection <span class="text-red-600">50</span></li>
                                            <li>Traffic Violation <span class="text-red-600">20</span></li>
                                            <li>Parking Violation <span class="text-red-600">30</span></li>
                                        </ul>
                                    </div>
                                    <div id="tab2">
                                        <ul class="text-white p-2 list-event">
                                            <li>Status <span class="text-green-600">Normal</span></li>
                                            <li>Occupied Parking <span class="text-blue-600">9</span></li>
                                            <li>Vacant Parking <span class="text-purple-600">11</span></li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">Widget</h1>
                        <div class="grid grid-cols-6 gap-5 px-20">
                            <div class="col-span-3">
                                <CCTVSurviellance></CCTVSurviellance>
                            </div>
                            <div class="col-span-3">
                                <Parking></Parking>
                            </div>
                            <div class="col-span-3">
                                <CheckLicensePlate></CheckLicensePlate>
                            </div>
                            <div class="col-span-3">
                                <LicensePlate></LicensePlate>
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
    import CCTVSurviellance from '../../components/widgets/CCTVSurviellance.vue';
    import Parking from '../../components/widgets/Parking.vue';
    import CheckLicensePlate from '../../components/widgets/CheckLicensePlate.vue';
    import LicensePlate from '../../components/widgets/LicensePlate.vue';

    export default {
        components: {
            TopMenu,
            FooterPage,
            CCTVSurviellance,
            Parking,
            CheckLicensePlate,
            LicensePlate
        },
        data() {
            return {

            }
        },
        async created() {

        },
        methods: {

        }
    }
</script>