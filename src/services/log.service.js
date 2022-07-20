import axios from "axios";
const api_backend = import.meta.env.VITE_API_SERVER;
const local_token = localStorage.getItem('token');

class LogService{
    sendLog(type,msg){
      return axios.post(api_backend+'logger',{type:type,msg:msg},{
        headers:{
            Authorization:"Bearer "+local_token
        }
      }).then((res)=>{
        return Promise.resolve(res)
      }).catch((err)=>{
        return Promise.reject(err)
      })
    }
}
export default new LogService();