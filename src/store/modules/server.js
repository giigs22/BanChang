const status_sensor = localStorage.getItem('api_sensor')

export const server = {
    namespaced: true,
    state: {
        api_sensor:{
            connect:(status_sensor === 'true')?true:false
        }
    },
    actions: {
        setStatus({commit},data){
            commit('connectAPI',data)
        }
    },
    mutations: {
        connectAPI(state,data){
            state.api_sensor.connect = data
            localStorage.setItem('api_sensor',data)
        }
    }
  };