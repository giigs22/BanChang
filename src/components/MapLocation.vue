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
    import IconMap from '../services/icon.map'
    import _ from 'lodash'
    const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
       
    })
    var map

    export default {
        props:['data'],
        data() {
            return {

            }
        },
        computed:{
            statusServer() {
                //return this.$store.state.server.api_sensor.connect;
                return false
            },
        },
        async created() {
            // await loader.load().then(() => {
            //         map = new window.google.maps.Map(document.getElementById('map'), {
            //             center: {
            //                 lat: 12.721616995559225,
            //                 lng: 101.06658441713084,
            //             },
            //             zoom: 15
            //         })
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     }).then(() => {})
            //this.setMarker()
            this.setDataLayer()
        },
        methods: {
            setMarker(){
                // const makers = new window.google.maps.Marker({
                //     position:{
                //         lat: 12.721616995559225,
                //         lng: 101.06658441713084,
                //     },
                //     map,
                //     title:"Test Marker",
                //     icon:'http://localhost:3000/src/assets/icon_cctv_yellow.png'
                // })
                // const inforwindow = new window.google.maps.InfoWindow({
                //     content:'<div class="text-red-600">Test Content Hover</div>'
                // })
                
                // makers.addListener("mouseover",()=>{
                //     inforwindow.open({
                //         anchor:makers,
                //         map,
                //         shouldFocus:false
                //     })
                // })
            },
            setDataLayer(){
                var layer = this.data
                var store_data = []
                if(this.statusServer){
                    if(layer.length > 0){
                        layer.forEach(el => { 
                        var st_map = this.$store.state.map[el]
                            var a = _.cloneDeep(st_map)
                            console.log(a);
                        });
                    }
                }else{
                    if(layer.length > 0){
                        this.$store.dispatch('map/getMapData',layer).then((res)=>{
                            console.log(res);
                        })
                    }
                }
            }
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