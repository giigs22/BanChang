import { createStore } from "vuex";
import { auth } from './modules/auth'
import {user} from './modules/user'
import{server} from './modules/server'
import {template} from './modules/template'
import {widget} from './modules/widget'

const store = createStore({
    modules:{
        auth,
        user,
        server,
        template,
        widget
    }
})

export default store;