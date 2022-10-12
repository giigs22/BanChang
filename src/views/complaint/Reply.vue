<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <!-- <loading v-model:active="isLoading" color="#202A5A" loader="dots" :is-full-page="false" :opacity="0.1" class="rounded-lg"/> -->                       
                        <!--  Block List Complaint -->
                        <div class="lg:mx-20 my-5 flex flex-col gap-3">
                            <div class="block-comp">
                                <div class="grid grid-cols-12 gap-4">
                                    <div class="col-span-12 lg:col-span-9">
                                        <div class="flex flex-col items-center justify-between lg:flex-row">
                                            <div>
                                                <h1 class="font-bold my-2 lg:text-lg text-left max-w-xl">Send Picture</h1>
                                            </div>
                                            <div class="rounded-md bg-green-600 text-white px-3 py-1 lg:ml-10 lg:w-32">Disturbance
                                            </div>
                                           
                                        </div>
                                        <p class="text-left my-2">{{comp_data.detail}}</p>
                                       

                                    </div>
                                    <div class="col-span-3">
                                        <div class="flex lg:justify-end gap-2 my-3">
                                            <button
                                                class="btn-blue-gradient px-3 py-2 rounded-md text-white font-bold">Received</button>
                                            <button class="bg-red-600 px-3 py-2 rounded-md font-bold">Delete</button>
                                        </div>

                                    </div>
                                </div>
                                <div class="lg:ml-52 my-5 text-sm flex flex-col text-left lg:flex-row gap-2 lg:gap-5">
                                    <div><span class="font-bold">By</span> {{comp_data.name_complaint}}</div>
                                            <div><span class="font-bold">Location</span> {{comp_data.location}}</div>
                                            <div><span class="font-bold">Date/Time</span> {{comp_data.date_complaint}}</div>
                                            <div><span class="font-bold">Responsible Agency</span> {{comp_data.respon_agen}}</div>
                                </div>
                                <div class="bg-white-op6 py-3 px-4 rounded-md mb-5">
                                    <h1 class="font-bold text-lg text-left mb-10">Reply</h1>
                                    <div class="grid grid-cols-12 mx-20">
                                        <div class="col-span-3">
                                            <img src="@/assets/ex_reply_img.png" alt="">
                                        </div>
                                        <div class="col-span-3">
                                            <img src="@/assets/ex_reply_img.png" alt="">
                                        </div>
                                        <div class="col-span-3">
                                            <img src="@/assets/ex_reply_img.png" alt="">
                                        </div>
                                        <div class="col-span-3">
                                            <img src="@/assets/ex_reply_img.png" alt="">
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="block-comp">
                                <button class="bg-cyan-400 px-3 py-2 rounded-md text-black font-bold w-32">>Reply</button>
                                <textarea rows="5" class="my-3 bg-gray-400 text-white rounded-xl">Type Someting...</textarea>
                                <div class="flex justify-end gap-2 my-2">
                                    <button class="bg-cyan-400 px-3 py-2 rounded-md text-black font-bold w-32">Submit</button>
                                    <button class="bg-red-600 px-3 py-2 rounded-md font-bold w-32">Reset</button>
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
                comp_data:null
            }
        },
        async created() {
           this.getComp()
        },
        methods:{
            getComp(){
                var data = this.$route.params.id
                return this.$store.dispatch('complaint/getcompID',data).then((res)=>{
                    var data = res.data
                    this.comp_data = data
                })
            }
        }
    }
</script>