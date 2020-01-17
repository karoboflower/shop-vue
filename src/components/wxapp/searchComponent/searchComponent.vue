<template>
  <div class="search_com">
    <div class="sear_input" :style="searchStyleObj">
      <i class="iconfont icon-search"></i>
      <span class="txt">{{placeholder1}}</span>
    </div>
    <slot name="del"></slot>
  </div>
</template>
<script>
export default {
  name: "searchComponent",
  data: function () {
    return {

    }
  },
  props: {
    defaultData: {
      type: Object,
      default: {}
    }
  },
  computed: {
    searchStyleObj () {
      let _style = this.defaultData.style;
      return {
        textAlign: _style.textAlign,
        borderRadius: (_style.searchStyle === "square" ? '0' : _style.searchStyle === "radius" ? '5' : _style.searchStyle === "round" ? '15' : '0') + 'px'
      }
    },
    placeholder1 () {
      return this.defaultData.params.placeholder;
    }
  },

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


