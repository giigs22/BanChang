<template>
    <Line :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
        :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>
<script>
    import {
        Line
    } from "vue-chartjs";
    import ChartDataLabels from 'chartjs-plugin-datalabels';

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale,
    } from "chart.js";

    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale,
        ChartDataLabels
    );

    export default {
        name: "LineChart",
        components: {
            Line,
        },
        props: {
            label: {
                type: Array,
                default: () => [],
            },
            data_set: {
                type: Array,
                default: () => [],
            },
            name_bar: {
                type: String,
                default: null
            },
            chartId: {
                type: String,
                default: "line-chart",
            },
            width: {
                type: Number,
                default: 400,
            },
            height: {
                type: Number,
                default: 400,
            },
            cssClasses: {
                default: "",
                type: String,
            },
            styles: {
                type: Object,
                default: () => {},
            },
            plugins: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {
                chartData: {
                    labels: this.label,
                    datasets: [{
                        label: this.name_bar,
                        data: this.data_set,
                        backgroundColor: '#F00',
                        borderColor: "#FFF",
                        tension: 0.1,
                        datalabels: {
                            align: 'end',
                            anchor: 'end'
                        }
                    }, ],
                },
                chartOptions: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: '#FFF'
                            }
                        },
                        datalabels:{
                            color:'#7cfc00'
                        }
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#00bcfc'
                            }
                        },
                        x: {
                            ticks: {
                                color: '#FFF'
                            }
                        }
                    }
                },
            }
        },
        computed: {
            chartData() {
                return {
                    labels: this.label,
                    datasets: [{
                        label: this.name_bar,
                        data: this.data_set,
                        backgroundColor: '#F00',
                        borderColor: "#FFF",
                        tension: 0.1,
                        datalabels: {
                            align: 'end',
                            anchor: 'end'
                        }
                    }, ],
                };
            },
        },
    };
</script>