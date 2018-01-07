import { adminRoutes } from './../router'

/**
 * todo
 */
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
    if(fullPath[0]==''){
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