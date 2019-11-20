<template>
  <div id="detail">
    <DetailNavBar/>
    <Scroll class="content">
      <DetailSwiper :topSwiper="topSwiper"/>
      <DetailBaseInfo :goodsInfo="goodsInfo"/>
      <DetailShopInfo :shopInfo="shopInfo"/>
      <DetailImagesInfo :imagesInfo="imagesInfo"/>
    </Scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailImagesInfo from './childComps/DetailImagesInfo'

import Scroll from '@/components/common/scroll/Scroll'

import { getDetail, Goods } from '@/network/detail.js'

export default {
  name: 'Detail',
  data () {
    return {
      iid: '',
      topSwiper: [],
      goodsInfo: {},
      shopInfo: {},
      imagesInfo: {}
    }
  },
  created () {
    this.iid = this.$route.params.iid
    this.getDetail(this.iid)
  },
  methods: {
    getDetail (iid) {
      getDetail(iid).then(res => {
        const resData = res.result
        console.log(resData)
        // 顶部轮播
        this.topSwiper = resData.itemInfo.topImages
        // 商品信息
        this.goodsInfo = new Goods(resData.itemInfo, resData.columns, resData.shopInfo.services)
        // 商铺信息
        this.shopInfo = resData.shopInfo
        // 图片信息
        this.imagesInfo = resData.detailInfo
      })
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImagesInfo,
    Scroll
  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    height: 100vh;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px);
  }
</style>
