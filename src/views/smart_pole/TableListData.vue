<template>
    <table class="dark:text-white w-full">
        <thead>
            <tr>
                <th class="font-normal text-lg text-center border-r border-gray-700 w-1/2">
                    {{$t('location')}}</th>
                <th class="font-normal text-lg text-center">{{$t('status')}}</th>
            </tr>
        </thead>

    </table>
    <div v-if="list_data.length == 0 && isLoading == false" class="dark:text-white text-center my-5">{{$t('no_data')}}
    </div>
    <div class="m-1 p-1 lg:m-2 lg:p-2 list-data-layer dark:bg-black-op8" v-else>
        <table class="w-full">
            <tbody class="text-sm">
                <tr class="border-b dark:border-gray-700 border-slate-100" v-for="(item,index) in list_data"
                    :key="index" :class="[item.status?'text-green-600':'text-red-600']">
                    <td class="">
                        {{index+1}}
                    </td>
                    <td>
                        {{item.name}}
                    </td>
                    <td class="w-1/2 text-center">{{(item.status)?'ON':'OFF'}}</td>
                </tr>

            </tbody>

        </table>
    </div>
</template>
<script>
    export default {
        props: ['list_data'],
        data() {
            return {

            }
        },
    }
</script>