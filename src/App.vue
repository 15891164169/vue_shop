<template>
  <div id="app">
    app
    <Home/>
  </div>
</template>

<script>
import Home from '@/views/home/home.vue'
export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
  @import './assets/css/base.css'
</style>
