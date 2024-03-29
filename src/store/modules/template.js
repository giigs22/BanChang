import axios from "axios";

const api_backend = import.meta.env.VITE_API_SERVER;
const lang_local = localStorage.getItem('lang')

export const template = {
    namespaced: true,
    state: {
      list_template:[],
      theme:null,
      lang:lang_local !== null || lang_local !== undefined?lang_local:'en'
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
       },
       updateDashboard({rootState},data){
        return axios.patch(api_backend+'dashboard/update/'+data.id,data,{
            headers:{
              Authorization:"Bearer "+rootState.auth.token.value
            }
          }).then((res)=>{
            return Promise.resolve(res)
          }).catch((err)=>{
            return Promise.reject(err)
          })
       },
       destroyDashboard({rootState},data){
        return axios.post(api_backend+'dashboard/destroy',data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((error)=>{
          return Promise.reject(error)
        })
      },
       ListTemplate({rootState,commit},data){
        return axios.post(api_backend+'dashboard/list',data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          commit('set_list_template',res.data.list)
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })
       },
       getTemplate({rootState},data){
        return axios.get(api_backend+'dashboard/template/'+data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })
       },
       groupUserTemp({rootState}){
        return axios.get(api_backend+'dashboard/group_user_temp',{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })
       },
       UserTemp({rootState}){
        return axios.get(api_backend+'dashboard/user_temp',{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })
       },
       updateGroup({rootState},data){
        return axios.post(api_backend+'dashboard/update_group',data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })
       },
       updateUser({rootState},data){
        return axios.post(api_backend+'dashboard/update_user',data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((err)=>{
          return Promise.reject(err)
        })
       },
       setTheme({commit},data){
          commit('set_theme',data)
       },
       setLang({commit},data){
        commit('set_lang',data)
       }
       
    },
    mutations: {
      set_list_template(state,data){
        state.list_template = data
      },
      set_theme(state,data){
        state.theme = data
      },
      set_lang(state,data){
        state.lang = data
      }
    }
  };