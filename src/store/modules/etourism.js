import axios from 'axios'

const api_backend = import.meta.env.VITE_API_SERVER;
// const etourism_service_backend  = import.meta.env.ETOURISM_SERVICE ;
const etourism_service_backend  = "http://localhost:8000/"
export const etourism = {
    namespaced: true,
    state: {

    },
    actions: {
       hotel({rootState},data){
            console.log('etourism_service_backend:', etourism_service_backend)
           const my_url = data.option == 'onlyUnassigned' ? '?onlyUnassigned=true' : '';
            return axios.get(etourism_service_backend+`hotels${my_url}`,data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                  }
            }).then((res)=>{
                console.log('hotels:')
                console.log(res)
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
       },
        restaurant({rootState},data){
            const my_url = data.option == 'onlyUnassigned' ? '?onlyUnassigned=true' : '';
            return axios.get(etourism_service_backend+`restaurants${my_url}`,data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                console.log('restaurants:')
                console.log(res)
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        attraction({rootState},data){
            const my_url = data.option == 'onlyUnassigned' ? '?onlyUnassigned=true' : '';
            return axios.get(etourism_service_backend+`attractions${my_url}`,data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                console.log('attractions:')
                console.log(res)
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
        otop({rootState},data){
            const my_url = data.option == 'onlyUnassigned' ? '?onlyUnassigned=true' : '';
            return axios.get(etourism_service_backend+`otop${my_url}`,data,{
                headers:{
                    Authorization:"Bearer "+rootState.auth.token.value
                }
            }).then((res)=>{
                console.log('otop:')
                console.log(res)
                return Promise.resolve(res)
            }).catch((err)=>{
                return Promise.reject(err)
            })
        },
    },
    mutations: {

    }
};
