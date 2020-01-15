<template>
  <div class="announce_com">
    <div class="d_start item" v-for="(item,index) of data" :key="index" :style="styleObject">
      <img :src="item.url" class="img" />
      <span class="txt">{{item.title}}</span>
    </div>
    <slot name="del"></slot>
  </div>
</template>
<script>
export default {
  name: "announceComponent",
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      styleObject: {
        backgroundColor: "#fff",
        color:'#000',
        paddingTop: "0",
        paddingBottom: "0"
      }
    };
  },
  
  computed: {
    announceStyleObj() {
      return this.$store.state.announceStyleObj;
    }
  },

  watch: {
    announceStyleObj(newVal) {
      this.styleObject = newVal;
    }
  },
};
</script>
<style scoped>
.announce_com {
  position: relative;
}
.announce_com .item {
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
}
.announce_com .img {
  width: 20px;
}
.announce_com .txt {
  display: inline-block;
  flex: 1;
  padding: 0 10px;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>


