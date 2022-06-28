<template>
    <nav class="px-5 py-2 bg-nav-dark max-h-20 h-20">

        <div class="container flex flex-wrap items-center mx-auto">
            <div>
                <a href="#" class="">
                    <img src="../src/assets/logo.png" class="mr-3 h-28" alt="BanChang Logo">
                </a>
            </div>
            <!-- <button data-collapse-toggle="mobile-menu" type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button> -->
            <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul class="flex flex-col mt-4 mb-10 md:flex-row md:space-x-8 md:mt-0 md:text-md">
                    <li>
                        <a href="#" class="nav-menu" aria-current="page"><svg xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5" viewBox="0 0 24.86 22">
                                <path id="Path_1850" data-name="Path 1850"
                                    d="M115.895,172.555l-12.43,12.43h2.768v9.57h5.975v-6.626h7.374v6.626h5.67v-9.57h3.073Z"
                                    transform="translate(-103.465 -172.555)" fill="#fff" />
                            </svg>
                            Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="nav-menu">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 23.667 22.738">
                                <path id="Path_1860" data-name="Path 1860"
                                    d="M118.044,312.349l1.848,3.742a2.333,2.333,0,0,0,1.759,1.277l4.128.6a2.336,2.336,0,0,1,1.3,3.985l-2.986,2.913a2.334,2.334,0,0,0-.672,2.069l.7,4.112a2.336,2.336,0,0,1-3.39,2.463l-3.692-1.942a2.335,2.335,0,0,0-2.174,0l-3.694,1.942a2.337,2.337,0,0,1-3.39-2.463l.706-4.112a2.34,2.34,0,0,0-.672-2.069l-2.988-2.913a2.336,2.336,0,0,1,1.3-3.985l4.128-.6a2.336,2.336,0,0,0,1.761-1.277l1.846-3.742A2.336,2.336,0,0,1,118.044,312.349Z"
                                    transform="translate(-104.116 -311.046)" fill="#fff" />
                            </svg>
                            Advance
                            Info</a>
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
                        <a href="#" class="nav-menu"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                viewBox="0 0 28.756 23.008">
                                <path id="Icon_awesome-user-cog" data-name="Icon awesome-user-cog"
                                    d="M27.434,16.775a5.271,5.271,0,0,0,0-1.914l1.159-.67a.325.325,0,0,0,.148-.382A6.744,6.744,0,0,0,27.25,11.23a.328.328,0,0,0-.4-.063l-1.159.67a5.276,5.276,0,0,0-1.658-.957V9.54a.327.327,0,0,0-.256-.319,6.78,6.78,0,0,0-2.975,0,.327.327,0,0,0-.256.319v1.339a5.276,5.276,0,0,0-1.658.957l-1.159-.67a.329.329,0,0,0-.4.063,6.744,6.744,0,0,0-1.492,2.579.331.331,0,0,0,.148.382l1.159.67a5.271,5.271,0,0,0,0,1.914l-1.159.67a.325.325,0,0,0-.148.382,6.777,6.777,0,0,0,1.492,2.579.328.328,0,0,0,.4.063l1.159-.67a5.276,5.276,0,0,0,1.658.957V22.1a.327.327,0,0,0,.256.319,6.78,6.78,0,0,0,2.975,0,.327.327,0,0,0,.256-.319V20.756a5.276,5.276,0,0,0,1.658-.957l1.159.67a.329.329,0,0,0,.4-.063,6.744,6.744,0,0,0,1.492-2.579.331.331,0,0,0-.148-.382l-1.159-.67ZM22.289,18a2.179,2.179,0,1,1,2.179-2.179A2.181,2.181,0,0,1,22.289,18ZM10.066,11.5A5.752,5.752,0,1,0,4.314,5.752,5.751,5.751,0,0,0,10.066,11.5Zm9.041,10.178c-.1-.054-.207-.117-.306-.175l-.355.207a1.763,1.763,0,0,1-2.179-.328,8.194,8.194,0,0,1-1.806-3.128,1.758,1.758,0,0,1,.8-2.054L15.62,16q-.007-.175,0-.351l-.355-.207a1.756,1.756,0,0,1-.8-2.054c.04-.13.1-.261.144-.391-.171-.013-.337-.054-.512-.054h-.75a7.822,7.822,0,0,1-6.552,0h-.75A6.041,6.041,0,0,0,0,18.981v1.869a2.158,2.158,0,0,0,2.157,2.157H17.975a2.154,2.154,0,0,0,1.222-.382,1.75,1.75,0,0,1-.09-.53Z"
                                    fill="#fff" />
                            </svg>
                            User Management</a>
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
    </nav>
    <main class="m-10">
        <div class="flex items-center justify-end my-5">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36" height="36"
                viewBox="0 0 36 36">
                <defs>
                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stop-color="#8466d5" />
                        <stop offset="1" stop-color="#d670c0" />
                    </linearGradient>
                </defs>
                <path id="windows"
                    d="M14.755,19V33.079L0,31.046V19Zm0-16.075V17.177H0V4.954ZM36,19V36L16.377,33.3V19ZM36,0V17.178H16.377V2.7Z"
                    fill="url(#linear-gradient)" />
            </svg>
            <h1 class="text-xl text-white ml-1">Video Wall</h1>
        </div>
        <!-- Content -->
        <section class="section-content">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <h1 class="text-xl text-white">Dashboard</h1>
                    <div class="block-content">
                        <img src="../src/assets/btn_top.png" alt="" class="w-9 h-9 icon-top">
                        <h2 class="text-lg text-white mb-2">Environment</h2>
                        <div class="top-bar">
                            <div class="wether flex w-1/4 py-3 px-7">
                                <div class="flex flex-col text-center">
                                    <img src="../src/assets/icon_healthy.png" alt="">
                                    <h3 class="text-lg text-white">Healthy</h3>
                                </div>
                                <div class="flex flex-col text-center ml-32">
                                    <h3 class="text-lg text-white">Saturday</h3>
                                    <img src="../src/assets/icon_clound.png" alt="">
                                    <div class="flex justify-between">
                                        <span class="text-sky-300 text-sm">25c</span>
                                        <span class="text-yellow-300 text-sm">25c</span>
                                    </div>

                                </div>
                            </div>
                            <div class="flex gap-1">
                                <div class="aqi block-env">
                                    <h3>AQI</h3>
                                    <span class="text-xs my-1">399.50</span>
                                    <div class="icon-env">
                                        <img src="../src/assets/icon_aqi.png" />
                                    </div>
                                    <span class="text-xs my-1">Safe</span>
                                </div>
                                <div class="co2 block-env">
                                    <h3>Co2</h3>
                                    <span class="text-xs my-1">399.50</span>
                                    <div class="icon-env">
                                        <img src="../src/assets/icon_co2.png" />
                                    </div>
                                    <span class="text-xs my-1">Safe</span>
                                </div>
                                <div class="pm25 block-env">
                                    <h3>PM2.5</h3>
                                    <span class="text-xs my-1">399.50</span>
                                    <div class="icon-env">
                                        <img src="../src/assets/icon_pm25.png" />
                                    </div>
                                    <span class="text-xs my-1">Safe</span>
                                </div>
                                <div class="pm10 block-env">
                                    <h3>PM10</h3>
                                    <span class="text-xs my-1">399.50</span>
                                    <div class="icon-env">
                                        <img src="../src/assets/icon_pm10.png" />
                                    </div>
                                    <span class="text-xs my-1">Safe</span>
                                </div>
                                <div class="hum block-env">
                                    <h3>Humidity</h3>
                                    <span class="text-xs my-1">399.50</span>
                                    <div class="icon-env">
                                        <img src="../src/assets/icon_hum.png" />
                                    </div>
                                    <span class="text-xs my-1">Safe</span>
                                </div>
                                <div class="uv block-env">
                                    <h3>UV</h3>
                                    <span class="text-xs my-1">399.50</span>
                                    <div class="icon-env">
                                        <img src="../src/assets/icon_uv.png" />
                                    </div>
                                    <span class="text-xs my-1">Safe</span>
                                </div>
                                <div class="voc block-env">
                                    <h3>VOC</h3>
                                    <span class="text-xs my-1">399.50</span>
                                    <div class="icon-env">
                                        <img src="../src/assets/icon_voc.png" />
                                    </div>
                                    <span class="text-xs my-1">Safe</span>
                                </div>
                            </div>

                        </div>
                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-3">
                                <div class="block-layer data-layer py-2 px-3 mt-4">
                                    <h4 class="text-sm text-white">Data Layer</h4>
                                    <ul class="text-white text-sm list-data-layer mt-5">
                                        <li>Air Quality <input type="checkbox" name="" id="" class="mr-5 cus-checkbox">
                                        </li>
                                        <li>Smart Lighting <input type="checkbox" name="" id=""
                                                class="mr-5 cus-checkbox">
                                        </li>
                                        <li>Smart Pole <input type="checkbox" name="" id="" class="mr-5 cus-checkbox">
                                        </li>
                                        <li>CCTV Camera <input type="checkbox" name="" id="" class="mr-5 cus-checkbox">
                                        </li>
                                        <li>CCTV Survillance <input type="checkbox" name="" id=""
                                                class="mr-5 cus-checkbox">
                                        </li>
                                        <li>Parking <input type="checkbox" name="" id="" class="mr-5 cus-checkbox"></li>
                                        <li>Free Wifi <input type="checkbox" name="" id="" class="mr-5 cus-checkbox">
                                        </li>
                                        <li>Digital Signage <input type="checkbox" name="" id=""
                                                class="mr-5 cus-checkbox">
                                        </li>
                                        <li>SOS <input type="checkbox" name="" id="" class="mr-5 cus-checkbox"></li>
                                        <li>Complaint <input type="checkbox" name="" id="" class="mr-5 cus-checkbox">
                                        </li>
                                        <li>Maintenance <input type="checkbox" name="" id="" class="mr-5 cus-checkbox">
                                        </li>

                                    </ul>
                                    <div class="flex justify-between mx-5">
                                        <div class="flex items-center gap-3">
                                            <input type="checkbox" name="" id="" class="cus-checkbox"> <label for=""
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
                                    <button class="btn-gray">Heatmap</button>
                                </div>
                                <img src="./assets/map.png" alt="" class="w-full">
                            </div>
                            <div class="col-span-3">
                                <div class="block-layer relative mb-3 mt-4">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        Devices
                                    </div>
                                    <div class="open-full absolute right-2 top-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10"
                                            viewBox="0 0 43.026 43.026">
                                            <path id="Icon_awesome-arrow-circle-down"
                                                data-name="Icon awesome-arrow-circle-down"
                                                d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                                                transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
                                        </svg>

                                    </div>
                                    <div class="flex flex-col items-end w-32 ml-10 mt-5"> <span
                                            class="text-green-500 text-2xl">95 Online</span> <span
                                            class="text-red-500 text-2xl">5 Offine</span> </div>
                                </div>
                                <div class="block-layer relative mb-3">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        SOS
                                    </div>
                                    <div class="open-full absolute right-2 top-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026"
                                            viewBox="0 0 43.026 43.026">
                                            <path id="Icon_awesome-arrow-circle-down"
                                                data-name="Icon awesome-arrow-circle-down"
                                                d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                                                transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
                                        </svg>
                                    </div>
                                    <div class="text-white flex items-center gap-3 w-32 ml-10 my-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="56.217" height="56.217"
                                            viewBox="0 0 56.217 56.217">
                                            <path id="Icon_metro-help" data-name="Icon metro-help"
                                                d="M30.679,1.928A28.109,28.109,0,1,0,58.788,30.037,28.109,28.109,0,0,0,30.679,1.928ZM20.139,30.037A10.541,10.541,0,1,1,30.679,40.577,10.541,10.541,0,0,1,20.139,30.037ZM53.406,39.45l-9.74-4.035a14.091,14.091,0,0,0,0-10.759l9.74-4.035a24.659,24.659,0,0,1,0,18.828ZM40.093,7.309l-4.035,9.74a14.091,14.091,0,0,0-10.759,0l-4.035-9.74a24.66,24.66,0,0,1,18.828,0ZM7.952,20.623l9.74,4.035a14.09,14.09,0,0,0,0,10.759L7.952,39.45a24.659,24.659,0,0,1,0-18.828ZM21.265,52.764l4.035-9.74a14.091,14.091,0,0,0,10.759,0l4.035,9.74a24.659,24.659,0,0,1-18.828,0Z"
                                                transform="translate(-2.571 -1.928)" fill="#7a7afe" />
                                        </svg>
                                        <span class="text-xl">2</span><span class="text-sm">Times</span>
                                    </div>

                                </div>
                                <div class="block-layer covid-19 relative">
                                    <div class="status">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2"
                                            viewBox="0 0 9.361 9.361">
                                            <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                                fill="#08ff00" />
                                        </svg>
                                        COVID-19
                                    </div>
                                    <div class="open-full absolute right-2 top-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026"
                                            viewBox="0 0 43.026 43.026">
                                            <path id="Icon_awesome-arrow-circle-down"
                                                data-name="Icon awesome-arrow-circle-down"
                                                d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                                                transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
                                        </svg>
                                    </div>
                                    <div class="list-item-covid mt-7 flex py-3 px-2 gap-5 items-center">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="13.392"
                                                height="12.737" viewBox="0 0 13.392 12.737">
                                                <defs>
                                                    <filter id="Icon_metro-star-full">
                                                        <feOffset dy="3" input="SourceAlpha" />
                                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                                        <feFlood flood-opacity="0.161" result="color" />
                                                        <feComposite operator="out" in="SourceGraphic" in2="blur" />
                                                        <feComposite operator="in" in="color" />
                                                        <feComposite operator="in" in2="SourceGraphic" />
                                                    </filter>
                                                </defs>
                                                <g data-type="innerShadowGroup">
                                                    <path id="Icon_metro-star-full-2" data-name="Icon metro-star-full"
                                                        d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                                                        transform="translate(-2.571 -2.683)" fill="#7a7afe" />
                                                    <g transform="matrix(1, 0, 0, 1, 0, 0)"
                                                        filter="url(#Icon_metro-star-full)">
                                                        <path id="Icon_metro-star-full-3"
                                                            data-name="Icon metro-star-full"
                                                            d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                                                            transform="translate(-2.57 -2.68)" fill="#fff" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="detail-covid text-xs">
                                            <p>Total cases</p>
                                            <p class="text-yellow-300">2,100,959</p>
                                        </div>
                                    </div>
                                    <div class="list-item-covid mt-1 flex py-3 px-2 gap-5 items-center">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="13.392"
                                                height="12.737" viewBox="0 0 13.392 12.737">
                                                <defs>
                                                    <filter id="Icon_metro-star-full">
                                                        <feOffset dy="3" input="SourceAlpha" />
                                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                                        <feFlood flood-opacity="0.161" result="color" />
                                                        <feComposite operator="out" in="SourceGraphic" in2="blur" />
                                                        <feComposite operator="in" in="color" />
                                                        <feComposite operator="in" in2="SourceGraphic" />
                                                    </filter>
                                                </defs>
                                                <g data-type="innerShadowGroup">
                                                    <path id="Icon_metro-star-full-2" data-name="Icon metro-star-full"
                                                        d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                                                        transform="translate(-2.571 -2.683)" fill="#7a7afe" />
                                                    <g transform="matrix(1, 0, 0, 1, 0, 0)"
                                                        filter="url(#Icon_metro-star-full)">
                                                        <path id="Icon_metro-star-full-3"
                                                            data-name="Icon metro-star-full"
                                                            d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                                                            transform="translate(-2.57 -2.68)" fill="#fff" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="detail-covid text-xs">
                                            <p>New cases</p>
                                            <p class="text-yellow-300">+96,685</p>
                                        </div>
                                    </div>
                                    <div class="list-item-covid mt-1 flex py-3 px-2 gap-5 items-center">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="13.392"
                                                height="12.737" viewBox="0 0 13.392 12.737">
                                                <defs>
                                                    <filter id="Icon_metro-star-full">
                                                        <feOffset dy="3" input="SourceAlpha" />
                                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                                        <feFlood flood-opacity="0.161" result="color" />
                                                        <feComposite operator="out" in="SourceGraphic" in2="blur" />
                                                        <feComposite operator="in" in="color" />
                                                        <feComposite operator="in" in2="SourceGraphic" />
                                                    </filter>
                                                </defs>
                                                <g data-type="innerShadowGroup">
                                                    <path id="Icon_metro-star-full-2" data-name="Icon metro-star-full"
                                                        d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                                                        transform="translate(-2.571 -2.683)" fill="#7a7afe" />
                                                    <g transform="matrix(1, 0, 0, 1, 0, 0)"
                                                        filter="url(#Icon_metro-star-full)">
                                                        <path id="Icon_metro-star-full-3"
                                                            data-name="Icon metro-star-full"
                                                            d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                                                            transform="translate(-2.57 -2.68)" fill="#fff" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="detail-covid text-xs">
                                            <p>Deaths</p>
                                            <p class="text-yellow-300">20,677</p>
                                        </div>
                                    </div>
                                    <div class="list-item-covid mt-1 flex py-3 px-2 gap-5 items-center">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="13.392"
                                                height="12.737" viewBox="0 0 13.392 12.737">
                                                <defs>
                                                    <filter id="Icon_metro-star-full">
                                                        <feOffset dy="3" input="SourceAlpha" />
                                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                                        <feFlood flood-opacity="0.161" result="color" />
                                                        <feComposite operator="out" in="SourceGraphic" in2="blur" />
                                                        <feComposite operator="in" in="color" />
                                                        <feComposite operator="in" in2="SourceGraphic" />
                                                    </filter>
                                                </defs>
                                                <g data-type="innerShadowGroup">
                                                    <path id="Icon_metro-star-full-2" data-name="Icon metro-star-full"
                                                        d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                                                        transform="translate(-2.571 -2.683)" fill="#7a7afe" />
                                                    <g transform="matrix(1, 0, 0, 1, 0, 0)"
                                                        filter="url(#Icon_metro-star-full)">
                                                        <path id="Icon_metro-star-full-3"
                                                            data-name="Icon metro-star-full"
                                                            d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                                                            transform="translate(-2.57 -2.68)" fill="#fff" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="detail-covid text-xs">
                                            <p>New doses given</p>
                                            <p class="text-green-300">+7,414,448</p>
                                        </div>
                                    </div>
                                    <div class="list-item-covid mt-1 flex py-3 px-2 gap-5 items-center">
                                        <div class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="13.392"
                                                height="12.737" viewBox="0 0 13.392 12.737">
                                                <defs>
                                                    <filter id="Icon_metro-star-full">
                                                        <feOffset dy="3" input="SourceAlpha" />
                                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                                        <feFlood flood-opacity="0.161" result="color" />
                                                        <feComposite operator="out" in="SourceGraphic" in2="blur" />
                                                        <feComposite operator="in" in="color" />
                                                        <feComposite operator="in" in2="SourceGraphic" />
                                                    </filter>
                                                </defs>
                                                <g data-type="innerShadowGroup">
                                                    <path id="Icon_metro-star-full-2" data-name="Icon metro-star-full"
                                                        d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                                                        transform="translate(-2.571 -2.683)" fill="#7a7afe" />
                                                    <g transform="matrix(1, 0, 0, 1, 0, 0)"
                                                        filter="url(#Icon_metro-star-full)">
                                                        <path id="Icon_metro-star-full-3"
                                                            data-name="Icon metro-star-full"
                                                            d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                                                            transform="translate(-2.57 -2.68)" fill="#fff" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="detail-covid text-xs">
                                            <p>People fully vaccinated</p>
                                            <p class="text-green-300">2,100,959</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-5 clear-both"></div>

                    </div>
                </div>
            </div>
            <!-- End Main Section-->
            <!-- Widget -->
            <div class="inner-content mx-10 mt-5">
                <div class="main-content">
                    <div class="block-content">
                        <img src="../src/assets/btn_top.png" alt="" class="w-9 h-9 icon-top">

                        <h1 class="text-xl text-white">Widgets</h1>
                        <div class="grid grid-cols-12 gap-1">
                            <!-- Air Quality -->
                            <div class="block-widgets col-span-4">
                                <div class="status">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                                        <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                            fill="#08ff00" />
                                    </svg>
                                    <span class="text-sm uppercase">Air Quality</span>
                                </div>
                                <div class="open-full absolute right-2 top-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026"
                                        viewBox="0 0 43.026 43.026">
                                        <path id="Icon_awesome-arrow-circle-down"
                                            data-name="Icon awesome-arrow-circle-down"
                                            d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                                            transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
                                    </svg>
                                </div>
                                <div class="detail gap-10">
                                    <div>
                                        <img src="../src/assets/icon_healthy.png" alt="" class="">
                                    </div>
                                    <div class="flex flex-col text-center text-white">
                                        <h1 class="text-6xl">31</h1>
                                        <h3 class="text-xl">healthy</h3>
                                        <h1 class="text-2xl">AQI 40</h1>
                                    </div>
                                </div>
                            </div>
                            <!-- Air Quality -->
                            <!-- Smart Lighting -->
                            <div class="block-widgets col-span-4">
                                <div class="status">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                                        <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                            fill="#08ff00" />
                                    </svg>
                                    <span class="text-sm uppercase">Smart Lighting</span>
                                </div>
                                <div class="open-full absolute right-2 top-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026"
                                        viewBox="0 0 43.026 43.026">
                                        <path id="Icon_awesome-arrow-circle-down"
                                            data-name="Icon awesome-arrow-circle-down"
                                            d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                                            transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
                                    </svg>
                                </div>
                                <div class="detail gap-10">
                                    <div>
                                        <img src="../src/assets/icon_lighting.png" alt="" class="w-32">
                                    </div>
                                    <div class="flex flex-col text-center text-white">
                                        <h1 class="text-6xl">47 <span class="text-lg">/50</span></h1>
                                        <div class="flex items-baseline gap-3">
                                            <h3 class="text-xl">47 <p class="text-cyan-300 text-xs">Online</p>
                                            </h3>
                                            <div class="border border-slate-500 h-6 my-auto"></div>
                                            <h3 class="text-2xl">3 <p class="text-red-400 text-xs">Offline</p>
                                            </h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- Smart Lighting -->
                            <!-- Smart Pole Energy -->
                            <div class="block-widgets col-span-4">
                                <div class="status">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                                        <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                            fill="#08ff00" />
                                    </svg>
                                    <span class="text-sm uppercase">Smart Pole Enery</span>
                                </div>
                                <div class="open-full absolute right-2 top-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026"
                                        viewBox="0 0 43.026 43.026">
                                        <path id="Icon_awesome-arrow-circle-down"
                                            data-name="Icon awesome-arrow-circle-down"
                                            d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                                            transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
                                    </svg>
                                </div>
                                <div class="detail gap-10">
                                    <div>
                                        <img src="../src/assets/icon_poll.png" alt="" class="w-32">
                                    </div>
                                    <div class="flex flex-col items-center text-center text-white">
                                        <p class="text-sm">Power Usage / Month</p>
                                        <p class="text-lg">1621.76 Baht</p>
                                        <div class="flex items-baseline gap-3">
                                            <div>
                                                <p class="text-4xl">2</p>
                                                <p class="text-xs">Offline</p>
                                            </div>
                                            <div class="border border-slate-500 h-10 my-auto"></div>

                                            <div>
                                                <p class="text-4xl">1</p>
                                                <p class="text-xs">No good</p>
                                            </div>
                                        </div>
                                        <div class="flex mt-2 content-center">
                                            <div class="flex flex-col text-left text-xs">
                                                <span> 230.54 V
                                                </span>
                                                <span> 2.33 a
                                                </span><span> 0.40 KW
                                                </span>
                                            </div>
                                            <div class="flex flex-col text-left text-xs ml-10">
                                                <span> 49.98 Hz
                                                </span>
                                                <span> 0.74 PF
                                                </span><span> 405.44 KWh
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Smart Pole Energry -->
                            <!-- CCTV Camera -->
                            <div class="block-widgets col-span-4">
                                <div class="status">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                                        <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                            fill="#08ff00" />
                                    </svg>
                                    <span class="text-sm uppercase">CCTV Camera</span>
                                </div>
                                <div class="open-full absolute right-2 top-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026"
                                        viewBox="0 0 43.026 43.026">
                                        <path id="Icon_awesome-arrow-circle-down"
                                            data-name="Icon awesome-arrow-circle-down"
                                            d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                                            transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
                                    </svg>
                                </div>
                                <div class="detail gap-10">
                                    <div>
                                        <img src="../src/assets/icon_cctv.png" alt="" class="w-32">
                                    </div>
                                    <div class="flex flex-col text-center text-white">
                                        <h1 class="text-6xl">26 <span class="text-lg">/50</span></h1>
                                        <div class="flex items-baseline gap-3">
                                            <h3 class="text-xl">2 <p class="text-xs">Online</p>
                                            </h3>
                                            <div class="border border-slate-500 h-6 my-auto"></div>
                                            <h3 class="text-2xl">1 <p class="text-xs">Offline</p>
                                            </h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- CCTV Camera -->
                            <!-- CCTV Surviellance -->
                            <div class="block-widgets col-span-4">
                                <div class="status">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                                        <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                            fill="#08ff00" />
                                    </svg>
                                    <span class="text-sm uppercase">CCTV Surviellance</span>
                                </div>
                                <div class="open-full absolute right-2 top-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026"
                                        viewBox="0 0 43.026 43.026">
                                        <path id="Icon_awesome-arrow-circle-down"
                                            data-name="Icon awesome-arrow-circle-down"
                                            d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                                            transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
                                    </svg>
                                </div>
                                <div class="detail p-8 detail-inner">
                                    <img src="../src/assets/demo_stat.png" alt="" class="w-40 mx-auto">
                                </div>
                            </div>
                            <!-- CCTV Surviellance -->
                            <!-- Parking -->
                            <div class="block-widgets col-span-4">
                                <div class="status">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                                        <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                            fill="#08ff00" />
                                    </svg>
                                    <span class="text-sm uppercase">Parking</span>
                                </div>
                                <div class="open-full absolute right-2 top-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026"
                                        viewBox="0 0 43.026 43.026">
                                        <path id="Icon_awesome-arrow-circle-down"
                                            data-name="Icon awesome-arrow-circle-down"
                                            d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                                            transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
                                    </svg>
                                </div>
                                <div class="detail text-white">
                                    <h1 class="text-6xl text-right mt-10 mr-20">51%</h1>
                                    <div class="flex gap-5 items-center">
                                        <div>
                                            <img src="../src/assets/icon_park.png" alt="" class="w-32">
                                        </div>
                                        <div>
                                            <p>Occupied Parking <span class="text-2xl text-cyan-400">9</span> Lots</p>
                                            <p>Vacant Parking <span class="text-2xl text-indigo-400">11</span> Lots</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <!-- Parking -->
                            <!-- Check license Plate -->
                            <div class="block-widgets col-span-4">
                                <div class="status">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                                        <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                            fill="#08ff00" />
                                    </svg>
                                    <span class="text-sm uppercase">Check License Plate</span>
                                </div>
                                <div class="open-full absolute right-2 top-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026"
                                        viewBox="0 0 43.026 43.026">
                                        <path id="Icon_awesome-arrow-circle-down"
                                            data-name="Icon awesome-arrow-circle-down"
                                            d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                                            transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
                                    </svg>
                                </div>
                                <div class="detail">
                                    <div class="flex items-center justify-center relative w-40 h-40"
                                        style="background:url('../src/assets/demo_circle.png')no-repeat;background-size: contain;">
                                        <div class="text-4xl text-white">1</div>
                                    </div>
                                    <div class="text-white">
                                        <p>Normal <span class="text-3xl text-cyan-400">999</span> Plate</p>
                                        <p>Suspect <span class="text-3xl text-indigo-400">11</span> Plate</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Check license Plate -->
                            <!-- License Plate -->
                            <div class="block-widgets col-span-4">
                                <div class="status">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                                        <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                            fill="#08ff00" />
                                    </svg>
                                    <span class="text-sm uppercase">License Plate</span>
                                </div>
                                <div class="open-full absolute right-2 top-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026"
                                        viewBox="0 0 43.026 43.026">
                                        <path id="Icon_awesome-arrow-circle-down"
                                            data-name="Icon awesome-arrow-circle-down"
                                            d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                                            transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
                                    </svg>
                                </div>
                                <div class="detail mt-8">
                                    <table class="tabel border-collapse text-white text-sm bg-table-head w-full">
                                        <thead class="bg-table-head">
                                            <tr>
                                                <td class="pl-20">Plate</td>
                                                <td>Timestamp</td>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-table-body">
                                            <tr class="border-table">
                                                <td class="pl-20">กข2345</td>
                                                <td>05/09/2021 6:50</td>
                                            </tr>
                                            <tr class="border-table">
                                                <td class="pl-20">กข2345</td>
                                                <td>05/09/2021 6:50</td>
                                            </tr>
                                            <tr class="border-table">
                                                <td class="pl-20">กข2345</td>
                                                <td>05/09/2021 6:50</td>
                                            </tr>
                                            <tr class="border-table">
                                                <td class="pl-20">กข2345</td>
                                                <td>05/09/2021 6:50</td>
                                            </tr>
                                            <tr class="border-table">
                                                <td class="pl-20">กข2345</td>
                                                <td>05/09/2021 6:50</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <!-- License Plate -->
                            <!-- Free WiFi -->
                            <div class="block-widgets col-span-4">
                                <div class="status">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                                        <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                            fill="#08ff00" />
                                    </svg>
                                    <span class="text-sm uppercase">Free WiFi</span>
                                </div>
                                <div class="open-full absolute right-2 top-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026"
                                        viewBox="0 0 43.026 43.026">
                                        <path id="Icon_awesome-arrow-circle-down"
                                            data-name="Icon awesome-arrow-circle-down"
                                            d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                                            transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
                                    </svg>
                                </div>
                                <div class="detail">
                                    <div>
                                        <img src="../src/assets/icon_wifi.png" alt="" class="w-32">
                                    </div>
                                    <div class="flex flex-col justify-center content-center items-center text-white">
                                        <h1 class="text-6xl">47 <span class="text-lg">/50</span></h1>
                                        <div class="flex items-baseline gap-3">
                                            <h3 class="text-xl">47 <p class="text-cyan-300 text-xs">Online</p>
                                            </h3>
                                            <div class="border border-slate-500 h-6 my-auto"></div>
                                            <h3 class="text-2xl">3 <p class="text-red-400 text-xs">Offline</p>
                                            </h3>
                                        </div>
                                        <p>Use <span class="text-2xl text-cyan-400">12</span> Users</p>
                                        <p>User Average <span class="text-2xl text-indigo-400">25</span> Users</p>
                                    </div>
                                </div>

                            </div>
                            <!-- Free WiFi -->
                            <!-- Digital Signage -->
                            <div class="block-widgets col-span-4">
                                <div class="status">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                                        <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                            fill="#08ff00" />
                                    </svg>
                                    <span class="text-sm uppercase">Digital Signage</span>
                                </div>
                                <div class="open-full absolute right-2 top-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026"
                                        viewBox="0 0 43.026 43.026">
                                        <path id="Icon_awesome-arrow-circle-down"
                                            data-name="Icon awesome-arrow-circle-down"
                                            d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                                            transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
                                    </svg>
                                </div>
                                <div class="detail gap-10">
                                    <div>
                                        <img src="../src/assets/icon_wifi.png" alt="" class="w-32">
                                    </div>
                                    <div class="flex flex-col justify-center text-white">
                                        <h1 class="text-6xl">26 <span class="text-lg">/50</span></h1>
                                        <div class="flex items-baseline gap-3">
                                            <h3 class="text-xl">2 <p class="text-red-400 text-xs">Offline</p>
                                            </h3>
                                            <div class="border border-slate-500 h-6 my-auto"></div>
                                            <h3 class="text-2xl">3 <p class="text-indigo-400 text-xs">No Good</p>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Digital Signage -->
                            <!-- Complaint -->
                            <div class="block-widgets col-span-4">
                                <div class="status">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                                        <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                            fill="#08ff00" />
                                    </svg>
                                    <span class="text-sm uppercase">Complaint</span>
                                </div>
                                <div class="open-full absolute right-2 top-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026"
                                        viewBox="0 0 43.026 43.026">
                                        <path id="Icon_awesome-arrow-circle-down"
                                            data-name="Icon awesome-arrow-circle-down"
                                            d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                                            transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
                                    </svg>
                                </div>
                                <div class="detail gap-10">
                                    <div>
                                        <img src="../src/assets/icon_comment.png" alt="" class="w-32">
                                    </div>
                                    <div class=" text-white">
                                        <p class="text-2xl"><span class="text-6xl">98</span> Topics</p>
                                        <p class="text-sm">30 Received / 0 Pending</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Complaint -->
                            <!-- SOS -->
                            <div class="block-widgets col-span-4">
                                <div class="status">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                                        <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681"
                                            fill="#08ff00" />
                                    </svg>
                                    <span class="text-sm uppercase">SOS</span>
                                </div>
                                <div class="open-full absolute right-2 top-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026"
                                        viewBox="0 0 43.026 43.026">
                                        <path id="Icon_awesome-arrow-circle-down"
                                            data-name="Icon awesome-arrow-circle-down"
                                            d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                                            transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
                                    </svg>
                                </div>
                                <div class="detail gap-10">
                                    <div>
                                        <img src="../src/assets/icon_sos.png" alt="" class="w-32">
                                    </div>
                                    <div class=" text-white">
                                        <p class="text-2xl"><span class="text-6xl">15</span> Times</p>
                                        <div class="text-center">
                                            <p>SOS Latest</p>
                                            <p class="text-red-400">05/09/2021 6:55</p>
                                            <p class="text-red-400">01/09/2021 11:55</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- SOS -->
                        </div>
                        <div class="py-5 clear-both"></div>

                    </div>
                </div>

            </div>
            <!-- End Widget -->
            <!-- Recent Complaint -->
            <div class="inner-content mx-10 mt-5">
                <div class="main-content">
                    <div class="block-content">
                        <img src="../src/assets/btn_top.png" alt="" class="w-9 h-9 ml-auto">
                        <h1 class="text-xl text-white">Recent Complaint</h1>
                        <div class="table-complaint px-10">
                            <div class="text-right py-3">
                                <button class="btn-purple">> Read More</button>
                            </div>
                            <table class="w-full">
                                <thead class="bg-head-table-comp">
                                    <tr>
                                        <td>No</td>
                                        <td>Topic</td>
                                        <td>Category</td>
                                        <td>Date-Time</td>
                                        <td>Rponsible<br>Agency</td>
                                        <td>Location</td>
                                        <td>Status</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody class="bg-body-table-comp">
                                    <tr>
                                        <td>1</td>
                                        <td>ร้องเรียนเรื่องไฟฟ้า</td>
                                        <td>Electricity</td>
                                        <td>DD/MM/YYYY HH:MM</td>
                                        <td>A</td>
                                        <td>13.855894,100.742424</td>
                                        <td>Pending</td>
                                        <td>Reply</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>ร้องเรียนเรื่องไฟฟ้า</td>
                                        <td>Electricity</td>
                                        <td>DD/MM/YYYY HH:MM</td>
                                        <td>A</td>
                                        <td>13.855894,100.742424</td>
                                        <td>Pending</td>
                                        <td>Reply</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>ร้องเรียนเรื่องไฟฟ้า</td>
                                        <td>Electricity</td>
                                        <td>DD/MM/YYYY HH:MM</td>
                                        <td>A</td>
                                        <td>13.855894,100.742424</td>
                                        <td>Pending</td>
                                        <td>Reply</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>ร้องเรียนเรื่องไฟฟ้า</td>
                                        <td>Electricity</td>
                                        <td>DD/MM/YYYY HH:MM</td>
                                        <td>A</td>
                                        <td>13.855894,100.742424</td>
                                        <td>Pending</td>
                                        <td>Reply</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>ร้องเรียนเรื่องไฟฟ้า</td>
                                        <td>Electricity</td>
                                        <td>DD/MM/YYYY HH:MM</td>
                                        <td>A</td>
                                        <td>13.855894,100.742424</td>
                                        <td>Pending</td>
                                        <td>Reply</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="py-5 clear-both"></div>
                        </div>
                        <div class="py-5 clear-both"></div>

                    </div>

                </div>
            </div>

            <!-- End Recent Complaint -->
        </section>


    </main>
</template>