<template>
    <nav class="px-5 py-2 lg:h-32 bg-nav-light dark:bg-nav-dark">
        <div class="container flex flex-wrap mx-auto relative">
            <div class="flex items-center gap-1">
                <div class="">
                    <a href="#" class="">
                        <img src="@/assets/logo.png" class="w-20 lg:w-32" alt="BanChang Logo">
                    </a>
                </div>
                <div class="hidden w-full md:block md:w-auto">
                    <ul class="flex flex-col mt-4 mb-10 md:flex-row md:space-x-8 md:mt-0 md:text-md content-end">
                        <MenuDefault></MenuDefault>
                        <template v-if="user.user_group =='staff' || user.user_group == 'administrator'">
                            <menu-admin></menu-admin>
                        </template>
                       <template v-if="user.user_group == 'administrator'">
                            <user-manage></user-manage>
                            <widget-manage></widget-manage>
                            <api-manage></api-manage>
                       </template>
                    </ul>
                </div>
            </div>
            <div class="hidden ml-auto md:flex items-baseline text-sm gap-3">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-slate-300" width="28" height="27.999" viewBox="0 0 28 27.999">
                        <g id="Group_1717" data-name="Group 1717" transform="translate(-1670 22775)" opacity="0.5">
                            <path id="Path_1854" data-name="Path 1854"
                                d="M15.066,151.622a1.193,1.193,0,0,1,1.193,1.193v7.159h7.159a1.193,1.193,0,1,1,0,2.386H15.066a1.193,1.193,0,0,1-1.193-1.193v-8.352a1.193,1.193,0,0,1,1.193-1.193Z"
                                transform="translate(1656.127 -22909.361)" fill="" fill-rule="evenodd" />
                            <path id="Path_1855" data-name="Path 1855"
                                d="M23.841,32.327a1,1,0,0,1,0,1.41L15.574,42a1,1,0,1,1-1.41-1.412l8.267-8.267A1,1,0,0,1,23.841,32.327ZM41.493,14.674a1,1,0,0,1,0,1.412l-8.266,8.266a1,1,0,0,1-1.412-1.41l8.268-8.268a1,1,0,0,1,1.41,0Z"
                                transform="translate(1656.128 -22789.381)" fill="" fill-rule="evenodd" />
                            <path id="Path_1856" data-name="Path 1856"
                                d="M151.1,15.388a1.108,1.108,0,0,1,1.193-1h8.352a1.108,1.108,0,0,1,1.193,1v6.978a1.212,1.212,0,0,1-2.386,0V16.385H152.3A1.108,1.108,0,0,1,151.1,15.388Zm9.545,17.944a1.108,1.108,0,0,0-1.193,1V40.31H152.3a1.013,1.013,0,1,0,0,1.994h8.352a1.108,1.108,0,0,0,1.193-1V34.328A1.108,1.108,0,0,0,160.649,33.332Z"
                                transform="translate(1536.156 -22789.389)" fill="" fill-rule="evenodd" />
                            <path id="Path_1857" data-name="Path 1857"
                                d="M32.759,32.251a1,1,0,0,0,0,1.411l8.263,8.263a1,1,0,1,0,1.411-1.409l-8.264-8.264A1,1,0,0,0,32.759,32.251ZM15.186,14.679a1,1,0,0,0,0,1.411l8.263,8.262a1,1,0,0,0,1.411-1.409l-8.264-8.263A1,1,0,0,0,15.186,14.679Z"
                                transform="translate(1655.276 -22789.385)" fill="" fill-rule="evenodd" />
                            <path id="Path_1858" data-name="Path 1858"
                                d="M25.129,15.584a1.193,1.193,0,0,0-1.193-1.193H15.584a1.193,1.193,0,0,0-1.193,1.193v8.352a1.193,1.193,0,0,0,2.386,0V16.777h7.159A1.193,1.193,0,0,0,25.129,15.584Z"
                                transform="translate(1655.695 -22789.389)" fill="" fill-rule="evenodd" />
                        </g>
                    </svg>
                </div>
                <div class="flex flex-col">
                    <div class="flex items-center">
                        <div>
                            <svg id="Notification_icon" data-name="Notification icon" xmlns="http://www.w3.org/2000/svg"
                                width="31" height="31" viewBox="0 0 31 31">
                                <path id="Notification_icon-2" data-name="Notification icon"
                                    d="M11.108,25.858H19.5C19.5,28.7,17.622,31,15.3,31S11.108,28.7,11.108,25.858Zm0,0Zm4.282-.18H0S7.566,20.725,7.684,7.732l-.006-.051A7.918,7.918,0,0,1,15.39.011V0c.036,0,.074,0,.11.006S15.572,0,15.607,0V.011a7.93,7.93,0,0,1,7.714,7.67l-.008.051C23.434,20.725,31,25.678,31,25.678Z"
                                    fill="#e9e7ff" />
                            </svg>
                        </div>
                        <div class="flex items-center mb-2">
                            <div class="relative w-12 mx-2">
                                <img src="@/assets/icon_user_profile.png" alt="" v-if="img_profile === null">
                                <img :src="img_profile" alt="" class="object-cover w-12 h-12 rounded-full" v-else>
                                <div
                                    class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2">
                                </div>
                            </div>

                            <div class="flex flex-col text-white">
                                <div class="">
                                    {{user.name}}
                                </div>
                                <div class="flex gap-2">
                                    <a :href="'/user/edit/'+user.id" class="text-yellow-400">{{$t('edit_profile')}}</a>
                                    | <span @click="Logout"
                                        class="text-yellow-400 cursor-pointer">{{$t('logout')}}</span>
                                </div>
                            </div>
                        </div>
                        <div></div>


                    </div>
                    <div class="text-white flex justify-between gap-2">
                        <div>
                            <LanguageSwitcher></LanguageSwitcher>
                        </div>
                        <div>
                            Theme: <ThemeSwitcher></ThemeSwitcher>

                        </div>
                    </div>
                </div>
            </div>

            <div class="ml-auto lg:ml-0">
                <button @click="togglemobileMenu" type="button"
                    class="flex items-center p-2 ml-3 text-sm text-gray-300 rounded-lg md:hidden focus:outline-none">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>
    <!-- Add This START -->
    <nav id="mobile-navigation" class="fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm z-10"
        :class="openMenu ? 'visible' : 'invisible' ">

        <!-- UL Links -->
        <ul
            class="absolute top-0 right-0 bottom-0 w-11/12 py-4 bg-nav-dark text-white drop-shadow-2xl z-10 transition-all">
            <m-default></m-default>
            <template v-if="user.user_group =='staff' || user.user_group == 'administrator'">
                <m-admin></m-admin>
            </template>
            <template v-if="user.user_group == 'administrator'">
                <m-user-manage></m-user-manage>
                <m-widget-manage></m-widget-manage>
                <m-api-manage></m-api-manage>
            </template>
          
            <li class="my-3 mx-5">
                <LanguageSwitcher/>
            </li>
            <li class="my-3 mx-5">
                <ThemeSwitcher/>
            </li>
               <li class="">
                <div class="flex items-center mb-2">
                            <div class="relative w-12 mx-2">
                                <img src="@/assets/icon_user_profile.png" alt="" v-if="img_profile === null">
                                <img :src="img_profile" alt="" class="object-cover w-12 h-12 rounded-full" v-else>
                                <div
                                    class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2">
                                </div>
                            </div>

                            <div class="flex flex-col text-white">
                                <div>
                                    {{user.name}}
                                </div>
                                <div class="flex gap-2">
                                    <a :href="'/user/edit/'+user.id" class="text-yellow-400">{{$t('edit_profile')}}</a>
                                    | <span @click="Logout"
                                        class="text-yellow-400 cursor-pointer">{{$t('logout')}}</span>
                                </div>
                            </div>
                        </div>
            </li>

        </ul>

        <!-- Close Button -->
        <button class="absolute top-0 right-0 bottom-0 left-0" @click="togglemobileMenu">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white absolute top-2 left-2" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
       
    </nav>
    <!-- Add This END -->
</template>
<script>
    import LanguageSwitcher from '../../components/utility/LanguageSwitcher.vue';
    import ThemeSwitcher from '../../components/utility/ThemeSwitcher.vue';
    import MenuDefault from '../menu/default.vue'
    import MenuAdmin from '../menu/admin/admin_menu.vue'
    import UserManage from '../menu/admin/user_manage.vue';
    import WidgetManage from '../menu/admin/widget_manage.vue';
    import ApiManage from '../menu/admin/api_manage.vue';
    import MDefault from '../menu/m_default.vue'
    import MAdmin from '../menu/admin/m_admin_menu.vue'
    import MUserManage from '../menu/admin/user_manage.vue';
    import MWidgetManage from '../menu/admin/widget_manage.vue';
    import MApiManage from '../menu/admin/api_manage.vue';

    export default {
        components: {
            LanguageSwitcher,
            ThemeSwitcher,
            MenuDefault,
            MenuAdmin,
            UserManage,
            WidgetManage,
            ApiManage,
            MDefault,
            MAdmin,
            MUserManage,
            MWidgetManage,
            MApiManage
        },
        data() {
            return {
                user: {
                    id: null,
                    name: null,
                    user_group:null
                },
                img_profile: null,
                openMenu: false
            }
        },
        computed:{
            userData(){
                return localStorage.getItem('user_data')
            }
        },
        mounted(){
            setTimeout(() => {
                this.setUser()
            }, 2000);
        },  
        watch: {
            '$store.state.user.user_data': {
                deep: true,
                handler(n) {
                    if(n != null){
                    this.user = n.data
                    this.img_profile = n.img_profile
                    }else{
                     var local_data = JSON.parse(localStorage.getItem('user_data'))
                     this.user = local_data.data
                     this.img_profile = local_data.img_profile
                    }
                }
            }
        },
        methods: {
            setUser(){
                var user_local = JSON.parse(this.userData)

                this.user.id = user_local.data.id
                this.user.name = user_local.data.name
                this.user.user_group = user_local.data.user_group
            },
            Logout() {
                this.$store.dispatch('auth/logout')
                this.$router.push('/login')
            },
            togglemobileMenu() {
                this.openMenu = !this.openMenu
            }
        }
    }
</script>