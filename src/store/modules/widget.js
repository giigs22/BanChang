import axios from "axios";
const api_backend = import.meta.env.VITE_API_SERVER;

export const widget = {
    namespaced: true,
    state: {
      
    },
    actions: {
        getListCate({rootState},data){
            return axios.post(api_backend+'widget/list',data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                  }
            }).then((res)=>{
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
        }
    },
    mutations: {
     
    }
  };