import axios from 'axios'

const api_backend = import.meta.env.VITE_API_SERVER;

export const complaint = {
    namespaced: true,
    state: {
     
    },
    actions: {
       listdata({rootState},data){
            return axios.post(api_backend+'complaint/list/'+data.type,data.data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                  }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
       },
       compDestroy({rootState},data){
            return axios.delete(api_backend+'complaint/destroy/'+data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
       },
       getcompID({rootState},data){
            return axios.get(api_backend+'complaint/'+data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
       },
       Reply({rootState},data){
        return axios.post(api_backend+'complaint/reply',data,{
            headers:{
                Authorization:"Bearer "+rootState.auth.token.value
            }
        }).then((res)=>{
            return Promise.resolve(res)
        }).catch((err)=>{
            return Promise.reject(err)
        })
       },
       addTopic({rootState},data){
        return axios.post(api_backend+'complaint/topic/store',data,{
            headers:{
                Authorization:"Bearer "+rootState.auth.token.value
            }
        }).then((res)=>{
            return Promise.resolve(res)
        }).catch((err)=>{
            return Promise.reject(err)
        })
       },
       updateTopic({rootState},data){
        return axios.patch(api_backend+'complaint/topic/update/'+data.id,data,{
            headers:{
              Authorization:"Bearer "+rootState.auth.token.value
            }
          }).then((res)=>{
            return Promise.resolve(res)
          }).catch((error)=>{
            return Promise.reject(error)
          })
       },
       destroyTopic({rootState},data){
        return axios.delete(api_backend+'complaint/topic/destroy/'+data,{
          headers:{
            Authorization:"Bearer "+rootState.auth.token.value
          }
        }).then((res)=>{
          return Promise.resolve(res)
        }).catch((error)=>{
          return Promise.reject(error)
        })
      },
       ListTopic({rootState},data){
        return axios.post(api_backend+'complaint/topic/list',data,{
            headers:{
                Authorization:"Bearer "+rootState.auth.token.value
            }
        }).then((res)=>{
            return Promise.resolve(res)
        }).catch((err)=>{
            return Promise.reject(err)
        })
       },
       getTopicID({rootState},data){
        return axios.get(api_backend+"complaint/topic/"+data,{
            headers:{
                Authorization:"Bearer "+rootState.auth.token.value
            }
        }).then((res)=>{
            return Promise.resolve(res)
        }).catch((err)=>{
            return Promise.reject(err)
        })
       },
       ExportCSV({rootState},data){
        return axios.post(api_backend+"complaint/export",data,{
            headers:{
                Authorization:"Bearer "+rootState.auth.token.value
            }
        }).then((res)=>{
            return Promise.resolve(res)
        }).catch((err)=>{
            return Promise.reject(err)
        })
       },
       getStat({rootState}){
        return axios.get(api_backend+"complaint/stat/widget",{
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