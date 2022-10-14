<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <loading v-model:active="isLoading" color="#202A5A" loader="dots" :is-full-page="false"
                            :opacity="0.1" class="rounded-lg" />

                        <h1 class="text-xl text-white ml-10">Smart Pole</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg text-white">Search</h3>
                            <div class="grid grid-cols-12 form-search">
                                <div class="lg:col-span-6 col-span-12">
                                    <div class="grid grid-cols-4 gap-3">
                                        <div class="lg:col-span-3 col-span-4">
                                            <div class="grid grid-cols-4 gap-2">
                                                <div class="col-span-4 lg:col-span-2 flex lg:justify-end">
                                                    <select name="" id="" class="h-12 rounded text-sm w-full">
                                                        <option value="">Condition Type</option>
                                                    </select>
                                                </div>
                                                <div class="col-span-4 lg:col-span-2">
                                                    <input type="text" placeholder="ID.Name" class="form-input w-full">
                                                </div>
                                                <div class="col-span-4 lg:col-span-2 lg:flex items-end lg:justify-end">
                                                    <label for="" class="text-white mr-1 block">From</label>
                                                    <input type="text" placeholder="DD/MM/YYYY"
                                                        class="form-input w-full">
                                                </div>
                                                <div class="col-span-4 lg:col-span-2 lg:flex items-end">
                                                    <label for="" class="text-white mr-1 block">To</label>
                                                    <input type="text" placeholder="DD/MM/YYYY"
                                                        class="form-input w-full">
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

                        <div>
                            <table class="table-auto w-full result-table">
                                <thead class="text-white font-bold bg-head-table text-lg">
                                    <tr>
                                        <td>Date-Time</td>
                                        <td class="text-center">No</td>
                                        <td class="text-center">Location</td>
                                        <td class="text-center">Status</td>
                                        <td class="text-center">Usage</td>
                                    </tr>
                                </thead>
                                <tbody class="bg-white-op6">
                                    <tr class="text-green-500">
                                        <td class="p-3 border border-gray-600"><p>Saturday</p>
                                            <p>12 October 2021</p>
                                            <p>01:00AM</p>
                                            </td>
                                        <td class="border border-gray-600 text-center">001</td>
                                        <td class="border border-gray-600 text-center">13.556248,<br>
                                            100.754866</td>
                                        <td class="border border-gray-600 text-center">ON</td>
                                        <td class="border border-gray-600 text-center">140 kWh</td>
                                    </tr>
                                    <tr class="text-red-500">
                                        <td class="p-3 border border-gray-600"><p>Saturday</p>
                                            <p>12 October 2021</p>
                                            <p>01:00AM</p>
                                            </td>
                                        <td class="border border-gray-600 text-center">001</td>
                                        <td class="border border-gray-600 text-center">13.556248,<br>
                                            100.754866</td>
                                        <td class="border border-gray-600 text-center">OFF</td>
                                        <td class="border border-gray-600 text-center">140 kWh</td>
                                    </tr>
                                    <tr class="text-orange-500">
                                        <td class="p-3 border border-gray-600"><p>Saturday</p>
                                            <p>12 October 2021</p>
                                            <p>01:00AM</p>
                                            </td>
                                        <td class="border border-gray-600 text-center">001</td>
                                        <td class="border border-gray-600 text-center">13.556248,<br>
                                            100.754866</td>
                                        <td class="border border-gray-600 text-center">NG</td>
                                        <td class="border border-gray-600 text-center">140 kWh</td>
                                    </tr>
                                    <tr class="text-green-500">
                                        <td class="p-3 border border-gray-600"><p>Saturday</p>
                                            <p>12 October 2021</p>
                                            <p>01:00AM</p>
                                            </td>
                                        <td class="border border-gray-600 text-center">001</td>
                                        <td class="border border-gray-600 text-center">13.556248,<br>
                                            100.754866</td>
                                        <td class="border border-gray-600 text-center">ON</td>
                                        <td class="border border-gray-600 text-center">140 kWh</td>
                                    </tr>
                                    <tr class="text-green-500">
                                        <td class="p-3 border border-gray-600"><p>Saturday</p>
                                            <p>12 October 2021</p>
                                            <p>01:00AM</p>
                                            </td>
                                        <td class="border border-gray-600 text-center">001</td>
                                        <td class="border border-gray-600 text-center">13.556248,<br>
                                            100.754866</td>
                                        <td class="border border-gray-600 text-center">ON</td>
                                        <td class="border border-gray-600 text-center">140 kWh</td>
                                    </tr>
                                    <tr class="text-green-500">
                                        <td class="p-3 border border-gray-600"><p>Saturday</p>
                                            <p>12 October 2021</p>
                                            <p>01:00AM</p>
                                            </td>
                                        <td class="border border-gray-600 text-center">001</td>
                                        <td class="border border-gray-600 text-center">13.556248,<br>
                                            100.754866</td>
                                        <td class="border border-gray-600 text-center">ON</td>
                                        <td class="border border-gray-600 text-center">140 kWh</td>
                                    </tr>
                                    <tr class="text-green-500">
                                        <td class="p-3 border border-gray-600"><p>Saturday</p>
                                            <p>12 October 2021</p>
                                            <p>01:00AM</p>
                                            </td>
                                        <td class="border border-gray-600 text-center">001</td>
                                        <td class="border border-gray-600 text-center">13.556248,<br>
                                            100.754866</td>
                                        <td class="border border-gray-600 text-center">ON</td>
                                        <td class="border border-gray-600 text-center">140 kWh</td>
                                    </tr>
                                    <tr class="text-green-500">
                                        <td class="p-3 border border-gray-600"><p>Saturday</p>
                                            <p>12 October 2021</p>
                                            <p>01:00AM</p>
                                            </td>
                                        <td class="border border-gray-600 text-center">001</td>
                                        <td class="border border-gray-600 text-center">13.556248,<br>
                                            100.754866</td>
                                        <td class="border border-gray-600 text-center">ON</td>
                                        <td class="border border-gray-600 text-center">140 kWh</td>
                                    </tr>
                                    <tr class="text-green-500">
                                        <td class="p-3 border border-gray-600"><p>Saturday</p>
                                            <p>12 October 2021</p>
                                            <p>01:00AM</p>
                                            </td>
                                        <td class="border border-gray-600 text-center">001</td>
                                        <td class="border border-gray-600 text-center">13.556248,<br>
                                            100.754866</td>
                                        <td class="border border-gray-600 text-center">ON</td>
                                        <td class="border border-gray-600 text-center">140 kWh</td>
                                    </tr>
                                    <tr class="text-green-500">
                                        <td class="p-3 border border-gray-600"><p>Saturday</p>
                                            <p>12 October 2021</p>
                                            <p>01:00AM</p>
                                            </td>
                                        <td class="border border-gray-600 text-center">001</td>
                                        <td class="border border-gray-600 text-center">13.556248,<br>
                                            100.754866</td>
                                        <td class="border border-gray-600 text-center">ON</td>
                                        <td class="border border-gray-600 text-center">140 kWh</td>
                                    </tr>
                                  
                                </tbody>
                            </table>
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
        computed: {

        },
        async created() {

        },
        methods: {



        }
    }
</script>