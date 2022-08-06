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
        return axios.post(api_backend+'login',{username:user.username,password:user.password}).then((res)=>{
            if(res.data.token){
                var now = new Date();
                var item = {
                    value:res.data.token,
                    expire:now.getTime() + (3600000*24)  //3600000 = 1HR
                }
                localStorage.setItem('token',JSON.stringify(item))
            }
            return res
        }).catch((err)=>{
            return err
        })
    }
    login_planet(){
        return axios.post(api_baseURL+'api/auth/login',{username:api.username,password:api.password},{
            "timeout":5000,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }).then((res)=>{
            if(res.data.token){
                localStorage.setItem('token_planet',res.data.token)
            }
            return res
        })
    }
    logout(){
        localStorage.setItem('token',JSON.stringify({value:null,expire:null}))
        localStorage.setItem('user_data',null)
    }
    Expire(data){
        if(data.errorCode === 10 || data.errorCode === 11 || local_token_planet === 'null'){
            return true;
        }else{
            return false;
        }
    }
    // checkExpireToken(){
    //     var token = localStorage.getItem('token')
    //     var item = JSON.parse(token)
    //     var now = new Date()
    //     if(now.getTime() > item.expire){
    //         localStorage.setItem('token',JSON.stringify({value:null,expire:null}))
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
}
export default new AuthService();