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
    LevelAQI(aqi){
        var detail = {}
         if(aqi < 26){
            detail = {
                label:'excellent',
                icon:'icon_aqi_1.png',
                color:'#00F9CF'
            }
        }else if(aqi < 51){
            detail = {
                label:'satisfactory',
                icon:'icon_aqi_1.png',
                color:'#4CBF08'
            }
        }else if(aqi < 101){
            detail = {
                label:'moderate',
                icon:'icon_aqi_3.png',
                color:'#FFEB50'
            }
        }else if(aqi < 201){
            detail = {
                label:'unhealthy',
                icon:'icon_aqi_4.png',
                color:'#FFB14C'
            }
        }else{
            detail = {
                label:'very_unhealthy',
                icon:'icon_aqi_5.png',
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