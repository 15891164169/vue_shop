<template>
  <div id="detail-nav">
    <NavBar>
      <div class="backImg" slot="left" @click="backBtn">
        <img src="@/assets/images/common/back.svg">
      </div>
      <div class="nav-items" slot="center">
        <div class="nav-item" :class="{active: idx === currentIndex}" v-for="(item, idx) in titles" :key="idx" @click="navClick(idx)">{{ item }}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: 'DetailNav',
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    backBtn () {
      this.$router.back()
    },
    navClick (idx) {
      this.currentIndex = idx
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
  #detail-nav {
    position: relative;
    background-color: #fff;
    z-index: 10;
  }
  .backImg {}
  .backImg img {
    vertical-align: middle;
  }
  .nav-items {
    display: flex;
  }
  .nav-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }
</style>
