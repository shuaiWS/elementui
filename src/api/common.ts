import { adminRoutes } from './../router'

/**
<<<<<<< HEAD
 * 拷贝
 * @param {Array|Object} target 
 * @param {Array|Object} options 
 * @param {Boolean}deep 
 * @return {Array|Object} target
 */
export function extend(target, options, deep = false):any {
    for (let name in options) {
        let copy = options[name]
        if (deep && copy instanceof Array) {
            target[name] = extend([], copy, deep)
        } else if (deep && copy instanceof Object) {
            target[name] = extend({}, copy, deep)
        } else {
            target[name] = options[name]
        }
    }
    return target
}
=======
 * todo
 */
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
/**
 * 获取面包屑导航
 * @param {Array} fullPath 
 * return void
 */
export function getBreadCrumb(fullPath: Array<string>) {
    let path,
        title,
        breadcrumb = [],
        menu,
        len = fullPath.length
<<<<<<< HEAD
    if (fullPath[0] == '') {
=======
    if(fullPath[0]==''){
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
        fullPath.shift()//剔除 ''
    }
    path = `/${fullPath.shift()}` //剔除'admin'
    fullPath.forEach((ele, i) => {
        menu = adminRoutes[ele]
        path += `/${menu.path.replace(/\//g, '')}`  //拼接路径
        title = `${menu.meta.title}`  //标题
        breadcrumb.push({
            path,
            title
        })
    });
    return breadcrumb
<<<<<<< HEAD
}
/**
 * todo
 */
=======
}
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
