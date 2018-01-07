// import api from 'api/ader'
// import * as types from '../mutation'

interface breadCrumbM{
    path:string
    title:string
}

// initial state
const state = {
    breadCrumb: [], // 面包屑导航,
    ueSort:0
}

// getters
const getters = {
    breadCrumb: state => state.breadCrumb
}

// actions
const actions = {
    /* 设置主题部分标题 */
    setBreadCrumb(state: any, breadCrumb: breadCrumbM) {
        this.commit('setBreadCrumb', breadCrumb)
    },
    /* 富文本排序加一 */
    addUeSort(state: any) {
        this.commit('setBreadCrumb')
    }

}

// mutations
const mutations = {
    setBreadCrumb(state: any, breadCrumb: breadCrumbM) {
        state.breadCrumb = breadCrumb
    },
    /* 设置主题部分标题 */
    addUeSort(state: any) {
        state.ueSort += 1
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}