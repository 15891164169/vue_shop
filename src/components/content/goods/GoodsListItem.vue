<template>
  <div class="goods-list-item" @click="goodsDetail">
    <img :src="goodsItem.show.img" @load="imageLoad">
    <div class="goods-item">
      <p class="item-title">{{ goodsItem.title }}</p>
      <span class="item-price">{{ goodsItem.price }}</span>
      <span class="item-cfav">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    goodsDetail () {
      this.$router.push('/detail/' + this.goodsItem.iid)
    },
    imageLoad () {
      this.$bus.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
  .goods-list-item {
    margin-bottom: 5px;
    font-size: 14px;
  }
  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
    vertical-align: middle;
  }
  .goods-list-item .goods-item {
    padding: 4px;
    text-align: center;
  }
  .goods-list-item .goods-item .item-title {
    margin-bottom: 5px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-list-item .goods-item .item-price {
    color: var(--color-tint);
    margin-right: 24px;
  }
  .goods-list-item .goods-item .item-cfav {
    position: relative;
  }
  .goods-list-item .goods-item .item-cfav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    /*left: 85px;
    top: -25px;*/
    bottom: 0;
    width: 14px;
    height: 14px;
    background: url('~assets/images/common/collect.svg') 0 0/14px 14px;
  }
</style>
