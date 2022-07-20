<template>
    <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

            <transition name="bg-fade">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            </transition>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <transition name="alertbox">
                <div
                    class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div class="bg-green-500 px-2 py-2 text-white flex" v-if="type == 'success'">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                        </svg> <span class="ml-3 text-xl">Succes</span>
                    </div>
                    <div class="bg-red-500 px-2 py-2 text-white flex" v-if="type == 'error'">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg> <span class="ml-3 text-xl">Warning</span>
                    </div>
                    <div class="bg-yellow-500 px-2 py-2 text-white flex" v-if="type == 'confirmdel'">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg> <span class="ml-3 text-xl">Confirm</span>
                    </div>
                    <div class="bg-white px-4 pt-5 pb-4 text-center" v-if="type == 'success'">
                        <h1 class="font-weight-bold text-lg mb-5 text-green-700">Success Message: {{msg}}
                        </h1>
                    </div>
                    <div class="bg-white px-4 pt-5 pb-4 text-center" v-if="type == 'error'">
                        <h1 class="font-weight-bold text-lg mb-5 text-red-700">Error Message: {{msg}}
                        </h1>
                    </div>
                    <div class="bg-white px-4 pt-5 pb-4 text-center" v-if="type === 'confirmdel'">
                        <h1 class="font-weight-bold text-lg mb-5 ">Warning Message: {{msg}}</h1>
                    </div>
                    <div class="px-4 py-3 justify-end sm:px-6 sm:flex sm:flex-row">
                        <button v-if="type === 'confirmdel'" @click="submit()" type="button"
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-600 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Confirm
                        </button>
                        <button @click="close()" type="button"
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-gray-700 font-medium focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Close
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['msg', 'type'],
        data() {
            return {

            }
        },
        methods: {
            close() {
                this.$emit('close');
            },
            submit() {
                this.$emit('submit', true)
            }
        }
    }

</script>
