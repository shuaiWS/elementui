import Vue from 'Vue'
import Component from 'vue-class-component'

@Component({
    components: {
    }
})
export default class Order extends Vue{
    constructor(){
        super()
        console.log("Order enter")
    }
    private data
<<<<<<< HEAD
    private tableData= [{
        a:'a',
        b:'b',
        c:'c',
        d:'d',
        e:'e',
        f:'f',
        g:'g',
        h:'h',
        i:'i'
    },{
        a:'a',
        b:'b',
        c:'c',
        d:'d',
        e:'e',
        f:'f',
        g:'g',
        h:'h',
        i:'i'
    },{
        a:'a',
        b:'b',
        c:'c',
        d:'d',
        e:'e',
        f:'f',
        g:'g',
        h:'h',
        i:'i'
    }]
    private pickerOptions1 = {
        disabledDate(time) {
            return time.getTime() > Date.now()
        },
        shortcuts: [{
            text: '近七天',
            onClick(picker) {
                const date = new Date()
                date.setTime(date.getTime() - 3600 * 1000 * 24)
                picker.$emit('pick', date)
            }
        }, {
            text: '近30天',
            onClick(picker) {
                const date = new Date()
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                picker.$emit('pick', date)
            }
        }]
    }
    private value2 = ''

    private handleCommand(command:string) {
        this.$message('click on item ' + command);
    }
=======
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
}