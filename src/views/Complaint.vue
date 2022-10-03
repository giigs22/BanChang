<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">Complaint</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg text-white">Search</h3>
                            <div class="grid grid-cols-12 form-search">
                                <div class="col-span-3 gap-3 flex flex-col items-start">
                                    <div class="pl-12">
                                        <select name="" id="" class="h-12 rounded text-sm">
                                            <option value="">Condition Type</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="" class="text-white">From</label>
                                        <input type="text" placeholder="DD/MM/YYYY" class="form-input ml-3">
                                    </div>
                                </div>
                                <div class="col-span-3 gap-3 flex flex-col items-start">
                                    <div class="pl-7">
                                        <input type="text" placeholder="ID,Name" class="form-input">
                                    </div>
                                    <div>
                                        <label for="" class="text-white">To</label>
                                        <input type="text" placeholder="DD/MM/YYYY" class="form-input ml-3">
                                    </div>
                                </div>
                                <div class="col-span-3 gap-3 flex flex-col items-start">
                                    <div>
                                        <label for="" class="text-white">Order by</label>
                                        <select name="" id="" class="h-12 rounded text-sm ml-4">
                                            <option value="">Order by</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="" class="text-white">Agency</label>
                                        <input type="text" placeholder="Unit name" class="form-input ml-5">
                                    </div>

                                </div>
                                <div class="col-span-3 gap-3 flex item">
                                    <div class="ml-5">
                                        <button class="h-12 btn-purple rounded">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mx-20 my-10 bg-white-op6 p-7 rounded-lg">
                            <div class="flex justify-between">
                                <h1 class="text-xl font-bold text-white uppercase">Complaint summary</h1>
                                <button class="btn-purple rounded">Export CSV</button>
                            </div>
                            <div class="relative pt-1">
                                <div class="overflow-hidden h-10 my-4 text-xs flex rounded-2xl">
                                    <div style="width: 20%"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500">
                                    </div>
                                    <div style="width: 50%"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500">
                                    </div>
                                    <div style="width: 20%"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">
                                    </div>
                                    <div style="width: 10%"
                                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500">
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-12">
                                <div class="col-span-4">
                                    <div class="flex text-white items-center gap-5 text-xl mb-3">
                                        <div class="w-4 h-4 rounded-full bg-red-500"></div> Electricity <span
                                            class="ml-3">45</span>
                                    </div>
                                    <div class="flex text-white items-center gap-5 text-xl">
                                        <div class="w-4 h-4 rounded-full bg-blue-500"></div> Water <span
                                            class="ml-3">44</span>
                                    </div>
                                </div>
                                <div class="col-span-4">
                                    <div class="flex text-white items-center gap-5 text-xl mb-3">
                                        <div class="w-4 h-4 rounded-full bg-yellow-500"></div> Etc <span
                                            class="ml-3">1</span>

                                    </div>
                                    <div class="flex text-white items-center gap-5 text-xl">
                                        <div class="w-4 h-4 rounded-full bg-green-500"></div> Disturbance <span
                                            class="ml-3">10</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--  Block List Complaint -->
                        <div class="mx-20 my-5 flex flex-col gap-3">
                            <!-- Item -->
                            <div class="block-comp">
                                <div class="grid grid-cols-12">
                                    <div class="col-span-2">
                                        <img src="@/assets/img_ex_complaint.png" />
                                    </div>
                                    <div class="col-span-7">
                                        <div class="flex">
                                            <h1 class="font-bold text-lg">Lorem ipsum dolor sit amet consectetur</h1>
                                            <div class="rounded-md bg-green-600 text-white px-3 py-1 ml-10 w-32">Disturbance
                                            </div>
                                        </div>
                                        <p class="text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, sunt
                                            veritatis aut esse quasi et fuga? Laudantium provident aliquam odio
                                            repellat laboriosam reiciendis omnis, molestiae minus et, doloremque
                                            ipsum earum.</p>
                                        <div class="mt-5 text-sm flex gap-5">
                                            <div>By xyz</div>
                                            <div>Location BanChang</div>
                                            <div>Date/Time DD/MM/YYYY HH:MM:SS</div>
                                            <div>Responsible Agency ABC Unit</div>
                                        </div>

                                    </div>
                                    <div class="col-span-3">
                                        <div class="flex gap-2">
                                            <button
                                                class="bg-blue-900 px-3 py-2 rounded-md text-red-400">Pending</button>
                                            <button class=" bg-cyan-400 px-3 py-2 rounded-md">Reply</button>
                                            <button class="bg-red-600 px-3 py-2 rounded-md">Delete</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- Item -->
                             <!-- Item -->
                            <div class="block-comp">
                                <div class="grid grid-cols-12">
                                    <div class="col-span-2">
                                        <img src="@/assets/img_ex_complaint.png" />
                                    </div>
                                    <div class="col-span-7">
                                        <div class="flex">
                                            <h1 class="font-bold text-lg">Lorem ipsum dolor sit amet consectetur</h1>
                                            <div class="rounded-md bg-red-600 text-white px-3 py-1 ml-10 w-32">Electricity
                                            </div>
                                        </div>
                                        <p class="text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, sunt
                                            veritatis aut esse quasi et fuga? Laudantium provident aliquam odio
                                            repellat laboriosam reiciendis omnis, molestiae minus et, doloremque
                                            ipsum earum.</p>
                                        <div class="mt-5 text-sm flex gap-5">
                                            <div>By xyz</div>
                                            <div>Location BanChang</div>
                                            <div>Date/Time DD/MM/YYYY HH:MM:SS</div>
                                            <div>Responsible Agency ABC Unit</div>
                                        </div>

                                    </div>
                                    <div class="col-span-3">
                                        <div class="flex gap-2">
                                            <button
                                                class="bg-blue-900 px-3 py-2 rounded-md text-red-400">Pending</button>
                                            <button class=" bg-cyan-400 px-3 py-2 rounded-md">Reply</button>
                                            <button class="bg-red-600 px-3 py-2 rounded-md">Delete</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- Item -->
                             <!-- Item -->
                            <div class="block-comp">
                                <div class="grid grid-cols-12">
                                    <div class="col-span-2">
                                        <img src="@/assets/img_ex_complaint.png" />
                                    </div>
                                    <div class="col-span-7">
                                        <div class="flex">
                                            <h1 class="font-bold text-lg">Lorem ipsum dolor sit amet consectetur</h1>
                                            <div class="rounded-md bg-cyan-600 text-white px-3 py-1 ml-10 w-32">Water
                                            </div>
                                        </div>
                                        <p class="text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, sunt
                                            veritatis aut esse quasi et fuga? Laudantium provident aliquam odio
                                            repellat laboriosam reiciendis omnis, molestiae minus et, doloremque
                                            ipsum earum.</p>
                                        <div class="mt-5 text-sm flex gap-5">
                                            <div>By xyz</div>
                                            <div>Location BanChang</div>
                                            <div>Date/Time DD/MM/YYYY HH:MM:SS</div>
                                            <div>Responsible Agency ABC Unit</div>
                                        </div>

                                    </div>
                                    <div class="col-span-3">
                                        <div class="flex gap-2">
                                            <button
                                                class="bg-blue-900 px-3 py-2 rounded-md text-red-400">Pending</button>
                                            <button class=" bg-cyan-400 px-3 py-2 rounded-md">Reply</button>
                                            <button class="bg-red-600 px-3 py-2 rounded-md">Delete</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- Item -->
                             <!-- Item -->
                            <div class="block-comp">
                                <div class="grid grid-cols-12">
                                    <div class="col-span-2">
                                        <img src="@/assets/img_ex_complaint.png" />
                                    </div>
                                    <div class="col-span-7">
                                        <div class="flex">
                                            <h1 class="font-bold text-lg">Lorem ipsum dolor sit amet consectetur</h1>
                                            <div class="rounded-md bg-yellow-400 text-black px-3 py-1 ml-10 w-32">Etc
                                            </div>
                                        </div>
                                        <p class="text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, sunt
                                            veritatis aut esse quasi et fuga? Laudantium provident aliquam odio
                                            repellat laboriosam reiciendis omnis, molestiae minus et, doloremque
                                            ipsum earum.</p>
                                        <div class="mt-5 text-sm flex gap-5">
                                            <div>By xyz</div>
                                            <div>Location BanChang</div>
                                            <div>Date/Time DD/MM/YYYY HH:MM:SS</div>
                                            <div>Responsible Agency ABC Unit</div>
                                        </div>

                                    </div>
                                    <div class="col-span-3">
                                        <div class="flex gap-2">
                                            <button
                                                class="bg-blue-900 px-3 py-2 rounded-md text-red-400">Pending</button>
                                            <button class=" bg-cyan-400 px-3 py-2 rounded-md">Reply</button>
                                            <button class="bg-red-600 px-3 py-2 rounded-md">Delete</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- Item -->

                            <div class="my-5 paginate flex justify-center">
                                <button class="btn-prev"
                                    
                                    > {{'<<'}} </button>
                                <button class="btn-prev" 
                                   
                                    > {{'<'}}
                                </button>
                                <button class="btn-page"
                                   
                                    > 1
                                </button>
                                <button class="btn-next"
                                   
                                    > {{'>'}}
                                </button>
                                <button class="btn-next"
                                    > {{'>>'}} </button>
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
    import TopMenu from './layout/TopMenu.vue'
    import FooterPage from './layout/FooterPage.vue'


    export default {
        components: {
            TopMenu,
            FooterPage
        },
        data() {
            return {

            }
        },
    }
</script>