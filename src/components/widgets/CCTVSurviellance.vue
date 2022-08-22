<template>
    <div class="block-widgets col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">CCTV Surviellance</span>
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026" viewBox="0 0 43.026 43.026">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
            </svg>
        </div>
        <div class="detail 4 detail-inner">
            <ChartCCTV/>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import AuthService from '../../services/auth.services'
    import authHeader from '../../services/auth.header'
    import * as dayjs from 'dayjs'
    import ChartCCTV from '../ChartCCTV.vue'

    export default {
        data() {
            return {
                list_device: [],
            }
        },
        components:{
            ChartCCTV
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
            await this.getListDeviceCam()
            await this.getDataCam()
        },
        methods: {
            getListDeviceCam() {
                return this.$store.dispatch('widget/getListDeviceID', 4).then((res) => {
                    this.list_device = res.data
                })
            },
            getDataCam() {
                const limit = 10000
                const start = dayjs().startOf('day').valueOf()
                const end = dayjs().endOf('day').valueOf()
                const keys = ['faceReg_alllist','tracking','wrongDirection','prohibitedArea','lpr_allplate']

                var options = {
                    headers: authHeader(),
                    params:{
                        limit:limit,
                        startTs:start,
                        endTs:end
                    }
                }
                var face_data = {}
                var traffic_data = {}
                var park_data = {}
                var lprplate_data = {}

                this.list_device.forEach(el => {

                    let api_last = 'api/plugins/telemetry/DEVICE/' + el.device_id + '/values/timeseries'
                   
                        keys.forEach(k=>{
                            options['params']['keys'] = k
                            
                            axios.get(this.api_baseURL + api_last, options).then((res) => {
                                if(Object.keys(res.data).length > 0 && res.data.hasOwnProperty(keys[0])){
                                    face_data[keys[0]] = res.data[keys[0]]
                                }
                                if(Object.keys(res.data).length > 0 && res.data.hasOwnProperty(keys[1])){
                                    traffic_data[keys[1]] = res.data[keys[1]]
                                }
                                if(Object.keys(res.data).length > 0 && res.data.hasOwnProperty(keys[2])){
                                    traffic_data[keys[2]] = res.data[keys[2]]
                                }
                                if(Object.keys(res.data).length > 0 && res.data.hasOwnProperty(keys[3])){
                                    traffic_data[keys[3]] = res.data[keys[3]]
                                }
                                if(Object.keys(res.data).length > 0 && res.data.hasOwnProperty(keys[4])){
                                    park_data[keys[4]] = res.data[keys[4]]
                                }
                                if(Object.keys(res.data).length > 0 && res.data.hasOwnProperty(keys[5])){
                                    lprplate_data[keys[5]] = res.data[keys[5]]
                                }
                            })
                            
                         })
                        
                
                });
                console.log(face_data);
                console.log(traffic_data);
                console.log(park_data);
                console.log(lprplate_data);
            }
        }
    }
</script>