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
            id: 'aa',
            name: 'bb',
            createTime: 'cc',
            a:'jej',
            b:'sdfsdf',
            c:'sdfsdf'
          },{
            id: '111',
            name: 'bb',
            createTime: 'cc',
            a:'jej',
            b:'sdfsdf',
            c:'sdfsdf'
          },{
            id: '111',
            name: 'bb',
            createTime: 'cc',
            a:'jej',
            b:'sdfsdf',
            c:'sdfsdf'
          },{
            id: '111',
            name: 'bb',
            createTime: 'cc',
            a:'jej',
            b:'sdfsdf',
            c:'sdfsdf'
          },{
            id: '111',
            name: 'bb',
            createTime: 'cc',
            a:'jej',
            b:'sdfsdf',
            c:'sdfsdf'
          }]
}