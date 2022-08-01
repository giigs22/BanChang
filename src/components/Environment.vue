<template>
    <h2 class="text-lg text-white mb-2">{{$t('environment')}}</h2>
    <div class="top-bar">
        <div class="wether flex w-1/4 py-3 px-7">
            <div class="flex flex-col text-center cursor-pointer" @click="$router.push('/view/aqi_healthy')">
                <div class="icon-env-main" :style="{background:aqi.level.color}">
                    <img :src="'/src/assets/'+((aqi.level.icon == null)?'icon_aqi_1.png':aqi.level.icon)" alt="">
                </div>
                <h3 class="text-lg text-white">{{(aqi.level.label == null?'':aqi.level.label)}}</h3>
            </div>
            <div class="flex flex-col text-center ml-32">
                <h3 class="text-lg text-white">{{today.toLocaleDateString('en-US',{ weekday: 'long' }).split(' ')[0]}}
                </h3>
                <img src="@/assets/icon_clound.png" alt="">
                <div class="flex justify-between">
                    <span class="text-sky-300 text-sm">{{temp}}c°</span>
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
                <span class="text-xs my-1">{{pm25.value}}</span>
                <div class="icon-env">
                    <img src="@/assets/icon_pm25.png" />
                </div>
                <span class="text-xs my-1">{{pm25.level.label}}</span>
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
                <span class="text-xs my-1">{{hum}}</span>
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
    export default {
        data() {
            return {
                pm25: {
                    value: 0,
                    level: {
                        label: null,
                        color: null
                    }
                },
                aqi: {
                    value: 0,
                    level: {
                        label: null,
                        icon: null,
                        color: null
                    }
                },
                _co2: {
                    level: {
                        label: null,
                        color: null
                    }
                },
                _uv: {
                    level: {
                        label: null,
                        color: null
                    }
                },
                _voc: {
                    level: {
                        label: null,
                        color: null
                    }
                },
                hum: 0,
                temp: 0,
                today: new Date(),
                co2: [],
                uv: [],
                voc: [],
                avg_data: {
                    co2: 0,
                    uv: 0,
                    voc: 0
                }
            }
        },
        computed:{
            statusAPI(){
                return this.$store.state.server.api_sensor.connect;
            }
        },
        async created() {
            if(this.statusAPI){
                await this.getEnvSensor()
                await this.getLNRSensor()
                this.calAvg()

            setInterval(async () => {
                await this.getEnvSensor()
                await this.getLNRSensor()
                this.calAvg()
            }, this.$interval_time);
            }
        },
        methods: {
            getEnvSensor() {
                var api_last = 'api/plugins/telemetry/DEVICE/849e2830-318d-11ec-9f75-bdae041d8bb7/values/timeseries'
                var options = {
                    headers: authHeader()
                }

                return axios.get(this.$api_baseURL + api_last, options).then((res) => {
                    if (AuthService.Expire(res.data)) {
                        this.$store.dispatch('auth/logout')
                    } else {

                        var data = res.data
                        var pm25 = data.pm25[0].value
                        var hum = data.humid[0].value
                        var temp = data.temp[0].value

                        this.pm25.value = pm25
                        this.pm25.level = aqical.LevelPM25(pm25)
                        this.aqi.value = Math.ceil(aqical.CalAQI(pm25))
                        this.aqi.level = aqical.LevelAQI(this.aqi.value)

                        this.temp = Math.ceil(temp)
                        this.hum = Math.ceil(hum)
                    }
                }).catch((err) => console.error(err))

            },
            getLNRSensor() {
                var list_lnr_id = [
                    '468000f0-3188-11ec-9f75-bdae041d8bb7',
                    '3da2b770-3188-11ec-9f75-bdae041d8bb7',
                    '2a05cfe0-3188-11ec-9f75-bdae041d8bb7',
                    '038dfbc0-3189-11ec-9f75-bdae041d8bb7',
                    '2def3f10-3188-11ec-9f75-bdae041d8bb7',
                ]
                var options = {
                    headers: authHeader()
                }
                var promises = []

                list_lnr_id.forEach(el => {
                    var api_last = 'api/plugins/telemetry/DEVICE/' + el + '/values/timeseries'
                    promises.push(axios.get(this.$api_baseURL + api_last, options).then((res) => {
                        if (AuthService.Expire(res.data)) {
                            this.$store.dispatch('auth/logout')
                        } else {
                            var data = res.data
                            this.co2.push({
                                id: el,
                                data: data.co2[0]
                            })
                            this.uv.push({
                                id: el,
                                data: data.uv[0]
                            })
                            this.voc.push({
                                id: el,
                                data: data.voc[0]
                            })
                        }
                    }).catch((err) => console.error(err)))
                });

                return Promise.all(promises).then(() => {})
            },
            calAvg() {
                var count_uv = 0
                var sum_uv = 0
                var count_voc = 0
                var sum_voc = 0
                var count_co2 = 0
                var sum_co2 = 0

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

                var avg_uv = sum_uv / count_uv
                var avg_voc = sum_voc / count_voc
                var avg_co2 = sum_co2 / count_co2

                this.avg_data.uv = (isNaN(avg_uv)) ? 0 : avg_uv.toFixed(2)
                this.avg_data.voc = (isNaN(avg_voc)) ? 0 : avg_voc.toFixed(2)
                this.avg_data.co2 = (isNaN(avg_co2)) ? 0 : avg_co2

                // Level
                this._co2 = aqical.LevelCo2(this.avg_data.co2)
                this._uv = aqical.LevelUV(this.avg_data.uv)
            }


        }
    }
</script>