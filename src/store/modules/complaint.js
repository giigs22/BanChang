import axios from 'axios'

const api_backend = import.meta.env.VITE_API_SERVER;

export const complaint = {
    namespaced: true,
    state: {
     
    },
    actions: {
       listdata({rootState},data){
            return axios.post(api_backend+'complaint/list',data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                  }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
       },
       compDistroy({rootState},data){
            return axios.delete(api_backend+'complaint/destroy/'+data,{
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