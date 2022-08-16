<template>
    <div class="block-widgets col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">Smart Lighting</span>
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg @click="fullview" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="43.026"
                height="43.026" viewBox="0 0 43.026 43.026">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
            </svg>
        </div>
        <div class="detail gap-10">
            <div>
                <img src="@/assets/icon_lighting.png" alt="" class="w-32">
            </div>
            <div class="flex flex-col text-center text-white">
                <h1 class="text-6xl">{{(online == null?0:online.length)}} <span
                        class="text-lg">/{{list_device.length}}</span></h1>
                <div class="flex items-baseline gap-3">
                    <h3 class="text-xl">{{(online == null?0:online.length)}} <p class="text-cyan-300 text-xs">Online</p>
                    </h3>
                    <div class="border border-slate-500 h-6 my-auto"></div>
                    <h3 class="text-2xl">{{(offline == null?0:offline.length)}} <p class="text-red-400 text-xs">Offline
                        </p>
                    </h3>
                </div>

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
                list_device: [],
                lamp_status: [],
                online: null,
                offline: null
            }
        },
        computed: {
            statusAPI() {
                return this.$store.state.server.api_sensor.connect;
            },
            api_baseURL() {
                return localStorage.getItem('api_baseURL');
            },
            dataSensorAPI() {
                return this.$store.getters['auth/dataPlanet']
            }
        },
        async created() {
            await this.getListDeviceLT()
            if (this.statusAPI) {
                this.clearData()
                this.getStatusLamp()
                setInterval(() => {
                    this.clearData()
                    this.getStatusLamp()
                }, this.$interval_time);
            }else{
                this.clearData()
                this.getDataformBackup()
            }

        },
        methods: {
            getListDeviceLT() {
                return this.$store.dispatch('widget/getListDeviceID', 2).then((res) => {
                    this.list_device = res.data
                })
            },
            getDataformBackup() {
            
                this.list_device.forEach(el => {
                  this.$store.dispatch('server/getDataBackup', el.id).then((res) => {
                        var data = JSON.parse(res.data.data_value)
                         this.lamp_status.push({
                                id: el,
                                lamp: data
                            })
                        this.setStatus()
                    })
                })
                return Promise.all(promises).then(() => {})
            },
            getStatusLamp() {
                this.list_device.forEach(el => {
                    var api_last = 'api/plugins/telemetry/DEVICE/' + el.device_id + '/values/timeseries'
                    var options = {
                        headers: authHeader()
                    }
                    axios.get(this.api_baseURL + api_last, options).then((res) => {
                        if (AuthService.Expire(res.data)) {
                            this.$store.dispatch('auth/login_planet', this.dataSensorAPI).then((
                                res) => {
                                var success = res.data.success
                                if (success) {
                                    this.$forceUpdate()
                                }
                            })
                        } else {
                            this.$store.dispatch('server/backupData', {
                                device: el.id,
                                data: res.data,
                                type:'last_data'
                            });
                            var data = res.data.lamp[0]
                            this.lamp_status.push({
                                id: el,
                                lamp: data.value
                            })
                            this.setStatus()
                        }
                    })
                });
            },
            setStatus() {
                this.online = this.lamp_status.filter(s => s.lamp === 'on')
                this.offline = this.lamp_status.filter(s => s.lamp === 'off')
            },
            clearData() {
                this.lamp_status = []
                this.online = null
                this.offline = null

            },
            fullview() {
                this.$router.push('/view/smart_light')
            }
        }
    }
</script>