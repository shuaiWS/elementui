import Vue from 'Vue'
import Component from 'vue-class-component'

@Component
export default class Order extends Vue{
    constructor(){
        super()
        console.log("Order enter")
    }
}