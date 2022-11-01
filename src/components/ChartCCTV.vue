<template>
    <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
        :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>

<script>
    import {
        Bar
    } from 'vue-chartjs'
    import ChartDataLabels from 'chartjs-plugin-datalabels';
    import _ from 'lodash'
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale
    } from 'chart.js'

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ChartDataLabels)

    export default {
        name: 'BarChart',
        components: {
            Bar
        },
        props: {
            label: {
                type: Array,
                default: () => []
            },
            label_data: {
                type: String,
                default: ''
            },
            data_set: {
                type: Array,
                default: () => []
            },
            chartId: {
                type: String,
                default: 'bar-chart'
            },
            datasetIdKey: {
                type: String,
                default: 'label'
            },
            width: {
                type: Number,
                default: 370
            },
            height: {
                type: Number,
                default: 170
            },
            cssClasses: {
                default: '',
                type: String
            },
            styles: {
                type: Object,
                default: () => {}
            },
            plugins: {
                type: Object,
                default: () => {}
            },
        },
        data() {
            return {
                chartData: {
                    labels:this.lang == 'en'?
                        ['Camera Malfunction', 'Trespasser', 'Suspected Face Detection', 'Group Cluster Detection',
                        'Traffic Violation', 'Parking Violation']
                        :['กล้องทำงานผิดปกติ', 'ผู้บุกรุก', 'ตรวจพบผู้ต้องสงสัย', 'ตรวจพบการรวมกลุ่ม',
                        'การฝ่าฝืนกฎจราจร', 'จอดในที่ห้ามจอด'],
                    datasets: [{
                        data: this.data_set,
                        barPercentage: 0.8,
                        axis: 'y',
                        datalabels: {
                            align: 'end',
                            anchor: 'end',
                            clamp:true,
                            color:this.theme=='dark'?'white':'black',
                        },
                        borderRadius: 15,
                        backgroundColor: (ctx) => {
                            const canvas = ctx.chart.ctx;
                            const gradient = canvas.createLinearGradient(0, 0, 300, 0);

                            if(this.theme == 'dark'){
                            gradient.addColorStop(0, 'rgba(218,186,255,0)');
                            gradient.addColorStop(0.7, 'rgba(223,154,255,0.28)');
                            gradient.addColorStop(1, 'rgba(237,71,255,1)');
                            }else{
                            gradient.addColorStop(0, 'rgba(218,186,255,0)');
                            gradient.addColorStop(0.7, 'rgba(53,150,181)');
                            gradient.addColorStop(1, 'rgba(3,86,113)');
                            }

                            return gradient;
                        },
                    }],
                },
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    scales: {
                        x: {
                            display: false,
                            max:()=>{
                                var m = _.max(this.data_set)
                                if(m > 50){
                                    m = m+10
                                }else{
                                    m = m+5
                                }
                                return m
                            },
                        },
                        y:{
                            ticks:{
                                color: this.theme=='dark'?'white':'black'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }

                }
            }
        },
        computed: {
            theme() {
                return this.$store.state.template.theme
            },
            lang(){
                return this.$store.state.template.lang
            },  
            chartData() {
                return {
                    labels:this.lang == 'en'?
                        ['Camera Malfunction', 'Trespasser', 'Suspected Face Detection', 'Group Cluster Detection',
                        'Traffic Violation', 'Parking Violation']
                        :['กล้องทำงานผิดปกติ', 'ผู้บุกรุก', 'ตรวจพบผู้ต้องสงสัย', 'ตรวจพบการรวมกลุ่ม',
                        'การฝ่าฝืนกฎจราจร', 'จอดในที่ห้ามจอด'],
                    datasets: [{
                        data: this.data_set,
                        barPercentage: 0.8,
                        axis: 'y',
                        datalabels: {
                            align: 'end',
                            anchor: 'end',
                            clamp:true,
                            color:this.theme=='dark'?'white':'black',
                            
                        },
                        borderRadius: 15,
                        backgroundColor: (ctx) => {
                            const canvas = ctx.chart.ctx;
                            const gradient = canvas.createLinearGradient(0, 0, 300, 0);

                            if(this.theme == 'dark'){
                            gradient.addColorStop(0, 'rgba(218,186,255,0)');
                            gradient.addColorStop(0.7, 'rgba(223,154,255,0.28)');
                            gradient.addColorStop(1, 'rgba(237,71,255,1)');
                            }else{
                            gradient.addColorStop(0, 'rgba(218,186,255,0)');
                            gradient.addColorStop(0.7, 'rgba(53,150,181)');
                            gradient.addColorStop(1, 'rgba(3,86,113)');
                            }

                            return gradient;
                        },
                    }],
                };
            },
            chartOptions() {
                    return {
                        responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    scales: {
                        x: {
                            display: false,
                            max:()=>{
                                var m = _.max(this.data_set)
                                if(m > 50){
                                    m = m+10
                                }else{
                                    m = m+5
                                }
                                return m
                            },
                        },
                        y:{
                            ticks:{
                                color: this.theme=='dark'?'white':'black'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }

                }
        },
    }
</script>