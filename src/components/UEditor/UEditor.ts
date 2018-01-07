import Vue from 'Vue'
import Component from "vue-class-component"
import { UEditorConfig } from './config'
import '../../../static/ue/ueditor.config'
import '../../../static/ue/ueditor.all'
import '../../../static/ue/lang/zh-cn/zh-cn'
import '../../../static/ue/ueditor.parse.min'

@Component({
    components: {
    }
})
export default class UEditor extends Vue {
    private UE
    private ueditor
    private editor = 'editor'
    constructor() {
        super()
        this.UE = window['UE']
        setTimeout(()=>{
            this.ueditor = this.UE.getEditor(this.editor, UEditorConfig)
        })
        console.log("UEditor enter")
    }
    destroyed() {
        setTimeout(()=>{
            this.UE.delEditor(this.editor)
        })
        console.log("UEditor destroyed")
    }
}