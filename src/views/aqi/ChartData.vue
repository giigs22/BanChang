<template>
    <div class="block-content mb-5">
        <div class="flex gap-2">
            <select v-model="sdata">
                <option value="pm25">PM2.5</option>
                <option value="temp">Temperature</option>
                <option value="humid">Humidity</option>
                <option value="uv">Uv Index</option>
                <option value="voc">Voc</option>
            </select>
            <select v-model="freq">
                <option value="daily">Daily</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <!-- <option value="year">Year</option> -->
            </select>
            <input type="date" v-model="day" v-if="freq=='daily'">
            <select v-model="week.year" v-if="freq == 'week'">
                <option value="">Year</option>
                <option :value="item" v-for="item in listyear">{{item}}</option>
            </select>
            <select v-model="week.num" v-if="freq == 'week' && week.year !== ''">
                <option value="">Week</option>
                <option :value="num" v-for="num in 52">{{num}}</option>

            </select>
            <select v-model="month.year" v-if="freq == 'month'">
                <option value="">Year</option>
                <option :value="item" v-for="item in listyear">{{item}}</option>
            </select> 
            <select v-model="month.month" v-if="freq == 'month' && month.year !== ''">
                <option value="">Month</option>
                <template v-if="month.year == '2022'">
                    <option :value="m" v-for="(m,index) in list_month.slice(9)">{{m}}</option>
                </template>
                <template v-else>
                    <option :value="m" v-for="(m,index) in list_month">{{m}}</option>
                </template>
            </select>
            <!-- <select v-model="year" v-if="freq == 'year'">
                <option value="">Year</option>
                <option :value="item" v-for="item in listyear">{{item}}</option>
            </select> -->
            <button class="btn-purple" @click="getData">Filter</button>
        </div>
        <div class="p-10 relative">
            <loading v-model:active="isLoading" color="#202A5A" loader="dots" :is-full-page="false" :opacity="0.1"
                class="rounded-lg" />
            <div class="absolute text-3xl text-white opacity-50 w-full h-full flex items-center justify-center" v-if="label_set.length === 0 && data_set.length === 0">
                <div>
                    {{$t('no_data')}}
                </div>
            </div>
            <LineChart :label="label_set" :data_set="data_set" :name_bar="sdata.toUpperCase()"></LineChart>
        </div>
    </div>
</template>
<script>
    import dayjs from 'dayjs'
    import isoWeek from 'dayjs/plugin/isoWeek'
    import localeData from 'dayjs/plugin/localeData'
    import duration from 'dayjs/plugin/duration'
    dayjs.extend(isoWeek)
    dayjs.extend(localeData)
    dayjs.extend(duration)
    import LineChart from '../../components/utility/LineChart.vue'
    import UserService from '../../services/user.service'
    import _ from 'lodash'

    export default {
        components: {
            LineChart
        },
        data() {
            const list_month = dayjs.months()
            return {
                list_month,
                sdata: 'pm25',
                freq: 'daily',
                day: dayjs().format('YYYY-MM-DD'),
                week: {
                    year: "",
                    num: ""
                },
                month: {
                    year: "",
                    month: ""
                },
                year: "",
                listyear: null,
                label_set: [],
                data_set: [],
                isLoading: false,
                list_month_year: [],
                option: null
            }
        },
        created() {
            this.listYear()
            this.getData()
        },
        methods: {
            listYear() {
                var this_year = dayjs().year()
                var min_year = 2022
                var list_year
                if (this_year == min_year) {
                    list_year = ['2022']
                } else {
                    var rang_year = this_year - min_year

                    for (let index = 0; index < rang_year; index++) {
                        var y = min_year + 1
                        list_year.push(y)
                    }
                }
                this.listyear = list_year


            },
            setData() {
                var option

                if (this.freq == 'daily') {
                    var day_tmp = dayjs(this.day).valueOf()
                    option = {
                        start: day_tmp,
                        end: day_tmp
                    }
                    this.option = option
                } else if (this.freq == 'week') {

                    var week = dayjs().year(this.week.year).isoWeek(this.week.num)
                    var startOfWeek = dayjs(week).day(1)
                    var endOfWeek = dayjs(week).day(7)
                    var weekdays = {
                        start: startOfWeek.startOf('day').valueOf(),
                        end: endOfWeek.startOf('day').valueOf()
                    }
                    option = weekdays
                    this.option = option
                } else if (this.freq == 'month') {

                    var m = _.indexOf(this.list_month,this.month.month,0)
                   
                    var month = dayjs().year(this.month.year).month(m)
                    var s = month.startOf('month').valueOf()
                    var e = month.endOf('month').valueOf()

                    var date_range = {
                        start: s,
                        end: e
                    }
                    option = date_range
                    this.option = option
                } 

            },
            getData() {
                this.setData()

               
                    var data = {
                        widget: "env",
                        data: this.sdata,
                        freq: this.freq,
                        option: this.option
                    }
                    this.isLoading = true
                    this.$store.dispatch('data/ChartData', data).then((res) => {
                        this.label_set = res.data[0]
                        this.data_set = res.data[1]
                        this.isLoading = false
                    }).catch((err) => {
                        UserService.checkUnauthen(err.response)
                    })
                }
            }

        
    }
</script>