import axios from 'axios'

const api_backend = import.meta.env.VITE_API_SERVER;
export const map = {
    namespaced: true,
    state:{
        aqi:[],
        smlight:[],
        smpole:[],
        cctv:[],
        wifi:[]
    },
    actions:{
        setData({commit},data){
            commit('setDataGroup',data)
        },
        getMapData({rootState},data){
            return axios.post(api_backend+'device/map_data',{data:data},{
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
    mutations:{
        setDataGroup(state,data){
            if(data.type === 'aqi'){
                state.aqi = data.group_data
            }else if(data.type === 'smlight'){
                state.smlight = data.group_data
            }else if(data.type === 'smpole'){
                state.smpole = data.group_data
            }else if(data.type === 'cctv'){
                state.cctv = data.group_data
            }else if(data.type === 'wifi'){
                state.wifi = data.group_data
            }
        }
    }

}