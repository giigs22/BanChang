<template>
    <div class="block-widgets col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">Air Quality</span>
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg @click="fullview" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026" viewBox="0 0 43.026 43.026">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
            </svg>
        </div>
        <div class="detail gap-10">
            <div class="icon-env-main" :style="{background:aqi.level.color}">
                <img :src="'/src/assets/'+((aqi.level.icon == null)?'':aqi.level.icon)" alt="">
            </div>
            <div class="flex flex-col text-center text-white">
                <h1 class="text-6xl">{{pm25.value}}</h1>
                <h3 class="text-xl">{{(pm25.level == null)?'':pm25.level.label}}</h3>
                <h1 class="text-2xl">AQI {{aqi.value}}</h1>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import AuthService from '../../services/auth.services'
    import authHeader from '../../services/auth.header'
    import aqical from '../../services/env.aqi'
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
            }
        },
        created() {
                this.getEnvirontData()
        },
        mounted() {
            setInterval(() => {
                this.getEnvirontData()
            }, this.$interval_time);
        },
        methods: {
            getEnvirontData() {
                var api_last = 'api/plugins/telemetry/DEVICE/849e2830-318d-11ec-9f75-bdae041d8bb7/values/timeseries'
                var options = {
                    headers: authHeader()
                }

                axios.get(this.$api_baseURL + api_last, options).then((res) => {
                    if (AuthService.Expire(res.data)) {
                        this.$store.dispatch('auth/logout'); 
                    } else {
                        var data = res.data
                        var pm25 = data.pm25[0].value

                        this.pm25.value = pm25
                        this.pm25.level = aqical.LevelPM25(pm25)
                        this.aqi.value = Math.ceil(aqical.CalAQI(pm25))
                        this.aqi.level = aqical.LevelAQI(this.aqi.value)


                    }
                }).catch((err) => console.error(err))
            },
            fullview(){
                this.$router.push('/view/aqi_map')
            }
        }
    }
</script>