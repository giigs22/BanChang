<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">Manage Widgets</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg text-white">All Widgets</h3>
                            <div class="grid grid-cols-12">
                                <div class="col-span-2 flex flex-col items-end gap-5">
                                    <div>
                                        <label for="" class="text-white m-3">Template</label>
                                        <select name="" id="" class="rounded text-sm">
                                            <option value="">Name</option>
                                        </select>
                                    </div>
                                    
                                </div>
                                <div class="col-span-2">
                                    <div class="ml-2">
                                        <a class="btn-purple rounded btn-blue-gradient" href="/view/create_dashboard">Create Dashboard</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-20 mb-5">
                           <table class="table  border-collapse text-white w-full bg-black-op8 rounded">
                            <thead class="text-xl">
                                <tr class="border-b border-gray-600">
                                    <th class="p-5 border-r border-gray-600">Template Name</th>
                                    <th class="border-r border-gray-600">Username</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-600">
                                    <td class="text-center border-r border-gray-600 p-3">Template 1</td>
                                    <td class="text-center border-r border-gray-600">Somechai</td>
                                    <td class="text-center"><span class="text-cyan-300">Edit</span> | <span class="text-red-500">Delete</span></td>
                                </tr>
                                 <tr class="border-b border-gray-600">
                                    <td class="text-center border-r border-gray-600 p-3">Template 1</td>
                                    <td class="text-center border-r border-gray-600">Somechai</td>
                                    <td class="text-center"><span class="text-cyan-300">Edit</span> | <span class="text-red-500">Delete</span></td>
                                </tr>
                                 <tr class="border-b border-gray-600">
                                    <td class="text-center border-r border-gray-600 p-3">Template 1</td>
                                    <td class="text-center border-r border-gray-600">Somechai</td>
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