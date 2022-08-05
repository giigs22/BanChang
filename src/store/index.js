import { createStore } from "vuex";
import { auth } from './modules/auth'
import {user} from './modules/user'
import{server} from './modules/server'
import {widget} from './modules/widget'

const store = createStore({
    modules:{
        auth,
        user,
        server,
        widget
    }
})

export default store;