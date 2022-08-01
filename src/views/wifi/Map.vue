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
                                        <h2 class="text-white text-md ml-14">Wifi 01 สนามกีฬา</h2>
                                        <div class="flex justify-around items-center my-2">
                                            <div class="rounded-full w-5 h-5 bg-yellow-500 border-4 border-gray-500">
                                            </div>
                                            <div>
                                                <img src="@/assets/icon_wifi_yellow.png" alt="">
                                            </div>
                                            <div>
                                                <ul class="text-white text-sm list-disc">
                                                    <li>Status : <span class="text-yellow-500">Ng</span></li>
                                                    <li>Users : <span class="text-yellow-500">3/50</span></li>
                                                    <li>Time : <span class="text-yellow-500">08:00 AM</span></li>
                                                </ul>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- cctv item -->
                                    <!-- cctv item -->
                                    <div class="border-b border-gray-600">
                                        <h2 class="text-white text-md ml-14">Wifi 01 สนามกีฬา</h2>
                                        <div class="flex justify-around items-center my-2">
                                            <div class="rounded-full w-5 h-5 bg-green-600 border-4 border-gray-500">
                                            </div>
                                            <div>
                                                <img src="@/assets/icon_wifi_green.png" alt="">
                                            </div>
                                            <div>
                                                <ul class="text-white text-sm list-disc">
                                                    <li>Status : <span class="text-green-500">Ng</span></li>
                                                    <li>Users : <span class="text-green-500">3/50</span></li>
                                                    <li>Time : <span class="text-green-500">08:00 AM</span></li>
                                                </ul>
                                            </div>
                                            <div>
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
                                                <img src="@/assets/icon_wifi_red.png" alt="">
                                            </div>
                                            <div>
                                                <ul class="text-white text-sm list-disc">
                                                    <li>Status : <span class="text-red-500">Ng</span></li>
                                                    <li>Users : <span class="text-red-500">3/50</span></li>
                                                    <li>Time : <span class="text-red-500">08:00 AM</span></li>
                                                </ul>
                                            </div>
                                           <div>

                                           </div>
                                        </div>
                                    </div>
                                    <!-- cctv item -->
                                    
                                </div>

                            </div>
                            <div class="col-span-6">
                               
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
                                    <h1 class="text-white text-lg text-center">User Used</h1>
                                    <h1 class="text-white text-3xl text-center my-20">0/0</h1>
                                </div>
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
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
  
    export default {
        components: {
            TopMenu,
            FooterPage,
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