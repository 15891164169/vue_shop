export const actions = {
  'addToShopCart' (context, object) {
    context.commit('ADD_TO_SHOP_CART', object)
  },
  'goodsCheckedType' (context, object) {
    context.commit('GOODS_CHECKED_TYPE', object)
  },
  'totalCheckedType' (context, object) {
    context.commit('TOTAL_CHECKED_TYPE')
  },
  'deleteShopCartGoods' (context, object) {
    context.commit('DELETE_SHOP_CART_GOODS', object)
  }
}
