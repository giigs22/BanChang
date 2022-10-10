import axios from 'axios'

const status_sensor = localStorage.getItem('api_sensor')
const status_data = localStorage.getItem('api_data')
const api_backend = import.meta.env.VITE_API_SERVER;

export default (app) => {
  return {
    namespaced: true,
    state: {
        api_sensor:{
            connect:(status_sensor === 'true')?true:false
        },
        api_data:{
            connect:(status_data === 'true')?true:false
        },
        data_api:null
    },
    actions: {
        setStatus({commit},data){
          if(data.type === 'server_sensor'){
            commit('connectAPI',data)
          }else{
            commit('connectDB',data)
          }
            
        },

        sendLog({rootState},data){
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
        getSetting(){
          return axios.get(api_backend+'setting/data').then((res)=>{
            return Promise.resolve(res)
          }).catch((err)=>{
            return Promise.reject(err)
          })
        },
        setting({commit}){
          var data_set = {
            api_data_baseURL: app.config.globalProperties.$api_data_baseURL,
          }
          commit('setting',data_set);
        },
        backupData({rootState},data){
          axios.post(api_backend+'device/backup',{data:data},{
            headers:{
              Authorization:"Bearer "+rootState.auth.token.value
            }
          })
        },
        getDataBackup({rootState},data){
          return axios.get(api_backend+'device/backup/get/'+data,{
            headers:{
              Authorization:"Bearer "+rootState.auth.token.value
            }
          }).then((res)=>{
            return Promise.resolve(res)
          }).catch((err)=>{
            return Promise.reject(err)
          })
        },
        backupLocation({rootState},data){
          axios.post(api_backend+'device/backup/location',{data:data},{
            headers:{
              Authorization:"Bearer "+rootState.auth.token.value
            }
          })
        }
    },
    mutations: {
        connectAPI(state,data){
            state.api_sensor.connect = data.value
            localStorage.setItem('api_sensor',data.value)
        },
        connectDB(state,data){
          state.api_data.connect = data.value
          localStorage.setItem('api_data',data.value)
      },
        setting(state,data){
            localStorage.setItem('api_data_baseURL',data.api_data_baseURL)
            state.data_api = data
        }
    }
  }
  }