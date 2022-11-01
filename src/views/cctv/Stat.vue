<template>
    <ul class="dark:text-white flex text-lg text-center border-b border-gray-600">
        <li class="w-1/2 py-1 px-3 dark:hover:bg-gray-500" :class="[tab==1?'dark:bg-gray-500 bg-slate-50':'']" @click="tab=1">{{$t('event')}}</li>
        <li class="w-1/2 py-1 px-3 dark:hover:bg-gray-500" :class="[tab==2?'dark:bg-gray-500 bg-slate-50':'']" @click="tab=2">{{$t('parking')}}</li>
    </ul>
    <div id="tab1" v-if="tab==1">
        <ul class="dark:text-white p-2 list-event">
            <li>{{$t('camera_malfunction')}} <span class="text-red-600">{{camera_malfunction}}</span></li>
            <li>{{$t('trespasser')}} <span class="text-red-600">{{trespasser}}</span></li>
            <li>{{$t('suspected_face_detection')}} <span class="text-red-600">{{suspected_face_detection}}</span></li>
            <li>{{$t('group_cluster_detection')}} <span class="text-red-600">{{group_cluster_detection}}</span></li>
            <li>{{$t('traffic_violation')}} <span class="text-red-600">{{traffic_violation}}</span></li>
            <li>{{$t('parking_violation')}} <span class="text-red-600">{{parking_violation}}</span></li>
        </ul>
    </div>
    <div id="tab2" v-if="tab==2">
        <ul class="dark:text-white p-2 list-event">
            <li>{{$t('status')}} <span class="text-green-600">Normal</span></li>
            <li>{{$t('occupied_parking')}} <span class="text-blue-600">0</span></li>
            <li>{{$t('vacant_parking')}} <span class="text-purple-600">0</span></li>

        </ul>
    </div>
</template>
<script>
    import _ from 'lodash'
    export default {
        props: ['status'],
        data() {
            return {
                tab: 1,
                set_data: [],
                camera_malfunction: 0,
                trespasser: 0,
                suspected_face_detection: 0,
                group_cluster_detection: 0,
                traffic_violation: 0,
                parking_violation: 0,
            }
        },
        async created() {
            await this.getData()
            this.setStatData()
        },
        methods: {
            getData() {
                var data = {
                    type: 'lastdata',
                    sensor: 'cctv_sur',
                    option: 'chartdata'
                }
                return this.$store.dispatch('data/getData', data).then((res) => {
                    var data = res.data
                    this.set_data = data
                })

            },
            setStatData() {

                var camera_malfunction = 0
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

                faceReg_alllist_daily.forEach(el => {
                    trespasser += el.value
                })
                faceReg_blacklist_daily.forEach(el => {
                    suspected_face_detection += el.value
                })
                prohibitedArea_daily.forEach(el => {
                    traffic_violation += el.value
                })
                tracking_daily.forEach(el => {
                    traffic_violation += el.value
                })
                wrongDirection_daily.forEach(el => {
                    traffic_violation += el.value
                })
                prohibitedParking_daily.forEach(el => {
                    parking_violation += el.value
                })
                this.camera_malfunction = this.status.offline
                this.trespasser = trespasser
                this.suspected_face_detection = suspected_face_detection
                this.group_cluster_detection = group_cluster_detection
                this.traffic_violation = traffic_violation
                this.parking_violation = parking_violation
            }
        }
    }
</script>