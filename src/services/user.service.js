import axios from "axios";

const api_backend = 'http://localhost:8000/api/'
 

class UserService{
   register(data){
    return axios.post(api_backend+'register',data).then((res)=>{
        return res
    });
   }
    
}
export default new UserService();