<template>
    <div class="block-widgets col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">CCTV Camera</span>
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026" viewBox="0 0 43.026 43.026">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
            </svg>
        </div>
        <div class="detail gap-10">
            <div>
                <img src="@/assets/icon_cctv.png" alt="" class="w-32">
            </div>
            <div class="flex flex-col text-center text-white">
                <h1 class="text-6xl">{{online}} <span class="text-lg">/{{allcam}}</span></h1>
                <div class="flex items-baseline gap-3">
                    <h3 class="text-xl">{{online}} <p class="text-cyan-300 text-xs">Online</p>
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
    import axios from 'axios'
    import AuthService from '../../services/auth.services'
    import authHeader from '../../services/auth.header'

    export default {
        data() {
            return {
                online: 0,
                offline: 0,
                allcam: 0,
                cam_set_p01: [
                    'b8a7cc20-4854-11ec-9f75-bdae041d8bb7',
                    'bf52a540-4854-11ec-9f75-bdae041d8bb7',
                    'c5f31e20-4854-11ec-9f75-bdae041d8bb7',
                    'cf118f50-4854-11ec-9f75-bdae041d8bb7',
                ],
                cam_set_p02: [
                    '73bdbcf0-4854-11ec-9f75-bdae041d8bb7',
                    '32976c80-4854-11ec-9f75-bdae041d8bb7',
                    '3f07c7d0-4854-11ec-9f75-bdae041d8bb7',
                    '48490340-4854-11ec-9f75-bdae041d8bb7',
                ],
                cam_set_p03: [
                    '97f2fea0-4854-11ec-9f75-bdae041d8bb7',
                    '9f80e4c0-4854-11ec-9f75-bdae041d8bb7',
                    'a7004bf0-4854-11ec-9f75-bdae041d8bb7',
                    'b14d03f0-4854-11ec-9f75-bdae041d8bb7',
                ],
                cam_set_p04: [
                    '52ba3330-4854-11ec-9f75-bdae041d8bb7',
                    '5ca60680-4854-11ec-9f75-bdae041d8bb7',
                    '64f14930-4854-11ec-9f75-bdae041d8bb7',
                    '6c171eb0-4854-11ec-9f75-bdae041d8bb7',
                    '12d73830-4854-11ec-9f75-bdae041d8bb7',
                    '1cd33820-4854-11ec-9f75-bdae041d8bb7',
                    '24be0b51-4854-11ec-9f75-bdae041d8bb7',
                    '2c0dd700-4854-11ec-9f75-bdae041d8bb7',
                ],
                cam_set_p05: [
                    'd8139450-4853-11ec-9f75-bdae041d8bb7',
                    'f06e2b00-4853-11ec-9f75-bdae041d8bb7',
                    'fb2bcd40-4853-11ec-9f75-bdae041d8bb7',
                    '0632ad80-4854-11ec-9f75-bdae041d8bb7',
                ],
                cam_set_dc: [
                    '7ce1fa80-4854-11ec-9f75-bdae041d8bb7',
                    '8473b130-4854-11ec-9f75-bdae041d8bb7',
                ]
            }
        },
         computed:{
            statusAPI(){
                return this.$store.state.server.api_sensor.connect;
            }
        },
        created() {
            if(this.statusAPI){
            this.getCamActive()
            this.allcam = this.cam_set_p01.length + this.cam_set_p02.length + this.cam_set_p03.length + this
                .cam_set_p04
                .length + this.cam_set_p05.length + this.cam_set_dc.length   
            }
        },
        mounted() {
            if(this.statusAPI){
            setInterval(() => {
                this.clearData()
                this.getCamActive()
                this.allcam = this.cam_set_p01.length + this.cam_set_p02.length + this.cam_set_p03.length + this
                    .cam_set_p04
                    .length + this.cam_set_p05.length + this.cam_set_dc.length
            }, this.$interval_time);
            }
        },
        methods: {
            getCamActive() {

                //Pole01
                this.cam_set_p01.forEach(el => {
                    var api_attr = 'api/plugins/telemetry/DEVICE/' + el + '/values/attributes'
                    var options = {
                        headers: authHeader()
                    }
                    axios.get(this.$api_baseURL + api_attr, options).then((res) => {
                        if (AuthService.Expire(res.data)) {
                            this.$store.dispatch('auth/logout')
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
                    })
                });

                //Pole02
                this.cam_set_p02.forEach(el => {
                    var api_attr = 'api/plugins/telemetry/DEVICE/' + el + '/values/attributes'
                    var options = {
                        headers: authHeader()
                    }
                    axios.get(this.$api_baseURL + api_attr, options).then((res) => {
                        if (AuthService.Expire(res.data)) {
                            this.$store.dispatch('auth/logout')
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
                    })
                });
                //Pole03
                this.cam_set_p03.forEach(el => {
                    var api_attr = 'api/plugins/telemetry/DEVICE/' + el + '/values/attributes'
                    var options = {
                        headers: authHeader()
                    }
                    axios.get(this.$api_baseURL + api_attr, options).then((res) => {
                        if (AuthService.Expire(res.data)) {
                            this.$store.dispatch('auth/logout')
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
                    })
                });
                //Pole04
                this.cam_set_p04.forEach(el => {
                    var api_attr = 'api/plugins/telemetry/DEVICE/' + el + '/values/attributes'
                    var options = {
                        headers: authHeader()
                    }
                    axios.get(this.$api_baseURL + api_attr, options).then((res) => {
                        if (AuthService.Expire(res.data)) {
                            this.$store.dispatch('auth/logout')
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
                    })
                });
                //Pole05
                this.cam_set_p05.forEach(el => {
                    var api_attr = 'api/plugins/telemetry/DEVICE/' + el + '/values/attributes'
                    var options = {
                        headers: authHeader()
                    }
                    axios.get(this.$api_baseURL + api_attr, options).then((res) => {
                        if (AuthService.Expire(res.data)) {
                            this.$store.dispatch('auth/logout')
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
                    })
                });
                //DC
                this.cam_set_dc.forEach(el => {
                    var api_attr = 'api/plugins/telemetry/DEVICE/' + el + '/values/attributes'
                    var options = {
                        headers: authHeader()
                    }
                    axios.get(this.$api_baseURL + api_attr, options).then((res) => {
                        if (AuthService.Expire(res.data)) {
                            this.$store.dispatch('auth/logout')
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
                    })
                });
            },
            clearData() {
                this.online = 0
                this.offline = 0
                this.allcam = 0
            }
        }
    }
</script>