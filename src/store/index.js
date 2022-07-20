import { createStore } from "vuex";
import { auth } from './modules/auth'
import {user} from './modules/user'
import{server} from './modules/server'

const store = createStore({
    modules:{
        auth,
        user,
        server
    }
})

export default store;