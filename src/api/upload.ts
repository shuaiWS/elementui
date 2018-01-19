import axios from "axios"

/**
 * 
 * @param {String} url
 * @param {File} file
 * @param {Function} cb
 * return promise
 */
const upload = (url:string, file:File, cb?:Function):Promise<any> => {
    let param = new FormData(); //创建form对象
    param.append('file', file, file.name);//通过append向form对象添加数据
    param.append('chunk', '0');//添加form表单中其他数据
    console.log('file'+param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
    let config = {
        headers: { 'Content-Type': 'multipart/form-data' }
    };  //添加请求头
    return axios.post(url, param, config).then(response => {
        if (cb) {
            cb(response)
        }
    }, response => {
        console.log('errorCallback: ', response)
    })
}

export const Upload = {
    upload
}