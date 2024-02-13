<template>
    <h2 class="lg:text-lg dark:text-white mb-2">{{$t('environment')}}</h2>
    <div class="top-bar">
        <div class="dark:bg-wether-dark bg-wether-light flex flex-wrap w-full lg:w-1/4 py-3 px-7">
            <div class="flex flex-col text-center cursor-pointer">
                <div class="icon-env-main dark:bg-icon-env-dark bg-icon-env-light" :style="{background:aqi.level.color}">
                    <img :src="aqi.level.icon" alt="">
                </div>
                <h3 class="text-lg dark:text-white">{{(aqi.level.label != null)?$t(aqi.level.label):'-'}}</h3>
            </div>
            <div class="flex flex-col text-center ml-auto">
                <h3 class="text-lg dark:text-white">{{today.toLocaleDateString('en-US',{ weekday: 'long' }).split(' ')[0]}}
                </h3>
                <img src="@/assets/icon_clound.png" alt="">
                <div class="flex justify-between">
                    <span class="dark:text-sky-300 text-lime-600 text-sm">{{avg_data.temp}}c°</span>
                    <!-- <span class="text-yellow-300 text-sm">25c°</span> -->
                </div>
            </div>
        </div>
        <div class="flex lg:flex-nowrap gap-1 lg:overflow-hidden overflow-x-scroll">
            
            <div class="aqi block-env dark:bg-block-env-dark bg-block-env-light">
                <h3>{{$t('aqi')}}</h3>
                <span class="text-sm my-1">{{aqi.value}}</span>
                <div class="icon-env dark:bg-icon-env-dark bg-icon-env-light">
                    <img :src="aqi.level.icon" />
                </div>
                <span class="text-sm my-1 level-label">{{(aqi.level.label != null)?$t(aqi.level.label):'-'}}</span>
            </div>
            <div class="temp block-env dark:bg-block-env-dark bg-block-env-light">
                <h3>{{$t('temperature')}}</h3>
                <span class="text-sm my-1">{{avg_data.temp}}</span>
                <div class="icon-env dark:bg-icon-env-dark bg-icon-env-light">
                    <img src="@/assets/icon_temp.png" />
                </div>
                <span class="text-sm my-1 level-label">{{(_temp.label != null)?$t(_temp.label):'-'}}</span>
            </div>
            <div class="co2 block-env dark:bg-block-env-dark bg-block-env-light">
                <h3 class="break-words">{{$t('co2')}}</h3>
                <span class="text-sm my-1">{{avg_data.co2}}</span>
                <div class="icon-env dark:bg-icon-env-dark bg-icon-env-light">
                    <img src="@/assets/icon_co2.png" />
                </div>
                <span class="text-sm my-1 level-label">{{(_co2.label != null)?$t(_co2.label):'-'}}</span>
            </div>
            <div class="pm25 block-env dark:bg-block-env-dark bg-block-env-light">
                <h3>{{$t('pm25')}}</h3>
                <span class="text-sm my-1">{{avg_data.pm25}}</span>
                <div class="icon-env dark:bg-icon-env-dark bg-icon-env-light">
                    <img src="@/assets/icon_pm25.png" />
                </div>
                <span class="text-sm my-1 level-label">{{(_pm25.label != null)?$t(_pm25.label):'-'}}</span>
            </div>
            <div class="pm10 block-env dark:bg-block-env-dark bg-block-env-light">
                <h3>{{$t('pm10')}}</h3>
                <span class="text-sm my-1">{{avg_data.pm10}}</span>
                <div class="icon-env dark:bg-icon-env-dark bg-icon-env-light">
                    <img src="@/assets/icon_pm10.png" />
                </div>
                <span class="text-sm my-1 level-label">{{(_pm10.label != null)?$t(_pm10.label):'-'}}</span>
            </div>
            <div class="hum block-env dark:bg-block-env-dark bg-block-env-light">
                <h3>{{$t('humidity')}}</h3>
                <span class="text-sm my-1">{{avg_data.hum}}</span>
                <div class="icon-env dark:bg-icon-env-dark bg-icon-env-light">
                    <img src="@/assets/icon_hum.png" />
                </div>
                <span class="text-sm my-1 level-label">{{(_hum.label != null)?$t(_hum.label):'-'}}</span>
            </div>
            <div class="uv block-env dark:bg-block-env-dark bg-block-env-light">
                <h3>{{$t('uv')}}</h3>
                <span class="text-sm my-1">{{avg_data.uv}}</span>
                <div class="icon-env dark:bg-icon-env-dark bg-icon-env-light">
                    <img src="@/assets/icon_uv.png" />
                </div>
                <span class="text-sm my-1 level-label">{{_uv.label}}</span>
            </div>
            <div class="voc block-env dark:bg-block-env-dark bg-block-env-light">
                <h3 class="">{{$t('voc')}}</h3>
                <span class="text-sm my-1">{{avg_data.voc}}</span>
                <div class="icon-env dark:bg-icon-env-dark bg-icon-env-light">
                    <img src="@/assets/icon_voc.png" />
                </div>
                <span class="text-sm my-1 level-label">{{(_voc.label != null)?$t(_voc.label):'-'}}</span>
            </div>
        </div>

    </div>
</template>
<script>
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
                _pm10: {
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
                _hum: {
                    label: null,
                    color: null
                },
                _temp:{
                    label:null,
                    color:null
                },
                pm25: [],
                pm10:[],
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
                    temp: 0,
                    pm10:0
                },
                

            }
        },
        async created() {
            this.clearData()
            await this.getData()
            this.calAvg()

            setInterval(async() => {
                this.clearData()
                await this.getData()
                this.calAvg()
            }, this.$interval_time);
        },
        methods: {
            getData(){
                var data = {
                    type:'lastdata',
                    sensor:'env'
                }
                return this.$store.dispatch('data/getData',data).then((res)=>{
                    var data = res.data
                    this.setDataCal('ENV',data.env)
                    this.setDataCal('LNR',data.lnr)
                })
            },
            setDataCal(type, data) {
        
                if (type == 'ENV') {
                    data.forEach(el => {
                        if(el.hasOwnProperty('pm25')){
                        this.pm25.push({
                        id: el.id,
                        data: el.pm25[0]
                        })
                        }
                        if(el.hasOwnProperty('pm10')){
                        this.pm10.push({
                        id: el.id,
                        data: el.pm10[0]
                        })
                        }
                        if(el.hasOwnProperty('temp')){
                        this.temp.push({
                            id: el.id,
                            data: el.temp[0]
                        })
                        }
                        if(el.hasOwnProperty('temperature')){
                            this.temp.push({
                            id: el.id,
                            data: el.temperature[0]
                        })
                        }
                        if(el.hasOwnProperty('humid')){
                        this.hum.push({
                            id: el.id,
                            data: el.humid[0]
                        })
                        }
                        if(el.hasOwnProperty('humidity')){
                            this.hum.push({
                            id: el.id,
                            data: el.humidity[0]
                        })
                        }
                    });
                    
                } else {
                    
                    data.forEach(el => {
                        if(el.hasOwnProperty('co2')){
                        this.co2.push({
                            id: el.id,
                            data: el.co2[0]
                        })
                    }

                    if(el.hasOwnProperty('uv')){
                        this.uv.push({
                            id: el.id,
                            data: el.uv[0]
                        })
                    }

                    if(el.hasOwnProperty('voc')){
                        this.voc.push({
                            id: el.id,
                            data: el.voc[0]
                        })
                    }

                    });
                    
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
                var count_pm10 = 0
                var sum_pm10 = 0

                this.pm25.forEach(el => {
                    if (parseFloat(el.data.value) > 0) {
                        count_pm25 += 1
                    }
                    sum_pm25 += parseFloat(el.data.value)
                })
                this.pm10.forEach(el => {
                    if (parseFloat(el.data.value) > 0) {
                        count_pm10 += 1
                    }
                    sum_pm10 += parseFloat(el.data.value)
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
                var avg_pm10 = sum_pm10 / count_pm10
                var avg_temp = sum_temp / count_temp
                var avg_hum = sum_hum / count_hum
                var avg_uv = sum_uv / count_uv
                var avg_voc = sum_voc / count_voc
                var avg_co2 = sum_co2 / count_co2

                this.avg_data.pm25 = (isNaN(avg_pm25)) ? 0 : Math.round(avg_pm25)
                this.avg_data.pm10 = (isNaN(avg_pm10)) ? 0 : Math.round(avg_pm10)
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
                this._pm10 = aqical.LevelPM10(this.avg_data.pm10)
                this._hum = aqical.LevelHumid(this.avg_data.hum)
                this._temp = aqical.LevelTemp(this.avg_data.temp)
                this._voc = aqical.LevelVoc(this.avg_data.voc)

                this.$store.dispatch('widget/setPM25',this.avg_data.pm25)

            },
            clearData() {
                this.pm25 = []
                this.hum = []
                this.temp = []
                this.co2 = []
                this.uv = []
                this.voc = []
                this.pm10 = []
                this.status_device={online:0,offline:0}
            },
        }
    }
</script>