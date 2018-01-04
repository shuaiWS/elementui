import Vue from 'Vue'
import Component from 'vue-class-component'

@Component
export default class Spread extends Vue{
    constructor(){
        super()
        console.log("Spread enter")
    }
}