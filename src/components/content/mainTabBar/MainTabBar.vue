<template>
  <TabBar>
    <TabBarItem activeColor="deeppink" path="/home">
      <img slot="item-icon" src="@/assets/images/tabbar/home.svg">
      <img slot="item-icon-active" src="@/assets/images/tabbar/home_active.svg">
      <span slot="item-text">首页</span>
    </TabBarItem>
    <TabBarItem activeColor="deeppink" path="/category">
      <img slot="item-icon" src="@/assets/images/tabbar/category.svg">
      <img slot="item-icon-active" src="@/assets/images/tabbar/category_active.svg">
      <span slot="item-text">分类</span>
    </TabBarItem>
    <TabBarItem activeColor="deeppink" path="/cart">
      <img slot="item-icon" src="@/assets/images/tabbar/cart.svg">
      <img slot="item-icon-active" src="@/assets/images/tabbar/cart_active.svg">
      <span slot="item-text">购物车</span>
    </TabBarItem>
    <TabBarItem activeColor="deeppink" path="/profile">
      <img slot="item-icon" src="@/assets/images/tabbar/profile.svg">
      <img slot="item-icon-active" src="@/assets/images/tabbar/profile_active.svg">
      <span slot="item-text">个人</span>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
