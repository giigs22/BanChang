export const sensor = {
    namespaced: true,
    state: {
        aqi: null,
        pm25:null,
        status:{
            online:0,
            offline:0
        }
    },
    actions: {
        setAQI({commit},data){
            commit('aqiData',data)
        },
        setPM25({commit},data){
            commit('pm25Data',data)
        }
    },
    mutations: {
        aqiData(state,data){
            state.aqi = data
        },
        pm25Data(state,data){
            state.pm25 = data
        }
    }
  };