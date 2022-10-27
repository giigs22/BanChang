import axios from 'axios';
import UserService from '../../services/user.service'
const api_backend = import.meta.env.VITE_API_SERVER;
const local_user = localStorage.getItem('user_data')
export const user = {
    namespaced: true,
    state: {
      user_data:local_user != null?JSON.parse(local_user):null,
    },
    getters:{
      userRole(state){
        return state.user_data?.data.user_group
      }
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
      getUserData({rootState,commit},data){
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
        const token = JSON.parse(localStorage.getItem('token'))
        return axios.get(api_backend+'users/user',{
          headers:{
            Authorization:"Bearer "+token.value
          }
        }).then((res)=>{
          commit('setUserData',res)
          commit('setUserWidget',res.data.widgets)
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
      },
      forgotpass({},data){
          return axios.post(api_backend+'forgotpass',{email:data}).then((res)=>{
            return Promise.resolve(res)
          }).catch((error)=>{
            return Promise.reject(error)
          })
      },
      changepass({},data){
        return axios.post(api_backend+'changepass',{password:data.password,token:data.token}).then((res)=>{
          return Promise.resolve(res)
        }).catch((error)=>{
          return Promise.reject(error)
        })
    }
    },
    mutations: {
       setUserData(state,data){
        localStorage.setItem('user_data',JSON.stringify({data:data.data.data,img_profile:data.data.img_profile}))
        state.user_data = {data:data.data.data,img_profile:data.data.img_profile}
       },
       setRoleData(state,data){
        state.roles = data
       },
       setUserWidget(state,data){
        const widget = []
        data.forEach(el => {
          widget.push(el.id)
        });
        localStorage.setItem('widget',widget)
       }
    }
  };