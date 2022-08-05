import axios from "axios";
const api_backend = import.meta.env.VITE_API_SERVER;

export const widget = {
    namespaced: true,
    state: {
      
    },
    actions: {
       saveDashboard({rootState},data){
        return axios.post(api_backend+'dashboard/store',data,{
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