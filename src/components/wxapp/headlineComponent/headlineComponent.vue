<template>
  <div class="headline_com">
    <div class="d_start item">
      <img :src="data[0].url" class="img" />
      <div class="txt">
        <div v-for="(item,index) of data" :key="index"  class="test">{{item.title}}</div>
      </div>
      <i class="iconfont icon-youjiantou"></i>
    </div>
    <slot name="del"></slot>
  </div>
</template>
<script>
export default {
  name: "headlineComponent",
  props:{
    data:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      defalutUrl: require("../../../assets/images/special.png")
    };
  }
};
</script>
<style scoped>
.headline_com {
  position: relative;
}
.headline_com .item {
  align-items: center;
  padding: 10px;
}
.headline_com .img {
  width: 20%;
}
.headline_com .txt {
  display: inline-block;
  width: 70%;
  padding: 0 10px;
  font-size: 13px;
  color: #141414;
}

.headline_com .txt  .test{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>


