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
                    <div class="px-2 py-2 text-white flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg> <span class="ml-3 text-xl">Confirm</span>
                    </div>
                    <div class="bg-white px-5">
                        <h2 class="text-lg text-center my-3">Edit Category Widgets</h2>
                        <div class="flex flex-col gap-2 my-5">
                            <label for="" class="font-bold">Name</label>
                       <input type="text" class="form-input" v-model="name">
                       <div class="text-red-600 text-sm" v-if="error.name.active">{{error.name.msg}}</div>
                        </div>
                         <div class="flex flex-col gap-2">
                            <label for="" class="font-bold">Upload Icon</label>
                       <input type="file" ref="file" @change="handleFile()">
                        <div class="text-red-600 text-sm" v-if="error.file.active">{{error.file.msg}}</div>
                        </div>
                    </div>
                    <div class="px-4 py-3 justify-end sm:px-6 sm:flex sm:flex-row">
                        <button type="button" @click="update"
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-600 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Update
                        </button>
                        <button type="button"
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
export default{
    props:['id','namecate'],
    data() {
        return {
            name:null,
            file:null,
            error:{
                name:{
                    active:false,
                    msg:null
                },
                file:{
                    active:false,
                    msg:null
                },
            }
        }
    },
    created(){
        this.name = this.namecate
    },
    methods:{
        update(){
            if(this.name == null){
                this.error.name.active = true
                this.error.name.msg = "Please insert name"
            }else{
                this.error.file.active = false
                this.error.file.msg = null
                this.error.name.active = false
                this.error.name.msg = null

            let formData = new FormData();
            formData.append('name',this.name)
            formData.append('file',this.file)

            this.$store.dispatch('widget/updateCate',formData).then((res)=>{
                var success = res.data.success
                if(success){
                    this.close()
                }
            })
            }

          
        },
        handleFile(){
            this.file = this.$refs.file.files[0]
        },
        close(){
            this.$emit('close')
        }
    }
}
</script>