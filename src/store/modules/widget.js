import axios from "axios";
const api_backend = import.meta.env.VITE_API_SERVER;

export const widget = {
    namespaced: true,
    state: {
      listwidget:[],
      status_device:{
        aqi:{
            online:0,
            offline:0
        },
        light:{
            online:0,
            offline:0
        },
        smartpole:{
            online:0,
            offline:0
        },
        cctv:{
            online:0,
            offline:0
        },
        wifi:{
            online:0,
            offline:0
        }
      },
      pm25:null
    },
    getters:{
        cctvOffline(state){
            return state.status_device.cctv.offline
        }
    },
    actions: {
        getListCate({rootState,commit},data){
            return this.axios.post(api_backend+'widget/list',data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                  }
            }).then((res)=>{
                commit('listwidget',res.data.list)
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
         getListCateAll({rootState,commit},data){
            return this.axios.get(api_backend+'widget/listall',{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                  }
            }).then((res)=>{
                commit('listwidget',res.data)
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        addCate({rootState},data){
            return this.axios.post(api_backend+'widget/addcate',data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value,
                    'Content-Type':'multipart/form-data'
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
         updateCate({rootState},data){
            return this.axios.post(api_backend+'widget/updatecate',data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value,
                    'Content-Type':'multipart/form-data'
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        delCate({rootState},data){
            return this.axios.post(api_backend+'widget/destroy',{id:data},{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        addDevice({rootState},data){
            return this.axios.post(api_backend+'device/store',data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        listDevice({rootState},data){
            return this.axios.post(api_backend+'device/list',data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        getWidgetID({rootState},data){
            return this.axios.get(api_backend+'device/'+data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        getDeviceAll({rootState}){
            return this.axios.get(api_backend+'device/all',{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        updateDevice({rootState},data){
            return this.axios.patch(api_backend+'device/update/'+data.id,data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        destroyDevice({rootState},data){
            return this.axios.delete(api_backend+'device/destroy/'+data,{
                headers:{
                  Authorization:"Bearer "+rootState.auth.token.value
                }
              }).then((res)=>{
                return Promise.resolve(res)
              }).catch((error)=>{
                return Promise.reject(error)
              })
        },
        getListDeviceID({rootState},data){
            return this.axios.get(api_backend+'device/list/'+data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        setStatusDevice({commit},data){
            commit('statusDevice',data)
        },
        setPM25({commit},data){
            commit('Pm25',data)
        }
    },
    mutations: {
        listwidget(state,data){
            state.listwidget = data
        },
        statusDevice(state,data){
           
            if(data.type == 'aqi'){
                state.status_device.aqi.online = 0
                state.status_device.aqi.offline = 0
                state.status_device.aqi.online += data.data.online
                state.status_device.aqi.offline += data.data.offline
            }
            if(data.type =='light'){
                state.status_device.light.online = 0
                state.status_device.light.offline = 0
                state.status_device.light.online += data.data.online
                state.status_device.light.offline += data.data.offline
            }
            if(data.type =='smartpole'){
                state.status_device.smartpole.online = 0
                state.status_device.smartpole.offline = 0
                state.status_device.smartpole.online += data.data.online
                state.status_device.smartpole.offline += data.data.offline
            }
            if(data.type =='cctv'){
                state.status_device.cctv.online = 0
                state.status_device.cctv.offline = 0
                state.status_device.cctv.online += data.data.online
                state.status_device.cctv.offline += data.data.offline
            }
            if(data.type =='wifi'){
                state.status_device.wifi.online = 0
                state.status_device.wifi.offline = 0
                state.status_device.wifi.online += data.data.online
                state.status_device.wifi.offline += data.data.offline
            }
            
        },
        Pm25(state,data){
            state.pm25 = data
        }
    }
  };