import axios from 'axios'
import route from '../../router'

const api_backend = import.meta.env.VITE_API_SERVER
const local_token = JSON.parse(localStorage.getItem('token'))
if(local_token === null){
  localStorage.setItem('token',JSON.stringify({value:null,expire:null}))
}

export const auth = {

  namespaced: true,
  state: {
    status:{
      loggedIn:local_token === null ? false:true,
    },
    token:local_token,
  },
  getters:{
    isAuthenticate(state){
      return state.status.loggedIn
    },
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
    logout({ commit }) {
      //localStorage.clear()
      localStorage.removeItem('user_data')
      localStorage.removeItem('widget')
      commit('logout')
      route.push('/login')
      //window.location.reload()
    },
    
  },
  mutations: {
    loginSuccess(state) {
      state.status.loggedIn = true;
      state.token = JSON.parse(localStorage.getItem('token'))
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