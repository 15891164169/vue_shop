<template>
  <div v-if="Object.keys(shopInfo).length !== 0" class="shop-info">
    <div class="shop-img">
      <img :src="shopInfo.shopLogo">
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop-feature">
      <div class="feature-selling">
        <div class="total-volume">
          <p class="amount">{{ shopInfo.cSells | dataFixedto }}</p>
          <p class="text">总销量</p>
        </div>
        <div class="total-goods">
          <p class="amount">{{ shopInfo.cGoods | dataFixedto }}</p>
          <p class="text">全部宝贝</p>
        </div>
      </div>
      <div class="feature-commont">
        <p v-for="(item, idx) in shopInfo.score" :key="idx">
          <span>{{ item.name }}</span>
          <span :class="{isHeighLight: item.isBetter}">{{ item.score }}</span>
          <span :class="{'isHeighLight': item.isBetter}">{{ item.isBetter ? '高' : '低' }}</span>
        </p>
      </div>
    </div>
    <div class="shop-link">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    dataFixedto (value) {
      if (value > 10000) {
        return (value / 10000).toFixed(1) + '万'
      } else {
        return value
      }
    }
  }
}
</script>

<style scoped>
  .shop-info {
    padding: 24px 8px;
    border-bottom: 5px solid #eee;
  }
  .shop-img {}
  .shop-img img {
    vertical-align: middle;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: -4px;
  }
  .shop-img span {
    margin-left: 10px;
    font-size: 20px;
  }
  .shop-feature {
    display: flex;
  }
  .feature-selling {
    flex: 1;
    margin: 20px 0;
    border-right: 1px solid #eee;
    display: flex;
  }
  .feature-selling .amount {
    font-size: 18px;
  }
  .feature-selling .text {
    font-size: 14px;
  }
  .feature-selling .total-volume {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .feature-selling .total-goods {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .feature-commont {
    flex: 1;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
  }
  .feature-commont p {
    display: flex;
    justify-content: space-around;
    margin: 5px 0;
    font-size: 14px;
  }
  .feature-commont span:nth-child(1) {
  }
  .feature-commont span:nth-child(2) {
    color: red;
  }
  .feature-commont span:nth-child(3) {
    color: #fff;
    background-color: red
  }
  .shop-link {
    margin-top: 10px;
    text-align: center;
  }
  .shop-link span {
    padding: 6px 36px;
    border-radius: 3px;
    background-color: #eee;
  }

  .feature-commont span:nth-child(2).isHeighLight {
    color: green;
  }
  .feature-commont span:nth-child(3).isHeighLight {
    background-color: green
  }
</style>
