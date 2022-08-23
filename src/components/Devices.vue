<template>
    <div class="block-layer relative mb-3 mt-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            Devices
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 43.026 43.026">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
            </svg>

        </div>
        <div class="flex flex-col items-end w-32 ml-10 mt-5"> <span class="text-green-500 text-2xl">{{online}}
                Online</span>
            <span class="text-red-500 text-2xl">{{offline}} Offine</span> </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import AuthService from '@/services/auth.services'
    import authHeader from '@/services/auth.header'

    export default {
        data() {
            return {
                list_device: [],
                online: 0,
                offline: 0
            }
        },
        async created() {
            await this.getDevice()
            this.getStatus()
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
        methods: {
            getDevice() {
                return this.$store.dispatch('widget/getDeviceAll').then((res) => {
                    var data = res.data
                    this.list_device = data
                })
            },
            getStatus() {
                var options = {
                    headers: authHeader()
                }
                this.list_device.forEach(el => {
                    var api_attr = 'api/plugins/telemetry/DEVICE/' + el.device_id + '/values/attributes'
                    axios.get(this.api_baseURL + api_attr, options).then((res) => {
                        if (AuthService.Expire(res.data)) {
                            this.$store.dispatch('auth/login_planet', this.dataSensorAPI).then((
                                res) => {
                                var success = res.data.success
                                if (success) {
                                    this.$forceUpdate()
                                }
                            })
                        } else {

                            var data = res.data
                            data.forEach(el => {
                                if (el.key === 'active') {
                                    if (el.value === true) {
                                        this.online += 1
                                    } else {
                                        this.offline += 1
                                    }
                                }
                            });
                        }
                    }).catch((err) => {
                        if (err.code === "ECONNABORTED") {
                            this.$store.dispatch('server/setStatus', false)
                        }
                        if (err.code === "ERR_NETWORK") {
                            this.$store.dispatch('server/setStatus', false)
                        }
                    })
                })
            }
        }
    }
</script>