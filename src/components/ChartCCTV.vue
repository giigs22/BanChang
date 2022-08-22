<template>
    <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
        :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>

<script>
    import {
        Bar
    } from 'vue-chartjs'
    import ChartDataLabels from 'chartjs-plugin-datalabels';

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
            max_value:{
                type:Number,
                default:0
            }
        },
        data() {
            return {
                chartData: {
                    labels: ['Camera Malfunction', 'Trespasser', 'Suspected Face Detection', 'Group Cluster Detection',
                        'Traffic Violation', 'Parking Violation'
                    ],
                    datasets: [{
                        data: [1, 2, 3, 4, 5, 6],
                        barPercentage: 0.8,
                        axis: 'y',
                        datalabels: {
                            align: 'end',
                            anchor: 'end',
                            clamp:true,
                        },
                        borderRadius: 15,
                        backgroundColor: (ctx) => {
                            const canvas = ctx.chart.ctx;
                            const gradient = canvas.createLinearGradient(0, 0, 300, 0);

                            gradient.addColorStop(0, 'rgba(218,186,255,0)');
                            gradient.addColorStop(0.7, 'rgba(223,154,255,0.28)');
                            gradient.addColorStop(1, 'rgba(237,71,255,1)');

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
                            max:7,
                        },
                        y:{
                            ticks:{
                                color:'white'
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
            chartData() {
                return {
                    labels: ['Camera Malfunction', 'Trespasser', 'Suspected Face Detection', 'Group Cluster Detection',
                        'Traffic Violation', 'Parking Violation'
                    ],
                    datasets: [{
                        data: [1, 2, 3, 4, 5, 6],
                        barPercentage: 0.8,
                        axis: 'y',
                        datalabels: {
                            align: 'end',
                            anchor: 'end',
                            clamp:true,
                            color:"white",
                            
                        },
                        borderRadius: 15,
                        backgroundColor: (ctx) => {
                            const canvas = ctx.chart.ctx;
                            const gradient = canvas.createLinearGradient(0, 0, 300, 0);

                            gradient.addColorStop(0, 'rgba(218,186,255,0)');
                            gradient.addColorStop(0.7, 'rgba(223,154,255,0.28)');
                            gradient.addColorStop(1, 'rgba(237,71,255,1)');

                            return gradient;
                        },
                    }],
                };
            },
        },
    }
</script>