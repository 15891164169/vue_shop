import Vue from 'vue'
import Vuex from 'vuex'

import { getters } from './getters.js'
import { mutations } from './mutations.js'
import { actions } from './actions.js'

Vue.use(Vuex)

const cart = JSON.parse(localStorage.getItem('gou_wu_jie') || '[]')

export default new Vuex.Store({
  state: {
    cart
  },
  getters,
  mutations,
  actions
})
