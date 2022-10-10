<template>
    <div class="block-widgets col-span-12 lg:col-span-4">
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
            <ChartCCTV :data_set="chart_data" />
        </div>
    </div>
</template>
<script>
    import * as dayjs from 'dayjs'
    import ChartCCTV from '../ChartCCTV.vue'
    import _ from 'lodash'

    export default {
        data() {
            return {
                chart_data: null,
                set_data:[],
                offline:0
            }
        },
        components: {
            ChartCCTV
        },
        async created() {
           
            await this.getData()
            await this.getStatus()
            this.setChartData()
            
            setInterval(async() => {
                await this.getData()
                await this.getStatus()
                this.setChartData()
            }, this.$interval_time);
            
        },
        methods: {
            getData(){
                var data = {
                    type:'lastdata',
                    sensor:'cctv_sur',
                    option:'chartdata'
                }
                return this.$store.dispatch('data/getData',data).then((res)=>{
                    var data = res.data
                    this.set_data = data
                })

            },
            getStatus(){
                var data = {
                    sensor:'cctv'
                }
                return this.$store.dispatch('data/getStatus',data).then((res)=>{
                    var data = res.data
                    this.offline = data.offline
                })
            },
            setChartData(){
                    
                    var camera_malfunction = this.offline
                    var trespasser = 0
                    var suspected_face_detection = 0
                    var group_cluster_detection = 0
                    var traffic_violation = 0
                    var parking_violation = 0

                    var faceReg_alllist_daily = _.cloneDeep(this.set_data.faceReg_alllist_daily)
                    var faceReg_blacklist_daily = _.cloneDeep(this.set_data.faceReg_blacklist_daily)
                    var prohibitedArea_daily = _.cloneDeep(this.set_data.prohibitedArea_daily)
                    var tracking_daily = _.cloneDeep(this.set_data.tracking_daily)
                    var wrongDirection_daily = _.cloneDeep(this.set_data.wrongDirection_daily)
                    var prohibitedParking_daily = _.cloneDeep(this.set_data.prohibitedParking_daily)

                    faceReg_alllist_daily.forEach(el=>{
                        trespasser += el.value
                    })
                    faceReg_blacklist_daily.forEach(el=>{
                        suspected_face_detection += el.value
                    })
                    prohibitedArea_daily.forEach(el=>{
                        traffic_violation += el.value
                    })
                    tracking_daily.forEach(el=>{
                        traffic_violation += el.value
                    })
                    wrongDirection_daily.forEach(el=>{
                        traffic_violation += el.value
                    })
                    prohibitedParking_daily.forEach(el=>{
                        parking_violation += el.value
                    })

                    var chart_data = [camera_malfunction, trespasser, suspected_face_detection, group_cluster_detection,
                        traffic_violation, parking_violation
                    ]
                    this.chart_data = chart_data
            }
        }
    }
</script>