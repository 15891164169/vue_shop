<template>
  <div class="bottom-menu">
    <CheckButton class="select-all" @click.native="allChecked" :checked="allCheckedType"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{ checkedGoodsPrice }}</span>
    <span class="buy-product">去计算({{ checkedGoodsCount }})</span>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BottomBar',
  computed: {
    ...mapGetters(['checkedGoodsCount', 'checkedGoodsPrice', 'allCheckedType'])
  },
  methods: {
    ...mapActions(['totalCheckedType']),
    allChecked () {
      this.totalCheckedType()
    }
  },
  components: {
    CheckButton
  }
}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 48px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
