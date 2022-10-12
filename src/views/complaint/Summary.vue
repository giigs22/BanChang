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
</template>
<script>
export default {
    props:['data','alldata'],
    data() {
        return {
            percent:{
                elec:0,
                wa:0,
                distur:0,
                etc:0
            }
        }
    },
    created(){
        this.calPercent()
    },
    methods:{
        calPercent(){
                var all = this.alldata
                var elec = (this.data.electricity*100)/all
                var wa = (this.data.water*100)/all
                var distur = (this.data.disturbance*100)/all
                var etc = (this.data.etc*100)/all
                this.percent.elec = Math.round(elec)
                this.percent.wa = Math.round(wa)
                this.percent.distur = Math.round(distur)
                this.percent.etc = Math.round(etc)
            }
    }
}
</script>