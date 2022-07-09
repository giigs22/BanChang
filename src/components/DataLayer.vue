<template>
    <div class="block-layer data-layer py-2 px-3 mt-4">
        <h4 class="text-sm text-white">Data Layer</h4>
        <ul class="text-white text-sm list-data-layer mt-5">
            <li>Air Quality <input v-model="selected_widget" type="checkbox" value="aqi" class="mr-5 cus-checkbox">
            </li>
            <li>Smart Lighting <input v-model="selected_widget" type="checkbox" value="sl" class="mr-5 cus-checkbox">
            </li>
            <li>Smart Pole <input v-model="selected_widget" type="checkbox" value="sp" class="mr-5 cus-checkbox">
            </li>
            <li>CCTV Camera <input v-model="selected_widget" type="checkbox" value="cctv" class="mr-5 cus-checkbox">
            </li>
            <li>CCTV Survillance <input v-model="selected_widget" type="checkbox" value="cctv_sur" class="mr-5 cus-checkbox">
            </li>
            <li>Parking <input v-model="selected_widget" type="checkbox" value="p" class="mr-5 cus-checkbox"></li>
            <li>Free Wifi <input v-model="selected_widget" type="checkbox" value="wifi" class="mr-5 cus-checkbox">
            </li>
            <li>Digital Signage <input v-model="selected_widget" type="checkbox" value="digi_sig" class="mr-5 cus-checkbox">
            </li>
            <li>SOS <input v-model="selected_widget" type="checkbox" value="sos" class="mr-5 cus-checkbox"></li>
            <li>Complaint <input v-model="selected_widget" type="checkbox" value="comp" class="mr-5 cus-checkbox">
            </li>
            <li>Maintenance <input v-model="selected_widget" type="checkbox" value="main" class="mr-5 cus-checkbox">
            </li>

        </ul>
        <div class="flex justify-between mx-5">
            <div class="flex items-center gap-3">
                <input type="checkbox" value="" class="cus-checkbox"> <label for="" class="text-white">
                    All</label>
            </div>
            <div class="flex gap-2">
                <button class="btn-purple">Show</button>
                <button class="btn-red">Clear</button>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selected_widget:[]
        }
    },
}
</script>