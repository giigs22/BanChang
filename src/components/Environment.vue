<template>
    <h2 class="text-lg text-white mb-2">{{$t('environment')}}</h2>
    <div class="top-bar">
        <div class="wether flex flex-wrap w-1/4 py-3 px-7">
            <div class="flex flex-col text-center cursor-pointer" @click="$router.push('/view/aqi_healthy')">
                <div class="icon-env-main" :style="{background:aqi.level.color}">
                    <img :src="'/src/assets/'+((aqi.level.icon == null)?'icon_aqi_1.png':aqi.level.icon)" alt="">
                </div>
                <h3 class="text-lg text-white">{{(aqi.level.label == null?'':aqi.level.label)}}</h3>
            </div>
            <div class="flex flex-col text-center ml-auto">
                <h3 class="text-lg text-white">{{today.toLocaleDateString('en-US',{ weekday: 'long' }).split(' ')[0]}}
                </h3>
                <img src="@/assets/icon_clound.png" alt="">
                <div class="flex justify-between">
                    <span class="text-sky-300 text-sm">{{avg_data.temp}}c°</span>
                    <!-- <span class="text-yellow-300 text-sm">25c°</span> -->
                </div>
            </div>
        </div>
        <div class="flex gap-1">
            <div class="aqi block-env">
                <h3>AQI</h3>
                <span class="text-xs my-1">{{aqi.value}}</span>
                <div class="icon-env">
                    <img :src="'/src/assets/'+((aqi.level.icon == null)?'icon_aqi_1.png':aqi.level.icon)" />
                </div>
                <span class="text-xs my-1">{{aqi.level.label}}</span>
            </div>
            <div class="co2 block-env">
                <h3>Co2</h3>
                <span class="text-xs my-1">{{avg_data.co2}}</span>
                <div class="icon-env">
                    <img src="@/assets/icon_co2.png" />
                </div>
                <span class="text-xs my-1">{{_co2.label}}</span>
            </div>
            <div class="pm25 block-env">
                <h3>PM2.5</h3>
                <span class="text-xs my-1">{{avg_data.pm25}}</span>
                <div class="icon-env">
                    <img src="@/assets/icon_pm25.png" />
                </div>
                <span class="text-xs my-1">{{_pm25.label}}</span>
            </div>
            <div class="pm10 block-env">
                <h3>PM10</h3>
                <span class="text-xs my-1">-</span>
                <div class="icon-env">
                    <img src="@/assets/icon_pm10.png" />
                </div>
                <span class="text-xs my-1">-</span>
            </div>
            <div class="hum block-env">
                <h3>Humidity</h3>
                <span class="text-xs my-1">{{avg_data.hum}}</span>
                <div class="icon-env">
                    <img src="@/assets/icon_hum.png" />
                </div>
                <span class="text-xs my-1">-</span>
            </div>
            <div class="uv block-env">
                <h3>UV</h3>
                <span class="text-xs my-1">{{avg_data.uv}}</span>
                <div class="icon-env">
                    <img src="@/assets/icon_uv.png" />
                </div>
                <span class="text-xs my-1">{{_uv.label}}</span>
            </div>
            <div class="voc block-env">
                <h3>VOC</h3>
                <span class="text-xs my-1">{{avg_data.voc}}</span>
                <div class="icon-env">
                    <img src="@/assets/icon_voc.png" />
                </div>
                <span class="text-xs my-1">-</span>
            </div>
        </div>

    </div>
</template>
<script>
    import axios from 'axios'
    import AuthService from '../services/auth.services'
    import authHeader from '../services/auth.header'
    import aqical from '../services/env.aqi'
    import _ from 'lodash'

    export default {
        data() {
            return {
                today: new Date(),
                aqi: {
                    value: 0,
                    level: {
                        label: null,
                        icon: null,
                        color: null
                    }
                },
                _pm25: {
                    label: null,
                    color: null
                },
                _co2: {
                    label: null,
                    color: null
                },
                _uv: {
                    label: null,
                    color: null
                },
                _voc: {
                    label: null,
                    color: null
                },
                pm25: [],
                hum: [],
                temp: [],
                co2: [],
                uv: [],
                voc: [],
                avg_data: {
                    co2: 0,
                    uv: 0,
                    voc: 0,
                    pm25: 0,
                    hum: 0,
                    temp: 0
                },
                list_device: [],
                backup_data: [],
                location_data:[],
                status_device:{
                    online:0,
                    offline:0
                },
                map_data:[]

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
            },
            env_sensor() {
                return this.list_device.filter(d => {
                    return d.type == 'ENV'
                })
            },
            lnr_sensor() {
                return this.list_device.filter(d => {
                    return d.type == 'LNR'
                })
            },
        },
        async created() {
            await this.getListDeviceAQI()
            if (this.statusAPI) {
                this.clearData()
                await this.getEnvSensor()
                await this.getLNRSensor()
                this.calAvg()
                this.setStatusDevice()
                this.backupData()
                this.backupLocation()
                this.setMapData()
                setInterval(async () => {
                    this.clearData()
                    await this.getEnvSensor()
                    await this.getLNRSensor()
                    this.calAvg()
                    this.setStatusDevice()
                    this.backupData()
                    this.backupLocation()
                    this.setMapData()
                }, this.$interval_time);
            } else {
                this.clearData()
                await this.getDataformBackup();
                this.calAvg()
                this.setStatusDevice()
            }
        },
        methods: {
            getListDeviceAQI() {
                return this.$store.dispatch('widget/getListDeviceID', 1).then((res) => {
                    this.list_device = res.data
                })
            },
            setStatusDevice(){
                this.$store.dispatch('widget/setStatusDevice',{type:'aqi',data:this.status_device})
            },
            getDataformBackup() {
                var promises = []

                this.env_sensor.forEach(el => {
                    promises.push(this.$store.dispatch('server/getDataBackup', el.id).then((res) => {
                        var data = JSON.parse(res.data.data_value)
                        data['id'] = el.id
                        this.setDataCal('ENV', data)


                    }))
                })
                this.lnr_sensor.forEach(el => {
                    promises.push(this.$store.dispatch('server/getDataBackup', el.id).then((res) => {
                        var data = JSON.parse(res.data.data_value)
                        data['id'] = el.id
                        this.setDataCal('LNR', data)


                    }))
                })
                return Promise.all(promises).then(() => {})
            },
            getEnvSensor() {
                var options = {
                    headers: authHeader()
                }
                var promises = []

                this.env_sensor.forEach(el => {
                    var api_last = 'api/plugins/telemetry/DEVICE/' + el.device_id + '/values/timeseries'
                    var api_attr = 'api/plugins/telemetry/DEVICE/' + el.device_id + '/values/attributes'

                    //Last Data From Sensor
                    promises.push(
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

                               //Backup data
                                this.backup_data.push({device:el.id,data:res.data,type:'last_data'})
                                this.map_data.push({device:el.id,data:res.data,name:el.location_name == null?el.device_name:el.location_name})

                                var data = res.data
                                data['id'] = el.id
                                this.setDataCal('ENV', data)
                                


                            }
                        }).catch((err) => {
                            if (err.code === "ECONNABORTED" || err.code === "ERR_NETWORK") {
                                this.$store.dispatch('server/setStatus', {type:'server_sensor',value:false})
                            }
                        }))
                        //Attribute Active Status
                        promises.push(
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
                                var lat_key = _.findKey(data,function(k){
                                    return k.key == 'lat' ||  k.key == 'latitude'
                                })
                                var long_key = _.findKey(data,function(k){
                                    return k.key == 'long' ||  k.key == 'longitude'
                                }) 
                            //Backup Location
                            this.location_data.push({device:el.id,data:{lat:data[lat_key].value,long:data[long_key].value}})
                            this.map_data.push({device:el.id,location:{lat:data[lat_key].value,long:data[long_key].value}})


                                data.forEach(el2 => {
                                    if (el2.key === 'active') {
                                        if (el2.value === true) {
                                            this.status_device.online += 1
                                            this.map_data.push({device:el.id,status:true})

                                        } else {
                                            this.status_device.offline += 1
                                            this.map_data.push({device:el.id,status:false})
                                        }
                                    }
                                });
                            }
                        }).catch((err) => {
                            if (err.code === "ECONNABORTED") {
                                this.$store.dispatch('server/setStatus',{type:'server_data',value:false})
                            }
                            if (err.code === "ERR_NETWORK") {
                                this.$store.dispatch('server/setStatus',{type:'server_data',value:false})
                            }
                        }))
                });
                return Promise.all(promises).then(() => {})
            },
            getLNRSensor() {
                var options = {
                    headers: authHeader(),
                }
                var promises = []

                this.lnr_sensor.forEach(el => {
                    var api_last = 'api/plugins/telemetry/DEVICE/' + el.device_id + '/values/timeseries'
                    var api_attr = 'api/plugins/telemetry/DEVICE/' + el.device_id + '/values/attributes'

                    //Last Data From Sensor
                    promises.push(axios.get(this.api_baseURL + api_last, options).then((res) => {
                        if (AuthService.Expire(res.data)) {
                            this.$store.dispatch('auth/login_planet', this.dataSensorAPI).then((
                                res) => {
                                var success = res.data.success
                                if (success) {
                                    this.$forceUpdate()
                                }
                            })
                        } else {
                            //Backup data
                            this.backup_data.push({device:el.id,data:res.data,type:'last_data'})
                            this.map_data.push({device:el.id,data:res.data,name:el.location_name == null?el.device_name:el.location_name})

                            var data = res.data
                            data['id'] = el.id
                            this.setDataCal('LNR', data)

                        }
                    }).catch((err) => {
                        if (err.code === "ECONNABORTED") {
                            this.$store.dispatch('server/setStatus',{type:'server_data',value:false})
                        }
                        if (err.code === "ERR_NETWORK") {
                            this.$store.dispatch('server/setStatus',{type:'server_data',value:false})
                        }
                    }))

                    //Attribute Active Status
                        promises.push(
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
                                
                                var lat_key = _.findKey(data, function (k) {
                                    return k.key == 'lat' || k.key == 'latitude'
                                })
                                var long_key = _.findKey(data, function (k) {
                                    return k.key == 'long' || k.key == 'longitude'
                                })
                                
                                //Backup Location
                                this.location_data.push({device:el.id,data:{lat:data[lat_key].value,long: data[long_key].value}})
                                this.map_data.push({device:el.id,location:{lat:data[lat_key].value,long:data[long_key].value}})

                            
                                data.forEach(el2 => {
                                    if (el2.key === 'active') {
                                        if (el2.value === true) {
                                            this.status_device.online += 1
                                            this.map_data.push({device:el.id,status:true})

                                        } else {
                                            this.status_device.offline += 1
                                            this.map_data.push({device:el.id,status:false})

                                        }
                                    }
                                });
                            }
                        }).catch((err) => {
                            if (err.code === "ECONNABORTED") {
                                this.$store.dispatch('server/setStatus',{type:'server_data',value:false})
                            }
                            if (err.code === "ERR_NETWORK") {
                                this.$store.dispatch('server/setStatus',{type:'server_data',value:false})
                            }
                        }))
                });

                return Promise.all(promises).then(() => {})
            },
            setDataCal(type, data) {
                if (type == 'ENV') {
                    this.pm25.push({
                        id: data.id,
                        data: data.pm25[0]
                    })
                    this.temp.push({
                        id: data.id,
                        data: data.temp[0]
                    })
                    this.hum.push({
                        id: data.id,
                        data: data.humid[0]
                    })
                } else {
                    this.co2.push({
                        id: data.id,
                        data: data.co2[0]
                    })
                    this.uv.push({
                        id: data.id,
                        data: data.uv[0]
                    })
                    this.voc.push({
                        id: data.id,
                        data: data.voc[0]
                    })
                }
            },
            calAvg() {
                var count_uv = 0
                var sum_uv = 0
                var count_voc = 0
                var sum_voc = 0
                var count_co2 = 0
                var sum_co2 = 0
                var count_pm25 = 0
                var sum_pm25 = 0
                var count_temp = 0
                var sum_temp = 0
                var count_hum = 0
                var sum_hum = 0

                this.pm25.forEach(el => {
                    if (parseFloat(el.data.value) > 0) {
                        count_pm25 += 1
                    }
                    sum_pm25 += parseFloat(el.data.value)
                })
                this.temp.forEach(el => {
                    if (parseFloat(el.data.value) > 0) {
                        count_temp += 1
                    }
                    sum_temp += parseFloat(el.data.value)
                })
                this.hum.forEach(el => {
                    if (parseFloat(el.data.value) > 0) {
                        count_hum += 1
                    }
                    sum_hum += parseFloat(el.data.value)
                })

                this.uv.forEach(el => {
                    if (parseFloat(el.data.value) > 0) {
                        count_uv += 1
                    }
                    sum_uv += parseFloat(el.data.value)
                })

                this.voc.forEach(el => {
                    if (parseFloat(el.data.value) > 0) {
                        count_voc += 1
                    }
                    sum_voc += parseFloat(el.data.value)

                })

                this.co2.forEach(el => {
                    if (parseFloat(el.data.value) > 0) {
                        count_co2 += 1
                    }
                    sum_co2 += parseFloat(el.data.value)
                })

                var avg_pm25 = sum_pm25 / count_pm25
                var avg_temp = sum_temp / count_temp
                var avg_hum = sum_hum / count_hum
                var avg_uv = sum_uv / count_uv
                var avg_voc = sum_voc / count_voc
                var avg_co2 = sum_co2 / count_co2

                this.avg_data.pm25 = (isNaN(avg_pm25)) ? 0 : Math.round(avg_pm25)
                this.avg_data.temp = (isNaN(avg_temp)) ? 0 : Math.round(avg_temp)
                this.avg_data.hum = (isNaN(avg_hum)) ? 0 : Math.round(avg_hum)
                this.avg_data.uv = (isNaN(avg_uv)) ? 0 : avg_uv.toFixed(2)
                this.avg_data.voc = (isNaN(avg_voc)) ? 0 : avg_voc.toFixed(2)
                this.avg_data.co2 = (isNaN(avg_co2)) ? 0 : avg_co2.toFixed(2)

                this.aqi.value = Math.ceil(aqical.CalAQI(this.avg_data.pm25))
                this.aqi.level = aqical.LevelAQI(this.avg_data.pm25)

                // Level
                this._co2 = aqical.LevelCo2(this.avg_data.co2)
                this._uv = aqical.LevelUV(this.avg_data.uv)
                this._pm25 = aqical.LevelPM25(this.avg_data.pm25)

                this.$store.dispatch('widget/setPM25',this.avg_data.pm25)

            },
            clearData() {
                this.pm25 = []
                this.hum = []
                this.temp = []
                this.co2 = []
                this.uv = []
                this.voc = []
                this.status_device={online:0,offline:0}
                this.backup_data = []
                this.location_data = []
                this.map_data = []
            },
            backupData(){
                 this.$store.dispatch('server/backupData', this.backup_data);
            },
            backupLocation(){
                this.$store.dispatch('server/backupLocation',this.location_data);
            },
            setMapData(){
                var group_data = _.groupBy(this.map_data, m=>m.device)
                this.$store.dispatch('map/setData',{type:'aqi',group_data:group_data})
            }

        }
    }
</script>