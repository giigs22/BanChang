<template>
    <Doughnut :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
        :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>
<script>
    import {
        Doughnut
    } from 'vue-chartjs';
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        CategoryScale
    } from 'chart.js'
    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)
    export default {
        name: 'DoughnutChart',
        components: {
            Doughnut
        },
        props: {
            data_set:{
                type:Array,
                default:()=>[]
            },
            chartId: {
                type: String,
                default: 'doughnut-chart'
            },
            datasetIdKey: {
                type: String,
                default: 'label'
            },
            width: {
                type: Number,
                default: 300
            },
            height: {
                type: Number,
                default: 150
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
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                chartData: {
                    labels: ['Normal', 'Suspect'],
                    datasets: [{
                        backgroundColor: ['#FF5774', '#7A7AFE'],
                        data: this.data_set,
                        borderWidth:0
                    }]
                },
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout:55,
                    plugins: {
                        legend: {
                            display: false
                        },
                        datalabels:{
                            display:false
                        }
                    }
                }
            }
        },
        computed:{
            chartData(){
                return{
                    labels: ['Normal', 'Suspect'],
                    datasets: [{
                        backgroundColor: ['#7A7AFE','#FF5774'],
                        data: this.data_set,
                        borderWidth:0,
                    }]
                }
            }
        }
    }
</script>