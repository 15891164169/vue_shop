<template>
  <div class="icon-selector">
    <img src="@/assets/images/cart/tick.svg" :class="{'selector-active': checked}" alt="">
  </div>
</template>

<script>

export default {
  name: 'CheckButton',
  props: {
    checked: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
  .icon-selector {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ccc;
  }
  .icon-selector img {
    vertical-align: middle;
    border-radius: 50%;
  }
  .selector-active {
    background-color: #ff8198;
  }
</style>
