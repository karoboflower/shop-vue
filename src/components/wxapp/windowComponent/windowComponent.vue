<template>
  <div>
    <div class="window_com_cnt d_start" :style="bg">
      <!-- 橱窗模式 -->
      <div v-if="styleObj.statue" class="d_btw type_one">
        <img :src="data[0].url" class="w_50" :style="styleObj" />
        <div class="w_50">
          <img :src="data[1].url" class="h_50" :style="styleObj" v-if="data[1]" />
          <div class="h_50 d_btw">
            <img :src="data[2].url" class="w_50" :style="styleObj" v-if="data[2]" />
            <img :src="data[3].url" class="w_50" :style="styleObj" v-if="data[3]" />
          </div>
        </div>
      </div>
      
      <!-- 其他模式 -->
      <img v-else :src="item.url" v-for="(item,index) of data" :key="index" :style="styleObj"  class="type_two"/>
        <slot name="del"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "windowComponent",
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      bg:{
        backgroundColor: "#fff",
      },
      styleObj: {
        backgroundColor: "#fff",
        width: "50%",
        paddingTop: "0px",
        paddingBottom: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
        statue: false
      }
    };
  },
  computed: {
    windowStyleObj() {
      return this.$store.state.windowStyleObj;
    }
  },

  watch: {
    windowStyleObj(newVal) {
      this.styleObj = newVal;
      var obj={
        backgroundColor:newVal.backgroundColor
      }
      this.bg=obj;
    },

  }
};
</script>
<style scoped>
.window_com_cnt {
  flex-wrap: wrap;
  line-height: 0;
  position: relative;
}
.window_com_cnt .type_two img{
  height: 185px;

}
.w_50 {
  width: 50% !important;
}
.h_50 {
  height: 50% !important;
}
</style>


