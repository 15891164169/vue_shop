import {
  ADD_TO_SHOP_CART,
  GOODS_CHECKED_TYPE,
  TOTAL_CHECKED_TYPE,
  DELETE_SHOP_CART_GOODS
} from './mutation-types.js'

export const mutations = {
  [ADD_TO_SHOP_CART] (state, object) {
    const goodsItem = state.cart.find(item => { return item.iid === object.iid })
    if (goodsItem) {
      goodsItem.count += object.count
    } else {
      state.cart.push(object)
    }
    localStorage.setItem('gou_wu_jie', JSON.stringify(state.cart))
  },

  [GOODS_CHECKED_TYPE] (state, object) {
    state.cart.find(item => { return item.iid === object.iid }).checked = !object.checked
    localStorage.setItem('gou_wu_jie', JSON.stringify(state.cart))
  },

  [TOTAL_CHECKED_TYPE] (state, object) {
    console.log(state.cart.filter(item => !item.checked).length)
    if (state.cart.filter(item => !item.checked).length) {
      state.cart.forEach(item => {
        item.checked = true
      })
    } else {
      state.cart.forEach(item => {
        item.checked = false
      })
    }
    localStorage.setItem('gou_wu_jie', JSON.stringify(state.cart))
  },

  [DELETE_SHOP_CART_GOODS] (state, object) {
    const goodsIndex = state.cart.findIndex(item => { return item.iid === object.iid })
    console.log(goodsIndex)
    state.cart.splice(goodsIndex, 1)
    localStorage.setItem('gou_wu_jie', JSON.stringify(state.cart))
  }
}
