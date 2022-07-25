import axios from 'axios';
import UserService from '../../services/user.service'
const api_backend = import.meta.env.VITE_API_SERVER;

export const user = {
    namespaced: true,
    state: {},
    actions: {
      register({commit},data){
        return UserService.register(data).then((res)=>{
            return Promise.resolve(res)
        }).catch((error)=>{
            return Promise.reject(error)
        })
      },
      getRole({rootState}){
        return axios.get(api_backend+'role',{
          headers:{
            Authorization:"Bearer "+rootState.auth.token
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })     
      },
      getUserData({rootState},data){
        return axios.post(api_backend+'alluser',data,{
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