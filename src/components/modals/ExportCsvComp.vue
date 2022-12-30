<template>
    <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <transition name="bg-fade">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            </transition>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <transition name="alertbox">
                <div
                    class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 sm:align-middle max-w-lg w-full z-50">
                    <div class="px-2 py-2 bg-nav-dark text-white flex">
                        <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" /></svg> <span
                            class="ml-3 text-xl">{{$t('Export Report CSV')}}</span>
                    </div>
                    <div class="bg-white px-4 pt-5 pb-4">
                        <loading v-model:active="isLoading" color="#202A5A" loader="dots" :is-full-page="false" :opacity="0.5" class="rounded-lg"/>

                        <div class="flex gap-3">
                            <div>
                                <label for="" class="font-bold block">Data</label>
                                <select v-model="sdata">
                                    <option value="sum">All Summary</option>                                
                                </select>
                            </div>
                            <div v-if="sdata != ''">
                                <label for="" class="font-bold block">Frequency</label>
                                <select v-model="freq">
                                    <option value="">Select Frequency</option>
                                    <option value="daily">Daily</option>
                                    <option value="week">Week</option>
                                    <option value="month">Month</option>
                                    <option value="year">Year</option>
                                </select>
                            </div>
                        </div>
                        <div class="my-5" v-if="freq != null && freq !=''">
                            <label for="" class="font-bold block">Filter</label>
                            <div v-if="freq == 'daily'">
                                <input type="date" v-model="day">
                            </div>
                            <div v-if="freq == 'week'" class="flex gap-3">
                                <select v-model="week.year">
                                    <option value="">Year</option>
                                    <option :value="item" v-for="item in listyear">{{item}}</option>
                                </select>
                                <select v-model="week.num">
                                    <option value="">Week</option>
                                    <option :value="num" v-for="num in 52">{{num}}</option>

                                </select>
                            </div>
                            <div v-if="freq == 'month'" class="flex gap-3">
                                <select v-model="month.year">
                                    <option value="">Year</option>
                                    <option :value="item" v-for="item in listyear">{{item}}</option>
                                </select>
                                <select v-model="month.month">
                                    <option value="">Month</option>
                                    <option :value="index" v-for="(m,index) in list_month">{{m}}</option>
                                </select>
                            </div>
                            <div v-if="freq == 'year'">
                                <select v-model="year">
                                    <option value="">Year</option>
                                    <option :value="item" v-for="item in listyear">{{item}}</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div class="px-4 py-3 justify-end sm:px-6 sm:flex sm:flex-row">
                        <div class="text-red-600 text-sm" v-if="error.active">Error:{{error.msg}}</div>
                        <button @click="submit" type="button" :disabled="btn_export"
                            class="disabled:opacity-50 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-600 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            {{$t('export_csv')}}
                        </button>
                        <button @click="closeModal" type="button"
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-gray-700 font-medium focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            {{$t('close')}}
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
import dayjs from 'dayjs'
import * as xlsx from 'xlsx'
import isoWeek from 'dayjs/plugin/isoWeek'
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(isoWeek)
dayjs.extend(localeData)

    export default {
        data() {
            const list_month = dayjs.months()
            return {
                list_month,
                sdata: "sum",
                freq: null,
                day: null,
                week:{
                    year: "",
                    num: ""
                },
                month: {
                    year:"",
                    month:""
                },
                year: "",
                listyear:null,
                error:{
                    active:false,
                    msg:null
                },
                btn_export:true,
                isLoading:false
            }
        },
        created() {
            this.listYear()
        },
        watch:{
            freq(n,o){
                if(n !== null || n !== ""){
                    this.btn_export = false
                }
            }
        },
        methods: {
            listYear() {
                var this_year = dayjs().year()
                var min_year = 2022
                var list_year
                if(this_year == min_year){
                    list_year = ['2022']
                }else{
                    var rang_year = this_year - min_year

                    for (let index = 0; index < rang_year; index++) {
                        var y = min_year+1
                        list_year.push(y)
                    }
                }
                this.listyear = list_year
               
            },
            submit(){
                var option
                var getdata
                if(this.freq == 'daily'){
                    if(this.day == null){
                        getdata = false
                    }else{
                        getdata = true
                        var s_timestamp = dayjs(this.day).startOf('day').valueOf()
                        var e_timestamp = dayjs(this.day).endOf('day').valueOf()
                        option = {
                            start:s_timestamp,
                            end:e_timestamp
                        }
                    }
                }else if(this.freq == 'week'){
                    if(this.week.year == "" || this.week.num == ""){
                        getdata = false
                    }else{
                        getdata = true
                        var week = dayjs().year(this.week.year).isoWeek(this.week.num)
                        var startOfWeek = dayjs(week).day(1)
                        var endOfWeek = dayjs(week).day(7)
                        var weekdays = {
                            start:startOfWeek.startOf('day').valueOf(),
                            end:endOfWeek.startOf('day').valueOf()
                        }
                        option = weekdays
                    }
                }else if(this.freq == 'month'){
                    if(this.month.year == "" || this.month.num == ""){
                        getdata = false
                    }else{
                        getdata = true
                        var month = dayjs().year(this.month.year).month(this.month.month)
                        var s = month.startOf('month').valueOf()
                        var e = month.endOf('month').valueOf()
                        
                        var date_range = {
                            start:s,
                            end:e
                        }
                        option = date_range
                    }
                }else if(this.freq == 'year'){
                    if(this.year == null){
                        getdata = false
                    }else{
                        getdata = true
                        var year = dayjs().year(this.year)
                        var s = year.startOf('year').valueOf()
                        var e = year.endOf('year').valueOf()

                        var date_rang = {
                            start:s,
                            end:e
                        }
                        option =  date_rang
                    }
                }

                if(getdata){
                    this.error.active = false
                    this.error.msg = null
                    var data = {
                        data:this.sdata,
                        freq:this.freq,
                        option:option
                    }
                    this.isLoading = true
                    this.$store.dispatch('complaint/ExportCSV',data).then((res)=>{
                        var data = res.data
                        var group = Object.entries(data).map((arr) => ({
                            type: arr[0],
                            value: arr[1],
                        }));
                        this.setCsv(group)
                        this.isLoading = false

                    }).catch((err)=>{
                        console.log(err);
                    })
                }else{
                    this.error.active = true
                    this.error.msg = 'Please select Filter Data'
                }
            },
            setCsv(data){
                var dataWS = xlsx.utils.json_to_sheet(data)
                var fileName
                if(this.freq == 'daily'){
                    fileName = 'export_'+this.sdata+'_'+this.freq+'_'+this.day+'.csv'
                }
                if(this.freq == 'week'){
                    fileName = 'export_'+this.sdata+'_'+this.freq+'_'+this.week.year+'_'+this.week.num+'.csv'
                }
                if(this.freq == 'month'){
                    fileName = 'export_'+this.sdata+'_'+this.freq+'_'+this.month.year+'_'+this.month.month+'.csv'
                }
                if(this.freq == 'year'){
                    fileName = 'export_'+this.sdata+'_'+this.freq+'_'+this.year+'.csv'
                }
                var wb = xlsx.utils.book_new()
                xlsx.utils.book_append_sheet(wb, dataWS)
                xlsx.writeFile(wb,fileName)
            },
            closeModal() {
                this.$emit('close')
            }
        }
    }
</script>