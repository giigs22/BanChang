import axios from "axios";

const api_baseURL = import.meta.env.VITE_API_PLANET
const api_backend = import.meta.env.VITE_API_SERVER
const api={
    username:"bc5gapi@planetcomm.com",
    password:"5gct@123456"
}
const local_token_planet = localStorage.getItem('token_planet')

class AuthService{
    login(user){
        return axios.post(api_backend+'login',{email:user.username,password:user.password}).then((res)=>{
            console.log(res);
            if(res.data.token){
                localStorage.setItem('token',res.data.token)
            }
            return res
        })
    }
    login_planet(){
        return axios.post(api_baseURL+'/api/auth/login',{username:api.username,password:api.password},{timeout:10000}).then((res)=>{
            if(res.data.token){
                localStorage.setItem('token_planet',res.data.token)
            }
            return res
        })
    }
    logout(){
        localStorage.setItem('token',null)
    }
    Expire(data){
        if(data.errorCode === 10 || data.errorCode === 11 || local_token_planet === 'null'){
            return true;
        }else{
            return false;
        }
    }
}
export default new AuthService();