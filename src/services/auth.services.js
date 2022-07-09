import axios from "axios";
const username = 'bc5gapi@planetcomm.com'
const password = '5gct@123456'
const api_baseURL = 'https://api.planetcloud.cloud/banchang/smartcity/' 

class AuthService{
    login(){
        axios.post(api_baseURL+'api/auth/login',{username:username,password:password}).then((res)=>{
            localStorage.setItem('token',JSON.stringify(res.data.token))
        })
    }
}
export default new AuthService();