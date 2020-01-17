<template>
  <div>
    <div class="window_com_cnt" :style="[styleObject,{'width':'100%'}]">
    <!-- 橱窗模式 -->
      <div v-if="status" class="d_btw type_one">
        <img :src="list[0].img?list[0].img:defaultImgUrl" class="w_50" :style="styleObject" />
        <div class="w_50">
          <img :src="list[1].img?list[1].img:defaultImgUrl" class="h_50" :style="styleObject" v-if="list[1]" />
          <div class="h_50 d_btw">
            <img :src="list[2].img?list[2].img:defaultImgUrl" class="w_50" :style="styleObject" v-if="list[2]" />
            <img :src="list[3].img?list[3].img:defaultImgUrl" class="w_50" :style="styleObject" v-if="list[3]" />
          </div>
        </div>
      </div>
      <ul v-else class="comp_cnt d_start">
        <li v-for="(item,index) of list" :key="index" class="type_two" :style="styleObject">
          <img :src="item.img?item.img:defaultImgUrl" />
        </li>
        <slot name="del"></slot>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "windowComponent",
  props: {
    defaultData: {
      type: Object,
      default: {},
      
    }
  },
  data () {
    return {
         defaultImgUrl: require("../../../assets/images/defaultImg.png")
    };
  },
  computed: {
    styleObject () {
      let defaultStyle = this.defaultData.style;
      return {
        paddingTop: defaultStyle.paddingTop + "px",
        paddingBottom: defaultStyle.paddingTop + "px",
        paddingLeft: defaultStyle.paddingLeft + "px",
        paddingRight: defaultStyle.paddingLeft + "px",
        width: defaultStyle.layout === "2" ? '50%' : defaultStyle.layout === "3" ? '33%' : defaultStyle.layout === "4" ? '25%' : '100%',
        backgroundColor: defaultStyle.background,
      }
    },
    list () {
      return this.defaultData.data
    },
    status () {
      let defaultStyle = this.defaultData.style;
      if (defaultStyle.layout === "1") {
        return true;
      } else {
        return false;
      }
    }
  },
};
</script>
<style scoped>
.window_com_cnt {
  flex-wrap: wrap;
  line-height: 0;
  position: relative;
}
.window_com_cnt ul {
  display: flex;
  flex-wrap: wrap;
}
.window_com_cnt ul li {
  height: auto;
}
.window_com_cnt .type_two img {
  height: 100%;
}

.w_50 {
  width: 50% !important;
}
.h_50 {
  height: 50% !important;
}
</style>


