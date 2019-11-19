<template>
  <div class="goods-list">
    <GoodsListItem class="list-comp" v-for="(item, idx) in goodsList" :key="idx" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props: {
    goodsList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
  .goods-list {
    -padding: 5px;
    margin-bottom: 49px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .goods-list .list-comp {
    width: 30%;
  }
</style>
