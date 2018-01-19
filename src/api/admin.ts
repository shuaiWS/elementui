import { Loading } from 'element-ui'
import url from '../store/modules/dataUrl'
import axios from "axios"
import { Upload } from './upload'

const all = url.state

/**
 * 上传文件
 * @param {Object} params
 * @param {Function} cb
 * @return {void}
 */
const upload = (file, cb) => {
    Upload.upload(all.upload, file, cb)
}

/**
 * 获取课程列表
 * @param {Object} params
 * @param {Function} cb
 * @return {Promise}
 */
const getCourseList = (params:any, cb:Function):Promise<any> => {
    let loadingInstance = Loading.service({ text: '正在加载' })
    return axios.get(all.findall, { params: params }).then(response => {
        if (response.status == 200 && response.data.status == 200) {
            cb(response.data)
        }
        loadingInstance.close()
    }, response => {
        console.log('errorCallback: ', response)
        loadingInstance.close()
    })
}

/**
 * 获取所有课程分类
 * @param {function} cb
 * @return {Promise}
 */
const getCategory = (cb:Function):Promise<any> => {
    let loadingInstance = Loading.service({ text: '正在加载' })
    return axios.get(all.category).then(response => {
        if (response.status == 200 && response.data.status == 200) {
            cb(response.data)
        }
        loadingInstance.close()
    }, response => {
        console.log('errorCallback: ', response)
        loadingInstance.close()
    })
}

/**
 * 新建课程
 * @param {Object} data
 * @param {Function} cb
 * @return {Promise}
 */
const addCourse = (data:any, cb:Function):Promise<any> => {
    let loadingInstance = Loading.service({ text: '正在加载' })
    return axios.post(all.course, data).then(response => {
        if (response.status == 200 && response.data.status == 200) {
            cb(response.data)
        }
        loadingInstance.close()
    }, response => {
        console.log('errorCallback: ', response)
        loadingInstance.close()
    })
}

/**
 * 修改课程
 * @param {Object} data
 * @param {Function} cb
 * @return {Promise}
 */
const editorCourse = (data:any, cb:Function):Promise<any> => {
    let loadingInstance = Loading.service({ text: '正在加载' })
    return axios.post(all.course, data).then(response => {
        if (response.status == 200 && response.data.status == 200) {
            cb(response.data)
        }
        loadingInstance.close()
    }, response => {
        console.log('errorCallback: ', response)
        loadingInstance.close()
    })
}

/**
 * 获取课程详情
 * @param {Object} params 
 * @param {Function} cb 
 * @return {Promise}
 */
const courseDetail = (params: any ,cb:Function):any=>{
    let loadingInstance = Loading.service({ text: '正在加载' })
    return axios.get(all.getInfo, { params: params }).then(response => {
        if (response.status == 200 && response.data.status == 200) {
            cb(response.data)
        }
        loadingInstance.close()
    }, response => {
        console.log('errorCallback: ', response)
        loadingInstance.close()
    })
}

export const AdminInt = {
    upload,
    getCourseList,
    getCategory,
    addCourse,
    courseDetail,
    editorCourse
}