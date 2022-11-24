<template>
    <div class="flex gap-5 my-4 justify-end">
        <button :class="[map_type=='1'?'btn-purple':'btn-gray']" @click="stdMap" v-if="heatmap">Map</button>
        <button :class="[map_type=='2'?'btn-purple':'btn-gray']" @click="heatMap" v-if="heatmap">Heatmap</button>
    </div>
    <div id="map" class="map2"></div>
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
    var banchang
    var markers = []
    var mkcluster
    var heatmapData = []

export default {
    props:['datamap','heatmap'],
    data() {
        return {
            map_type:'1',
            list_map:[]
        }
    },
    async created(){
            const spiderfier = document.createElement('script');
            spiderfier.src = "https://cdnjs.cloudflare.com/ajax/libs/OverlappingMarkerSpiderfier/1.0.3/oms.min.js";
            document.querySelector('head').appendChild(spiderfier);

            await loader.load().then(() => {
                banchang = new window.google.maps.LatLng(12.676913467590238, 101.06454892912522);
                this.stdMap()

                })
                .catch(error => {
                    console.log(error)
                })

            this.setMapData()
            if(this.map_type == '2'){
                   this.setHeatmap()
            }

            setInterval(async () => {
                this.setMapData()
                if(this.map_type == '2'){
                   this.setHeatmap()
               }
            }, this.$interval_time);


    },
    watch:{
        datamap(n,o){
            console.log(n,o);
           var n_data = _.cloneDeep(n)
           var g_data = Object.entries(n_data)
           if(g_data.length > 0){
            this.setMapData()
           }
         }

    },
    methods:{
        stdMap(){
            this.map_type = '1'
                map = new window.google.maps.Map(document.getElementById('map'), {
                            center: banchang,
                            zoom: 12
                })
                this.setMapData()
        },
        heatMap(){
                this.map_type = '2'

                map = new window.google.maps.Map(document.getElementById('map'), {
                    center: banchang,
                    zoom: 12,
                    mapTypeId: 'satellite'
                    });
                this.setMapData()
                this.setHeatmap()
            },
        setMapData(){
            var set_data = []
                var datamap = this.datamap
                datamap.forEach(el=>{
                        var dt = el.data
                        var loc = el.location
                        var st = el.status
                        var n = el.name
                        if(el.fix){
                            set_data.push({
                            widget: el.widget,
                            name: n,
                            device_id: el.device_id,
                            data: dt,
                            location: loc,
                            status: st,
                            fix:el.fix
                            })
                        }else{
                            set_data.push({
                            widget: el.widget,
                            name: n,
                            device_id: el.device_id,
                            data: dt,
                            location: loc,
                            status: st
                            })
                        }
                })
                this.list_map = set_data
                this.clearMarker()
                this.setMarker()


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
        },
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
                   var icon_sensor
                   if(el.fix){
                    icon_sensor = dataMap.setIconMapFix()
                   }else{
                    icon_sensor = dataMap.setIconMap(el.widget,el.status)
                   }
                   var latlong = {
                       lat: parseFloat(el.location.lat),
                       lng: parseFloat(el.location.long),
                   }
                   const my_icon ={
                       url: icon_sensor,
                       scaledSize: new google.maps.Size(24, 24), // scaled size
                       origin: new google.maps.Point(0,0), // origin
                       anchor: new google.maps.Point(12, 12) // anchor
                   };
                   var marker = new window.google.maps.Marker({
                   position:latlong,
                   map,
                   title:el.name,
                   icon:my_icon,
                   })
                   var content_html

                   if(el.fix){
                    content_html = `<h5 class="font-bold my-2">${el.name}</h5>`
                    content_html += dataMap.setContentFix(el.widget,el.data)
                    content_html += `<h5 class="font-bold my-2">Location:LAT${latlong.lat},LONG${latlong.lng}</h5>`
                    }else{
                    content_html = `<h5 class="font-bold my-2">${el.name}</h5>`
                    content_html += dataMap.setContent(el.widget,el.data,el.status)
                    content_html += `<h5 class="font-bold my-2">Location:LAT${latlong.lat},LONG${latlong.lng}</h5>`
                   }

                   content_html += '<button onclick="this.buttonOnClick">Search</button>'
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
                // var heatmapData = [
                //     new window.google.maps.LatLng(12.676913467590238, 101.06454892912522),
                //     ];
            },
            buttonOnClick() {
                console.log('buttonOnClick called')
            }
    }
}
</script>
<style scoped>
    .map2 {
        height: 620px;
    }
</style>
