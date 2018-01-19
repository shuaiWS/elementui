import { adminRoutes } from './../router'

/**
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
    if (fullPath[0] == '') {
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
}
/**
 * todo
 */