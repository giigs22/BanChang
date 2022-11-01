<template>
    <div class="block-widgets col-span-12 lg:col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">{{$t('parking')}}</span>
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026" viewBox="0 0 43.026 43.026" class="bg-dark-light">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="" />
            </svg>
        </div>
        <div class="detail dark:text-white flex-col">
            <h1 class="text-6xl text-right ml-auto mr-16">0%</h1>
            <div class="flex gap-5 items-center">
                <div class="">
                    <svg class="w-32 h-32 bg-dark-light" xmlns="http://www.w3.org/2000/svg" width="151.225" height="151.225"
                        viewBox="0 0 151.225 151.225">
                        <path id="Icon_awesome-parking" data-name="Icon awesome-parking"
                            d="M135.022,2.25H16.2A16.207,16.207,0,0,0,0,18.453V137.272a16.207,16.207,0,0,0,16.2,16.2H135.022a16.207,16.207,0,0,0,16.2-16.2V18.453A16.207,16.207,0,0,0,135.022,2.25ZM81.013,99.466h-16.2v16.2a5.417,5.417,0,0,1-5.4,5.4h-10.8a5.417,5.417,0,0,1-5.4-5.4V40.056a5.417,5.417,0,0,1,5.4-5.4H81.013a32.405,32.405,0,1,1,0,64.811Zm0-43.207h-16.2v21.6h16.2a10.8,10.8,0,1,0,0-21.6Z"
                            transform="translate(0 -2.25)" fill="" />
                    </svg>
                </div>
                <div>
                    <p>{{$t('occupied_parking')}} <span class="text-2xl dark:text-cyan-400 text-green-600">0</span> {{$t('lots')}}</p>
                    <p>{{$t('vacant_parking')}}<span class="text-2xl dark:text-indigo-400">0</span> {{$t('lots')}}</p>
                </div>
            </div>

        </div>
    </div>
</template>