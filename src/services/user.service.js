import axios from "axios";

const api_backend = import.meta.env.VITE_API_SERVER
class UserService{
   register(data){
    return axios.post(api_backend+'register',data).then((res)=>{
        return res
    });
   }
    
}
export default new UserService();