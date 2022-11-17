import axios from "axios";
import store from '../store'
const api_backend = import.meta.env.VITE_API_SERVER
class UserService{
   register(data){
    return axios.post(api_backend+'register',data).then((res)=>{
        return res
    });
   }
   checkUnauthen(err){
    console.log(err);
    if(err.status === 401){
        store.dispatch('auth/logout');
    }
   }
    
}
export default new UserService();