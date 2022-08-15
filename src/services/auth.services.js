
const local_token_planet = localStorage.getItem('token_planet')
class AuthService{
    Expire(data){
        if(data.errorCode === 10 || data.errorCode === 11 || local_token_planet === 'null'){
            return true;
        }else{
            return false;
        }
    }

}
export default new AuthService();