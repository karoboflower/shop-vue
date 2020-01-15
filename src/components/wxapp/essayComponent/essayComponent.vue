<template>
  <div class="article_com_box">
    <div v-for="(item,index) of data" :key="index" class="article_com_cnt d_btw">
      <div class="left">
        <p class="name">{{item.name}}</p>
        <p class="watch">{{item.watch}}次浏览</p>
      </div>
      <img :src="item.url" alt class="right" />
    </div>
    <slot name="del"></slot>
  </div>
</template>

<script>
export default {
  name: "essayComponent",
  props: {
    data: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
.article_com_box {
  background: #efefef;
  position: relative;
}
.article_com_cnt {
  padding: 10px 10px;
  background: #fff;
  margin-top: 10px;
}
.article_com_cnt:nth-of-type(1) {
  margin: 0;
}
.article_com_box .article_com_cnt .left {
  width: 60%;
  padding: 10px 0;
}
.article_com_box .article_com_cnt .left .name {
  font-size: 14px;
  margin-bottom: 20px;
}
.article_com_box .article_com_cnt .left .watch {
  font-size: 12px;
  color: #888;
}
.article_com_box .article_com_cnt .right {
  width: 40%;
}
</style>


