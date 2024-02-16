import _ from 'lodash'
import aqi_g from '@/assets/icon_aqi_green.png'
import aqi_r from '@/assets/icon_aqi_red.png'
import sml_g from '@/assets/icon_smart_light_green.png'
import sml_r from '@/assets/icon_smart_light_red.png'
import smp_g from '@/assets/icon_smart_pole_green.png'
import smp_r from '@/assets/icon_smart_pole_red.png'
import cctv_g from '@/assets/icon_cctv_green.png'
import cctv_r from '@/assets/icon_cctv_red.png'
import wifi_g from '@/assets/icon_wifi_green.png'
import wifi_r from '@/assets/icon_wifi_red.png'
import digis_g from '@/assets/icon_digis_green.png'
import digis_r from '@/assets/icon_digis_red.png'
import sos_g from '@/assets/icon_sos_green.png'
import sos_r from '@/assets/icon_sos_red.png'
import hotel_g from '@/assets/icon_hotel_green.svg'
import hotel_r from '@/assets/icon_hotel_red.svg'
import res_g from '@/assets/icon_restaurant_green.svg'
import res_r from '@/assets/icon_restaurant_red.svg'
import att_g from '@/assets/icon_attraction_green.svg'
import att_r from '@/assets/icon_attraction_red.svg'
import otop_g from '@/assets/icon_otop_green.png'
import otop_r from '@/assets/icon_otop_red.png'
import fix_g from '@/assets/icon_fix_green.png'
import fix_r from '@/assets/icon_fix_red.png'

const url_img = window.location.origin
class dataMap{
    setIconMap(type,status){
        if(type == 'aqi'){
            return status?url_img+aqi_g:url_img+aqi_r
        }else if(type == 'smlight'){
            return status?url_img+sml_g:url_img+sml_r
        }else if(type == 'smpole'){
            return status?url_img+smp_g:url_img+smp_r
        }else if(type == 'cctv'){
            return status?url_img+cctv_g:url_img+cctv_r
        }else if(type == 'wifi'){
            return status?url_img+wifi_g:url_img+wifi_r
        }else if(type == 'digi_sig'){
            return status?url_img+digis_g:url_img+digis_r
        }else if(type == 'sos'){
            return status?url_img+sos_g:url_img+sos_r
        } else if(type == 'hotel'){
            console.log('selected hotel')
            return status?url_img+hotel_g:url_img+hotel_r
        } else if(type == 'restaurant'){
            console.log('selected restaurant')
            return status?url_img+res_g:url_img+res_r
        } else if(type == 'attraction'){
            console.log('selected attraction')
            return status?url_img+att_g:url_img+att_r
        } else if(type == 'otop'){
            console.log('selected otop')
            return status?url_img+otop_g:url_img+otop_r
        }
    }
    setIconMapFix(status){
        return status?url_img+fix_g:url_img+fix_r
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

        }
        if(type == 'smlight'){
            var month_energy = 0
            var light_int = 0
            var battery = 0
            var wind = 0
            var temp = 0
            var power = 0

            if(dt.hasOwnProperty('month_energy')){
                month_energy = dt.monthlyEnergy[0].value
            }
            if(dt.hasOwnProperty('light')){
                light_int = dt.light[0].value
            }
            if(dt.hasOwnProperty('battery')){
                battery = dt.battery[0].value
            }
            if(dt.hasOwnProperty('wind')){
                wind = dt.wind[0].value
            }
            if(dt.hasOwnProperty('temperature')){
                temp = dt.temperature[0].value
            }
            if(dt.hasOwnProperty('power')){
                power = dt.power[0].value
            }

            var set_status
            if(status){
                set_status = 'Online'
            }else{
                set_status = 'Offline'
            }
            html = `<ul>`
            if(power > 0){
            html += `<li><span class="font-bold mr-2">Power Usage:</span>${power} kWh</li>`
            }
            if(month_energy > 0){
                html += `<li><span class="font-bold mr-2">Monthly Power Usage:</span>${month_energy} kWh</li>`
            }
            if(light_int > 0){
                html += `<li><span class="font-bold mr-2">Light Intensity:</span>${light_int}</li>`
            }
            if(battery > 0){
                html += `<li><span class="font-bold mr-2">Batteries Level:</span>${battery}</li>`
            }
            if(wind > 0){
                html += `<li><span class="font-bold mr-2">Wind Speed:</span>${wind}</li>`
            }
            if(temp > 0){
                html += `<li><span class="font-bold mr-2">Temperature:</span>${temp}</li>`
            }

            html += `<li><span class="font-bold mr-2">Status:</span>${set_status}</li></ul>`

        }
        if(type == 'smpole'){
            var month_energy = 0
            var voltage = 0
            var energy = 0
            var power = 0
            var freq = 0
            var current = 0

            if(dt.hasOwnProperty('month_energy')){
                month_energy = dt.monthlyEnergy[0].value
            }
            if(dt.hasOwnProperty('voltage')){
                voltage = dt.voltage[0].value
            }
            if(dt.hasOwnProperty('energy')){
                energy = dt.energy[0].value
            }
            if(dt.hasOwnProperty('power')){
                power = dt.power[0].value
            }
            if(dt.hasOwnProperty('frequency')){
                freq = dt.frequency[0].value
            }
            if(dt.hasOwnProperty('current')){
                current = dt.current[0].value
            }

            var set_status
            if(status){
                set_status = 'Online'
            }else{
                set_status = 'Offline'
            }
            html = `<ul>`
            if(power > 0){
            html += `<li><span class="font-bold mr-2">Power Usage:</span>${power} kWh</li>`
            }
            if(month_energy > 0){
                html += `<li><span class="font-bold mr-2">Monthly Power Usage:</span>${month_energy} kWh</li>`
            }
            if(voltage > 0){
                html += `<li><span class="font-bold mr-2">Voltage:</span>${voltage}</li>`
            }
            if(energy > 0){
                html += `<li><span class="font-bold mr-2">Energy:</span>${energy}</li>`
            }
            if(freq > 0){
                html += `<li><span class="font-bold mr-2">Frequency:</span>${freq}</li>`
            }
            if(current > 0){
                html += `<li><span class="font-bold mr-2">Current:</span>${current}</li>`
            }

            html += `<li><span class="font-bold mr-2">Status:</span>${set_status}</li></ul>`
        }
        if(type == 'cctv'){
            var set_status
            if(status){
                set_status = 'Online'
            }else{
                set_status = 'Offline'
            }
            html = `<ul><li><span class="font-bold mr-2">CCTV Camera:</span>${set_status}</li></ul>`
        }
        if(type == 'wifi'){
            var client = dt.client?.[0].value?dt.client?.[0].value:0
            var set_status
            if(status){
                set_status = 'Online'
            }else{
                set_status = 'Offline'
            }
            html = `<ul><li><span class="font-bold mr-2">Free Wifi:</span>${set_status}</li><li><span class="font-bold mr-2">User:</span>${client}</li></ul>`
        }
        if(type == 'digi_sig'){
            var set_status
            if(status){
                set_status = 'Online'
            }else{
                set_status = 'Offline'
            }
            html = `<ul><li><span class="font-bold mr-2">Digital Signage:</span>${set_status}</li></ul>`
        }
        if(type == 'sos'){
            var set_status
            if(status){
                set_status = 'Online'
            }else{
                set_status = 'Offline'
            }
            html = `<ul><li><span class="font-bold mr-2">SOS:</span>${set_status}</li></ul>`
        }
        if(type == 'restaurant'){
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
        if(type == 'hotel'){
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
        if(type == 'attraction'){
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
        if(type == 'otop'){
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
        var dt = data
        var html
        html = `<ul><li><span class="font-bold mr-2">Detail: ${dt.detail}</span></li>`
        html += `<li><span class="font-bold mr-2">Status: ${dt.status_ma.toUpperCase()}</span></li></ul>`

        return html

    }
}
export default new dataMap();
