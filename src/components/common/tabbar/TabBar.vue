<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  components: {
  }
}
</script>

<style scoped>
  #tab-bar {
    z-index: 1;
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: #f2f2f2;
    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
  }
</style>
