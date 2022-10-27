import axios from 'axios'

const status_data = localStorage.getItem('api_data')
const api_backend = import.meta.env.VITE_API_SERVER;

export const server = {
 
    namespaced: true,
    state: {
        api_data:{
            connect:(status_data === 'true')?true:false
        },
    },
    actions: {
        setStatus({commit},data){
            commit('connectDB',data)
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
    },
    mutations: {
      connectDB(state,data){
          state.api_data.connect = data
          localStorage.setItem('api_data',data)
      },
    }
  
  }