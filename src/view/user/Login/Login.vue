<template>
  <div class="login-box">
    <div class="head extra-large align-center">
        丰盛课堂-运营后台
    </div>
    <div class="main">
      <el-row>
        <el-col :span="24">
          <el-input placeholder="用户名/邮箱" v-model="form.username" @keyup.enter.native="handlelogin" @blur="uihandleBlur">
            <template slot="prepend">
              <i class="user icon"></i>
            </template>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-input placeholder="密码" v-model="form.password" type="password" @keyup.enter.native="handlelogin" ref="passwordInput">
            <template slot="prepend">
              <i class="password icon"></i>
            </template>
          </el-input>
        </el-col>
      </el-row>
      <el-row class="row-height1">
        <el-col :span="12">
          <el-checkbox v-model="form.remember">记住账号</el-checkbox>
        </el-col>
        <el-col :span="12" class="align-right">
          <span class="blue small">无法登陆</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-button type="danger" class="login" @click="handlelogin">登录</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" src="./Login.ts"></script>

<style lang="scss" scoped type="text/css" src="./Login.scss" ></style>
