<template>
  <div id="detail">
    <DetailNavBar @navClick="navClick"/>
    <Scroll class="content" ref="scroll" :probeType="3" @scroll="deatilScroll">
      <DetailSwiper :topSwiper="topSwiper"/>
      <DetailBaseInfo :goodsInfo="goodsInfo"/>
      <DetailShopInfo :shopInfo="shopInfo"/>
      <DetailImagesInfo :imagesInfo="imagesInfo" @detailImgLoad="detailImgLoad"/>
      <DetailParamsInfo ref="params" :itemParams="itemParams"/>
      <DetailCommentInfo ref="comment" :commentInfo="commentInfo"/>
      <GoodsList ref="recommend" :goodsList="recommendInfo"/>
    </Scroll>
    <DetailBottomBar @addToCart="addToCart"/>

    <BackTop @click.native="backTop" v-show="showBackTop"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailImagesInfo from './childComps/DetailImagesInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from '@/components/common/scroll/Scroll'
import GoodsList from '@/components/content/goods/GoodsList'

import { BACKTOP_DISTANCE } from '@/common/const.js'
import { itemListenerMixin, backTopButtonMinin } from '@/common/mixin.js'
import { debounce } from '@/common/utils.js'

import { getDetail, Goods,
  getRecommend } from '@/network/detail.js'

import { mapActions } from 'vuex'

export default {
  name: 'Detail',
  data () {
    return {
      iid: '',
      topSwiper: [],
      goodsInfo: {},
      shopInfo: {},
      imagesInfo: {},
      itemParams: {},
      commentInfo: {},
      recommendInfo: {},
      navItemY: [],
      getNavItemY: null
    }
  },
  mixins: [itemListenerMixin, backTopButtonMinin],
  created () {
    this.iid = this.$route.params.iid
    this.getDetail(this.iid)
    this.getRecommend()

    this.getNavItemY = debounce(() => {
      this.navItemY = []
      this.navItemY.push(0)
      this.navItemY.push(this.$refs.params.$el.offsetTop)
      this.navItemY.push(this.$refs.comment.$el.offsetTop)
      this.navItemY.push(this.$refs.recommend.$el.offsetTop)
    }, 100)
  },
  destroyed () {
    this.$bus.$off('imgLoad', this.itemListener)
  },
  methods: {
    ...mapActions(['addToShopCart']),
    getDetail (iid) {
      getDetail(iid).then(res => {
        const resData = res.result
        // console.log(resData)
        // 顶部轮播
        this.topSwiper = resData.itemInfo.topImages
        // 商品信息
        this.goodsInfo = new Goods(resData.itemInfo, resData.columns, resData.shopInfo.services)
        // 商铺信息
        this.shopInfo = resData.shopInfo
        // 图片信息
        this.imagesInfo = resData.detailInfo
        // 参数信息
        this.itemParams = resData.itemParams
        // 评论信息
        if (resData.rate.cRate !== 0) {
          this.commentInfo = resData.rate.list[0]
        }
      })
    },
    getRecommend () {
      getRecommend().then(res => {
        let resData = res.data
        this.recommendInfo = resData.list
      })
    },
    detailImgLoad () {
      // this.$refs.scroll.refreshScroll()
      this.refreshDebs()

      this.getNavItemY()
    },
    navClick (idx) {
      this.$refs.scroll.scroll.scrollTo(0, -this.navItemY[idx], 300)
    },
    deatilScroll (position) {
      // const positionY = -position.y
      this.showBackTop = -position.y > BACKTOP_DISTANCE
    },
    addToCart () {
      const goods = {}
      goods.iid = this.iid
      goods.imgURL = this.topSwiper[0]
      goods.title = this.goodsInfo.title
      goods.desc = this.goodsInfo.desc
      goods.newPrice = this.goodsInfo.realPrice

      goods.checked = true
      goods.count = 1
      this.addToShopCart(goods).then((res) => {
        this.$toast.showToast(res, 1000)
      })
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImagesInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
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
    margin-top: 44px;
    height: calc(100% - 102px);
  }
</style>
