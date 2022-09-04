const url_img = window.location.origin+'/src/assets/'


class IconMap{
    setIconMap(type,status){
        if(type == 'aqi'){
            return status?url_img+'icon_aqi_green.png':url_img+'icon_aqi_red.png'
        }
    }
}
export default new IconMap();