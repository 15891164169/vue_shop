<template>
  <swiper>
    <SwiperItem v-for="(item, idx) in banners" :key="idx">
      <!-- <a :href="item.link"> -->
      <a href="javascript:;">
        <img :src="item.image" alt="" @load="swiperLoad"/>
      </a>
    </SwiperItem>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'

export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isImgLoad: true
    }
  },
  methods: {
    swiperLoad () {
      if (this.isImgLoad) {
        this.$emit('swiperLoad')
        this.isImgLoad = false
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
</style>
