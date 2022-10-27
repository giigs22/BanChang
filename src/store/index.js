import {createStore}  from "vuex";
import {auth} from './modules/auth'
import {user} from './modules/user'
import {server} from './modules/server'
import {template} from './modules/template'
import {widget} from './modules/widget'
import {map} from './modules/map'
import {data} from './modules/data'
import {sensor} from './modules/sensor'
import {complaint} from './modules/complaint'

const store = createStore ({
    modules:{
        auth,
        user,
        server,
        template,
        widget,
        map,
        data,
        sensor,
        complaint
    }
})
export default store;
