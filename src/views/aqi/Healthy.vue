<template>
    <TopMenu />
    <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10">Air Quality</h1>
                        <div class="searchbox mt-5 mb-5">
                            <h3 class="text-lg text-white">Environment</h3>
                        </div>
                        <div class="grid grid-cols-12 gap-4 mb-5">
                            <div class="col-span-3">
                                <div class="block-layer data-layer py-2 px-3">
                                    <div class="flex flex-col items-center my-10">
                                        <div class="icon-env-main2" :style="{background:aqi.level.color}">
                                            <img :src="aqi.level.icon"
                                                alt="">
                                        </div>
                                        <h3 class="text-2xl text-white">{{(aqi.level.label == null?'':aqi.level.label)}}
                                        </h3>

                                    </div>
                                    <div class="relative flex items-center justify-center my-16">
                                        <h1 class="text-4xl text-center text-white absolute">
                                            <p>{{aqi.value}}</p>
                                            <p>AQI</p>
                                        </h1>
                                        <img src="@/assets/ring_chart.png" class="w-56" />
                                    </div>
                                </div>

                            </div>
                            <div class="col-span-9">
                                <div class="block-layer">
                                    <img src="@/assets/chart_weather.png" alt="" srcset="">
                                </div>
                                <div class="my-1">
                                    <img src="@/assets/day_weather.png" alt="" srcset="">
                                </div>
                                <div class="grid grid-cols-12 gap-2">
                                    <div class="relative col-span-4 bg-purple-gradient rounded-md text-gray-300 p-2">
                                        <h3 class="text-md">Co2</h3>
                                        <div class="absolute right-2 top-2 text-center">
                                            <div class="icon-env">
                                                <img src="@/assets/icon_co2.png" />
                                            </div>
                                            <span class="text-xs my-1">{{_co2.label}}</span>
                                        </div>
                                        <h1 class="text-5xl text-center my-10">{{avg_data.co2}}</h1>
                                        <img src="@/assets/level_bar_1.png" alt="" srcset="" class="mx-auto">
                                    </div>
                                    <div class="relative col-span-4 bg-purple-gradient rounded-md text-gray-300 p-2">
                                        <h3 class="text-md">PM 2.5</h3>
                                        <div class="absolute right-2 top-2 text-center">
                                            <div class="icon-env">
                                                <img src="@/assets/icon_pm25.png" />
                                            </div>
                                            <span class="text-xs my-1">{{_co2.label}}</span>
                                        </div>
                                        <h1 class="text-5xl text-center my-10">{{pm25.value}} <span
                                                class="text-xl">ug/m3</span></h1>
                                        <img src="@/assets/level_bar_2.png" alt="" srcset="" class="mx-auto">
                                    </div>
                                    <div class="relative col-span-4 bg-purple-gradient rounded-md text-gray-300 p-2">
                                        <h3 class="text-md">PM 10</h3>
                                        <div class="absolute right-2 top-2 text-center">
                                            <div class="icon-env">
                                                <img src="@/assets/icon_pm10.png" />
                                            </div>
                                            <span class="text-xs my-1">-</span>
                                        </div>

                                        <h1 class="text-5xl text-center my-10">0 <span class="text-xl">ug/m3</span></h1>
                                        <img src="@/assets/level_bar_2.png" alt="" srcset="" class="mx-auto">
                                    </div>
                                    <div class="relative col-span-4 bg-purple-gradient rounded-md text-gray-300 p-2">
                                        <h3 class="text-md">Humidity</h3>
                                        <div class="absolute right-2 top-2 text-center">
                                            <div class="icon-env">
                                                <img src="@/assets/icon_hum.png" />
                                            </div>
                                            <span class="text-xs my-1">-</span>
                                        </div>

                                        <h1 class="text-5xl text-center my-10">{{hum}}</h1>
                                        <img src="@/assets/level_bar_1.png" alt="" srcset="" class="mx-auto">
                                    </div>
                                    <div class="relative col-span-4 bg-purple-gradient rounded-md text-gray-300 p-2">
                                        <h3 class="text-md">UV Index</h3>
                                        <div class="absolute right-2 top-2 text-center">
                                            <div class="icon-env">
                                                <img src="@/assets/icon_uv.png" />
                                            </div>
                                            <span class="text-xs my-1">{{_uv.label}}</span>
                                        </div>

                                        <h1 class="text-5xl text-center my-10"> {{avg_data.uv}}</h1>
                                        <img src="@/assets/level_bar_1.png" alt="" srcset="" class="mx-auto">
                                    </div>
                                    <div class="relative col-span-4 bg-purple-gradient rounded-md text-gray-300 p-2">
                                        <h3 class="text-md">VOC</h3>
                                        <div class="absolute right-2 top-2 text-center">
                                            <div class="icon-env">
                                                <img src="@/assets/icon_voc.png" />
                                            </div>
                                            <span class="text-xs my-1">-</span>
                                        </div>
                                        <h1 class="text-5xl text-center my-10">{{avg_data.voc}}</h1>

                                        <img src="@/assets/level_bar_1.png" alt="" srcset="" class="mx-auto">
                                    </div>
                                    <div class="relative col-span-4 bg-purple-gradient rounded-md text-gray-300 p-2">
                                        <h3 class="text-md">Temperature</h3>
                                        <div class="absolute right-2 top-2 text-center">
                                            <div class="icon-env">
                                                <img src="@/assets/icon_temper.png" />
                                            </div>
                                            <span class="text-xs my-1">-</span>
                                        </div>
                                        <h1 class="text-5xl text-center my-10">{{temp}}</h1>

                                        <img src="@/assets/level_bar_1.png" alt="" srcset="" class="mx-auto">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <FooterPage />
</template>
<script>
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import aqical from '../../services/env.aqi'
    export default {
        components: {
            TopMenu,
            FooterPage
        },
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
        async created() {
            await this.getEnvSensor()
            await this.getLNRSensor()
            this.calAvg()
        },
        async mounted() {
            setInterval(async () => {
                await this.getEnvSensor()
                await this.getLNRSensor()
                this.calAvg()
            }, this.$interval_time);
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

                        this.temp = Math.ceil(temp).toFixed(2)
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
                this.avg_data.co2 = (isNaN(avg_co2)) ? 0 : avg_co2.toFixed(2)

                // Level
                this._co2 = aqical.LevelCo2(this.avg_data.co2)
                this._uv = aqical.LevelUV(this.avg_data.uv)
            }


        }
    }
</script>