import { debounce } from '@/common/utils.js'

import BackTop from '@/components/content/backTop/BackTop'

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

export const backTopButtonMinin = {
  data () {
    return {
      showBackTop: false
    }
  },
  methods: {
    backTop () {
      this.$refs.scroll.scrollTop(0, 0, 200)
    }
  },
  components: {
    BackTop
  }
}
