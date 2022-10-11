<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">SOS</h1>
                        <div class="searchbox mt-5 mb-5">
                        <h3 class="text-lg text-white">Search</h3>
                        <div class="grid grid-cols-12 form-search">
                                <div class="lg:col-span-6 col-span-12">
                                    <div class="grid grid-cols-4 gap-3">
                                        <div class="lg:col-span-3 col-span-4">
                                            <div class="grid grid-cols-4 gap-2">
                                            <div class="col-span-4 lg:col-span-2 flex lg:justify-end">
                                                <select name="" id="" class="h-12 rounded text-sm w-full lg:w-auto">
                                                    <option value="">Condition Type</option>
                                                </select>
                                            </div>
                                            <div class="col-span-4 lg:col-span-2">
                                                <input type="text" placeholder="ID.Name" class="form-input lg:ml-5 w-full lg:w-auto">
                                            </div>
                                           
                                          
                                            </div>
                                        </div>
                                       <div class="col-span-4 lg:col-span-1">
                                        <button class="btn-purple rounded w-full lg:w-auto">Search</button>
                                       </div>
                                    </div>
                                </div>
                            </div>
</div>
                        <div class="grid grid-cols-12 gap-4 mb-5">
                            <div class="col-span-12 lg:col-span-3">
                                <div class="block-layer data-layer py-2 px-3 mt-4">
                                    <table class="text-white w-full">
                                        <thead>
                                            <tr>
                                                <th
                                                    class="font-normal text-lg text-center border-r border-gray-700 w-1/2">
                                                    Location</th>
                                                <th class="font-normal text-lg text-center">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-sm">
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <MapView :datamap="group_map_data"/>
                            </div>
                            <div class="col-span-12 lg:col-span-3">
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
                                                <h1 class="text-4xl">NG</h1>
                                                <h1 class="text-7xl">0</h1>
                                                <h1 class="text-sm mt-2">0% Abnormal</h1>
                                            </div>
                                        </div>
                                        <div class="col-span-1">
                                            <div class="bg-red-600 text-white flex flex-col items-center rounded-lg">
                                                <h1 class="text-4xl">OFF</h1>
                                                <h1 class="text-7xl">0</h1>
                                                <h1 class="text-sm mt-2">0% Offline</h1>
                                            </div>
                                        </div>
                                    </div>
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
    import MapView from '../../components/MapView.vue'

    export default {
        components: {
            TopMenu,
            FooterPage,
            MapView
        },
        data() {
            return {
                group_map_data:[]
            }
        },
    }
</script>