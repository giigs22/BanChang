<template>
    <div class="searachbox mt-5 mb-5 dark:bg-block-content-dark bg-block-env-light lg:p-10 p-3 rounded-md">
        <div class="flex">
            <h3 class="text-lg dark:text-white">{{$t('search')}}</h3>

            <div class="ml-auto">
                <button class="btn-red" @click="modalExport">Report CSV</button>
            </div>
        </div>
        <div class="grid grid-cols-12 form-search">
            <div class="lg:col-span-6 col-span-12">
                <div class="grid grid-cols-4 gap-3">
                    <div class="lg:col-span-3 col-span-4">
                        <div class="grid grid-cols-4 gap-2">
                            <div class="col-span-4 lg:col-span-2 flex lg:justify-end">
                                <select v-model="search.condition" class="h-12 rounded text-sm w-full lg:ml-10">
                                    <option value="">{{$t('condition_type')}}</option>
                                    <option value="id">ID</option>
                                    <option value="name">Name</option>
                                    <option value="device_id">Device ID</option>
                                    <option value="device_name">Device Name</option>
                                </select>
                            </div>
                            <div class="col-span-4 lg:col-span-2">
                                <input v-model="search.keyword" type="text" :placeholder="$t('id')+','+$t('name')"
                                    class="form-input w-full">
                            </div>
                            <div class="col-span-4 lg:col-span-2 lg:flex items-end lg:justify-end">
                                <label for="" class="dark:text-white mr-1 block lg:w-16">{{$t('from')}}</label>
                                <input v-model="search.start_date" type="date" placeholder="DD/MM/YYYY"
                                    class="form-input w-full">
                            </div>
                            <div class="col-span-4 lg:col-span-2 lg:flex items-end">
                                <label for="" class="dark:text-white mr-1 block lg:w-16">{{$t('to')}}</label>
                                <input v-model="search.end_date" type="date" placeholder="DD/MM/YYYY"
                                    class="form-input w-full">
                            </div>
                        </div>
                    </div>
                    <div class="col-span-4 lg:col-span-1">
                        <button class="btn-purple rounded w-full lg:w-auto"
                            @click="searchData">{{$t('search')}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ExportCsv widget="env" v-if="exportdata" @close="modalExport"></ExportCsv>
</template>
<script>
import ExportCsv from '../modals/ExportCsv.vue';
    export default {
        props: ['endpoint'],
        components:{
            ExportCsv
        },
        data() {
            return {
                search: {
                    condition: null,
                    keyword: null,
                    start_date: null,
                    end_date: null
                },
                exportdata:false
            }
        },
        methods: {
            searchData() {
                this.$router.push({
                    name: this.endpoint,
                    params: {
                        cond: this.search.condition,
                        keyword: this.search.keyword,
                        start_date: this.search.start_date,
                        end_date: this.search.end_date
                    }
                })
            },
            modalExport(){
                this.exportdata = !this.exportdata
            },
            
        },
    }
</script>