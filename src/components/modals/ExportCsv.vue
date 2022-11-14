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
                        <div class="flex gap-3">
                            <div>
                                <label for="" class="font-bold">Sensor Data</label>
                                <select v-model="sdata">
                                    <option value="">Select Data</option>
                                    <option :value="item.value" v-for="item in data">{{item.label}}</option>
                                </select>
                            </div>
                            <div>
                                <label for="" class="font-bold">Frequency</label>
                                <select v-model="freq">
                                    <option value="">Select Frequency</option>
                                    <option value="daily">Daily</option>
                                    <option value="week">Week</option>
                                    <option value="month">Month</option>
                                    <option value="year">Year</option>
                                </select>
                            </div>
                        </div>
                        <div class="my-5" v-if="freq !==null">
                            <label for="" class="font-bold">Filter</label>
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
                        <button @click="submit" type="button"
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-600 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            {{$t('export_csv')}}
                        </button>
                        <button @click="close" type="button"
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

    export default {
        props: ['widget'],
        data() {
            return {
                data: [],
                sdata: "",
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
                year: null,
                listyear:null,
            }
        },
        created() {
            this.setData()
            this.listYear()
        },
        methods: {
            setData() {
                if (this.widget == 'env') {
                    this.data = [{
                            label: 'PM2.5',
                            value: 'pm25'
                        },
                        {
                            label: 'Temperature',
                            value: 'temp'
                        },
                        {
                            label: 'Humidity',
                            value: 'humid'
                        },
                        {
                            label: 'UV Index',
                            value: 'uv'
                        }
                    ]
                } else if (this.widget == 'smlight' || this.widget == 'smpole') {
                    this.data = [{
                        label: 'Energy Usage',
                        value: 'energy'
                    }]
                }
            },
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
                if(this.freq == 'daily'){
                    option = this.day
                }else if(this.freq == 'week'){
                    option = this.week
                }else if(this.freq == 'month'){
                    option = this.month
                }else if(this.freq == 'year'){
                    option = this.year
                }

                var data = {
                    widget:this.widget,
                    data:this.sdata,
                    freq:this.freq,
                    option:option
                }
                this.$store.dispatch('data/ExportCSV',data).then((res)=>{
                    console.log(res)
                })
            },
            close() {
                this.$emit('close')
            }
        }
    }
</script>