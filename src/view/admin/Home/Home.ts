import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    components: {
    }
})
export default class Home extends Vue {
    constructor() {
        super()
        console.log("Home enter")
    }
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
}