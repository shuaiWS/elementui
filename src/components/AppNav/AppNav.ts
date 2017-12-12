import Vue from "vue"
import Component from "vue-class-component"
import {routesConfig} from './../../router'

@Component({
    components:{
    }
})
export default class AppNav extends Vue {
    private routesConfig = routesConfig
    private handleOpen(key, keyPath) {
        console.log(key, keyPath)
    }
    private handleClose(key, keyPath) {
        console.log(key, keyPath)   
    }
}