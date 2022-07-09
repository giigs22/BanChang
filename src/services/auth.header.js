export default function authHeader(){
    let token = JSON.parse(localStorage.getItem('token'))
    if(token != null || token != undefined){
        return {'X-Authorization':"Bearer "+token};
    }else{
        return {};
    }
    
}