import axios from 'axios'

const api_backend = import.meta.env.VITE_API_SERVER;

export const sensor = {
    namespaced: true,
    state: {
       
    },
    actions: {
        
        getStatus({rootState}){
            return axios.get(api_backend+'status/all',{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                  }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        Maintenance({rootState}){
            return axios.get(api_backend+'maintenance/list',{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                  }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        getFilterMa({rootState},data){
            return axios.post(api_backend+'maintenance/filter',data,{
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
       
    }
  };