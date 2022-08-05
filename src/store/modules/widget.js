import axios from "axios";
const api_backend = import.meta.env.VITE_API_SERVER;

export const server = {
    namespaced: true,
    state: {
      
    },
    actions: {
       saveDashboard({rootState},data){
        return axios.post(api_backend+'store_dashboard',data,{
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
      
    }
  };