import axios from 'axios';
import UserService from '../../services/user.service'

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
      getRole(){
        return axios.get(api_backend+'role_user',{
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