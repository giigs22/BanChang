<template>
    <div class="block-widgets col-span-12 lg:col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">{{$t('freewifi')}}</span>
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026" viewBox="0 0 43.026 43.026"
                class="bg-dark-light">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="" />
            </svg>
        </div>
        <div class="detail">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="184.603" height="129.222" viewBox="0 0 184.603 129.222" class="bg-dark-light w-32">
                    <path id="Icon_awesome-wifi" data-name="Icon awesome-wifi"
                        d="M183.134,37.694c-51.1-47.267-130.583-47.25-181.666,0a4.585,4.585,0,0,0-.1,6.628l9.876,9.8a4.684,4.684,0,0,0,6.461.11,110.665,110.665,0,0,1,149.2,0,4.687,4.687,0,0,0,6.461-.11l9.876-9.8a4.587,4.587,0,0,0-.1-6.628ZM92.3,94.551a18.46,18.46,0,1,0,18.46,18.46A18.459,18.459,0,0,0,92.3,94.551ZM150.76,70.44a88.551,88.551,0,0,0-116.917,0,4.56,4.56,0,0,0-.164,6.677l9.934,9.8a4.708,4.708,0,0,0,6.36.231,64.964,64.964,0,0,1,84.655,0,4.705,4.705,0,0,0,6.36-.231l9.934-9.8A4.56,4.56,0,0,0,150.76,70.44Z"
                        transform="translate(0 -2.25)" fill="" />
                </svg>

            </div>
            <div class="flex flex-col justify-center content-center items-center dark:text-white">
                <h1 class="text-6xl">{{online}} <span class="text-lg">/{{online+offline}}</span></h1>
                <div class="flex items-baseline gap-3">
                    <h3 class="text-xl">{{online}} <p class="dark:text-cyan-300 text-green-600 text-xs">{{$t('online')}}</p>
                    </h3>
                    <div class="border border-slate-500 h-6 my-auto"></div>
                    <h3 class="text-2xl">{{offline}} <p class="text-red-400 text-xs">{{$t('offline')}}</p>
                    </h3>
                </div>
                <p>{{$t('use')}} <span class="text-2xl dark:text-cyan-400 text-green-600">{{users}}</span> {{$t('users')}}</p>
                <p>{{$t('user_average')}} <span class="text-2xl dark:text-indigo-400">{{avg_users}}</span> {{$t('users')}}</p>
            </div>
        </div>

    </div>
</template>
<script>
    import _ from 'lodash'
    import UserService from '../../services/user.service'

    export default {
        data() {
            return {
                client: [],
                status: [],
                online: 0,
                offline: 0,
                users: 0,
                avg_users: 0
            }
        },
        async created() {
            await this.getStatus()
            await this.getData()
            this.setData()
            setInterval(async () => {
                this.clearData()
                await this.getStatus()
                await this.getData()
                this.setData()
            }, this.$interval_time);
        },
        methods: {
            getData() {
                var data = {
                    type: 'lastdata',
                    sensor: 'wifi'
                }
                return this.$store.dispatch('data/getData', data).then((res) => {
                    var data = res.data

                    data.forEach(el => {
                        this.client.push(el.client[0].value)
                    })

                }).catch((err)=>{
                    UserService.checkUnauthen(err.response)
                })
            },
            getStatus() {
                var data = {
                    sensor: 'wifi'
                }
                return this.$store.dispatch('data/getStatus', data).then((res) => {
                    var data = res.data
                    this.online = data.online
                    this.offline = data.offline
                }).catch((err)=>{
                    UserService.checkUnauthen(err.response)
                })
            },
            setData() {
                var sum_client = 0;
                var count_avg = 0;
            
                this.client.forEach(el => {
                    if (el > 0) {
                        count_avg += 1
                    }
                    sum_client += parseInt(el)
                });

                this.users = sum_client
                var avg_users = sum_client / count_avg;
                this.avg_users = isNaN(avg_users.toFixed(0)) ? 0 : avg_users.toFixed(0)
            },
            clearData() {
                this.client = []
                this.status = []
                this.online = 0
                this.offline = 0
                this.users = 0
                this.avg_users = 0
            }

        }
    }
</script>