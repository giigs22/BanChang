<template>
    <div class="flex gap-5 my-4 justify-end">
        <button :class="[map_type=='1'?'btn-purple':'btn-gray']" @click="stdMap">Map</button>
        <button :class="[map_type=='2'?'btn-purple':'btn-gray']" @click="heatMap">Heatmap</button>
    </div>
    <div id="map" class="map"></div>
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
                map_type:'1'
            }
        },
        computed: {
            statusServer() {
                return this.$store.state.server.api_sensor.connect;
            },
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
                // var heatmapData = [
                //     new window.google.maps.LatLng(12.676913467590238, 101.06454892912522),
                //     ];
            },
            setDataLayer(val = []) {
                this.clearMarker()
                var layer = val
                var arr_data = []
                var set_data = []
                if (this.statusServer) {
                    if (layer.length > 0) {
                        layer.forEach(el => {
                            var st_map = this.$store.state.map[el]
                            var group_data = _.cloneDeep(st_map)

                            var g_arr = Object.entries(group_data)
                            g_arr.forEach(el2 => {
                                arr_data.push({
                                    widget: el,
                                    value: el2
                                })
                            });

                        });

                        arr_data.forEach(el2 => {

                            var dt = _.find(el2.value[1], 'data')
                            var loc = _.find(el2.value[1], 'location')
                            var st = _.find(el2.value[1], 'status')
                            var n = _.find(el2.value[1], 'name')
                            set_data.push({
                                widget: el2.widget,
                                name: n.name,
                                device_id: el2.value[0],
                                data: dt.data,
                                location: loc.location,
                                status: st == undefined ? false : st.status
                            })
                        });
                        this.list_map = set_data
                        this.clearMarker()
                        this.setMarker()
                    } else {
                        this.list_map = []
                    }

                } else {
                    if (layer.length > 0) {
                        this.$store.dispatch('map/getMapData', layer).then((res) => {
                            var data = res.data

                            data.forEach(el=>{
                                 var dt = JSON.parse(el.data)
                                 var loc = JSON.parse(el.location)
                                 var st = false
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
                        })
                        
                    }
                }
            },
            stdMap(){
                this.map_type = '1'
                map = new window.google.maps.Map(document.getElementById('map'), {
                            center: banchang,
                            zoom: 15
                })
            },
            heatMap(){
                this.map_type = '2'
                    
                map = new window.google.maps.Map(document.getElementById('map'), {
                    center: banchang,
                    zoom: 13,
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