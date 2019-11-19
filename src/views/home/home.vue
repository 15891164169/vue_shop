<template>
  <div id="home">
    <NavBar class="nav-home">
      <div slot="center">购物街</div>
    </NavBar>
    <HomeSwiper :banners="banners"/>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'

import { getHomeMultidata } from '@/network/home.js'

export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  created () {
    getHomeMultidata().then(res => {
      this.banners = res.banner.list
      this.recommends = res.recommend.list
    })
  },
  components: {
    NavBar,
    HomeSwiper
  }
}
</script>

<style scoped>
  #home {
    -color: red;
  }
  .nav-home {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>
