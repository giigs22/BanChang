<template>
    <div class="block-widgets col-span-12 lg:col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">{{$t('air_quality')}}</span>
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg @click="fullview" class="bg-dark-light cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="43.026"
                height="43.026" viewBox="0 0 43.026 43.026">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="" />
            </svg>
        </div>
        <div class="detail gap-10">
            <div class="icon-env-main" :style="{background:aqi.level.color}">
                <img :src="'/src/assets/'+((aqi.level.icon == null)?'icon_aqi_1.png':aqi.level.icon)" alt=""
                    class="w-32">
            </div>
            <div class="flex flex-col text-center dark:text-white">
                <h1 class="text-6xl">{{avg_data.pm25}}</h1>
                <h3 class="text-xl">{{(_pm25.label != null)?$t(_pm25.label):'-'}}</h3>
                <h1 class="text-2xl">{{$t('aqi')}} {{aqi.value}}</h1>
            </div>
        </div>
    </div>
</template>
<script>
    import aqical from '../../services/env.aqi'
    import UserService from '../../services/user.service'
    export default {
        data() {
            return {
                pm25: [],
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
                avg_data: {
                    pm25: 0
                }
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
                }).catch((err)=>{
                    UserService.checkUnauthen(err.response)
                })
            },
           
            setDataCal(type,data) {
                if (type == 'ENV') {
                    data.forEach(el => {
                        if(el.hasOwnProperty('pm25')){
                            this.pm25.push({
                            data: el.pm25[0]
                        })
                        }
                    });
                } 
            },
            calAvg() {
                if (this.statusAPI) {
                    this.aqi.value = Math.ceil(aqical.CalAQI(this.avg_data.pm25))
                    this.aqi.level = aqical.LevelAQI(this.avg_data.pm25)

                    this._pm25 = aqical.LevelPM25(this.avg_data.pm25)
                } else {
                    var count_pm25 = 0
                    var sum_pm25 = 0

                    this.pm25.forEach(el => {
                        if (parseFloat(el.data.value) > 0) {
                            count_pm25 += 1
                        }
                        sum_pm25 += parseFloat(el.data.value)
                    })
                    var avg_pm25 = sum_pm25 / count_pm25
                    this.avg_data.pm25 = (isNaN(avg_pm25)) ? 0 : Math.round(avg_pm25)

                    this.aqi.value = Math.ceil(aqical.CalAQI(this.avg_data.pm25))
                    this.aqi.level = aqical.LevelAQI(this.avg_data.pm25)

                    this._pm25 = aqical.LevelPM25(this.avg_data.pm25)
                }
            },
            clearData(){
                this.pm25 = []
            },
            fullview() {
                this.$router.push('/view/aqi')
            }
        }
    }
</script>