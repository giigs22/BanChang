<template>
    <TopMenu />
    <main class="mt-5 lg:mx-10 lg:mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-4 lg:mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <!-- <loading v-model:active="isLoading" color="#202A5A" loader="dots" :is-full-page="false" :opacity="0.1" class="rounded-lg"/> -->
                        <!--  Block List Complaint -->
                        <div class="lg:mx-20 my-5 flex flex-col gap-3">
                            <div class="block-comp">
                                <div class="grid grid-cols-12 gap-4">
                                    <div class="col-span-12 lg:col-span-9">
                                        <div class="flex flex-col items-center justify-between lg:flex-row">
                                            <div>
                                                <h1 class="font-bold my-2 lg:text-lg text-left max-w-xl">
                                                    {{$t('send_picture')}}</h1>
                                            </div>
                                            <div class="rounded-md bg-green-600 text-white px-3 py-1 lg:ml-10 lg:w-32">
                                                {{$t(comp_data.type)}}
                                            </div>

                                        </div>
                                        <p class="text-left my-2">{{comp_data.detail}}</p>

                                    </div>
                                    <div class="col-span-3">
                                        <div class="flex lg:justify-end gap-2 my-3">
                                            <button
                                                class="btn-blue-gradient px-3 py-2 rounded-md text-white font-bold">{{$t(comp_data.status)}}</button>
                                            <button
                                                class="bg-red-600 px-3 py-2 rounded-md font-bold">{{$t('delete')}}</button>
                                        </div>

                                    </div>
                                </div>
                                <div class="lg:ml-52 my-5 text-sm flex flex-col text-left lg:flex-row gap-2 lg:gap-5">
                                    <div><span class="font-bold">{{$t('by')}}</span> {{comp_data.name_complaint}}</div>
                                    <div><span class="font-bold">{{$t('location')}}</span> {{comp_data.location}}</div>
                                    <div><span class="font-bold">{{$t('date_time')}}</span> {{comp_data.date_complaint}}
                                    </div>
                                    <div><span class="font-bold">{{$t('responsible_agency')}}</span>
                                        {{comp_data.respon_agen}}</div>
                                </div>
                                <div class="mx-10 bg-white-op6 py-3 px-4 rounded-md mb-5"
                                    v-if="comp_data.img_comp.length > 0">
                                    <div class="grid grid-cols-12 mx-20">
                                        <div class="col-span-3" v-for="img in comp_data.img_comp">
                                            <img :src="img" alt="" class="h-32" @click="openImage(img)">
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <h1 class="font-bold text-lg text-left mb-5">{{$t('reply')}}</h1>
                                </div>
                                <div class="mx-10 p-5 text-left bg-block-content-dark rounded-md mb-5"
                                    v-for="item_re in comp_data.reply">
                                    {{item_re.text_reply}}
                                    <div class="mt-10 text-sm flex flex-col text-left lg:flex-row gap-2 lg:gap-5">
                                        <div><span class="font-bold">{{$t('by')}}</span> {{item_re.user.name}}</div>
                                        <div><span class="font-bold">{{$t('date_time')}}</span> {{item_re.created_at}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="block-comp">
                                <div class="bg-cyan-400 px-3 py-2 rounded-md text-black font-bold w-32">>{{$t('reply')}}
                                </div>
                                <textarea v-model="text_reply" rows="5" :class="error.active?'border border-red-600':''"
                                    class="my-3 dark:bg-gray-400 dark:text-white bg-wether-light rounded-xl placeholder:text-white"
                                    :placeholder="$t('type_something')"></textarea>
                                <div v-if="error.active" class="text-red-600">{{$t(error.msg)}}</div>
                                <div class="flex justify-end gap-2 my-2">
                                    <button class="bg-cyan-400 px-3 py-2 rounded-md text-black font-bold w-32"
                                        @click="submit">{{$t('submit')}}</button>
                                    <button class="bg-red-600 px-3 py-2 rounded-md font-bold w-32"
                                        @click="reset">{{$t('reset')}}</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <LightBoxImage :img_url="img_selected" v-if="lightbox" @close="closeLightbox"></LightBoxImage>
    <AlertDialog v-if="alert.active" :type="alert.type" :msg="alert.msg"></AlertDialog>
    <FooterPage />
</template>
<script>
    import TopMenu from '../layout/TopMenu.vue'
    import FooterPage from '../layout/FooterPage.vue'
    import LightBoxImage from '../../components/modals/LightBoxImage.vue'
    import AlertDialog from '../../components/utility/AlertDialog.vue'

    export default {
        components: {
            TopMenu,
            FooterPage,
            LightBoxImage,
            AlertDialog
        },
        data() {
            return {
                comp_data: {},
                img_selected: null,
                lightbox: false,
                text_reply: null,
                error: {
                    active: false,
                    msg: null
                },
                alert: {
                    active: false,
                    type: null,
                    msg: null
                }
            }
        },
        async created() {
            this.getComp()
        },
        methods: {
            getComp() {
                var data = this.$route.params.id
                return this.$store.dispatch('complaint/getcompID', data).then((res) => {
                    var data = res.data
                    this.comp_data = data
                })
            },
            openImage(val) {
                this.img_selected = val
                this.lightbox = true
            },
            closeLightbox() {
                this.lightbox = false
            },
            submit() {
                if (this.text_reply == null || this.text_reply == '') {
                    this.error.active = true;
                    this.error.msg = 'please_insert_text_reply'
                } else {
                    this.error.active = false;
                    this.error.msg = null
                    var data = {
                        comp_id: this.$route.params.id,
                        text_reply: this.text_reply
                    }
                    this.$store.dispatch('complaint/Reply', data).then((res) => {
                        var success = res.data.success
                        if (success) {
                            this.alert.active = true
                            this.alert.type = 'success'
                            this.alert.msg = res.data.message

                            setTimeout(() => {
                                this.closeAlert()
                            }, 2000);
                        }
                    }).catch((err) => {
                        console.error(err);
                    })
                }

            },
            reset() {
                this.text_reply = null
            },
            closeAlert() {
                this.alert.active = false
                this.alert.type = null
                this.alert.msg = null
            }
        }
    }
</script>