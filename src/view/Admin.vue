<template>
  <div id="admin" class="admin">
    <el-header>
      <div class="el-common header-main">
        <img src="./../assets/img/logo.png" alt="" class="logo">
        <span class="extra-large">丰盛课堂-运营后台</span>
        <div class="fr head-controller">
          <i class="el-icon-question"></i>
          <img src="./../assets/img/logo.png" alt="" class="user-icon">
          <span>{{userName}}</span>
          <el-dropdown  @command="handleCommand" v-if="userName">
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="reset">修改密码</el-dropdown-item>
              <el-dropdown-item command="layout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>             
          <router-link class="login-btn" :to="{name: 'login'}" v-if="!userName">登录</router-link>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-container  class="el-common">
        <el-aside width="300px">
          <app-nav />
        </el-aside>
        <el-container>
          <el-main>
            <div class="main-head"><bread-crumb/></div>
            <router-view/>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div> 
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import AppNav from "@/components/AppNav/AppNav.vue"
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb.vue"
import { USERNAME,COOKID }  from "./../api/storge"
import { delCookie } from "./../api/cookie"
import { router } from './../router'

@Component({
  components: {
    AppNav,
    BreadCrumb
  }
})
export default class Admin extends Vue {
  constructor() {
    super()
    console.log("Admin enter")
  }

  private static = {
    layout:()=>{
      sessionStorage.clear()
      localStorage.clear()
      delCookie(COOKID)
      this.$message.success('退出成功')
      router.replace({name:'login'})
    }
  }

  private handleCommand = (command:string)=>{
    this.static[command]()
  }

  private userName = sessionStorage[USERNAME] || ''
}
</script>

<style lang="scss" scopedtype="text/css" >
.admin{
  & .el-aside {
      & .app-nav {
          height: 100%;
          & .el-col {
              height: 100%;
              & .el-menu {
                  height: 100%;
              }
          }
      }
  }
  & .el-header{
    $height:60px;
    padding: 0;
    border-bottom: 2px solid #3ac9ab;
    box-shadow: 0 0 0 #dddddd;
    & .header-main{
      height: $height;
      line-height: $height;
      & .logo{
        height: 30px;
        width: 30px;
        margin-right: 10px;
        float: left;
        margin-top: 15px;
      }
      & .head-controller{
        height: $height;
        line-height: $height;
        & .user-icon{
          height: 30px;
          width: 30px;
          /* margin-top: 15px; */
          position: relative;
          top: 8px;
        }
        & .el-icon-question:before{
          font-size: 20px;
        }
        & .login-btn{
          text-decoration: none;
        }
      }
    }
  }
  & .el-common{
    min-width: 1400px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
