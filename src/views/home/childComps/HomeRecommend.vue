<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, idx) in recommends" :key="idx">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item {
    flex: 1;
    text-align: center;
  }
  .recommend-item a{}
  .recommend-item img{
    margin-bottom: 10px;
    width: 80px;
    height: 80px;
    vertical-align: middle;
  }
  .recommend-item div{}
</style>
