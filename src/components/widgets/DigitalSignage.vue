<template>
    <div class="block-widgets col-span-12 lg:col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">{{$t('digital_signage')}}</span>
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026" viewBox="0 0 43.026 43.026"
                class="bg-dark-light">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="" />
            </svg>
        </div>
        <div class="detail gap-10">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="150.351" height="150.364" viewBox="0 0 150.351 150.364" class="bg-dark-light w-32">
                    <path id="Icon_awesome-digital-ocean" data-name="Icon awesome-digital-ocean"
                        d="M24.512,144.2H46.855V121.885H24.512ZM5.838,103.21v18.675H24.512V103.21ZM147.171,51.763A72.756,72.756,0,0,0,99.7,4.288C48.129-11.81.563,26.54.563,75.713H29.605c0-30.862,30.619-54.721,63.088-42.958A43.491,43.491,0,0,1,118.7,58.736c11.854,32.438-12.036,63-42.867,63.058v.091h-.091v29.043c49.294,0,87.553-47.536,71.425-99.164Zm-71.334,70.03V92.9H46.855v28.982H75.747v-.091Z"
                        transform="translate(-0.563 -0.563)" fill="" />
                </svg>

            </div>
            <div class="flex flex-col justify-center dark:text-white">
                <h1 class="text-6xl">0 <span class="text-lg">/0</span></h1>
                <div class="flex items-baseline gap-3">
                    <h3 class="text-xl">0 <p class="text-red-400 text-xs">{{$t('offline')}}</p>
                    </h3>
                    <div class="border border-slate-500 h-6 my-auto"></div>
                    <h3 class="text-2xl">0 <p class="dark:text-indigo-400 text-orange-400 text-xs">{{$t('no_good')}}</p>
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>