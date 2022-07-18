export default function authHeader(){
    let token = localStorage.getItem('token');
    if(token !== null || token !== undefined){
        return {'X-Authorization':"Bearer "+token};
    }else{
        return {};
    }
    
}