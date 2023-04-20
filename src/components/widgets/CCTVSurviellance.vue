<template>
    <div class="block-widgets col-span-12 lg:col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">{{$t('cctv_survillance')}}</span>
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026" viewBox="0 0 43.026 43.026" class="bg-dark-light">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="" />
            </svg>
        </div>
        <div class="detail 4 detail-inner">
            <ChartCCTV :data_set="chart_data" />
        </div>
    </div>
</template>
<script>
    import dayjs from 'dayjs'
    import ChartCCTV from '../ChartCCTV.vue'
    import _ from 'lodash'

    export default {
        data() {
            return {
                chart_data: null,
                set_data:[],
            }
        },
        components: {
            ChartCCTV
        },
        async created() {
           
            await this.getData()
            this.setChartData()
            
            setInterval(async() => {
                await this.getData()
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
            setChartData(){
                    var face_recognition = this.set_data.face_recognition
                    var camera_mulfunction = this.set_data.camera_mulfunction
                    var trespasser = this.set_data.trespasser
                    var suspected_face_detection = this.set_data.suspected_face_detection
                    var group_cluster_detection = this.set_data.group_cluster_detection
                    var traffic_violation = this.set_data.traffic_violation
                    var parking_violation = this.set_data.parking_violation

                    var chart_data = [face_recognition,camera_mulfunction, trespasser, suspected_face_detection, group_cluster_detection,
                        traffic_violation, parking_violation
                    ]
                    
                    this.chart_data = chart_data
            }
        }
    }
</script>