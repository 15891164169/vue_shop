<template>
  <Swiper>
    <SwiperItem class="detail-swiper-item" v-for="(item, idx) in topSwiper" :key="idx">
      <img :src="item">
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper/index'
export default {
  name: 'DetailSwiper',
  props: {
    topSwiper: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
  .detail-swiper-item {
    height: 300px;
  }
</style>
