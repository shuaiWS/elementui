<template>
  <div class="breadcrumb-box">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item,i) in admin.breadCrumb" :key="i" :to="{ path: item.path }">{{item.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" src="./BreadCrumb.ts"></script>

<style scoped type="text/css" src="./BreadCrumb.scss"></style>


