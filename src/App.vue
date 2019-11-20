<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <MainTabBar/>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/mainTabBar/MainTabBar.vue'
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style scoped>
  @import './assets/css/base.css';
</style>
