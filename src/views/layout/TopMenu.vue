<template>
    <nav class="px-5 py-2 bg-nav-dark h-32">
        <div class="container flex flex-wrap mx-auto relative">
            <div class="flex items-center gap-1">
                <div class="">
                    <a href="#" class="">
                        <img src="@/assets/logo.png" class="" alt="BanChang Logo">
                    </a>
                </div>
                <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul class="flex flex-col mt-4 mb-10 md:flex-row md:space-x-8 md:mt-0 md:text-md content-end">
                        <li>
                            <a href="/" class="nav-menu" aria-current="page"><svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-5 h-5" viewBox="0 0 24.86 22">
                                    <path id="Path_1850" data-name="Path 1850"
                                        d="M115.895,172.555l-12.43,12.43h2.768v9.57h5.975v-6.626h7.374v6.626h5.67v-9.57h3.073Z"
                                        transform="translate(-103.465 -172.555)" fill="#fff" />
                                </svg>
                                Dashboard</a>
                        </li>
                        <li>
                            <a href="#" class="peer nav-menu">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 23.667 22.738">
                                    <path id="Path_1860" data-name="Path 1860"
                                        d="M118.044,312.349l1.848,3.742a2.333,2.333,0,0,0,1.759,1.277l4.128.6a2.336,2.336,0,0,1,1.3,3.985l-2.986,2.913a2.334,2.334,0,0,0-.672,2.069l.7,4.112a2.336,2.336,0,0,1-3.39,2.463l-3.692-1.942a2.335,2.335,0,0,0-2.174,0l-3.694,1.942a2.337,2.337,0,0,1-3.39-2.463l.706-4.112a2.34,2.34,0,0,0-.672-2.069l-2.988-2.913a2.336,2.336,0,0,1,1.3-3.985l4.128-.6a2.336,2.336,0,0,0,1.761-1.277l1.846-3.742A2.336,2.336,0,0,1,118.044,312.349Z"
                                        transform="translate(-104.116 -311.046)" fill="#fff" />
                                </svg>
                                Advance
                                Info</a>
                            <!-- the menu here -->
                            <div class="hidden peer-hover:flex hover:flex
         w-[150px]
         flex-col bg-blue-400 drop-shadow-lg absolute z-50">
                                <a class="px-5 py-2 text-white border-b border-dashed" href="#">Air Quality</a>
                                <a class="px-5 py-2 text-white border-b border-dashed" href="#">Lighting</a>
                                <a class="px-5 py-2 text-white border-b border-dashed" href="#">Smart Pole</a>
                                <a class="px-5 py-2 text-white border-b border-dashed" href="#">CCTV Camera</a>
                                <a class="px-5 py-2 text-white border-b border-dashed" href="#">Free Wifi</a>
                                <a class="px-5 py-2 text-white border-b border-dashed" href="#">Digital Signage</a>

                            </div>
                        </li>
                        <li>
                            <a href="#" class="nav-menu"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                    viewBox="0 0 26.5 26.5">
                                    <path id="universal-access"
                                        d="M20.319,9.716a.889.889,0,0,0-.422-.584.933.933,0,0,0-.717-.111,27.806,27.806,0,0,1-5.93.917A27.806,27.806,0,0,1,7.32,9.02a.933.933,0,0,0-.717.111.889.889,0,0,0-.422.584.933.933,0,0,0,.111.717.889.889,0,0,0,.584.422,39.574,39.574,0,0,0,4.481.858,37.6,37.6,0,0,1-.229,3.978,16.408,16.408,0,0,1-.392,2.3q-.193.658-.607,1.708L10,20.008a.883.883,0,0,0,.015.724.953.953,0,0,0,.532.5.846.846,0,0,0,.34.059.878.878,0,0,0,.887-.607l.119-.3a17.376,17.376,0,0,0,1.05-3.83h.621a17.43,17.43,0,0,0,1.05,3.83l.119.3a.878.878,0,0,0,.887.607.846.846,0,0,0,.34-.059.953.953,0,0,0,.532-.5.883.883,0,0,0,.015-.724l-.133-.311q-.414-1.05-.607-1.708a16.512,16.512,0,0,1-.392-2.3,37.6,37.6,0,0,1-.229-3.978,39.574,39.574,0,0,0,4.481-.858.889.889,0,0,0,.584-.422.933.933,0,0,0,.111-.717ZM15.143,7.572a1.893,1.893,0,0,0-3.232-1.339,1.894,1.894,0,0,0,0,2.677,1.893,1.893,0,0,0,3.231-1.338Zm8.518,5.678a10.226,10.226,0,0,1-.821,4.044,10.192,10.192,0,0,1-5.545,5.545,10.371,10.371,0,0,1-8.089,0,10.192,10.192,0,0,1-5.545-5.545,10.372,10.372,0,0,1,0-8.089A10.192,10.192,0,0,1,9.205,3.661a10.372,10.372,0,0,1,8.089,0,10.192,10.192,0,0,1,5.545,5.545A10.224,10.224,0,0,1,23.661,13.25ZM13.25,1.893a11.055,11.055,0,0,0-4.407.9A11.232,11.232,0,0,0,2.8,8.843a11.22,11.22,0,0,0,0,8.814,11.224,11.224,0,0,0,6.049,6.049,11.22,11.22,0,0,0,8.814,0,11.512,11.512,0,0,0,3.623-2.425,11.4,11.4,0,0,0,2.425-3.623,11.22,11.22,0,0,0,0-8.814,11.224,11.224,0,0,0-6.049-6.049,11.025,11.025,0,0,0-4.407-.9ZM26.5,13.25A12.956,12.956,0,0,1,25.45,18.4,13.017,13.017,0,0,1,18.4,25.45a13.139,13.139,0,0,1-10.292,0A13.017,13.017,0,0,1,1.05,18.4,13.139,13.139,0,0,1,1.05,8.1,13.017,13.017,0,0,1,8.1,1.05a13.139,13.139,0,0,1,10.292,0A13.017,13.017,0,0,1,25.45,8.1,12.956,12.956,0,0,1,26.5,13.25Z"
                                        fill="#fff" />
                                </svg>
                                SOS</a>
                        </li>
                        <li>
                            <a href="#" class="nav-menu"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                    viewBox="0 0 27.167 24.342">
                                    <path id="Path_1659" data-name="Path 1659"
                                        d="M107.761,278.276h20.4a3.386,3.386,0,0,1,3.386,3.386v11.979a3.386,3.386,0,0,1-3.386,3.386h-10.2v5.592l-7.516-5.592h-2.681a3.386,3.386,0,0,1-3.386-3.386V281.662A3.386,3.386,0,0,1,107.761,278.276Z"
                                        transform="translate(-104.375 -278.276)" fill="#fff" />
                                </svg>
                                Complaint</a>
                        </li>
                        <li>
                            <a href="#" class="nav-menu"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                    viewBox="0 0 25.854 27.378">
                                    <path id="Path_1853" data-name="Path 1853"
                                        d="M127.527,358.74a10.816,10.816,0,0,0-.272-2.389l1.611-.929a1.473,1.473,0,0,0,.538-2.012l-1.748-3.027a1.471,1.471,0,0,0-2.012-.54l-1.615.933a10.851,10.851,0,0,0-4.132-2.4v-1.85a1.474,1.474,0,0,0-1.474-1.474h-3.5a1.474,1.474,0,0,0-1.474,1.474v1.85a10.843,10.843,0,0,0-4.13,2.4l-1.617-.933a1.472,1.472,0,0,0-2.012.54l-1.748,3.027a1.471,1.471,0,0,0,.54,2.012l1.609.929a10.615,10.615,0,0,0,0,4.777l-1.609.929a1.474,1.474,0,0,0-.54,2.014l1.748,3.027a1.473,1.473,0,0,0,2.012.538l1.617-.931a10.844,10.844,0,0,0,4.13,2.4v1.85a1.474,1.474,0,0,0,1.474,1.472h3.5a1.474,1.474,0,0,0,1.474-1.472v-1.85a10.852,10.852,0,0,0,4.132-2.4l1.615.931a1.472,1.472,0,0,0,2.012-.538l1.748-3.027a1.475,1.475,0,0,0-.538-2.014l-1.611-.929A10.8,10.8,0,0,0,127.527,358.74Zm-9.913,5.874a5.948,5.948,0,1,1,4.935-4.935A5.951,5.951,0,0,1,117.615,364.614Z"
                                        transform="translate(-103.748 -345.051)" fill="#fff" />
                                </svg>
                                Maintenance</a>
                        </li>
                        <li>
                            <a href="#" class="peer nav-menu"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                    viewBox="0 0 28.756 23.008">
                                    <path id="Icon_awesome-user-cog" data-name="Icon awesome-user-cog"
                                        d="M27.434,16.775a5.271,5.271,0,0,0,0-1.914l1.159-.67a.325.325,0,0,0,.148-.382A6.744,6.744,0,0,0,27.25,11.23a.328.328,0,0,0-.4-.063l-1.159.67a5.276,5.276,0,0,0-1.658-.957V9.54a.327.327,0,0,0-.256-.319,6.78,6.78,0,0,0-2.975,0,.327.327,0,0,0-.256.319v1.339a5.276,5.276,0,0,0-1.658.957l-1.159-.67a.329.329,0,0,0-.4.063,6.744,6.744,0,0,0-1.492,2.579.331.331,0,0,0,.148.382l1.159.67a5.271,5.271,0,0,0,0,1.914l-1.159.67a.325.325,0,0,0-.148.382,6.777,6.777,0,0,0,1.492,2.579.328.328,0,0,0,.4.063l1.159-.67a5.276,5.276,0,0,0,1.658.957V22.1a.327.327,0,0,0,.256.319,6.78,6.78,0,0,0,2.975,0,.327.327,0,0,0,.256-.319V20.756a5.276,5.276,0,0,0,1.658-.957l1.159.67a.329.329,0,0,0,.4-.063,6.744,6.744,0,0,0,1.492-2.579.331.331,0,0,0-.148-.382l-1.159-.67ZM22.289,18a2.179,2.179,0,1,1,2.179-2.179A2.181,2.181,0,0,1,22.289,18ZM10.066,11.5A5.752,5.752,0,1,0,4.314,5.752,5.751,5.751,0,0,0,10.066,11.5Zm9.041,10.178c-.1-.054-.207-.117-.306-.175l-.355.207a1.763,1.763,0,0,1-2.179-.328,8.194,8.194,0,0,1-1.806-3.128,1.758,1.758,0,0,1,.8-2.054L15.62,16q-.007-.175,0-.351l-.355-.207a1.756,1.756,0,0,1-.8-2.054c.04-.13.1-.261.144-.391-.171-.013-.337-.054-.512-.054h-.75a7.822,7.822,0,0,1-6.552,0h-.75A6.041,6.041,0,0,0,0,18.981v1.869a2.158,2.158,0,0,0,2.157,2.157H17.975a2.154,2.154,0,0,0,1.222-.382,1.75,1.75,0,0,1-.09-.53Z"
                                        fill="#fff" />
                                </svg>
                                User Management</a>
                                <!-- the menu here -->
                            <div class="hidden peer-hover:flex hover:flex
         w-[150px]
         flex-col bg-blue-400 drop-shadow-lg absolute z-50">
                                <a class="px-5 py-2 text-white border-b border-dashed" href="user/register">Register</a>
                                <a class="px-5 py-2 text-white border-b border-dashed" href="#">User List</a>
                                <a class="px-5 py-2 text-white border-b border-dashed" href="#">Permission</a>
                            </div>
                        </li>
                        <li>
                            <a href="#" class="nav-menu"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                    viewBox="0 0 21 20.989">
                                    <path id="Icon_material-widgets" data-name="Icon material-widgets"
                                        d="M15.37,14.828v8.7h8.7v-8.7ZM4.5,23.524h8.7v-8.7H4.5Zm0-19.565v8.7h8.7v-8.7ZM19.348,2.535,13.2,8.676l6.152,6.152L25.5,8.676Z"
                                        transform="translate(-4.5 -2.535)" fill="#fff" />
                                </svg>
                                Manage Widgets</a>
                        </li>
                        <li>
                            <a href="#" class="nav-menu"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                    viewBox="0 0 25.32 20.256">
                                    <path id="Icon_awesome-network-wired" data-name="Icon awesome-network-wired"
                                        d="M25.32,10.444V9.811a.633.633,0,0,0-.633-.633H13.609V7.6h2.848A1.266,1.266,0,0,0,17.724,6.33V1.266A1.266,1.266,0,0,0,16.458,0h-7.6A1.266,1.266,0,0,0,7.6,1.266V6.33A1.266,1.266,0,0,0,8.862,7.6H11.71V9.178H.633A.633.633,0,0,0,0,9.811v.633a.633.633,0,0,0,.633.633H4.747V12.66H2.532a1.266,1.266,0,0,0-1.266,1.266V18.99a1.266,1.266,0,0,0,1.266,1.266h6.33a1.266,1.266,0,0,0,1.266-1.266V13.926A1.266,1.266,0,0,0,8.862,12.66H6.646V11.077H18.673V12.66H16.458a1.266,1.266,0,0,0-1.266,1.266V18.99a1.266,1.266,0,0,0,1.266,1.266h6.33a1.266,1.266,0,0,0,1.266-1.266V13.926a1.266,1.266,0,0,0-1.266-1.266H20.572V11.077h4.114A.633.633,0,0,0,25.32,10.444ZM10.128,5.064V2.532h5.064V5.064ZM7.6,17.724H3.8V15.192H7.6Zm13.926,0h-3.8V15.192h3.8Z"
                                        fill="#fff" />
                                </svg>
                                API</a>
                        </li>
                    </ul>
                </div>
            </div>


            <div class="ml-auto flex items-baseline text-sm gap-3">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27.999" viewBox="0 0 28 27.999">
                        <g id="Group_1717" data-name="Group 1717" transform="translate(-1670 22775)" opacity="0.5">
                            <path id="Path_1854" data-name="Path 1854"
                                d="M15.066,151.622a1.193,1.193,0,0,1,1.193,1.193v7.159h7.159a1.193,1.193,0,1,1,0,2.386H15.066a1.193,1.193,0,0,1-1.193-1.193v-8.352a1.193,1.193,0,0,1,1.193-1.193Z"
                                transform="translate(1656.127 -22909.361)" fill="#fff" fill-rule="evenodd" />
                            <path id="Path_1855" data-name="Path 1855"
                                d="M23.841,32.327a1,1,0,0,1,0,1.41L15.574,42a1,1,0,1,1-1.41-1.412l8.267-8.267A1,1,0,0,1,23.841,32.327ZM41.493,14.674a1,1,0,0,1,0,1.412l-8.266,8.266a1,1,0,0,1-1.412-1.41l8.268-8.268a1,1,0,0,1,1.41,0Z"
                                transform="translate(1656.128 -22789.381)" fill="#fff" fill-rule="evenodd" />
                            <path id="Path_1856" data-name="Path 1856"
                                d="M151.1,15.388a1.108,1.108,0,0,1,1.193-1h8.352a1.108,1.108,0,0,1,1.193,1v6.978a1.212,1.212,0,0,1-2.386,0V16.385H152.3A1.108,1.108,0,0,1,151.1,15.388Zm9.545,17.944a1.108,1.108,0,0,0-1.193,1V40.31H152.3a1.013,1.013,0,1,0,0,1.994h8.352a1.108,1.108,0,0,0,1.193-1V34.328A1.108,1.108,0,0,0,160.649,33.332Z"
                                transform="translate(1536.156 -22789.389)" fill="#fff" fill-rule="evenodd" />
                            <path id="Path_1857" data-name="Path 1857"
                                d="M32.759,32.251a1,1,0,0,0,0,1.411l8.263,8.263a1,1,0,1,0,1.411-1.409l-8.264-8.264A1,1,0,0,0,32.759,32.251ZM15.186,14.679a1,1,0,0,0,0,1.411l8.263,8.262a1,1,0,0,0,1.411-1.409l-8.264-8.263A1,1,0,0,0,15.186,14.679Z"
                                transform="translate(1655.276 -22789.385)" fill="#fff" fill-rule="evenodd" />
                            <path id="Path_1858" data-name="Path 1858"
                                d="M25.129,15.584a1.193,1.193,0,0,0-1.193-1.193H15.584a1.193,1.193,0,0,0-1.193,1.193v8.352a1.193,1.193,0,0,0,2.386,0V16.777h7.159A1.193,1.193,0,0,0,25.129,15.584Z"
                                transform="translate(1655.695 -22789.389)" fill="#fff" fill-rule="evenodd" />
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
                        <div class="flex items-center">
                            <img src="@/assets/icon_user_profile.png" alt="">
                            <div class="flex flex-col text-white">
                                <div>
                                    Mr.Smart
                                </div>
                                <div class="flex gap-2">
                                    <span class="text-yellow-400">Edit Profile</span> | <span @click="Logout"
                                        class="text-yellow-400 cursor-pointer">Logout</span>
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
        </div>
    </nav>
</template>
<script>
    import LanguageSwitcher from '../../components/utility/LanguageSwitcher.vue';
    import ThemeSwitcher from '../../components/utility/ThemeSwitcher.vue';
    export default {
        components: {
            LanguageSwitcher,
            ThemeSwitcher
        },
        methods: {
            Logout() {
                this.$store.dispatch('auth/logout')
                window.location.reload()
            }
        }
    }
</script>