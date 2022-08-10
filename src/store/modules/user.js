import axios from 'axios';
import UserService from '../../services/user.service'
const api_backend = import.meta.env.VITE_API_SERVER;

export const user = {
    namespaced: true,
    state: {
      user_data:null,
    },
    actions: {
      register({commit},data){
        return UserService.register(data).then((res)=>{
            return Promise.resolve(res)
        }).catch((error)=>{
            return Promise.reject(error)
        })
      },
      update({rootState},data){
        return axios.patch(api_backend+'user_profile/update/'+data.id,data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((error)=>{
          return Promise.reject(error)
        })
      },
      destroy({rootState},data){
        return axios.delete(api_backend+'user_profile/destroy/'+data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((error)=>{
          return Promise.reject(error)
        })
      },
      getRole({rootState}){
        return axios.get(api_backend+'role',{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
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
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })
      },
      getUserProfile({rootState},data){
        return axios.get(api_backend+'user_profile/'+data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        }) 
      },
       getListRole({rootState},data){
        return axios.post(api_backend+'allrole',data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })
      },
      userData({commit,rootState}){
        return axios.get(api_backend+'user',{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          localStorage.setItem('user_data',JSON.stringify({data:res.data.data,img_profile:res.data.img_profile}))
          commit('setUserData')
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })
      }
    },
    mutations: {
       setUserData(state){
        state.user_data = JSON.parse(localStorage.getItem('user_data'))
       }
    }
  };