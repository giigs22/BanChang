<template>
    <div class="block-layer dark:bg-block-layer-dark bg-block-layer-light-op5 relative mb-3">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            {{$t('sos')}}
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="bg-dark-light" width="43.026" height="43.026" viewBox="0 0 43.026 43.026">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="" />
            </svg>
        </div>
        <div class="dark:text-white flex items-center gap-3 w-32 ml-10 my-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="bg-dark-light" width="56.217" height="56.217" viewBox="0 0 56.217 56.217">
                <path id="Icon_metro-help" data-name="Icon metro-help"
                    d="M30.679,1.928A28.109,28.109,0,1,0,58.788,30.037,28.109,28.109,0,0,0,30.679,1.928ZM20.139,30.037A10.541,10.541,0,1,1,30.679,40.577,10.541,10.541,0,0,1,20.139,30.037ZM53.406,39.45l-9.74-4.035a14.091,14.091,0,0,0,0-10.759l9.74-4.035a24.659,24.659,0,0,1,0,18.828ZM40.093,7.309l-4.035,9.74a14.091,14.091,0,0,0-10.759,0l-4.035-9.74a24.66,24.66,0,0,1,18.828,0ZM7.952,20.623l9.74,4.035a14.09,14.09,0,0,0,0,10.759L7.952,39.45a24.659,24.659,0,0,1,0-18.828ZM21.265,52.764l4.035-9.74a14.091,14.091,0,0,0,10.759,0l4.035,9.74a24.659,24.659,0,0,1-18.828,0Z"
                    transform="translate(-2.571 -1.928)" fill="" />
            </svg>
            <span class="text-xl">0</span><span class="text-sm">{{$t('times')}}</span>
        </div>

    </div>
</template>