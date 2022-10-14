<template>
    <div class="overflow-hidden h-10 my-4 text-xs flex rounded-2xl">
        <div :style="'width:'+percent.elec+'%'"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500">
        </div>
        <div :style="'width:'+percent.wa+'%'"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500">
        </div>
        <div :style="'width:'+percent.distur+'%'"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">
        </div>
        <div :style="'width:'+percent.etc+'%'"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500">
        </div>
    </div>
    <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-4">
            <div class="flex text-white items-center gap-5 text-xl mb-3">
                <div class="w-4 h-4 rounded-full bg-red-500"></div> Electricity <span
                    class="ml-3">{{data.electricity}}</span>
            </div>
            <div class="flex text-white items-center gap-5 text-xl">
                <div class="w-4 h-4 rounded-full bg-blue-500"></div> Water <span class="ml-3">{{data.water}}</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-4">
            <div class="flex text-white items-center gap-5 text-xl mb-3">
                <div class="w-4 h-4 rounded-full bg-yellow-500"></div> Etc <span class="ml-3">{{data.etc}}</span>

            </div>
            <div class="flex text-white items-center gap-5 text-xl">
                <div class="w-4 h-4 rounded-full bg-green-500"></div> Disturbance <span
                    class="ml-3">{{data.disturbance}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['data'],
        data() {
            return {
                percent: {
                    elec: 0,
                    wa: 0,
                    distur: 0,
                    etc: 0
                },
            }
        },
        updated() {
            this.calPercent()
        },
        methods: {
            calPercent() {
                var all = this.data.electricity+this.data.water+this.data.disturbance+this.data.etc
                var elec = (this.data.electricity * 100) / all
                var wa = (this.data.water * 100) / all
                var distur = (this.data.disturbance * 100) / all
                var etc = (this.data.etc * 100) / all

                this.percent.elec = Math.ceil(elec)
                this.percent.wa = Math.ceil(wa)
                this.percent.distur = Math.ceil(distur)
                this.percent.etc = Math.ceil(etc)
            }
        }
    }
</script>