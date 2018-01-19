import Vue from 'Vue'
import Vuex from 'Vuex'
import admin from './modules/admin.ts'
<<<<<<< HEAD
import url from './modules/dataUrl.ts'
=======
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
<<<<<<< HEAD
        admin,
        url
=======
        admin
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
    },
    strict: debug
})