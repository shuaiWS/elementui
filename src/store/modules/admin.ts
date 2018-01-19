// import api from 'api/ader'
<<<<<<< HEAD
=======
// import * as types from '../mutation'
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5

interface breadCrumbM{
    path:string
    title:string
}

<<<<<<< HEAD
interface stateM{
    breadCrumb: object[]             // 面包屑导航,
    active:string                    //当前活动页
}

// initial state
const state:stateM = {
    breadCrumb: [],
    active:''
=======
// initial state
const state = {
    breadCrumb: [], // 面包屑导航,
    ueSort:0
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
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
<<<<<<< HEAD
    },
    /* 设置当前页 --激活页*/
    setActive(state: any,val:string){
        this.commit('setActive',val)
    }
=======
    }

>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
}

// mutations
const mutations = {
    setBreadCrumb(state: any, breadCrumb: breadCrumbM) {
        state.breadCrumb = breadCrumb
    },
    /* 设置主题部分标题 */
    addUeSort(state: any) {
        state.ueSort += 1
<<<<<<< HEAD
    },
    /* 设置当前页 --激活页*/
    setActive(state: any,val:string){
        state.active = val
=======
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}