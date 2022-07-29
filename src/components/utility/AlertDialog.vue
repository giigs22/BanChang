<template>
    <div class="bg-gray-700 fixed inset-0 opacity-30 overflow-y-auto z-20 transition duration-200 ease-in-out"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <div
            class="transition duration-200 delay-700 ease-in-out flex items-center justify-between max-w-md p-4 bg-gray-500 rounded-md">
            <div class="flex gap-5 items-center">
                <img src="@/assets/icon_remove.png" alt="" class="w-20" v-if="type==='del_success'">
                <img src="@/assets/icon_info_circle.png" alt="" class="w-20" v-else>
                <h1 class="text-2xl text-white">{{msg}}</h1>
            </div>
          
        </div>
    </div>
</template>
<script>
    export default {
        props: ['type','msg']
    }
</script>