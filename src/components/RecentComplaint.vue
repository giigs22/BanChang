<template>
    <h1 class="text-xl dark:text-white">{{$t('recent_complaint')}}</h1>
    <div class="table-complaint px-4 lg:px-10 lg:overflow-hidden overflow-scroll">
        <div class="text-right py-3">
            <a class="btn-purple" href="/complaint">> {{$t('read_more')}}</a>
        </div>
        <table class="table-auto lg:w-full">
            <thead class="bg-head-table-comp">
                <tr>
                    <td>{{$t('no')}}</td>
                    <td>{{$t('topic')}}</td>
                    <td>{{$t('category')}}</td>
                    <td>{{$t('date_time')}}</td>
                    <td>{{$t('responsible_agency')}}</td>
                    <td>{{$t('location')}}</td>
                    <td>{{$t('status')}}</td>
                    <td>{{$t('action')}}</td>
                </tr>
            </thead>
            <tbody class="bg-body-table-comp">
                <tr v-for="item in list_comp">
                    <td>{{item.id}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.type}}</td>
                    <td>{{item.date_complaint}}</td>
                    <td>{{item.respon_agen}}</td>
                    <td>{{setLocation(item.location)}}</td>
                    <td>{{item.status}}</td>
                    <td><a class="font-bold underline" :href="'complaint/reply/'+item.id">Reply</a></td>
                </tr>

            </tbody>
        </table>
        <div class="py-5 clear-both"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isLoading:false,
            list_comp:[]
        }
    },
    created(){
        this.getComplaintData()
    },
    methods: {
        getComplaintData(){
                var data = {
                    itemperpage: 5,
                    start:0,
                   
                }
                var type = 'all'
                this.isLoading = true
                return this.$store.dispatch('complaint/listdata',{data,type}).then((res)=>{
                    var data = res.data
                    this.list_comp = data.list_comp
                    this.isLoading = false
                })
            },
            setLocation(data){
                try {
                    var location = JSON.parse(data)
                    var long = parseFloat(location.longitude)
                    var lat = parseFloat(location.latitude)

                    var new_location = long.toFixed(7)+','+lat.toFixed(7)
                    return new_location
                } catch (error) {
                    return data
                }

            },
    },
}
</script>