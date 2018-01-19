// import api from 'api/ader'

interface breadCrumbM{
    path:string
    title:string
}

interface stateM{
    breadCrumb: object[]             // 面包屑导航,
    active:string                    //当前活动页
}

// initial state
const state:stateM = {
    breadCrumb: [],
    active:''
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
    },
    /* 设置当前页 --激活页*/
    setActive(state: any,val:string){
        this.commit('setActive',val)
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
    },
    /* 设置当前页 --激活页*/
    setActive(state: any,val:string){
        state.active = val
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}