<template>
  <div id="admin" class="admin">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="300px"><app-nav/></el-aside>
        <el-container>
          <el-main><router-view/></el-main>
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

@Component({
  components: {
    AppNav
  }
})
export default class Login extends Vue {
  constructor() {
    super()
    console.log("Admin enter")
  }
}
</script>

<style lang="scss" scopedtype="text/css" >
.admin{
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
</style>
