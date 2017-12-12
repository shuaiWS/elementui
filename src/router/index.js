import Vue from 'vue'
import App from '@/App'
import Login from '@/view/Login'
import Admin from '@/view/Admin'
import Home from '@/view/admin/Home/Home'

export const routesConfig = [{
    path: '/',
    component: App,
    children: [{
            path: '',
            redirect: 'admin'
        },
        {
            path: 'Login', //登录页
            meta: { authMedia: false, title: '登录页' },
            component: Login
        },
        {
            path: 'admin', //主页
            meta: { authMedia: false, title: '主页' },
            component: Admin,
            children: [{
                    path: '', // 登录
                    redirect: 'home'
                },
                {
                    path: 'home', //主页
                    meta: { authMedia: false, title: '主页' },
                    component: Home
                }
            ]
        }
    ]
}]