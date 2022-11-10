<template>
     <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <transition name="bg-fade">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            </transition>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <transition name="alertbox">
                <div
                    class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 sm:align-middle sm:max-w-lg w-full">
                    <div class="bg-white px-4 pt-5 pb-4 text-center">
                        <img :src="img_url" alt="" class="max-h-screen">
                    </div>
                    <div class="px-4 py-3 justify-end sm:px-6 sm:flex sm:flex-row">
                        <button @click="close()" type="button"
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-gray-700 font-medium focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            {{$t('close')}}
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    props:['img_url'],
    data() {
        return {
            
        }
    },
    methods:{
        close(){
            this.$emit('close')
        }
    }
}
</script>