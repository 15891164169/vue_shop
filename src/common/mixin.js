import { debounce } from '@/common/utils.js'

export const itemListenerMixin = {
  data () {
    return {
      itemListener: null
    }
  },
  mounted () {
    const refreshDebs = debounce(this.$refs.scroll.refreshScroll, 100)
    this.itemListener = () => {
      refreshDebs()
    }
    this.$bus.$on('imgLoad', this.itemListener)
    console.log('混入')
  }
}
