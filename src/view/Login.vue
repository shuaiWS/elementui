<template>
  <div>我是登录页</div>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component
export default class Login extends Vue {
  constructor() {
    super()
    console.log("Login enter")
  }
}
</script>

<style lang="scss" scoped type="text/css" ></style>
