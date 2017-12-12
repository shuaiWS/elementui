<template>
  <div >
    <router-view></router-view>
  </div>   
</template>

<script lang="ts">
import Vue from "vue"
import component from "vue-class-component"

@component
export default class App extends Vue {
   constructor(){
    super()
    console.log("App enter")
  }
}
</script>

<style lang="scss" scoped type="text/css" src="./App.scss"></style>
