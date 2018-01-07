<template>
<el-row class="app-nav" :span="24">
  <el-col >
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
     >
      <!-- 第一层 menu start -->
      <div v-for="(menu,i) in routesConfig" :key="i" v-if="menu.meta">
        <el-menu-item  :index="menu.path" v-if="!menu.children && menu.meta.inNav">
          <i class="el-icon-menu" v-if="menu.meta.icon" :class="'el-icon-'+menu.meta.icon"></i>
          <span slot="title">{{menu.meta.title}}</span>
        </el-menu-item>
        <el-submenu :index="menu.path" v-if="menu.children">
          <template slot="title">{{menu.meta.title}}</template>
<!-- 第二层 menu start -->
<div v-for="(sub1,j) in menu.children" :key="j" v-if="sub1.meta">
    <el-menu-item :index="sub1.path" v-if="!sub1.children && sub1.meta.inNav">
        <i class="el-icon-menu" v-if="sub1.meta.icon" :class="'el-icon-'+sub1.meta.icon"></i>
        <span slot="title">{{sub1.meta.title}}</span>
    </el-menu-item>
    <el-submenu :index="sub1.path" v-if="sub1.children">
        <template slot="title">{{sub1.meta.title}}</template>
        <!-- 第三层 menu start -->
        <div v-for="(sub2,k) in menu.children" :key="k" v-if="sub2.meta">
            <el-menu-item :index="sub2.path" v-if="!sub2.children && sub2.meta.inNav">
                <i class="el-icon-menu" v-if="sub2.meta.icon" :class="'el-icon-'+sub2.meta.icon"></i>
                <span slot="title">{{sub2.meta.title}}</span>
            </el-menu-item>
            <el-submenu :index="sub2.path" v-if="sub2.children">
                <template slot="title">{{sub2.meta.title}}</template>
            </el-submenu>
        </div>
        <!-- 第三层 menu end -->
    </el-submenu>
</div>
<!-- 第二层 menu end -->
</el-submenu>
</div>
<!-- 第一层 menu end -->
</el-menu>
</el-col>
</el-row>
</template>

<script lang="ts" src="./AppNav.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped src="./AppNav.scss"></style>