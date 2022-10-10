import { createStore as createVuexStore } from "vuex";
import auth from './modules/auth'
import {user} from './modules/user'
import server from './modules/server'
import {template} from './modules/template'
import {widget} from './modules/widget'
import {map} from './modules/map'
import {data} from './modules/data'
import {sensor} from './modules/sensor'

export const createStore = (app) =>{
    return createVuexStore({
        modules:{
            auth:auth(app),
            user,
            server:server(app),
            template,
            widget,
            map,
            data,
            sensor
        }
    })
   
}