
import { Loading } from 'element-ui'
import url from '../store/modules/dataUrl'
import axios from "axios"

const all = url.state

/**登录
 * @param {Object} params
 * @param {Function} cb
 * return void
 */
const login = (params:any, cb:Function):Promise<any> => {
    let loadingInstance = Loading.service({ text: '登陆中' })
    return axios.post(all.login, params).then(response => {
        cb(response.data)
        loadingInstance.close()
    }, response => {
        console.log('errorCallback: ', response)
        loadingInstance.close()
    })
}

export const loginInt = {
    login
}