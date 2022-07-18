import axios from "axios";

const api_baseURL = 'https://api.planetcloud.cloud/banchang/smartcity/' 

class AuthService{
    login(user){
        return axios.post(api_baseURL+'api/auth/login',{username:user.username,password:user.password}).then((res)=>{
            if(res.data.token){
                localStorage.setItem('token',res.data.token)
            }
            return res
        })
    }
    logout(){
        localStorage.setItem('token',null)
    }
    Expire(data){
        if(data.errorCode === 10 || data.errorCode === 11){
            return true;
        }else{
            return false;
        }
    }
}
export default new AuthService();