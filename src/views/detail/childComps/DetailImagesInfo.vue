<template>
  <div v-if="Object.keys(imagesInfo).length !== 0" id="images-info">
    <div class="images-text">
      <div class="float-div start"></div>
      <p>{{ imagesInfo.desc }}</p>
      <div class="float-div end"></div>
    </div>
    <div class="images-item" v-for="(item, idx) in imagesInfo.detailImage" :key="idx">
      <p class="images-title">{{ item.key }}</p>
      <div class="images-img" v-for="(item, idx) in item.list" :key="idx">
        <img v-lazy="item" @load="detailImgLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailImagesInfo',
  props: {
    imagesInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    detailImgLoad () {
      this.$emit('detailImgLoad')
    }
  }
}
</script>

<style scoped>
  #images-info {}
  .images-text {
    padding: 8px;
  }
  .images-text p {
    margin: 12px 0;
  }
  .images-text .float-div {
    width: 30%;
    height: 1px;
    background-color: #a3a3a3;
    position: relative;
  }
  .images-text .start {
    float: left;
  }
  .images-text .end {
    float: right;
  }
  .images-text .start::before,
  .images-text .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: -2px;
  }
  .images-text .end::after {
    right: 0;
  }
  .images-item {}
  .images-item .images-title {
    padding: 8px;
    font-size: 18px;
    font-weight: 600;
  }
  .images-item .images-img {}
  .images-item .images-img img {
    vertical-align: middle;
    width: 100%;
    height: auto;
  }
</style>
