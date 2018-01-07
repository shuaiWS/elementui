<template>
    <router-view/>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component
export default class App extends Vue {
   constructor(){
    super()
    console.log("App enter")
  }
}
</script>

<style lang="scss" type="text/css" src="./App.scss"></style>
