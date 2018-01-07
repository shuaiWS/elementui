import Vue from 'Vue'
import Component from 'vue-class-component'

@Component({
    components: {
    }
})
export default class Spread extends Vue {
    constructor() {
        super()
        console.log("Spread enter")
    }
    private centerDialogVisible = false
    private tableData = [{
            id: '111',
            name: '王小虎',
            createTime: '上海市普陀区金沙江路 1518 弄',
            a:'jej',
            b:'sdfsdf',
            c:'sdfsdf'
          },{
            id: '111',
            name: '王小虎',
            createTime: '上海市普陀区金沙江路 1518 弄',
            a:'jej',
            b:'sdfsdf',
            c:'sdfsdf'
          },{
            id: '111',
            name: '王小虎',
            createTime: '上海市普陀区金沙江路 1518 弄',
            a:'jej',
            b:'sdfsdf',
            c:'sdfsdf'
          },{
            id: '111',
            name: '王小虎',
            createTime: '上海市普陀区金沙江路 1518 弄',
            a:'jej',
            b:'sdfsdf',
            c:'sdfsdf'
          },{
            id: '111',
            name: '王小虎',
            createTime: '上海市普陀区金沙江路 1518 弄',
            a:'jej',
            b:'sdfsdf',
            c:'sdfsdf'
          }]
}