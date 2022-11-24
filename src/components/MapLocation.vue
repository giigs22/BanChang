<template>
    <div class="flex gap-5 my-4 justify-end">
        <button :class="[map_type=='1'?'btn-purple':'btn-gray']" @click="stdMap">{{$t('map')}}</button>
        <button :class="[map_type=='2'?'btn-purple':'btn-gray']" @click="heatMap">{{$t('heatmap')}}</button>
    </div>
    <div id="map" class="map"></div>
    <loading v-model:active="isLoading" color="#202A5A" loader="dots" :is-full-page="false"
                            :opacity="0.1" class="rounded-lg" />
    </template>
<script>
    import { Loader } from "@googlemaps/js-api-loader"
    import { MarkerClusterer } from "@googlemaps/markerclusterer";

    import dataMap from '../services/data.map'
    import _ from 'lodash'
    const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        libraries:['visualization']
    })
    var map
    var heatmap
    var markers = []
    var mkcluster
    var heatmapData = []
    var banchang


    export default {
        data() {
            return {
                list_map: [],
                map_type:'1',
                isLoading:false
            }
        },
        async created() {
            const spiderfier = document.createElement('script');
            spiderfier.src = "https://cdnjs.cloudflare.com/ajax/libs/OverlappingMarkerSpiderfier/1.0.3/oms.min.js";
            document.querySelector('head').appendChild(spiderfier);

            await loader.load().then(() => {
                banchang = new window.google.maps.LatLng(12.676913467590238, 101.06454892912522);
                   this.stdMap()
                })
                .catch(error => {
                    console.log(error)
                }).then(() => {})
        },
        methods: {
            setMarker() {
                var oms = new OverlappingMarkerSpiderfier(map, {
                    markersWontMove: true,
                    markersWontHide: true,
                    basicFormatEvents: true,
                    circleFootSeparation: 60,
                    keepSpiderfied: true,
                    legWeight:0.2
                })
                this.list_map.forEach(el => {
                    var icon_sensor = dataMap.setIconMap(el.widget,el.status)
                    var latlong = {
                        lat: parseFloat(el.location.lat),
                        lng: parseFloat(el.location.long),
                    }
                    var marker = new window.google.maps.Marker({
                    position:latlong,
                    map,
                    title:el.name,
                    icon:icon_sensor,
                    })

                    var content_html = `<h5 class="font-bold my-2">${el.name}</h5>`
                    content_html += dataMap.setContent(el.widget,el.data,el.status)
                    content_html += `<h5 class="font-bold my-2">Location:LAT${latlong.lat},LONG${latlong.lng}</h5>`
                    const inforwindow = new window.google.maps.InfoWindow({
                        content:content_html,
                    })
                    
                    oms.addMarker(marker);
                    marker.addListener("click",()=>{
                    inforwindow.open({
                        anchor:marker,
                        map,
                        shouldFocus:false
                    })
                    })
                    markers.push(marker)
                })
                
                mkcluster = new MarkerClusterer({map,markers})
                if(this.map_type == '2'){
                    this.setHeatmap()
                }
               
            },
            setHeatmap(){
                this.list_map.forEach(el => {
                    var latlongmap = {
                        location:new window.google.maps.LatLng(parseFloat(el.location.lat),parseFloat(el.location.long)),
                        weight:3
                    }
                    heatmapData.push(latlongmap)
                })
                heatmap = new window.google.maps.visualization.HeatmapLayer({
                    data: heatmapData,
                    radius:20
                    });
                    heatmap.setMap(map);
                
            },
            setDataLayer(val = []) {
                this.clearMarker()
                var layer = val
                var arr_data = []
                var set_data = []
                this.isLoading = true
                this.$store.dispatch('map/getMapData', layer).then((res) => {
                    var data = res.data
                    data.forEach(el=>{
                        var dt = el.data
                        var loc = el.location
                        var st = el.status
                        var n = el.name

                        set_data.push({
                        widget: el.widget,
                        name: n,
                        device_id: el.device_id,
                        data: dt,
                        location: loc,
                        status: st
                        })
                    })
                    this.list_map = set_data
                    this.clearMarker()
                    this.setMarker()
                    this.isLoading = false
                });
                
            },
            stdMap(){
                this.map_type = '1'
                map = new window.google.maps.Map(document.getElementById('map'), {
                            center: banchang,
                            zoom: 12
                })
            },
            heatMap(){
                this.map_type = '2'
                    
                map = new window.google.maps.Map(document.getElementById('map'), {
                    center: banchang,
                    zoom: 12,
                    mapTypeId: 'satellite'
                    });
            },
            clearMarker(){
                if(markers.length > 0){
                    markers.forEach(function(m) {
                        m.setMap(null)
                    })
                    markers = []
                    mkcluster.clearMarkers()
                }
                if(heatmapData.length > 0){
                    heatmapData = []
                    heatmap.setMap(null)
                }
            }
        }
    }
</script>
<style scoped>
    .map {
        height: 90%;
    }
</style>