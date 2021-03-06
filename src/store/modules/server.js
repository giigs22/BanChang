import axios from "axios";
const status_sensor = localStorage.getItem('api_sensor')
const api_backend = import.meta.env.VITE_API_SERVER;

export const server = {
    namespaced: true,
    state: {
        api_sensor:{
            connect:(status_sensor === 'true')?true:false
        }
    },
    actions: {
        setStatus({commit},data){
            commit('connectAPI',data)
        },
        sendLog({commit,rootState},data){
            return axios.post(api_backend+'logger',{type:data.type,msg:data.msg},{
                headers:{
                  Authorization:"Bearer "+rootState.auth.token
                }
              }).then((res)=>{
                return Promise.resolve(res)
              }).catch((err)=>{
                return Promise.reject(err)
              })
        }
    },
    mutations: {
        connectAPI(state,data){
            state.api_sensor.connect = data
            localStorage.setItem('api_sensor',data)
        }
    }
  };