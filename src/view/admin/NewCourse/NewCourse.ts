import Vue from 'vue'
import Component from 'vue-class-component'
import UEditor from '@/components/UEditor/UEditor.vue'

interface formeDataM {
    courseTitle: String
}

@Component({
    components: {
        UEditor
    }
})
export default class NewCourse extends Vue {
    constructor() {
        super()
        console.log("NewCourse enter")
    }
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
}