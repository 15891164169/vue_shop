import { debounce } from '@/common/utils.js'

export const itemListenerMixin = {
  data () {
    return {
      itemListener: null,
      refreshDebs: null
    }
  },
  mounted () {
    this.refreshDebs = debounce(this.$refs.scroll.refreshScroll, 100)
    this.itemListener = () => {
      this.refreshDebs()
    }
    this.$bus.$on('imgLoad', this.itemListener)
  }
}
