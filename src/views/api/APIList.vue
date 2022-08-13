<template>
    <TopMenu/>
     <main class="mx-10 mt-20">
        <!-- Content -->
        <section class="">
            <!-- Main Section -->
            <div class="inner-content mx-10">
                <div class="main-content">
                    <div class="block-content mb-5">
                        <h1 class="text-xl text-white ml-10 mb-5">API Setting</h1>
                        
                        <div class="">
                          <label for="">API Sensor</label>
                          <input type="text" class="form-input">
                        </div>
                         <div class="">
                          <label for="">API Sensor Last Data</label>
                          <input type="text" class="form-input">
                        </div>
                          <div class="">
                          <label for="">API Sensor Historical Data</label>
                          <input type="text" class="form-input">
                        </div>
                          <div class="">
                          <label for="">API Web Application</label>
                          <input type="text" class="form-input">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <FooterPage class="2xl:fixed inset-x-0 bottom-0"/>
</template>
<script>
import TopMenu from '../layout/TopMenu.vue'
import FooterPage from '../layout/FooterPage.vue'

export default{
    components:{
        TopMenu,
        FooterPage,
    },
    data() {
        return {
          
        }
    },
    created(){
       
    },
    methods:{
       
    }
}
</script>