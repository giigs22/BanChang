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
        data() {
            return {

            }
        },
        computed:{
            statusServer() {
                return this.$store.state.server.api_sensor.connect;
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
            setDataLayer(val){
                var layer = val
                var arr_data = []
                var set_data = []
                if(this.statusServer){
                    if(layer.length > 0){
                        layer.forEach(el => { 
                        var st_map = this.$store.state.map[el]
                            var group_data = _.cloneDeep(st_map)
                            
                            arr_data = Object.entries(group_data)
                        });
                        arr_data.forEach(el2 => {
                            var dt = _.find(el2[1],'data')
                            var loc = _.find(el2[1],'location')
                            var st = _.find(el2[1],function(s){
                                console.log(s.status);
                            })
                            //console.log(st);
                            set_data.push({device_id:el2[0],data:dt,location:loc,status:st})
                        });
                        console.log(set_data);
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