import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class NewCourse extends Vue{
    constructor(){
        super()
        console.log("NewCourse enter")
    }
}