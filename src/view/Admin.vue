<template>
<div id="admin">
  <app-nav/>
  <router-view ></router-view> 
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
    super();
    console.log("Admin enter");
  }
}
</script>

<style lang="scss" scopedtype="text/css" ></style>
