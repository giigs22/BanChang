export default function auth({
    next,
    router
}) {
    var token = localStorage.getItem('token')
    var item = JSON.parse(token)
    var now = new Date()
    if (now.getTime() > item.expire) {
        //localStorage.clear()
        localStorage.setItem('token', JSON.stringify({
            value: null,
            expire: null
        }))
        next({name:'login'});
        return false;
    }else{
        next();
        return;
    } 
    
}