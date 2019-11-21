<template>
  <div v-if="Object.keys(commentInfo).length != 0" class="comment-info">
    <div class="comment-show">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-user">
      <img :src="commentInfo.user.avatar">
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="comment-content">
      <p>{{ commentInfo.content }}</p>
    </div>
    <div class="comment-style">
      <span>{{ commentInfo.created | showDate }}</span>
      <span>{{ commentInfo.style }}</span>
    </div>
    <div class="comment-images" v-if="commentInfo.images">
      <img v-for="(item, idx) in commentInfo.images" :src="item" :key="idx">
      <img src="@/assets/images/test.png">
      <img src="@/assets/images/test.png">
      <img src="@/assets/images/test.png">
      <img src="@/assets/images/test.png">
      <img src="@/assets/images/test.png">
      <img src="@/assets/images/test.png">
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/common/utils.js'
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    showDate (value) {
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
  .comment-info {
    padding: 8px;
  }
  .comment-show {
    display: flex;
    justify-content: space-between;
    padding: 16px 2px;
    border-bottom: 2px solid #eee;
  }
  .comment-show span {}
  .comment-user {
    padding: 12px 2px;
  }
  .comment-user img {
    vertical-align: middle;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .comment-user span {
    margin-left: 10px;
    font-size: 20px;
  }
  .comment-content {
    padding: 2px;
    line-height: 24px;
  }
  .comment-style {
    padding: 10px 0 12px;
  }
  .comment-style span {
    margin-right: 8px;
  }
  .comment-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .comment-images img {
    margin-bottom: 10px;
    width: 80px;
    height: 80px;
    vertical-align: middle;
  }
</style>
