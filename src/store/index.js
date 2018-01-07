import Vue from 'Vue'
import Vuex from 'Vuex'
import admin from './modules/admin.ts'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        admin
    },
    strict: debug
})