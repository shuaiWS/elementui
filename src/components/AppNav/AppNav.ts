import Vue from 'Vue'
import { mapActions, mapMutations } from 'Vuex'
import Component from "vue-class-component"
import { adminRoutes } from './../../router'

@Component({
    components:{
    }
})
export default class AppNav extends Vue{
    constructor(){
        super()
        console.log("AppNav enter")
    }
    private routesConfig = adminRoutes
    private handleOpen(key, keyPath) {
        // console.log(key, keyPath)
    }
    private handleClose(key, keyPath) {
        // console.log(key, keyPath)   
    }
    private handleSelect(key, keyPath){
        let path = keyPath.join('/')
        this.$router.replace({path: `/admin/${path}`})
    }
    private getMenu(){
        return 
    }
}