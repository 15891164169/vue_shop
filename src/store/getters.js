export const getters = {
  // 所有商品数量
  allGoodsCount (state) {
    let allCount = 0
    state.cart.forEach((item, idx) => {
      allCount += parseInt(item.count)
    })
    return allCount
  },

  // 选中的商品数量
  checkedGoodsCount (state) {
    let checkedCount = 0
    state.cart.forEach((item, idx) => {
      if (item.checked) {
        checkedCount += parseInt(item.count)
      }
    })
    return checkedCount
  },

  // 选中的商品总价
  checkedGoodsPrice (state) {
    let checkedPrice = 0
    state.cart.forEach((item, idx) => {
      if (item.checked) {
        checkedPrice += (parseInt(item.count) * parseFloat(item.newPrice))
      }
    })
    return checkedPrice.toFixed(2)
  },

  // 全选的选中状态
  allCheckedType (state) {
    if (state.cart.length === 0) return false
    // return !(state.cart.filter(item => !item.checked).length)
    return !state.cart.some((item, idx) => {
      return item.checked === false
    })
  }
}
