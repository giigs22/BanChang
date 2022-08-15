import axios from "axios";

const status_sensor = localStorage.getItem('api_sensor')
const api_backend = import.meta.env.VITE_API_SERVER;

export default (app) => {
  return {
    namespaced: true,
    state: {
        api_sensor:{
            connect:(status_sensor === 'true')?true:false
        },
        data_api:null
    },
    actions: {
        setStatus({commit},data){
            commit('connectAPI',data)
        },
        sendLog({commit,rootState},data){
            return axios.post(api_backend+'logger',{type:data.type,msg:data.msg},{
                headers:{
                  Authorization:"Bearer "+rootState.auth.token.value
                }
              }).then((res)=>{
                return Promise.resolve(res)
              }).catch((err)=>{
                return Promise.reject(err)
              })
        },
        apiUpdate({rootState},data){
          return axios.post(api_backend+'setting/update',data,{
            headers:{
                Authorization:"Bearer "+rootState.auth.token.value
              }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })
        },
        apiSetting({rootState}){
          return axios.get(api_backend+'setting/list',{
            headers:{
                Authorization:"Bearer "+rootState.auth.token.value
              }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })
        },
        getSettingSensor(){
          return axios.get(api_backend+'setting/data').then((res)=>{
            return Promise.resolve(res)
          }).catch((err)=>{
            return Promise.reject(err)
          })
        },
        setting({commit}){
          var data_set = {
            api_baseURL: app.config.globalProperties.$api_baseURL,
            api_login : app.config.globalProperties.$api_login ,
            api_user : app.config.globalProperties.$api_user ,
            api_pass : app.config.globalProperties.$api_pass
          }
          commit('setting',data_set);
        }
    },
    mutations: {
        connectAPI(state,data){
            state.api_sensor.connect = data
            localStorage.setItem('api_sensor',data)
        },
        setting(state,data){
            localStorage.setItem('api_baseURL',data.api_baseURL)
            state.data_api = data
        }
    }
  }
  }