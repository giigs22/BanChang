import axios from "axios"
const api_backend = import.meta.env.VITE_API_SERVER
const api_baseURL = localStorage.getItem('api_baseURL')

const local_token = JSON.parse(localStorage.getItem('token'))
if(local_token === null){
  localStorage.setItem('token',JSON.stringify({value:null,expire:null}))
}

const local_token_planet = localStorage.getItem('token_planet')
if(local_token_planet === null){
  localStorage.setItem('token_planet',null)
}

export default (app) => {
return {
  namespaced: true,
  state: {
    status:{
      loggedIn:local_token === null ? false:true,
    },
    token:local_token,
    token_planet:local_token_planet,
  },
  getters:{
    isAuthenticate(state){
      return state.status.loggedIn
    },
    dataPlanet(){
      return {
        api_login:app.config.globalProperties.$api_login,
        username:app.config.globalProperties.$api_user,
        password:app.config.globalProperties.$api_pass
      }
    }
  },
  actions: {
    login({ commit }, user) {
      return axios.post(api_backend+'login',{username:user.username,password:user.password}).then((res)=>{
        if(res.data.token){
            var now = new Date();
            var item = {
                value:res.data.token,
                expire:now.getTime() + (3600000*24)  //3600000 = 1HR
            }
            localStorage.setItem('token',JSON.stringify(item))
        }
        var res_data;
        if(res.code !== undefined){
          if(res.code === 'ERR_NETWORK'){
            res_data = {success:false,message:'Not Connect to Server'}
          }
          commit('loginFailure')
        }else if(res.data !== undefined){
          res_data = res.data
          commit('loginSuccess');
        }
        return Promise.resolve(res_data);
        
    }).catch((err)=>{
        return Promise.reject(err)
    })
    },
    login_planet({},data) {
      return axios.post(data.api_login,{username:data.username,password:data.password},{
        "timeout":10000,
        "Content-Type": "application/json",
        "Accept": "application/json"
    }).then((res)=>{
        if(res.data.token){
            localStorage.setItem('token_planet',res.data.token)
        }
        return Promise.resolve(res)
    }).catch((err)=>{
      return Promise.reject(err)
    })
    },
    logout({ commit }) {
      localStorage.clear()
      commit('logout')
      window.location.reload()
    },
    
  },
  mutations: {
    loginSuccess(state) {
      state.status.loggedIn = true;
      state.token = JSON.parse(localStorage.getItem('token')).value
    },
    loginPlanetSuccess(state) {
        state.token_planet = localStorage.getItem('token_planet')
    },
    loginFailure(state) {
      state.status.loggedIn = false;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.token = null
    },
   
  }
}
}