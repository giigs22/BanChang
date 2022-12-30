<template>
    <div class="overflow-hidden h-10 my-4 text-xs flex rounded-2xl">
        <div v-for="item in list_data" :style="'width:'+item.percent+'%;background-color:'+item.color"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center">
        </div>

    </div>
    <div class="grid grid-cols-12">
        <div class="col-span-3 lg:col-span-4" v-for="item in list_data">
            <div class="flex dark:text-white items-center gap-5 text-xl mb-3">
                <div class="w-4 h-4 rounded-full" :style="'background-color:'+item.color"></div>
                {{item.type.toUpperCase()}} <span class="ml-3">{{item.value}}</span>
            </div>
        </div>

    </div>
</template>
<script>
    import _ from 'lodash'

    export default {
        props: ['data'],
        data() {
            return {
                list_type: null,
                list_data: null
            }
        },
        watch: {
            data(n, o) {
                const arr_type = Object.entries(n).map((arr) => ({
                    type: arr[0],
                    value: arr[1],
                }));
                this.list_type = arr_type
                this.setData()
            }
        },
        methods: {
            setData() {
                var list = []
                this.list_type.forEach(el => {
                    list.push({
                        type: el.type,
                        value: el.value,
                        color: this.randomColor(),
                        percent: this.calPercent(el.value)
                    })
                });
                this.list_data = list

            },
            calPercent(value) {
                var sum = _.sumBy(this.list_type, 'value')
                var percent = (value * 100) / sum
                return Math.ceil(percent)
            },
            randomColor() {
                var num = Math.round(0xffffff * Math.random());
                var r = num >> 16;
                var g = num >> 8 & 255;
                var b = num & 255;
                return 'rgb(' + r + ', ' + g + ', ' + b + ')';
            }
        }
    }
</script>