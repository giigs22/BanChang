<template>
    <div class="block-content">
        <div class="flex gap-2">
            <select v-model="sdata">
                <option value="pm25">PM2.5</option>
                <option value="temp">Temperature</option>
                <option value="humid">Humidity</option>
                <option value="uv">Uv Index</option>
            </select>
            <select v-model="freq">
                <option value="daily">Daily</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
            </select>
            <input type="date" v-model="day" v-if="freq=='daily'">
            <select v-model="week.year" v-if="freq == 'week'">
                <option value="">Year</option>
                <option :value="item" v-for="item in listyear">{{item}}</option>
            </select>
            <select v-model="week.num" v-if="freq == 'week'">
                <option value="">Week</option>
                <option :value="num" v-for="num in 52">{{num}}</option>

            </select>
            <select v-model="month.year" v-if="freq == 'month'">
                <option value="">Year</option>
                <option :value="item" v-for="item in listyear">{{item}}</option>
            </select>
            <select v-model="month.month" v-if="freq == 'month'">
                <option value="">Month</option>
                <option :value="index" v-for="(m,index) in list_month">{{m}}</option>
            </select>
            <select v-model="year" v-if="freq == 'year'">
                <option value="">Year</option>
                <option :value="item" v-for="item in listyear">{{item}}</option>
            </select>
            <button class="btn-purple" @click="getdata">Filter</button>
        </div>
    </div>
</template>
<script>
    import dayjs from 'dayjs'
    import isoWeek from 'dayjs/plugin/isoWeek'
    import localeData from 'dayjs/plugin/localeData'
    dayjs.extend(isoWeek)
    dayjs.extend(localeData)

    export default {
        data() {
            return {
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
            }
        },
        created() {
            this.listYear()
            this.getdata()
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
            getdata() {

                var option
                if (this.freq == 'daily') {
                    var day_tmp = dayjs(this.day).valueOf()
                    option = {
                        start: day_tmp,
                        end: day_tmp
                    }
                }
                var data = {
                    widget: "env",
                    data: this.sdata,
                    freq: this.freq,
                    option: option
                }
                this.$store.dispatch('data/ChartData', data).then((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>