<template>
  <div class="toast" v-show="show">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      message: '',
      show: false,
      timer: null
    }
  },
  methods: {
    showToast (message, duration = 1000) {
      this.message = message
      this.show = true
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.message = ''
        this.show = false
      }, duration)
    }
  }
}
</script>

<style scoped>
  .toast {
    z-index: 999;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 6px 20px;
    transform: translate(-50%, -50%);

    font-size: 20px;
    border-radius: 5px;

    color: rgba(225,225,225,.9);
    background-color: rgba(0,0,0,.7);
  }
</style>
