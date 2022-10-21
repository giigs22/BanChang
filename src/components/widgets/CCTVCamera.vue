<template>
    <div class="block-widgets col-span-12 lg:col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">CCTV Camera</span>
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
                <svg class="bg-dark-light w-32" xmlns="http://www.w3.org/2000/svg" width="194.88" height="129.92" viewBox="0 0 194.88 129.92">
                    <path id="Path_1718" data-name="Path 1718"
                        d="M132.92,27.653v86.613H24.653V27.653H132.92M143.747,6H13.827A10.859,10.859,0,0,0,3,16.827V125.094A10.859,10.859,0,0,0,13.827,135.92h129.92a10.859,10.859,0,0,0,10.827-10.827V87.2l43.307,43.307V11.413L154.574,54.72V16.827A10.859,10.859,0,0,0,143.747,6Z"
                        transform="translate(-3 -6)" fill="" />
                </svg>

            </div>
            <div class="flex flex-col text-center dark:text-white">
                <h1 class="text-6xl">{{online}} <span class="text-lg">/{{online+offline}}</span></h1>
                <div class="flex items-baseline gap-3">
                    <h3 class="text-xl">{{online}} <p class="dark:text-cyan-300 text-green-700 text-xs">Online</p>
                    </h3>
                    <div class="border border-slate-500 h-6 my-auto"></div>
                    <h3 class="text-2xl">{{offline}} <p class="text-red-400 text-xs">Offline</p>
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
                offline: 0,
                list_device: [],
                group_cam: [],
                raw_data: {
                    on: null,
                    off: null
                },
                status_device: {
                    online: 0,
                    offline: 0
                },
                location_data: [],
                map_data: []
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
                    sensor: 'cctv'
                }
                return this.$store.dispatch('data/getStatus', data).then((res) => {
                    var data = res.data
                    this.online = data.online
                    this.offline = data.offline
                })
            }
        }
    }
</script>