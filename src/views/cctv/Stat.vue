<template>
    <ul class="dark:text-white flex text-lg text-center border-b border-gray-600">
        <li class="w-1/2 py-1 px-3 dark:hover:bg-gray-500" :class="[tab==1?'dark:bg-gray-500 bg-slate-50':'']" @click="tab=1">{{$t('event')}}</li>
        <li class="w-1/2 py-1 px-3 dark:hover:bg-gray-500" :class="[tab==2?'dark:bg-gray-500 bg-slate-50':'']" @click="tab=2">{{$t('parking')}}</li>
    </ul>
    <div id="tab1" v-if="tab==1">
        <ul class="dark:text-white p-2 list-event">
            <li>{{$t('face_recognition')}} <span class="text-red-600">{{face_recognition}}</span></li>
            <li>{{$t('camera_mulfunction')}} <span class="text-red-600">{{camera_mulfunction}}</span></li>
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
                face_recognition:0,
                camera_mulfunction: 0,
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
                    type: 'history',
                    sensor: 'cctv_sur',
                    option: 'chartdata'
                }
                return this.$store.dispatch('data/getData', data).then((res) => {
                    var data = res.data
                    this.set_data = data
                })

            },
            setStatData() {
                this.face_recognition = this.set_data.face_recognition
                this.camera_mulfunction = this.set_data.camera_mulfunction
                this.trespasser = this.set_data.trespasser
                this.suspected_face_detection = this.set_data.suspected_face_detection
                this.group_cluster_detection = this.set_data.group_cluster_detection
                this.traffic_violation = this.set_data.traffic_violation
                this.parking_violation = this.set_data.parking_violation
            }
        }
    }
</script>