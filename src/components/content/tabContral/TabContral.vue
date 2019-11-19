<template>
  <div class="tabContral">
    <div class="tabContral-item" :class="{active: currentIndex === idx}" v-for="(item, idx) in tabTitles" :key="idx" @click="tabClick(idx)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabContral',
  props: {
    tabTitles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick (idx) {
      this.currentIndex = idx
      this.$emit('tabBarClick', idx)
    }
  }
}
</script>

<style scoped>
  .tabContral {
    z-index: 9;
    display: flex;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    background-color: #fff;
    position: sticky;
    top: 40px;
  }
  .tabContral-item {
    flex: 1;
  }
  .tabContral-item span {
    padding-bottom: 6px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>
