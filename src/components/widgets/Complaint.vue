<template>
    <div class="block-widgets col-span-12 lg:col-span-4">
        <div class="status">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-2 h-2" viewBox="0 0 9.361 9.361">
                <ellipse id="wStatus" cx="4.681" cy="4.681" rx="4.681" ry="4.681" fill="#08ff00" />
            </svg>
            <span class="text-sm uppercase">{{$t('complaint')}}</span>
        </div>
        <div class="open-full absolute right-2 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="43.026" height="43.026" viewBox="0 0 43.026 43.026"
                class="bg-dark-light">
                <path id="Icon_awesome-arrow-circle-down" data-name="Icon awesome-arrow-circle-down"
                    d="M30.424,15.212A15.212,15.212,0,1,1,15.212,0,15.209,15.209,0,0,1,30.424,15.212Zm-8.808-1.773-4.441,4.631V6.87A1.469,1.469,0,0,0,15.7,5.4h-.981A1.469,1.469,0,0,0,13.249,6.87v11.2L8.808,13.439a1.474,1.474,0,0,0-2.1-.025l-.669.675a1.466,1.466,0,0,0,0,2.079l8.134,8.14a1.466,1.466,0,0,0,2.079,0l8.14-8.14a1.466,1.466,0,0,0,0-2.079l-.669-.675a1.474,1.474,0,0,0-2.1.025Z"
                    transform="translate(21.513 43.026) rotate(-135)" fill="" />
            </svg>
        </div>
        <div class="detail gap-10">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="151.923" height="118.162" viewBox="0 0 151.923 118.162"
                    class="bg-dark-light w-32">
                    <path id="Icon_awesome-comments" data-name="Icon awesome-comments"
                        d="M109.722,44.451c0-23.316-24.556-42.2-54.861-42.2S0,21.135,0,44.451C0,53.5,3.719,61.832,10.023,68.716A59.366,59.366,0,0,1,.58,83.091a2.1,2.1,0,0,0-.4,2.295A2.066,2.066,0,0,0,2.11,86.652a46.441,46.441,0,0,0,23.4-6.594,67.113,67.113,0,0,0,29.356,6.594C85.167,86.652,109.722,67.767,109.722,44.451ZM141.9,102.477c6.3-6.858,10.023-15.219,10.023-24.265,0-17.645-14.111-32.758-34.1-39.062a39.194,39.194,0,0,1,.343,5.3c0,27.932-28.406,50.641-63.3,50.641a79.076,79.076,0,0,1-8.361-.5c8.308,15.166,27.826,25.822,50.562,25.822a66.746,66.746,0,0,0,29.356-6.594,46.441,46.441,0,0,0,23.4,6.594,2.08,2.08,0,0,0,1.925-1.266,2.114,2.114,0,0,0-.4-2.295A58.735,58.735,0,0,1,141.9,102.477Z"
                        transform="translate(0 -2.25)" fill="" />
                </svg>

            </div>
            <div class="dark:text-white">
                <p class="text-2xl"><span class="text-6xl">{{count_all}}</span> {{$t('topics')}}</p>
                <p class="text-sm">{{received}} {{$t('received')}} / {{pending}} {{$t('pending')}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count_all:0,
            pending:0,
            received:0
        }
    },
    created(){
        this.getStatComp()
    },  
    methods: {
        getStatComp(){
            this.$store.dispatch('complaint/getStat').then((res)=>{
                var data = res.data
                this.count_all = data.all
                this.pending = data.pending
                this.received = data.received
            })
        }
    },
}
</script>