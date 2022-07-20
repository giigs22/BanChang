import UserService from '../../services/user.service'

export const user = {
    namespaced: true,
    state: {},
    actions: {
      register({commit},data){
        return UserService.register(data).then((res)=>{
            return Promise.resolve(res)
        }).catch((error)=>{
            return Promise.reject(error)
        })
      }
    },
    mutations: {
    
    }
  };