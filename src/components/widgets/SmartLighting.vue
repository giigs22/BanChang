<template>
    <div class="block-widgets col-span-12 lg:col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">Smart Lighting</span>
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg @click="fullview" class="cursor-pointer dark:fill-[#7a7afe] fill-[#035671]"
                xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026" viewBox="0 0 43.026 43.026">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="" />
            </svg>
        </div>
        <div class="detail gap-10">
            <div>
                <svg class="bg-dark-light w-32" xmlns="http://www.w3.org/2000/svg" width="180.354" height="145.008" viewBox="0 0 180.354 145.008">
                    <g id="Group_932" data-name="Group 932" transform="translate(5.136 7.063)">
                        <path class="dark:stroke-[#7a7afe] stroke-[#035671]" id="Path_1721" data-name="Path 1721" d="M5105.668,1915s-33,29.948,0,70.286"
                            transform="translate(-5066.729 -1891.994)" fill="none" stroke=""
                            stroke-linecap="round" stroke-width="10" />
                        <path class="dark:stroke-[#7a7afe] stroke-[#035671]" id="Path_1724" data-name="Path 1724" d="M5091,1915s33,29.948,0,70.286"
                            transform="translate(-4959.859 -1891.994)" fill="none" stroke=""
                            stroke-linecap="round" stroke-width="10" />
                        <path class="dark:stroke-[#7a7afe] stroke-[#035671]" id="Path_1722" data-name="Path 1722" d="M5115.271,1915s-54.611,49.554,0,116.3"
                            transform="translate(-5091 -1915)" fill="none" stroke="" stroke-linecap="round"
                            stroke-width="10" />
                        <path class="dark:stroke-[#7a7afe] stroke-[#035671]" id="Path_1723" data-name="Path 1723" d="M5091,1915s54.611,49.554,0,116.3"
                            transform="translate(-4945.189 -1915)" fill="none" stroke="" stroke-linecap="round"
                            stroke-width="10" />
                        <path class="dark:stroke-[#7a7afe] stroke-[#035671]" id="Icon_awesome-lightbulb" data-name="Icon awesome-lightbulb"
                            d="M22.248,105.229a7.414,7.414,0,0,0,1.241,4.1l3.958,5.95a7.409,7.409,0,0,0,6.17,3.307H47.91a7.409,7.409,0,0,0,6.17-3.307l3.958-5.95a7.409,7.409,0,0,0,1.241-4.1l.009-8.882H22.236ZM0,40.762A40.535,40.535,0,0,0,10.089,67.578c3.826,4.366,9.811,13.486,12.092,21.18.009.06.016.12.025.181H59.318c.009-.06.016-.118.025-.181,2.281-7.694,8.266-16.814,12.092-21.18A40.754,40.754,0,1,0,0,40.762ZM40.762,22.234A18.55,18.55,0,0,0,22.234,40.762a3.706,3.706,0,0,1-7.411,0,25.968,25.968,0,0,1,25.94-25.94,3.706,3.706,0,0,1,0,7.411Z"
                            transform="translate(43.33 19.361)" fill="" />
                    </g>
                </svg>

            </div>
            <div class="flex flex-col text-center dark:text-white">
                <h1 class="text-6xl">{{online}} <span class="text-lg">/{{online+offline}}</span>
                </h1>
                <div class="flex items-baseline gap-3">
                    <h3 class="text-xl">{{online}} <p class="dark:text-cyan-300 text-green-700 text-xs">Online</p>
                    </h3>
                    <div class="border border-slate-500 h-6 my-auto"></div>
                    <h3 class="text-2xl">{{offline}} <p class="text-red-400 text-xs">Offline
                        </p>
                    </h3>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import _ from 'lodash'

    export default {
        data() {
            return {
                online: 0,
                offline: 0
            }
        },

        async created() {
            await this.getStatus()
            setInterval(async () => {
                await this.getStatus()
            }, this.$interval_time);

        },
        methods: {
            getStatus() {
                var data = {
                    sensor: 'smart_light'
                }
                return this.$store.dispatch('data/getStatus', data).then((res) => {
                    var data = res.data
                    this.online = data.online
                    this.offline = data.offline
                })
            },
            fullview() {
                this.$router.push('/view/smart_light')
            }
        }
    }
</script>