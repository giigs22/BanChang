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
                <h1 class="text-6xl">{{online}} <span class="text-lg">/{{list_device.length}}</span></h1>
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
    import _ from 'lodash'
    import AuthService from '../../services/auth.services'
    import authHeader from '../../services/auth.header'

    export default {
        data() {
            return {
                online: 0,
                offline: 0,
                list_device:[],
                group_cam:[],
                raw_data:{
                    on:null,
                    off:null
                }
            }
        },
         computed:{
            statusAPI(){
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
            await this.getListDeviceCam()
            this.setGroupCam()

            if(this.statusAPI){
                this.clearData()
                await this.getCamActive()
                this.setData()
            
            setInterval(async() => {
                this.clearData()
                await this.getCamActive()
                this.setData()
              
            }, this.$interval_time);
            }
        },
        methods: {
            getListDeviceCam(){
                return this.$store.dispatch('widget/getListDeviceID', 4).then((res) => {
                    this.list_device = res.data
                })
            },
            setGroupCam(){
                var grouped = _.groupBy(this.list_device, d => d.type);
                this.group_cam = grouped
            },
            setData(){
                var o = JSON.parse(JSON.stringify(this.raw_data.on))
                var f = JSON.parse(JSON.stringify(this.raw_data.off))
                this.online = o.length
                this.offline = f.length
            }, 
            getCamActive() {
                var g = this.group_cam
                var options = {
                        headers: authHeader()
                }
                var api_baseURL = this.api_baseURL
                var dataSensorAPI = this.dataSensorAPI
                var store = this.$store
                var online = []
                var offline = []
                var promises = []

                Object.keys(g).forEach(function (key){
                    var child = g[key]
                    child.forEach(el => {
                         var api_attr = 'api/plugins/telemetry/DEVICE/' + el.device_id + '/values/attributes'
                   
                    promises.push(axios.get(api_baseURL + api_attr, options).then((res) => {
                        if (AuthService.Expire(res.data)) {
                              store.dispatch('auth/login_planet', dataSensorAPI).then((
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
                                        online.push(el.value)
                                    } else {
                                        offline.push(el.value)
                                    }
                                }
                            });
                        }
                       
                    }))
                    });
                });
                
               this.raw_data ={
                on:online,
                off:offline
               }

               return Promise.all(promises).then(()=>{})
                
            },
            clearData() {
                this.online = 0
                this.offline = 0
               
            }
        }
    }
</script>