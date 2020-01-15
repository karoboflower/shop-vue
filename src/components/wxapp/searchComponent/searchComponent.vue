<template>
  <div class="search_com">
    <div class="sear_input" :style="styleObject">
      <i class="iconfont icon-search"></i>
      <span class="txt">{{data}}</span>
    </div>
    <slot name="del"></slot>
  </div>
</template>
<script>
export default {
  name: "searchComponent",
  props: {
    data: {
      type: String,
      default: []
    }
  },
  computed: {
    searchStyleObj() {
      return this.$store.state.searchStyleObj;
    }
  },

  watch: {
    searchStyleObj(newVal) {
      this.styleObject = newVal;
    }
  },
  data() {
    return {
      styleObject: {
        borderRadius: "0",
        textAlign: "left"
      },
    };
  }
};
</script>
<style scoped>
.search_com {
  position: relative;
  background: #f1f1f2;
  padding: 10px;
}
.search_com .sear_input {
  padding: 3px 10px;
  background-color: #fff;
  align-items: center;
  color: #999999;
  font-size: 14px;
}

.search_com .sear_input .txt {
  padding-left: 10px;
}
</style>


