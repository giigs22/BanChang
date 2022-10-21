<template>
    <div class="block-layer dark:bg-covid-dark bg-block-layer-light-op5 relative">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            {{$t('covid19')}}
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026" viewBox="0 0 43.026 43.026" class="bg-dark-light">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="" />
            </svg>
        </div>
        <div class="list-item-covid mt-7 flex py-3 px-2 gap-5 items-center">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13.392"
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
                        <path class="dark:fill-[#7a7afe] fill-[#035671]" id="Icon_metro-star-full-2" data-name="Icon metro-star-full"
                            d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                            transform="translate(-2.571 -2.683)" fill="" />
                        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Icon_metro-star-full)">
                            <path id="Icon_metro-star-full-3" data-name="Icon metro-star-full"
                                d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                                transform="translate(-2.57 -2.68)" fill="#fff" />
                        </g>
                    </g>
                </svg>
            </div>
            <div class="detail-covid text-xs">
                <p>{{$t('total_cases')}}</p>
                <p class="dark:text-yellow-300 text-orange-400">{{data_covid.total_case.toLocaleString()}}</p>
            </div>
        </div>
        <div class="list-item-covid mt-1 flex py-3 px-2 gap-5 items-center">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13.392"
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
                        <path class="dark:fill-[#7a7afe] fill-[#035671]" id="Icon_metro-star-full-2" data-name="Icon metro-star-full"
                            d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                            transform="translate(-2.571 -2.683)" fill="" />
                        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Icon_metro-star-full)">
                            <path id="Icon_metro-star-full-3" data-name="Icon metro-star-full"
                                d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                                transform="translate(-2.57 -2.68)" fill="#fff" />
                        </g>
                    </g>
                </svg>
            </div>
            <div class="detail-covid text-xs">
                <p>{{$t('new_cases')}}</p>
                <p class="dark:text-yellow-300 text-orange-400">+{{data_covid.new_case.toLocaleString()}}</p>
            </div>
        </div>
        <div class="list-item-covid mt-1 flex py-3 px-2 gap-5 items-center">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13.392"
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
                        <path class="dark:fill-[#7a7afe] fill-[#035671]" id="Icon_metro-star-full-2" data-name="Icon metro-star-full"
                            d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                            transform="translate(-2.571 -2.683)" fill="" />
                        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Icon_metro-star-full)">
                            <path id="Icon_metro-star-full-3" data-name="Icon metro-star-full"
                                d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                                transform="translate(-2.57 -2.68)" fill="#fff" />
                        </g>
                    </g>
                </svg>
            </div>
            <div class="detail-covid text-xs">
                <p>{{$t('deaths')}}</p>
                <p class="dark:text-yellow-300 text-orange-400">{{data_covid.deaths.toLocaleString()}}</p>
            </div>
        </div>
        <div class="list-item-covid mt-1 flex py-3 px-2 gap-5 items-center">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13.392"
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
                        <path class="dark:fill-[#7a7afe] fill-[#035671]" id="Icon_metro-star-full-2" data-name="Icon metro-star-full"
                            d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                            transform="translate(-2.571 -2.683)" fill="" />
                        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Icon_metro-star-full)">
                            <path id="Icon_metro-star-full-3" data-name="Icon metro-star-full"
                                d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                                transform="translate(-2.57 -2.68)" fill="#fff" />
                        </g>
                    </g>
                </svg>
            </div>
            <div class="detail-covid text-xs">
                <p>{{$t('new_doses_given')}}</p>
                <p class="dark:text-green-300 text-green-700">{{data_covid.new_dose_given}}</p>
            </div>
        </div>
        <div class="list-item-covid mt-1 flex py-3 px-2 gap-5 items-center">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13.392"
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
                        <path class="dark:fill-[#7a7afe] fill-[#035671]" id="Icon_metro-star-full-2" data-name="Icon metro-star-full"
                            d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                            transform="translate(-2.571 -2.683)" fill="" />
                        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Icon_metro-star-full)">
                            <path id="Icon_metro-star-full-3" data-name="Icon metro-star-full"
                                d="M15.963,7.548l-4.627-.672L9.267,2.683,7.2,6.876l-4.627.672,3.348,3.264-.79,4.608,4.138-2.176,4.138,2.176-.79-4.608,3.348-3.264Z"
                                transform="translate(-2.57 -2.68)" fill="#fff" />
                        </g>
                    </g>
                </svg>
            </div>
            <div class="detail-covid text-xs">
                <p>{{$t('people_fully_vac')}}</p>
                <p class="dark:text-green-300 text-green-700">{{data_covid.people_fully_vac}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                data_covid: {
                    total_case: 0,
                    new_case: 0,
                    deaths: 0,
                    new_dose_given: 0,
                    people_fully_vac: 0
                }
            }
        },
        created() {
            this.getdataCovid19()
        },
        methods: {
            getdataCovid19() {
                axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all').then((res) => {
                    var data = res.data[0]
                    this.data_covid.total_case = data.total_case
                    this.data_covid.new_case = data.new_case
                    this.data_covid.deaths = data.total_death
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }
</script>