export const actions = {
  'addToShopCart' (context, object) {
    return new Promise((resolve, reject) => {
      const goodsItem = context.state.cart.find(item => { return item.iid === object.iid })
      if (goodsItem) {
        context.commit('ADD_TO_SHOP_CART', object)
        resolve('数量增加')
      } else {
        context.commit('CREATE_GOODS_ITEM', object)
        resolve('添加商品')
      }
    })
  },
  'goodsCheckedType' (context, object) {
    return new Promise((resolve, reject) => {
      context.commit('GOODS_CHECKED_TYPE', object)
      resolve('商品状态改变')
    })
  },
  'totalCheckedType' (context, object) {
    return new Promise((resolve, reject) => {
      context.commit('TOTAL_CHECKED_TYPE')
      resolve('全选状态')
    })
  },
  'deleteShopCartGoods' (context, object) {
    return new Promise((resolve, reject) => {
      context.commit('DELETE_SHOP_CART_GOODS', object)
      resolve('删除成功')
    })
  }
}
