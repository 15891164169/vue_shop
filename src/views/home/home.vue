<template>
  <div id="home">
    <NavBar class="nav-home">
      <div slot="center">购物街</div>
    </NavBar>

    <Scroll class="content" ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="showBack"
      @pullingUp="homePullUp">
      <HomeSwiper :banners="banners" @swiperLoad="swiperImageLoad"/>
      <HomeRecommend :recommends="recommends"/>
      <Feature/>
      <TabContral :tabTitles="tabTitles" @tabBarClick="tabBarClick" ref="tabCop"/>
      <GoodsList :goodsList="goodsSort"/>
    </Scroll>

    <BackTop @click.native="backTop" v-show="showBackTop"/>
  </div>
</template>
<script>
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import Feature from './childComps/Feature'

import NavBar from '@/components/common/navbar/NavBar'
import TabContral from '@/components/content/tabContral/TabContral'
import GoodsList from '@/components/content/goods/GoodsList'
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/content/backTop/BackTop'

import { getHomeMultidata, getHomeGoods } from '@/network/home.js'
import { itemListenerMixin } from '@/common/mixin.js'

export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      recommends: [],
      tabTitles: ['流行', '新款', '精选'],
      goods: {
        'pop': { page: 1, list: [] },
        'new': { page: 1, list: [] },
        'sell': { page: 1, list: [] }
      },
      currentSort: 'pop',
      showBackTop: false,
      tabOffsetTop: 0,
      homePageY: 0
    }
  },
  mixins: [itemListenerMixin],
  created () {
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted () {
    // console.log('home')
  },
  activated () {
    this.$refs.scroll.scroll.scrollTo(0, this.homePageY, 0)
    this.homeRefresh()
  },
  deactivated () {
    this.homePageY = this.$refs.scroll.getScrollY()
    this.$bus.$off('imgLoad', this.itemListener)
  },
  computed: {
    goodsSort () {
      return this.goods[this.currentSort].list
    }
  },
  methods: {
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        const goodsList = res.data.list
        this.goods[type].list.push(...goodsList)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp()
      })
    },
    tabBarClick (tabIdx) {
      switch (tabIdx) {
        case 0:
          this.currentSort = 'pop'
          break
        case 1:
          this.currentSort = 'new'
          break
        case 2:
          this.currentSort = 'sell'
          break
      }
    },
    backTop () {
      this.$refs.scroll.scrollTop(0, 0)
    },
    showBack (position) {
      this.showBackTop = -position.y > 800
    },
    homeRefresh () {
      this.$refs.scroll.refreshScroll()
    },
    homePullUp () {
      this.getHomeGoods(this.currentSort)
    },
    swiperImageLoad () {
      this.tabOffsetTop = this.$refs.tabCop.$el.offsetTop
    }
  },
  components: {
    HomeSwiper,
    HomeRecommend,
    Feature,
    NavBar,
    TabContral,
    GoodsList,
    Scroll,
    BackTop
  }
}
</script>

<style scoped>
  /*第一种方法*/
  /*#home {
    height: 100vh;
  }
  .content {
    margin: 44px 0 49px;
    height: calc(100% - 93px);
    overflow: hidden;
  }*/
  /* 第二种方法 */
  #home {
    padding-top: 44px;
    position: relative;
    height: 100vh;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .nav-home {
    color: #fff;
    background-color: var(--color-tint);

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
  }
</style>
