import Vue from 'Vue'
import Component from 'vue-class-component'
import { AdminInt } from "./../../../api/admin"
import { router } from './../../../router'

interface pageDateM {
    courseName: String                       //课程名称搜索
    courseList: {
        title: String                       //课程标题
        slogo: String                       //课程简介
        chapterlist: {
            ch_no: Number
            title: String
            content: String
        }[]                                  //课程目录
        category: String                     //课程分类
        price: String                        //收费标准
        islisten: Number                     //课程试听
        scale: String                        //分成比例
        title_img: String                    //封面图
        listenannex: String                  //介绍附件
        intro: String                        //课程详情
        intro_img: {
            no: Number
            img: String
            name: String
        }[]                                  //课程详情图
        tname: String                        //讲师名称
        tintro: String                       //讲师介绍
        head_img_url: String                 //讲师图片
        tags: String[]                       //课程标签
        status: Number                       //状态
    }[]                                      //表格数据
    totalNum: Number                          //数据条数 
    pageSize: Number                          //分页条数
    page: Number                              //当前页数
    currentPage: Number                       //当前激活页
}

@Component({
    components: {
    }
})
export default class CourseList extends Vue {
    constructor() {
        super()
        console.log("CourseList enter")
        this.getList()
    }
    private pageDate: pageDateM = {
        courseName: '',
        courseList: [],
        totalNum: 0,
        pageSize: 20,
        page: 1,
        currentPage: 1
    }

    /**
     * 进入课程详情
     * @param {Object} row
     * return void
     */
    private goDetail = (row: any): void => {
        router.replace({
            name: 'newCourse',
            query:{
                cid:row.cid
            }
        })
    }
    /**
     * 搜索课程列表
     */
    private handlesearch = () => {
        this.pageDate.currentPage = 1
        this.getList()
    }

    /**
     * 选择分页
     */
    private handleCurrentChange = val => {
        this.pageDate.currentPage = Number(val)
        this.getList()
    }

    /**
     * 获取课程列表
     */
    private getList = () => {
        AdminInt.getCourseList({
            q: this.pageDate.courseName,
            page: this.pageDate.currentPage
        },
            res => {
                this.pageDate.courseList = res.data.list
                this.pageDate.totalNum = res.data.totalNum
                this.pageDate.page = res.data.page
                this.pageDate.pageSize = res.data.pageSize
            })
    }
    private value2 = ''

    private handleCommand(command: String) {
        this.$message('click on item ' + command);
    }
}