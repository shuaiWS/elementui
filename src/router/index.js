import Vue from 'vue'
import App from '@/App'
import Login from '@/view/Login'
import Admin from '@/view/Admin'
import Home from '@/view/admin/Home/Home'
import Order from '@/view/admin/Order/Order'
import NewCourse from '@/view/admin/NewCourse/NewCourse'
import Spread from '@/view/admin/Spread/Spread'



export const adminRoutes = [{
        path: '', // 登录
        redirect: 'home'
    },
    {
        path: 'home', //主页
        meta: { authMedia: false, title: '主页', icon: 'menu', inNav: true },
        component: Home
    },
    {
        path: 'order', //订单页
        meta: { authMedia: false, title: '订单页', icon: 'menu', inNav: true },
        component: Order
    },
    {
        path: 'newCourse', //新建课程
        meta: { authMedia: false, title: '新建课程', icon: 'menu', inNav: true },
        component: NewCourse
    },
    {
        path: 'spread', //推广管理
        meta: { authMedia: false, title: '推广管理', icon: 'menu', inNav: true },
        component: Spread
    }
]

export const routesConfig = [{
    path: '/',
    component: App,
    children: [{
            path: '',
            redirect: 'admin'
        },
        {
            path: 'login', //登录页
            meta: { authMedia: false, title: '登录页', icon: 'menu' },
            component: Login
        },
        {
            path: 'admin', //主页
            meta: { authMedia: false, title: '主页', icon: 'menu', inNav: true },
            component: Admin,
            children: adminRoutes
        }
    ]
}]