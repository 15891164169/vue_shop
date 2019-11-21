<template>
  <scroll>
    <div>
      <cart-list-item v-for="(item, idx) in cart" :key="idx" :itemInfo="item"></cart-list-item>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
import CartListItem from './CartListItem'

import { mapState } from 'vuex'

export default {
  name: 'CartList',
  computed: {
    ...mapState(['cart'])
  },
  components: {
    Scroll,
    CartListItem
  }
}
</script>

<style scoped>

</style>
