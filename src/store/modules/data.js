import axios from 'axios'

const api_backend = import.meta.env.VITE_API_SERVER;

export const data = {
    namespaced: true,
    state: {
     
    },
    actions: {
        getData({rootState},data){
            if(data.type == 'lastdata'){
                if(data.option){
                    var url = api_backend+'get_data/'+data.type+'/'+data.sensor+'/'+data.option
                }else{
                    var url = api_backend+'get_data/'+data.type+'/'+data.sensor
                }
            }
            return axios.get(url,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                  }
            }).then((res)=>{
                return Promise.resolve(res);
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        getStatus({rootState},data){
            return axios.get(api_backend+'get_status/'+data.sensor,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                  }
            }).then((res)=>{
                return Promise.resolve(res);
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        getFilter({rootState},data){
            return axios.post(api_backend+'device/filter',data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        ExportCSV({rootState},data){
            return axios.post(api_backend+'export/csv',data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        StreamCCTV({rootState},data){
            return axios.post(api_backend+'streaming',{url_rtsp:data},{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        ChartData({rootState},data){
            return axios.post(api_backend+'chartdata',data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        getStatSos({rootState}){
            return axios.get(api_backend+'sos/stat/widget',{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        }
        
    },
    mutations: {
      
    }
};