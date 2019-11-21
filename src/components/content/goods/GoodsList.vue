<template>
  <div class="goods-list">
    <GoodsListItem class="list-comp" v-for="(item, idx) in goodsList" :key="idx" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props: ['goodsList'],
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
  .goods-list {
    padding-top: 5px;
    margin-bottom: 49px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .goods-list .list-comp {
    width: 30%;
  }
  .fixed-top {
    position: fixed;
    top: 621px;
  }
</style>
