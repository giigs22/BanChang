class AuthService{
    Expire(data){
        if(data.errorCode === 10 || data.errorCode === 11){
            return true;
        }else{
            return false;
        }
    }
}
export default new AuthService();