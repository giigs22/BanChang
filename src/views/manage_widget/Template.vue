<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">Manage Dashboard Template</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg text-white">All Dashboard</h3>
                            <div class="flex justify-between form-search">
                                <div class="col-span-2 my-5">
                                <a class="btn-purple rounded btn-blue-gradient" href="/view/create_dashboard">Create Dashbord</a>
                                </div>
                                <div class="col-span-2">
                                    <input type="text" placeholder="ID,Name" class="form-input">
                                    <button class="btn-purple rounded ml-3 h-12">Search</button>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10 mb-5">
                           <table class="table  border-collapse text-white w-full bg-black-op8 rounded">
                            <thead class="text-xl">
                                <tr class="border-b border-gray-600">
                                    <th class="p-5 border-r border-gray-600">ID</th>
                                    <th class="p-5 border-r border-gray-600">Template Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-600">
                                    <td class="text-center border-r border-gray-600 p-3">1</td>
                                    <td class="text-center border-r border-gray-600 p-3">Template 1</td>
                                    <td class="text-center"><span class="text-cyan-300">Edit</span> | <span class="text-red-500">Delete</span></td>
                                </tr>
                                
                            </tbody>
                           </table>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <FooterPage class="2xl:fixed inset-x-0 bottom-0"/>
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
               
            }
        },
        async created() {
         
        },
        methods: {
          
        }
    }
</script>