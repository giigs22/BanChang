<template>
    <div class="block-widgets col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">Free WiFi</span>
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026" viewBox="0 0 43.026 43.026">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
            </svg>
        </div>
        <div class="detail">
            <div>
                <img src="@/assets/icon_wifi.png" alt="" class="w-32">
            </div>
            <div class="flex flex-col justify-center content-center items-center text-white">
                <h1 class="text-6xl">{{online}} <span class="text-lg">/{{ap_id.length}}</span></h1>
                <div class="flex items-baseline gap-3">
                    <h3 class="text-xl">{{online}} <p class="text-cyan-300 text-xs">Online</p>
                    </h3>
                    <div class="border border-slate-500 h-6 my-auto"></div>
                    <h3 class="text-2xl">{{offline}} <p class="text-red-400 text-xs">Offline</p>
                    </h3>
                </div>
                <p>Use <span class="text-2xl text-cyan-400">{{users}}</span> Users</p>
                <p>User Average <span class="text-2xl text-indigo-400">{{avg_users}}</span> Users</p>
            </div>
        </div>

    </div>
</template>
<script>
    import axios from 'axios'
    import AuthService from '../../services/auth.services'
    import authHeader from '../../services/auth.header'

    export default {
        data() {
            return {
                ap_id: [
                    'c8b894b0-3174-11ec-a1c8-bbaa91a83038',
                    'c7535f60-3174-11ec-a1c8-bbaa91a83038',
                ],
                client: [],
                status: [],
                online: 0,
                offline: 0,
                users: 0,
                avg_users: 0,
            }
        },
        created() {
            this.getAPData()
        },
        mounted() {
            setInterval(() => {
                this.clearData()
                this.getAPData()
            }, this.$interval_time);
        },
        methods: {
            getAPData() {
                this.ap_id.forEach(el => {
                    var api_last = 'api/plugins/telemetry/DEVICE/' + el + '/values/timeseries'
                    var options = {
                        headers: authHeader()
                    }
                    axios.get(this.$api_baseURL + api_last, options).then((res) => {
                        if (AuthService.Expire(res.data)) {
                            this.$store.dispatch('auth/logout')
                        } else {
                            var data = res.data
                            this.client.push(data.client[0].value)
                            this.status.push({
                                id: el,
                                status: data.status[0].value
                            })
                            this.setData()
                        }
                    })
                });
            },
            setData() {
                var sum_client = 0;
                var count_avg = 0;
                var offline = 0;
                var online = 0;

                this.client.forEach(el => {
                    if (el > 0) {
                        count_avg += 1
                    }
                    sum_client += parseInt(el)
                });

                offline = this.status.filter(e => e.status === 'offline').length
                online = this.status.filter(e => e.status !== 'offline').length
                this.offline = offline
                this.online = online
                this.users = sum_client
                var avg_users = sum_client / count_avg;
                this.avg_users = isNaN(avg_users.toFixed(2)) ? 0 : avg_users.toFixed(2)
            },
            clearData() {
                this.client = []
                this.status = []
                this.online = 0
                this.offline = 0
                this.users = 0
                this.avg_users = 0
            }
        }
    }
</script>