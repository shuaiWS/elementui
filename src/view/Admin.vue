<template>
  <div id="admin" class="admin">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="300px">
          <app-nav/>
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
}
</script>

<style lang="scss" scopedtype="text/css" >
.admin{
    width: 1350px;
    margin-left: auto;
    margin-right: auto;
}
</style>
