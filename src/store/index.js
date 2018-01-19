import Vue from 'Vue'
import Vuex from 'Vuex'
import admin from './modules/admin.ts'
import url from './modules/dataUrl.ts'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        admin,
        url
    },
    strict: debug
})