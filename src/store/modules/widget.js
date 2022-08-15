import axios from "axios";
const api_backend = import.meta.env.VITE_API_SERVER;

export const widget = {
    namespaced: true,
    state: {
      listwidget:[]
    },
    actions: {
        getListCate({rootState,commit},data){
            return axios.post(api_backend+'widget/list',data,{
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
            return axios.get(api_backend+'widget/listall',{
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
            return axios.post(api_backend+'widget/addcate',data,{
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
            return axios.post(api_backend+'widget/updatecate',data,{
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
            return axios.post(api_backend+'widget/destroy',{id:data},{
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
            return axios.post(api_backend+'device/store',data,{
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
            return axios.post(api_backend+'device/list',data,{
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
            return axios.get(api_backend+'device/'+data,{
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
            return axios.patch(api_backend+'device/update/'+data.id,data,{
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
            return axios.delete(api_backend+'device/destroy/'+data,{
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
            return axios.get(api_backend+'device/list/'+data,{
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
        listwidget(state,data){
            state.listwidget = data
        }
    }
  };