import icon_aqi_1 from '@/assets/icon_aqi_1.png'
import icon_aqi_3 from '@/assets/icon_aqi_3.png'
import icon_aqi_4 from '@/assets/icon_aqi_4.png'
import icon_aqi_5 from '@/assets/icon_aqi_5.png'
class EnvAqi{
    LevelPM25(pm25){
        var detail={}
        if(pm25 < 26){
            detail = {
                label:'excellent',
                color:'#00F9CF'
            }
        }else if(pm25 < 38){
            detail = {
                label:'satisfactory',
                color:'#4CBF08'
            }
        }else if(pm25 < 51){
            detail = {
                label:'moderate',
                color:'#FFEB50'
            }
        }else if(pm25 < 91){
            detail = {
                label:'unhealthy',
                color:'#FFB14C'
            }
        }else{
            detail = {
                label:'very_unhealthy',
                color:'#BF4957'
            }
        }
        return detail
    }
    LevelPM10(pm10){
        var detail = {}
        if(pm10 < 51){
            detail = {
                label:'excellent',
                color:'#00F9CF'
            }
        }else if(pm10 < 81){
            detail = {
                label:'satisfactory',
                color:'#4CBF08'
            }
        }else if(pm10 < 121){
            detail = {
                label:'moderate',
                color:'#FFEB50'
            }
        }else if(pm10 < 181){
            detail = {
                label:'unhealthy',
                color:'#FFB14C'
            }
        }else{
            detail = {
                label:'very_unhealthy',
                color:'#BF4957'
            }
        }
        return detail
    }
    LevelHumid(humid){
        var detail = {}
        if(humid < 40){
            detail = {
                label:'too_dry',
                color:'#FFEB50'
            }
        }else if(humid < 70){
            detail = {
                label:'comfort',
                color:'#4CBF08'
            }
        }else{
            detail = {
                label:'too_humid',
                color:'#00b7f9'
            }
        }
        return detail
    }
    LevelAQI(aqi){
        var detail = {}
         if(aqi < 26){
            detail = {
                label:'excellent',
                icon:icon_aqi_1,
                color:'#00F9CF'
            }
        }else if(aqi < 51){
            detail = {
                label:'satisfactory',
                icon:icon_aqi_1,
                color:'#4CBF08'
            }
        }else if(aqi < 101){
            detail = {
                label:'moderate',
                icon:icon_aqi_3,
                color:'#FFEB50'
            }
        }else if(aqi < 201){
            detail = {
                label:'unhealthy',
                icon:icon_aqi_4,
                color:'#FFB14C'
            }
        }else{
            detail = {
                label:'very_unhealthy',
                icon:icon_aqi_5,
                color:'#BF4957'
            }
        }
        return detail
    }
    LevelCo2(co2){
        var detail={}
        if(co2 < 4.5){
            detail = {
                label:'excellent',
                color:'#00F9CF'
            }
        }else if(co2 < 6.5){
            detail = {
                label:'satisfactory',
                color:'#4CBF08'
            }
        }else if(co2 < 9.1){
            detail = {
                label:'moderate',
                color:'#FFEB50'
            }
        }else if(co2 < 30.1){
            detail = {
                label:'unhealthy',
                color:'#FFB14C'
            }
        }else{
            detail = {
                label:'very_unhealthy',
                color:'#BF4957'
            }
        }
        return detail
    }
    LevelUV(uv){
        var detail={}
        if(uv < 3){
            detail = {
                label:'Low',
                color:'#00F9CF'
            }
        }else if(uv < 6){
            detail = {
                label:'Moderate',
                color:'#4CBF08'
            }
        }else if(uv < 8){
            detail = {
                label:'High',
                color:'#FFEB50'
            }
        }else if(uv < 11){
            detail = {
                label:'Very High',
                color:'#FFB14C'
            }
        }else{
            detail = {
                label:'Extreme',
                color:'#BF4957'
            }
        }
        return detail
    }
    LevelTemp(temp){
        var detail = {}
        if(temp < 11){
            detail = {
                label:'cold',
                color:'#0ea5e9'
            }
        }else if(temp < 21){
            detail = {
                label:'moderate',
                color:'#fde047'
            }
        
        }else if(temp < 31){
            detail = {
                label:'warm',
                color:'#fb923c'
            }
        }else{
            detail = {
                label:'hot',
                color:'#dc2626'
            }
        }
        return detail
    }
    LevelVoc(voc){
        var detail = {}
        if(voc <0.4){
            detail = {
                label:'excellent',
                color:'#66cc33'
            }
        }else if(voc <=1 ){
            detail = {
                label:'good',
                color:'#c1eaad'
            }
        }else if(voc <4){
            detail = {
                label:'moderate',
                color:'#ffff00'
            }
        }else if(voc < 11){
            detail = {
                label:'poor',
                color:'#ff6600'
            }
        }else{
            detail = {
                label:'unhealthy',
                color:'#c00000'
            }
        }
        return detail
    }
    CalAQI(pm25){
        var aqi = 0
        var cmax = 0
        var cmin = 0
        var imax = 0
        var imin = 0

        if(pm25 < 26){
            cmax = 25
            cmin = 0
            imax = 25
            imin = 0   
        }else if(pm25 < 51){
            cmax = 37
            cmin = 26
            imax = 50
            imin = 26   
        }else if(pm25 < 101){
            cmax = 50
            cmin = 38
            imax = 100
            imin = 51   
        }else if(pm25 < 201){
            cmax = 90
            cmin = 51
            imax = 200
            imin = 101   
        }else{
            cmax = 91
            cmin = 90
            imax = 201
            imin = 200   
        }
        aqi = (((imax - imin) / (cmax - cmin))*(pm25-cmin))+imin
        return aqi
    }
}
export default new EnvAqi();