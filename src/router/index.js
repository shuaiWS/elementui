import Router from 'vue-router'
import Vue from 'vue'
import App from '@/App'
import User from '@/view/User'
import Login from '@/view/user/Login/Login'
import Admin from '@/view/Admin'
import Home from '@/view/admin/Home/Home'
import Order from '@/view/admin/Order/Order'
import NewCourse from '@/view/admin/NewCourse/NewCourse'
import Spread from '@/view/admin/Spread/Spread'
import CourseList from '@/view/admin/CourseList/CourseList'



Vue.use(Router)
export const adminRoutes = [{
        path: '', // 登录
        redirect: 'home'
    },
    {
        path: 'home', //主页
        name: 'home',
        meta: { authMedia: false, title: '主页', icon: 'menu', inNav: true, needLogin: false },
        component: Home
    },
    {
        path: 'courseList', //课程列表
        name: 'courseList',
        meta: { authMedia: false, title: '课程列表', icon: 'menu', inNav: true, needLogin: false },
        component: CourseList
    },
    {
        path: 'order', //订单页
        name: 'order',
        meta: { authMedia: false, title: '订单页', icon: 'menu', inNav: true, needLogin: false },
        component: Order
    },
    {
        path: 'newCourse', //新建课程
        name: 'newCourse',
        meta: { authMedia: false, title: '新建课程', icon: 'menu', inNav: false, needLogin: true },
        component: NewCourse
    },
    {
        path: 'spread', //推广管理
        name: 'spread',
        meta: { authMedia: false, title: '推广管理', icon: 'menu', inNav: true, needLogin: false },
        component: Spread,
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
            path: 'user',
            meta: { authMedia: false, title: '用户中心', icon: 'menu' },
            component: User,
            children: [{
                path: 'login', //登录页
                name: 'login',
                meta: { authMedia: false, title: '登录页', icon: 'menu' },
                component: Login
            }]
        },
        {
            path: 'admin', //主页
            meta: { authMedia: false, title: '主页', icon: 'menu', inNav: true },
            component: Admin,
            children: adminRoutes
        }
    ]
}]

export const router = new Router({
    routes: routesConfig
})