import AuthService from '../../services/auth.services';
const local_token = localStorage.getItem('token')
const initialState = (local_token !== "null")? { status: { loggedIn: true }, token:local_token }: { status: { loggedIn: false }, token: null };
export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then((response) => {
        console.log(response);
          if(response.data.token){
            console.log('success');
            commit('loginSuccess');
          }else{
            console.log('fail');
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
    loginFailure(state) {
      state.status.loggedIn = false;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.token = null
    },
  }
};