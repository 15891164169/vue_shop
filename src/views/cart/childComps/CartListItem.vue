<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton :checked="itemInfo.checked"  @click.native="changeChecked"></CheckButton>
    </div>
    <div class="item-img">
      <img :src="itemInfo.imgURL" alt="商品图片" @click="deleteGoods">
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">商品描述: {{ itemInfo.desc }}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{ itemInfo.newPrice }}</div>
        <div class="item-count right">x{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

import { mapActions } from 'vuex'

export default {
  name: 'ShopCartItem',
  props: {
    itemInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    ...mapActions(['goodsCheckedType', 'deleteShopCartGoods']),
    changeChecked () {
      this.goodsCheckedType(this.itemInfo).then((res) => {
        this.$toast.showToast(res, 2000)
      })
    },
    deleteGoods () {
      this.deleteShopCartGoods(this.itemInfo).then((res) => {
        this.$toast.showToast(res, 1500)
      })
    }
  },
  components: {
    CheckButton
  }
}
</script>

<style scoped>
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    flex: 2;
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    flex: 8;
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
</style>
