import AuthService from '../../services/auth.services';
const local_token = localStorage.getItem('token')
const local_token_planet = localStorage.getItem('token_planet')
//const initialState = (local_token !== "null")? { status: { loggedIn: true }, token:local_token }: { status: { loggedIn: false }, token: null };
export const auth = {
  namespaced: true,
  state: {
    status:{
      loggedIn:(local_token !== "null")?true:false,
    },
    token:(local_token !== "null")?local_token:null,
    token_planet:local_token_planet
  },
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then((response) => {
          if(response.data.token){
            commit('loginSuccess');
          }else{
            commit('loginFailure')
          }
          return Promise.resolve(response)
        },
      ).catch((error)=>{
        console.error(error)
        return Promise.reject(error)
      }
      )
    },
    login_planet({ commit }) {
      return AuthService.login_planet().then((response) => {
          if(response.data.token){
            commit('loginPlanetSuccess');
          }
          return Promise.resolve(response)
        },
      ).catch((error)=>{
        console.error(error)
        return Promise.reject(error)
      }
      )
    },
    logout({ commit }) {
      AuthService.logout()
      commit('logout');
    },
    
  },
  mutations: {
    loginSuccess(state) {
      state.status.loggedIn = true;
      state.token = localStorage.getItem('token')
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
};