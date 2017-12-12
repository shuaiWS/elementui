<template >
<el-row class="app-nav">
  <el-col :span="4">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</template>
<script lang="ts" src="./AppNav.ts"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./AppNav.scss"></style>
