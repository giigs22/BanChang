import _ from 'lodash'
const url_img = window.location.origin+'/src/assets/'
class dataMap{
    setIconMap(type,status){
        if(type == 'aqi'){
            return status?url_img+'icon_aqi_green.png':url_img+'icon_aqi_red.png'
        }else if(type == 'smlight'){
            return status?url_img+'icon_smart_light_green.png':url_img+'icon_smart_light_red.png'
        }else if(type == 'smpole'){
            return status?url_img+'icon_smart_pole_green.png':url_img+'icon_smart_pole_red.png'
        }else if(type == 'cctv'){
            return status?url_img+'icon_cctv_green.png':url_img+'icon_cctv_red.png'
        }else if(type == 'wifi'){
            return status?url_img+'icon_wifi_green.png':url_img+'icon_wifi_red.png'
        }else if(type == 'digi_sig'){
            return status?url_img+'icon_digis_green.png':url_img+'icon_digis_red.png'
        }else if(type == 'sos'){
            return status?url_img+'icon_sos_green.png':url_img+'icon_sos_red.png'
        } else if(type == 'hotel'){
            console.log('selected hotel')
            return status?url_img+'icon_hotel_green.svg':url_img+'icon_hotel_red.svg'
        } else if(type == 'restaurant'){
            console.log('selected restaurant')
            return status?url_img+'icon_restaurant_green.svg':url_img+'icon_restaurant_red.svg'
        } else if(type == 'attraction'){
            console.log('selected attraction')
            return status?url_img+'icon_attraction_green.svg':url_img+'icon_attraction_red.svg'
        } else if(type == 'otop'){
            console.log('selected otop')
            return status?url_img+'icon_otop_green.png':url_img+'icon_otop_red.png'
        }
    }
    setIconMapFix(){
        return url_img+'icon_fix_red.png'
    }
    setContent(type,data,status){
        var dt = _.cloneDeep(data)
        var html
        if(type == 'aqi'){
            //LNR
            var co2 = (dt.co2?.[0].value == undefined)?0:dt.co2?.[0].value
            var uv = (dt.uv?.[0].value == undefined)?0:dt.uv?.[0].value
            var voc = (dt.voc?.[0].value == undefined)?0:dt.voc?.[0].value
            //Env
            var pm25 = (dt.pm25?.[0].value == undefined)?0:dt.pm25?.[0].value
            var temp = (dt.temp?.[0].value == undefined)?0:dt.temp?.[0].value
            var hum = (dt.humid?.[0].value == undefined)?0:dt.humid?.[0].value

            var checkENV = _.has(dt,'pm25')
            if(checkENV){
                 html = `<ul><li><span class="font-bold mr-2">PM2.5:</span>${pm25}</li><li><span class="font-bold mr-2">Temperature:</span>${temp}</li><li><span class="font-bold mr-2">Humidity:</span>${hum}</li></ul>`
            }else{
                 html = `<ul><li><span class="font-bold mr-2">Co2:</span>${co2}</li><li><span class="font-bold mr-2">UV Index:</span>${uv}</li><li><span class="font-bold mr-2">VOC:</span>${voc}</li></ul>`
            }

        }else if(type == 'smlight' || type == 'smpole'){
            var month_energy = dt.monthlyEnergy?.[0].value?dt.monthlyEnergy?.[0].value:0
            var set_status
            if(status){
                set_status = 'Online'
            }else{
                set_status = 'Offline'
            }
            html = `<ul><li><span class="font-bold mr-2">Power Usage:</span>${month_energy} kWh</li><li><span class="font-bold mr-2">Smart Lighting:</span>${set_status}</li></ul>`
        }else if(type == 'cctv'){
            var set_status
            if(status){
                set_status = 'Online'
            }else{
                set_status = 'Offline'
            }
            html = `<ul><li><span class="font-bold mr-2">CCTV Camera:</span>${set_status}</li></ul>`
        }else if(type == 'wifi'){
            var client = dt.client?.[0].value?dt.client?.[0].value:0
            var set_status
            if(status){
                set_status = 'Online'
            }else{
                set_status = 'Offline'
            }
            html = `<ul><li><span class="font-bold mr-2">Free Wifi:</span>${set_status}</li><li><span class="font-bold mr-2">User:</span>${client}</li></ul>`
        }else if(type == 'digi_sig'){
            var set_status
            if(status){
                set_status = 'Online'
            }else{
                set_status = 'Offline'
            }
            html = `<ul><li><span class="font-bold mr-2">Digital Signage:</span>${set_status}</li></ul>`
        }else if(type == 'sos'){
            var set_status
            if(status){
                set_status = 'Online'
            }else{
                set_status = 'Offline'
            }
            html = `<ul><li><span class="font-bold mr-2">SOS:</span>${set_status}</li></ul>`
        }else if(type == 'restaurant'){
            const address = dt.entities_data.address
            const phone = dt.entities_data.phone
            const active = dt.entities_data.active
            const website = dt.entities_data.website

            html = '<ul>'
            html += `<li><span class="font-bold mr-2">Address:</span>${address}</li>`
            html += `<li><span class="font-bold mr-2">Phone:</span>${phone}</li>`
            html += `<li><span class="font-bold mr-2">Website:</span>${website}</li>`
            html += '</ul>'

        }else if(type == 'hotel'){
            const address = dt.entities_data.address
            const phone = dt.entities_data.phone
            const active = dt.entities_data.active
            const website = dt.entities_data.website

            html = '<ul>'
            html += `<li><span class="font-bold mr-2">Address:</span>${address}</li>`
            html += `<li><span class="font-bold mr-2">Phone:</span>${phone}</li>`
            html += `<li><span class="font-bold mr-2">Website:</span>${website}</li>`
            html += '</ul>'
        }else if(type == 'attraction'){
            const address = dt.entities_data.address
            const phone = dt.entities_data.phone
            const active = dt.entities_data.active
            const website = dt.entities_data.website

            html = '<ul>'
            html += `<li><span class="font-bold mr-2">Address:</span>${address}</li>`
            html += `<li><span class="font-bold mr-2">Phone:</span>${phone}</li>`
            html += `<li><span class="font-bold mr-2">Website:</span>${website}</li>`
            html += '</ul>'
        }else if(type == 'otop'){
            const address = dt.entities_data.address
            const phone = dt.entities_data.phone
            const active = dt.entities_data.active
            const website = dt.entities_data.website

            html = '<ul>'
            html += `<li><span class="font-bold mr-2">Address:</span>${address}</li>`
            html += `<li><span class="font-bold mr-2">Phone:</span>${phone}</li>`
            html += `<li><span class="font-bold mr-2">Website:</span>${website}</li>`
            html += '</ul>'
        }

        return html

    }
    setContentFix(type,data){
        var dt = _.cloneDeep(data)
        var html
        if(type == 'aqi'){
            html = `<ul><li><span class="font-bold mr-2">Maintenance:</span>Air Quality</li></ul>`
        }else if(type == 'smlight' || type == 'smpole'){
            var month_energy = dt.monthlyEnergy?.[0].value?dt.monthlyEnergy?.[0].value:0
            var set_status
            if(type == 'smlight'){
                set_status = 'Smart Light'
            }else{
                set_status = 'Smart Pole'
            }
            html = `<ul><li><span class="font-bold mr-2">Power Usage:</span>${month_energy} kWh</li><li><span class="font-bold mr-2">Maintenance:</span>${set_status}</li></ul>`
        }else if(type == 'cctv'){
            html = `<ul><li><span class="font-bold mr-2">Maintenance:</span>CCTV</li></ul>`
        }else if(type == 'wifi'){
            html = `<ul><li><span class="font-bold mr-2">Maintenance:</span>Free Wifi</li></ul>`
        }else if(type == 'sos'){
            html = `<ul><li><span class="font-bold mr-2">Maintenance:</span>SOS</li></ul>`
        }

        return html

    }
}
export default new dataMap();
