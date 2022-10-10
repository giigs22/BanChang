<template>
    <div class="block-widgets col-span-12 lg:col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">Smart Pole Energy</span>
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg @click="fullview" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="43.026"
                height="43.026" viewBox="0 0 43.026 43.026">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="#7a7afe" />
            </svg>
        </div>
        <div class="detail gap-10">
            <div>
                <img src="@/assets/icon_poll.png" alt="" class="w-32">
            </div>
            <div class="flex flex-col items-center text-center text-white">
                <p class="text-sm">Power Usage / Month</p>
                <p class="text-lg">{{cost_energy}} Baht</p>
                <div class="flex items-baseline gap-3">
                    <div>
                        <p class="text-4xl">{{offline}}</p>
                        <p class="text-xs">Offline</p>
                    </div>
                    <div class="border border-slate-500 h-10 my-auto"></div>

                    <div>
                        <p class="text-4xl">{{no_good}}</p>
                        <p class="text-xs">No good</p>
                    </div>
                </div>
                <div class="flex mt-2 content-center">
                    <div class="flex flex-col text-left text-xs">
                        <span> {{avg_data.volte}} V
                        </span>
                        <span> {{avg_data.amp}} a
                        </span><span> {{avg_data.power}} KW
                        </span>
                    </div>
                    <div class="flex flex-col text-left text-xs ml-10">
                        <span> {{avg_data.freq}} Hz
                        </span>
                        <span> {{avg_data.pf}} PF
                        </span><span> {{month_energy}} KWh
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import _ from 'lodash'

    export default {
        data() {
            return {
                online: 0,
                offline: 0,
                no_good: 0,
                cost_energy: 0,
                data_lnr: [],
                month_energy: 0,
                avg_data: {
                    volte: 0,
                    amp: 0,
                    power: 0,
                    freq: 0,
                    pf: 0
                }
            }
        },
        async created() {
            await this.getData()
            await this.getStatus()
            this.calEnergy()
            this.calAvgEnergy()
            setInterval(async() => {
                await this.getData()
                await this.getStatus()
                this.calEnergy()
                this.calAvgEnergy()
            }, this.$interval_time);
        },
        methods: {
            getData(){
                var data = {
                    type:'lastdata',
                    sensor:'smart_pole'
                }
                return this.$store.dispatch('data/getData',data).then((res)=>{
                    var data = res.data
                    this.data_lnr = data
                })
            },
            getStatus(){
                var data = {
                    sensor:'smart_pole'
                }
                return this.$store.dispatch('data/getStatus',data).then((res)=>{
                    var data = res.data
                    this.online = data.online
                    this.offline = data.offline
                })
            },
            calEnergy() {
                //Cost Energy Month
                var month_energy = 0
                this.data_lnr.forEach((el) => {
                    month_energy += parseFloat(el.monthlyEnergy[0].value)
                })

                var sum_energy = month_energy.toFixed(2)
                var cost_energy = 0
                if (sum_energy > 100) {
                    var first_cost = 100 * 2.0889
                    var sec_energy = sum_energy - 100
                    var sec_cost = sec_energy * 3.2405

                    cost_energy = first_cost + sec_cost
                } else {
                    cost_energy = sum_energy * 2.0889
                }
                this.cost_energy = cost_energy.toFixed(2);
                this.month_energy = sum_energy
            },
            calAvgEnergy() {
                var avg_volte = (this.data_lnr.reduce((sum, val) => sum + parseFloat(val.voltage[0].value), 0) / this
                    .data_lnr.length).toFixed(2)
                var avg_amp = (this.data_lnr.reduce((sum, val) => sum + parseFloat(val.current[0].value), 0) / this
                    .data_lnr.length).toFixed(2)
                var avg_power = (this.data_lnr.reduce((sum, val) => sum + parseFloat(val.power[0].value), 0) / this
                    .data_lnr.length).toFixed(2)
                var avg_freq = (this.data_lnr.reduce((sum, val) => sum + parseFloat(val.frequency[0].value), 0) / this
                    .data_lnr.length).toFixed(2)
                var avg_pf = (this.data_lnr.reduce((sum, val) => sum + parseFloat(val.pf[0].value), 0) / this.data_lnr
                    .length).toFixed(2)

                this.avg_data.volte = avg_volte;
                this.avg_data.amp = avg_amp;
                this.avg_data.power = avg_power;
                this.avg_data.freq = avg_freq;
                this.avg_data.pf = avg_pf;
            },
            fullview() {
                this.$router.push('/view/smart_pole')
            },
        },
    }
</script>