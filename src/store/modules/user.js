import axios from 'axios';
import UserService from '../../services/user.service'
const api_backend = import.meta.env.VITE_API_SERVER;

export const user = {
    namespaced: true,
    state: {
      user_data:null,
      roles:[]
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
        return axios.patch(api_backend+'users/profile/update/'+data.id,data,{
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
        return axios.delete(api_backend+'users/profile/destroy/'+data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((error)=>{
          return Promise.reject(error)
        })
      },
      // get all role
      getRole({rootState}){
        return axios.get(api_backend+'roles/role',{
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
        return axios.post(api_backend+'users/alluser',data,{
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
        return axios.get(api_backend+'users/profile/'+data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        }) 
      },
      //get all role for manage
       getListRole({rootState,commit},data){
        return axios.post(api_backend+'roles/allrole',data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          commit('setRoleData',res.data.list)
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })
      },
      userData({commit,rootState}){
        return axios.get(api_backend+'users/user',{
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
      },
      addRole({rootState},data){
        return axios.post(api_backend+'roles/store',{name:data},{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })
      },
      getRoleId({rootState},data){
        return axios.get(api_backend+'roles/'+data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })
      },
      updateRole({rootState},data){
        return axios.patch(api_backend+'roles/update/'+data.id,data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })
      },
      destroyRole({rootState},data){
        return axios.post(api_backend+'roles/destroy',data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((error)=>{
          return Promise.reject(error)
        })
      }
    },
    mutations: {
       setUserData(state){
        state.user_data = JSON.parse(localStorage.getItem('user_data'))
       },
       setRoleData(state,data){
        state.roles = data
       }
    }
  };