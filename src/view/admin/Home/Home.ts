import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Home extends Vue {
    constructor() {
        super()
        console.log("Home enter")
    }
}