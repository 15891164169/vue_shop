<template>
  <div id="cart">
    <nav-bar class="nav-bar"><div slot="center">购物车({{ allGoodsCount }})</div></nav-bar>
    <cart-list class="cart-list"></cart-list>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import BottomBar from './childComps/BottomBar'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  computed: {
    ...mapGetters(['allGoodsCount'])
  },
  components: {
    NavBar,
    CartList,
    BottomBar
  }
}
</script>

<style scoped>
  #cart {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
    position: relative;
    z-index: 99;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 93px;
    width: 100%;
  }
</style>
