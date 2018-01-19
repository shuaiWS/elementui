import Vue from 'vue'
import Component from 'vue-class-component'
<<<<<<< HEAD
// import UEditor from '@/components/UEditor/UEditor.vue'
import { BASEURL } from "./../../../api/storge"
import { extend } from "./../../../api/common"
import url from './../../../store/modules/dataUrl'
import { AdminInt } from "./../../../api/admin"
import { router } from './../../../router'

const all = url.state

interface fileListM {
    name: string
    url: string
}

interface formeDataM {
    cid?:string                         //课程id
    categoryName?:string                //分类名称
    title: string                       //课程标题
    slogo: string                       //课程简介
    chapterlist: {
        ch_no: number
        title: string
        content: string
    }[]                                  //课程目录
    category: string                     //课程分类
    price: string                        //收费标准
    islisten: number                     //课程试听
    scale: string                        //分成比例
    title_img: string                    //封面图
    listenannex: string                  //介绍附件
    intro: string                        //课程详情
    intro_img: {
        no: number
        img: string
        name: string
    }[]                                  //课程详情图
    tname: string                        //讲师名称
    tintro: string                       //讲师介绍
    head_img_url: string                 //讲师图片
    tags: string[]                       //课程标签
    status: number                       //状态
}

interface pageDataM {
    priceRadio: string                   //是否收费
    showPriceInput: boolean              //是否显示收费输入框
    categoryName: string                 //分类名称
    price:string                         //价格
    chapterList: [fileListM][]           //课程目录视频文件列表
    slogoList: fileListM[]               //封面图文件列表
    introImgList:fileListM[]             //介绍附件文件列表
    introList:fileListM[]                //课程详情文件列表
    tintroImgList:fileListM[]            //讲师头像文件列表
    categoryList: {
        cid: string
        name: string
    }[]                                  //分类列表
    catalog: {
        title: string
        file: string
    }[]
    tagInputValue: string                //标签内容
    tagInputVisible: boolean             //是否显示添加标签输入框
=======
import UEditor from '@/components/UEditor/UEditor.vue'

interface formeDataM {
    courseTitle: String
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
}

@Component({
    components: {
<<<<<<< HEAD
        // UEditor
=======
        UEditor
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
    }
})
export default class NewCourse extends Vue {
    constructor() {
        super()
        console.log("NewCourse enter")
        this.init()
    }

    private cid: string = router.currentRoute.query.cid

    private formData: formeDataM = {
        title: '',
        slogo: '',
        chapterlist: [],
        category: '',
        price: '',
        islisten: 0,
        scale: '',
        title_img: '',
        listenannex: '',
        intro: '',
        intro_img: [],
        tname: '',
        tintro: '',
        head_img_url: '',
        tags: [],
        status: 0,
    }

    private pageData: pageDataM = {
        priceRadio: '1',
        showPriceInput: true,
        categoryName: '选择分类',
        price:'',
        categoryList: [],
        catalog: [],
        tagInputValue: '',
        tagInputVisible: false,
        chapterList: [],
        slogoList: [],
        introImgList:[],
        introList:[],
        tintroImgList:[]
    }

    private uploadAction = BASEURL + all.upload     //上传路径

    //上传图片需要传的参数
    private imgParams = {
        type: 'image'
    }
    //上传视频需要传的参数
    private mediaParams = {
        type: 'media'
    }

    //可以上传的音频类型
    private imgType = ['image/jpeg', 'image/png']
    //可以上传的视频类型
    private mediaType = ['audio/mpeg', 'audio/mp4', 'video/mp4', 'video/avi', 'video/x-msvideo', '.flv']

    //表单验证规则
    private formRule = {
        title: [{ required: true, message: '请输入课程标题', trigger: 'blur' }],
        chapterlist: [{ required: true, message: '请添加课程目录', trigger: 'change' }],
        category: [{ required: true, message: '请选择课程分类', trigger: 'change' }],
        price: [{ required: this.pageData.priceRadio, message: '请输入收费价格', trigger: 'blur' }],
        scale: [{ required: true, message: '请输入分成比例', trigger: 'blur' }],
        title_img: [{ required: true, message: '请选择封面图', trigger: 'change' }],
        intro_img: [{ required: true, message: '请添加课程详情图', trigger: 'change' }],
        tname: [{ required: true, message: '请输入讲师名称', trigger: 'blur' }],
        head_img_url: [{ required: true, message: '请添加讲师头像', trigger: 'change' }],
        tags: [{ required: true, message: '请添加课程标签', trigger: 'change' }]
    }

    private init = () => {
        if (this.cid) { //课程详情
            this.getCourseDetail()
        }
        this.getList()
    }

    /**
     * 从连接中截取文件名称
     * @param {string} content
     * @return {string}
     */
    private getFileName = (content: string): string => {
        let reg = new RegExp(/com\/(\S*)/)
        return content.match(reg)[1]
    }

    /**
     * 获取课程详情
     * return void
     */
    private getCourseDetail = (): void => {
        AdminInt.courseDetail({ cid: this.cid }, res => {
            this.formData = extend(this.formData, res.data, true)
            /**
             * todo
             */
            this.formData.chapterlist = extend(this.formData.chapterlist, res.data.chapterList, true)
            /**
             * todo
             */
            this.pageData.categoryName = res.data.categoryName  //分类名称
            this.pageData.price = (res.data.price/100).toFixed(2)  //价格
            //添加课程详情名称
            this.formData.intro_img.forEach(ele=>{
                ele.name = this.getFileName(ele.img)
            })
            //课程列表视频
            this.formData.chapterlist.forEach(ele => {
                this.pageData.chapterList.push([{
                    name: this.getFileName(ele.content),
                    url: ele.content
                }])
            })
            //封面图
            this.pageData.slogoList.push({
                name: this.getFileName(res.data.title_img),
                url: res.data.title_img
            })
            //介绍附件
            this.pageData.introImgList.push({
                name: this.getFileName(res.data.listenannex),
                url: res.data.listenannex
            })
            //课程详情  tintroImgList
            this.formData.intro_img.forEach(ele => {
                this.pageData.introList.push({
                    name: this.getFileName(ele.img),
                    url: ele.img
                })
            })
            //介绍附件
            this.pageData.tintroImgList.push({
                name: this.getFileName(res.data.head_img_url),
                url: res.data.head_img_url
            })
        }).then(res => {
            console.log("课程详情加载完毕")
        })
    }

    /**
     * 获取分类列表
     * return void
     */
    private getList = (): void => {
        AdminInt.getCategory(res => {
            this.pageData.categoryList = res.data
        }).then(res => {
            console.log("课程列表加载完毕")
        })
    }

    /**
     * 上传视频校验
     * @param  {File} file
     * return {boolean}
     */
    private beforeMediaUpload = (file, maxSize?): boolean => {
        let size = maxSize ? maxSize : 2048  //视频大小  单位M
        const legalSize = file.size / 1024 / 1024 <= size
        if (!legalSize) {
            this.$message.error('附件大小不能超过 2GB!')
        }
        return legalSize
    }


    /**
     * 上传图片校验
     * @param  {File} file
     * return {boolean}
     */
    private beforeImgUpload = (file, maxSize?): boolean => {
        let size = maxSize ? maxSize : 2  //图片大小  单位M
        const legalSize = file.size / 1024 / 1024 <= size
        if (!legalSize) {
            this.$message.error('头像图片大小不能超过 2MB!')
        }
        return legalSize
    }

    /**
     * 上传失败提示
     * @param {string} err
     * @param {File} file
     * @param {Array} fileList
     * return void
     */
    private uploadErr = (err, file, fileList): void => {
        this.$message.error('上传失败')
    }

    /**
     * 选取分类
     * @param {string} command 
     * return void
     */
    private categoryCommand(command: string): void {
        this.formData.category = command
        this.pageData.categoryList.forEach(ele => {
            if (ele.cid == command) {
                this.pageData.categoryName = ele.name
                return
            }
        })
    }

    /**
     * 是否收费状态改变
     * @param {string} val
     * return void 
     */
    private priceChange(val: string): void {
        if (val == '1') {  //收费
            this.pageData.showPriceInput = true
            this.formData.price = ''
            this.pageData.price = ''
            this.$nextTick(() => {
                let price: any = this.$refs.price
                price.$refs.input.focus()
            })
        } else {
            this.pageData.showPriceInput = false
            this.formData.price = '0'
            this.pageData.price = '0'
        }
    }

    /**
     * 上传封面图前校验
     */
    private beforeSlogoUpload = (file: File): boolean => {
        return this.beforeImgUpload(file)
    }

    /**
     * 上传封面图
     */
    private slogoSuccess = (response: any, file: File, fileList: any): void => {
        this.formData.title_img = response.data
        this.$message.success("上传成功")
    }

    /**
     * 删除封面图
     */
    private slogoRemove = (response: any, file: File, fileList: any): void => {
        this.formData.title_img = ''
    }

    /**
     * 点击封面图
     */
    private slogoPreview = (response: any, file: File, fileList: any): void => {
        console.log(response)
    }

    /**
     * 上传封面图前校验
     */
    private beforeintroImgUpload = (file: File): boolean => {
        return this.beforeMediaUpload(file)
    }

    /**
     * 上传介绍附件
     */
    private introImgSuccess = (response: any, file: File, fileList: any): void => {
        this.formData.listenannex = response.data
        this.$message.success("上传成功")
    }

    /**
     * 删除介绍附件
     */
    private introImgRemove = (file: File, fileList: any): void => {
        this.formData.listenannex = ''
    }

    /**
     * 点击介绍附件
     */
    private introImgPreview = (response: any, file: File, fileList: any): void => {
        console.log(response)
    }

    /**
     * 上传讲师图前校验
     */
    private beforetintroImgUpload = (file: File): boolean => {
        return this.beforeImgUpload(file)
    }

    /**
     * 上传讲师图
     */
    private tintroImgSuccess = (response: any, file: File, fileList: any): void => {
        this.formData.head_img_url = response.data
        this.$message.success("上传成功")
    }

    /**
     * 删除讲师图
     */
    private tintroImgRemove = (response: any, file: File, fileList: any): void => {
        this.formData.head_img_url = ''
    }

    /**
     * 点击讲师图
     */
    private tintroImgPreview = (response: any, file: File, fileList: any): void => {
        console.log(response)
    }

    /**
     * 当pageData中的价格修改时同步修改表单数据(因为表单中需要提交的价格单位为分，需要现实的价格单位为元)
     * @param {Event} event
     * return void
     */
    private changePrice = (event)=>{
        this.formData.price = (event.currentTarget.value*100).toFixed(0)
    }

    /**
     * 添加目录
     * return void
     */
    private addCatalog(): void {
        let no = 0, len = this.formData.chapterlist.length
        if (len) {
            no = this.formData.chapterlist[len - 1].ch_no
        }
        this.formData.chapterlist.push({
            ch_no: no + 1,
            title: '',
            content: ''
        })
    }

    /**
     * 上传课程目录图前校验
     */
    private beforeChapterUpload = (file: File): boolean => {
        return this.beforeMediaUpload(file)
    }

    /**
     * 上传课程目录图
     */
    private chapterSuccess = (response: any, file: File, fileList: any, index?: number): void => {
        this.formData.chapterlist[index].content = response.data
        this.$message.success("上传成功")
    }
<<<<<<< HEAD

    /**
     * 删除课程目录图
     */
    private chapterRemove = (file: File, fileList: any, index?: number): void => {
        this.formData.chapterlist[index].content = ''
    }

    /**
     * 点击课程目录图
     */
    private chapterPreview = (response: any, file: File, fileList: any): void => {
        console.log(response)
    }

    /**
     * 上传课程详情图前校验
     */
    private introUpload = (file: File): boolean => {
        let flag = this.beforeImgUpload(file, 5)
        if (flag) {
            let num = 0
            if (this.formData.intro_img.length) {
                num = this.formData.intro_img[this.formData.intro_img.length - 1].no
            }

            this.formData.intro_img.push({
                no: num + 1,
                img: '',
                name: file.name
            })
        }
        return flag
    }

    /**
     * 上传课程详情图
     */
    private introSuccess = (response: any, file: File, fileList: any): void => {
        this.formData.intro_img.forEach(ele => {
            if (ele.name == file.name) {
                ele.img = response.data
                return
            }
        })
        this.$message.success("上传成功")
    }

    /**
     * 删除课程详情图
     */
    private introRemove = (file: File, fileList: any): void => {
        let newList
        newList = this.formData.intro_img.filter(ele => ele.name != file.name)
        this.formData.intro_img = newList
    }

    /**
     * 点击课程详情图
     */
    private introPreview = (response: any, file: File, fileList: any): void => {
        console.log(response)
    }

    /**
     * 显示标签添加输入框
     * return void
     */
    private showTagInput(): void {
        this.pageData.tagInputVisible = true
        this.$nextTick(() => {
            let saveTagInput: any = this.$refs.saveTagInput
            saveTagInput.$refs.input.focus()
        })
    }

    /**
     * 删除具体标签
     * @param tag {string} 标签
     * return void
     */
    private tagHandleClose(tag): void {
        this.formData.tags.splice(this.formData.tags.indexOf(tag), 1)
    }

    /**
     * 添加具体标签
     * return void
     */
    private tagHandleInputConfirm(): void {
        let inputValue = this.pageData.tagInputValue
        if (inputValue) {
            this.formData.tags.push(inputValue)
        }
        this.pageData.tagInputVisible = false
        this.pageData.tagInputValue = ''
    }

    /**
     *表单提交
     *return void 
     */
    private onSubmit = (): void => {
        console.log('表单数据 start --------------->')
        console.log(this.formData)
        console.log('表单数据 end ----------------->')
        let forme: any = this.$refs.courseforme
        forme.validate((valid) => {
            if (valid) {
                if(this.cid){ //修改操作
                    AdminInt.editorCourse(this.formData, res => {
                        this.$message.success('修改成功')
                        router.replace({
                            name: 'courseList'
                        })
                    })
                }else{ //新建操作
                    AdminInt.addCourse(this.formData, res => {
                        this.$message.success('添加成功')
                        router.replace({
                            name: 'courseList'
                        })
                    })
                }
            } else {
                this.$message.error('请填写正确参数')
                return false
            }
        })
    }

=======
    private formeData = {}
    private dynamicTags = ['标签一', '标签二', '标签三']
    private tagInputVisible = false
    private tagInputValue = ''
    private rules = {}
    private ruleForm = {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        charge: '',  //收费标准
        audition: '' //试听
    }

    private handleCommand(command:string) {
        this.$message('click on item ' + command);
    }

    private editorBlur($event:Event): void {
        this.$message('click on item ' + $event);
    }
    
    private tagHandleClose(tag): void {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    }

    private showTagInput(): void {
        this.tagInputVisible = true;
        this.$nextTick(() => {
            let saveTagInput:any = this.$refs.saveTagInput
            saveTagInput.$refs.input.focus();
        });
    }

    private tagHandleInputConfirm(): void {
        let inputValue = this.tagInputValue;
        if (inputValue) {
            this.dynamicTags.push(inputValue);
        }
        this.tagInputVisible = false;
        this.tagInputValue = '';
    }

    // private destroyed() {
    //     this.destroyEditor = true
    //     console.log("我被销毁了")
    // }
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
}