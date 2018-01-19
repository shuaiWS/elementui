/**
 * 获取指定cookie
 * @param {String} name
 * return any 
 */
export function getCookie(name): any {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    if (arr = document.cookie.match(reg)) {
        return (arr[2])
    } else {
        return null
    }
}

/**
 * 设置cookie
 * @param {String} c_name 
 * @param {String} value 
 * @param {Number} expiredays 
 * return void
 */
export function setCookie(c_name, value, expiredays = 0): void {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + encodeURIComponent(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toUTCString())
}

/**
 * 删除cookie
 * @param {String}name 
 * return void
 */
export function delCookie(name): void {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = getCookie(name)
    if (cval != null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString()
    }
}