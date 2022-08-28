<template>
    <div class="flex gap-5 my-4 justify-end">
        <button class="btn-purple">Map</button>
        <button class="btn-gray">Heatmap</button>
    </div>
  <div id="map" class="map"></div>
</template>
<script>
    import {
        Loader
    } from "@googlemaps/js-api-loader"
    const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
       
    })
    const map = []

    export default {
        data() {
            return {

            }
        },
        async created() {
            await loader.load().then(() => {
                    map.value = new window.google.maps.Map(document.getElementById('map'), {
                        center: {
                            lat: 12.721616995559225,
                            lng: 101.06658441713084,
                        },
                        zoom: 15
                    })
                })
                .catch(error => {
                    console.log(error)
                }).then(() => {})
        },
        methods: {

        }
    }
</script>
<style>
    .map{
        width: 100%;
        height: 90%;
        position: relative !important;
        border-radius: 5px;
    }
</style>