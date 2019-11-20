<template>
  <div v-if="Object.keys(goodsInfo).length !== 0" class="base-info">
    <div class="info-title" @click="test">{{ goodsInfo.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goodsInfo.newPrice }}</span>
      <span class="o-price">{{ goodsInfo.oldPrice }}</span>
      <span v-if="goodsInfo.discount" class="discount">{{ goodsInfo.desc }}</span>
    </div>
    <div class="info-other">
      <span>{{ goodsInfo.columns[0] }}</span>
      <span>{{ goodsInfo.columns[1] }}</span>
      <span>{{ goodsInfo.services[goodsInfo.services.length-1].name }}</span>
    </div>
    <div class="info-service">
      <span class="services-item" v-for="index in goodsInfo.services.length - 1" :key="index">
        <img :src="goodsInfo.services[index - 1].icon">
        <span>{{ goodsInfo.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goodsInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    test () {
      console.log(this.goodsInfo)
    }
  }
}
</script>

<style scoped>
  .base-info {
    padding: 8px;
    border-bottom: 5px solid #eee;
  }
  .info-title {
    margin-top: 5px;
    font-size: 20px;
    font-weight: 600;
  }
  .info-price {
    padding: 16px 0;
  }
  .info-price .n-price {
    margin-right: 12px;
    font-size: 26px;
    font-weight: 600;
    color: var(--color-high-text);
  }
  .info-price .o-price {
    margin-right: 12px;
    text-decoration: line-through;
  }
  .info-price .discount{}
  .info-other {
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    line-height: 14px;
    border-bottom: 2px solid #eee;
  }
  .info-other span {
    -flex: 1;
  }
  .info-service {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 0;
  }
  .info-service .services-item {
    padding: 5px 0;
  }
  .info-service .services-item img {
    margin-top: -4px;
    margin-right: 4px;
    vertical-align: middle;
    width: 16px;
    height: 16px;
  }
  .info-service .services-item span {}
</style>
